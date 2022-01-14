import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";

import { BASE_URL } from "./env";
export const TOKEN_KEY = "@Jwt:token";


export const signUp = async ({ name, email, password }) => {
  await axios.post(`${BASE_URL}/register`, {
    name: name,
    email: email,
    password: password,
  });
}

export const signIn = async ({ username, password }) => {
  const response = await axios.post(`https://api-game-of-thrones.herokuapp.com/login`, {
    username: username,
    password: password,
  });

  await AsyncStorage.setItem('@Jwt:token', response.data.token);
};

export const signOut = () => AsyncStorage.removeItem(TOKEN_KEY);

export const getToken = async () => { return await AsyncStorage.getItem('@Jwt:token') }

export const isSignedIn = async () => {
  const token = await AsyncStorage.getItem(TOKEN_KEY);

  return (token !== null) ? true : false;
};