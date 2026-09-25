import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";

export const RootLayout = () => {
  return (
    <>
      <StatusBar style="light" />
      <Stack
        screenOptions={{
          headerShown: false,
          contentStyle: { backgroundColor: "#ffffff" },
        }}
      />
    </>
  );
};

export default RootLayout;
