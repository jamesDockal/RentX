import React from "react";
import { ActivityIndicator } from "react-native";
import { useTheme } from "styled-components/native";

export const Load: React.FC = ({}) => {
  const theme = useTheme();
  return <ActivityIndicator size="large" color={theme.colors.shape} />;
};
