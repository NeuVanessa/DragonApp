import React from "react";
import { View, ActivityIndicator } from "react-native";
import { AuthRoutes } from "./auth-routes";
import AppRoutes from "./app.routes";
import { useAuth } from "../hooks/auth";
import BottomTabs from "./bottom-navigation";

const Routes: React.FC = () => {
  const { user, loading } = useAuth();

  if (loading) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator size="large" color="#ff9900" />
      </View>
    );
  }

  return user ?  <AppRoutes /> : <AuthRoutes />;
};

export default Routes;
