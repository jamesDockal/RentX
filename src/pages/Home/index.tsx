import React, { useEffect, useState } from "react";
import { StatusBar } from "react-native";

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

type Props = {};

type Car = {
  name: string;
  brand: string;
  fuel_type: "electric" | "gasoline";
  thumbnail: string;
  rent: {
    price: number;
    period: string;
  };
};

export const Home: React.FC<Props> = ({}) => {
  const [cars, setCars] = useState<Car[]>([]);
  const [isLoading, setIsLoading] = useState(true);

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
          renderItem={({ item }) => <CardCard car={item} />}
        />
      )}
    </Container>
  );
};
