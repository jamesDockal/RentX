import React from "react";

import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { Home } from "../pages/Home";
import { CarDetails } from "../pages/CarDetails";
import { Scheduling } from "../pages/Scheduling";
import { SchedulingDetails } from "../pages/SchedulingDetails";
import { SchedulingComplete } from "../pages/SchedulingComplete";
import { MyCars } from "../pages/MyCars";
import { Splash } from "../pages/Splash";
import { SingIn } from "../pages/SingIn";

const { Navigator, Screen } = createNativeStackNavigator();

export const StackRoutes: React.FC = ({}) => {
  return (
    <Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName="SingIn"
    >
      {/* <Screen name="Splash" component={Splash} /> */}
      <Screen name="SingIn" component={SingIn} />
      <Screen
        name="Home"
        component={Home}
        options={{
          gestureEnabled: false,
        }}
      />
      <Screen name="CarDetails" component={CarDetails} />
      <Screen name="Scheduling" component={Scheduling} />
      <Screen name="SchedulingDetails" component={SchedulingDetails} />
      <Screen name="SchedulingComplete" component={SchedulingComplete} />
      <Screen name="MyCars" component={MyCars} />
    </Navigator>
  );
};
