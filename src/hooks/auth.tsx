import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import React, { createContext, useState, useEffect, useContext } from "react";
import api from "../services/api";

interface User {
  _id:string;
  name: string;
  username: string;
  avatar: string;
  email: string;
  type: string;
  password: string;
  passwordCheck: string;
  active: boolean;
}
interface SignInCredentials {
  username: string;
  password: string;
}
interface AuthContextData {
  signed: boolean;
  user: User | null;
  loading: boolean;
  signIn(credentials: SignInCredentials): Promise<void>;
  signUp(credentials: User): Promise<void>;
  signOut(): void;
}
export type RootStackParamList = {
  Dashboard: undefined;
  Login: undefined;
};
const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export const AuthProvider: React.FC = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  type registerScreenProp = StackNavigationProp<RootStackParamList>;
  const navigation = useNavigation<registerScreenProp>();

  useEffect(() => {
    async function loadStorageData() {
      const storageUser = await AsyncStorage.getItem("@RnAuth:user");
      const storageToken = await AsyncStorage.getItem("@RnAuth:token");

      if (storageUser && storageToken) setUser(JSON.parse(storageUser));

      setLoading(false);
    }

    loadStorageData();
  }, []);

  // async function signIn() {
  //   const response = await auth.signIn();

  //   setUser(response.user);

  //   await AsyncStorage.setItem("@RnAuth:user", JSON.stringify(response.user));
  //   await AsyncStorage.setItem("@RnAuth:token", response.token);
  // }

  async function signIn({ username, password }) {
    const response = await api.post(`/login`, {
      username: username,
      password: password,
    });
    setUser(response.data.user);
    await AsyncStorage.setItem(
      "@RnAuth:user",
      JSON.stringify(response.data.user)
    );
    await AsyncStorage.setItem("@RnAuth:token", response.data.token);
  }

  async function signUp({
    name,
    username,
    password,
    passwordCheck,
    email,
    type,
    active,
    avatar,
  }) {
    await api.post(`/users`, {
      username: username,
      password: password,
      name: name,
      passwordCheck: passwordCheck,
      email: email,
      type: type,
      active: active,
      avatar: avatar,
    });
  
  }

  // export const signUp = async ({ name, email, password }) =>{
  //   await axios.post(`${BASE_URL}/register`, {
  //       name: name,
  //       email: email,
  //       password: password,
  //   });
  // }
  function signOut() {
    AsyncStorage.clear().then(() => {
      setUser(null);
    });
  }

  return (
    <AuthContext.Provider
      value={{ signed: !!user, user, loading, signIn, signUp, signOut }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export function useAuth() {
  const context = useContext(AuthContext);

  return context;
}
