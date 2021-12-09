import React, { useEffect, useState } from "react";
import { BackHandler, StatusBar, StyleSheet } from "react-native";

import { Ionicons } from "@expo/vector-icons";
import Animated, {
  useAnimatedGestureHandler,
  useAnimatedStyle,
  useSharedValue,
} from "react-native-reanimated";
import { RectButton, PanGestureHandler } from "react-native-gesture-handler";

const ButtonAnimated = Animated.createAnimatedComponent(RectButton);

import {
  Container,
  Header,
  HeaderContainer,
  TotalCars,
  CarList,
} from "./styles";

import Logo from "../../assets/logo.svg";
import { RFValue } from "react-native-responsive-fontsize";
import { CardCard } from "../../components/CardCard";
import { api } from "../../services/api";
import { Load } from "../../components/Load";
import { useTheme } from "styled-components";
import { useNavigation } from "@react-navigation/core";
import { Car } from "../../@types/Cars";

type Props = {};

export const Home: React.FC<Props> = ({}) => {
  const [cars, setCars] = useState<Car[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  const positionX = useSharedValue(0);
  const positionY = useSharedValue(0);

  const myCarsButtonStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateX: positionX.value,
        },
        {
          translateY: positionY.value,
        },
      ],
    };
  });
  const onGestureEvent = useAnimatedGestureHandler({
    onStart() {},
    onActive(event) {
      console.log("event", event);
      positionX.value = event.translationX;
      positionY.value = event.translationY;
    },
    onEnd() {},
  });

  const theme = useTheme();
  const navigation = useNavigation();

  function handlePress(car: Car) {
    navigation.navigate("CarDetails", { car });
  }

  function handleOpenMyCars() {
    navigation.navigate("MyCars");
  }

  useEffect(() => {
    try {
      api.get("/cars").then((response) => {
        setCars(response.data);
        setIsLoading(false);
      });
    } catch (error) {
      console.log("error", error?.response?.data);
    }
  }, []);

  useEffect(() => {
    BackHandler.addEventListener("hardwareBackPress", () => {
      return true;
    });
  }, []);

  return (
    <Container>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />

      <Header>
        <HeaderContainer>
          <Logo width={RFValue(108)} height={RFValue(12)} />
          {!isLoading && <TotalCars>Total de {cars.length} Carros</TotalCars>}
        </HeaderContainer>
      </Header>

      {isLoading ? (
        <Load />
      ) : (
        <CarList
          data={cars}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <CardCard car={item} onPress={() => handlePress(item)} />
          )}
        />
      )}

      <PanGestureHandler onGestureEvent={onGestureEvent}>
        <Animated.View
          style={[
            myCarsButtonStyle,
            {
              position: "absolute",
              bottom: 13,
              right: 22,
            },
          ]}
        >
          <ButtonAnimated onPress={handleOpenMyCars} style={styles.button}>
            <Ionicons
              name="ios-car-sport"
              size={32}
              color={theme.colors.shape}
            />
          </ButtonAnimated>
        </Animated.View>
      </PanGestureHandler>
    </Container>
  );
};

const styles = StyleSheet.create({
  button: {
    height: 60,
    width: 60,

    borderRadius: 30,

    justifyContent: "center",
    alignItems: "center",

    backgroundColor: "#dc1637",

    position: "absolute",
    bottom: 13,
    right: 22,
  },
});
