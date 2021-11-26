import React, { useEffect, useState } from "react";
import { StatusBar } from "react-native";

import { Ionicons } from "@expo/vector-icons";

import {
  Container,
  Header,
  HeaderContainer,
  TotalCars,
  CarList,
  MyCarsButton,
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
          <TotalCars>Total de 12 Carros</TotalCars>
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
      <MyCarsButton onPress={handleOpenMyCars}>
        <Ionicons name="ios-car-sport" size={32} color={theme.colors.shape} />
      </MyCarsButton>
    </Container>
  );
};
