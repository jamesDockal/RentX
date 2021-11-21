import React from "react";
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

type Props = {};

type Car = {
  name: string;
  brand: string;
  type: "electric" | "gasoline";
  thumbnail: string;
  rent: {
    price: number;
    period: string;
  };
};

export const Home: React.FC<Props> = ({}) => {
  const cars: Car[] = [
    {
      brand: "AUDI",
      name: "RS 5 Coupé",
      type: "gasoline",
      thumbnail:
        "https://img2.gratispng.com/20180816/paa/kisspng-ferrari-s-p-a-car-ferrari-488-enzo-ferrari-ferrari-png-free-png-images-toppng-5b75fbb0461eb8.4406679715344588002872.jpg",
      rent: {
        period: "Ao dia",
        price: 120,
      },
    },
    {
      brand: "tesla",
      name: "Model X",
      type: "electric",
      thumbnail:
        "https://toppng.com/uploads/preview/tesla-model-x-11562971244z3uhlgfqpe.png",
      rent: {
        period: "Ao dia",
        price: 150,
      },
    },
    {
      brand: "AUDI",
      name: "RS 5 Coupé",
      type: "gasoline",
      thumbnail:
        "https://img2.gratispng.com/20180816/paa/kisspng-ferrari-s-p-a-car-ferrari-488-enzo-ferrari-ferrari-png-free-png-images-toppng-5b75fbb0461eb8.4406679715344588002872.jpg",
      rent: {
        period: "Ao dia",
        price: 120,
      },
    },
    {
      brand: "tesla",
      name: "Model X",
      type: "electric",
      thumbnail:
        "https://toppng.com/uploads/preview/tesla-model-x-11562971244z3uhlgfqpe.png",
      rent: {
        period: "Ao dia",
        price: 150,
      },
    },
    {
      brand: "AUDI",
      name: "RS 5 Coupé",
      type: "gasoline",
      thumbnail:
        "https://img2.gratispng.com/20180816/paa/kisspng-ferrari-s-p-a-car-ferrari-488-enzo-ferrari-ferrari-png-free-png-images-toppng-5b75fbb0461eb8.4406679715344588002872.jpg",
      rent: {
        period: "Ao dia",
        price: 120,
      },
    },
    {
      brand: "tesla",
      name: "Model X",
      type: "electric",
      thumbnail:
        "https://toppng.com/uploads/preview/tesla-model-x-11562971244z3uhlgfqpe.png",
      rent: {
        period: "Ao dia",
        price: 150,
      },
    },
    {
      brand: "AUDI",
      name: "RS 5 Coupé",
      type: "gasoline",
      thumbnail:
        "https://img2.gratispng.com/20180816/paa/kisspng-ferrari-s-p-a-car-ferrari-488-enzo-ferrari-ferrari-png-free-png-images-toppng-5b75fbb0461eb8.4406679715344588002872.jpg",
      rent: {
        period: "Ao dia",
        price: 120,
      },
    },
    {
      brand: "tesla",
      name: "Model X",
      type: "electric",
      thumbnail:
        "https://toppng.com/uploads/preview/tesla-model-x-11562971244z3uhlgfqpe.png",
      rent: {
        period: "Ao dia",
        price: 150,
      },
    },
    {
      brand: "AUDI",
      name: "RS 5 Coupé",
      type: "gasoline",
      thumbnail:
        "https://img2.gratispng.com/20180816/paa/kisspng-ferrari-s-p-a-car-ferrari-488-enzo-ferrari-ferrari-png-free-png-images-toppng-5b75fbb0461eb8.4406679715344588002872.jpg",
      rent: {
        period: "Ao dia",
        price: 120,
      },
    },
    {
      brand: "tesla",
      name: "Model X",
      type: "electric",
      thumbnail:
        "https://toppng.com/uploads/preview/tesla-model-x-11562971244z3uhlgfqpe.png",
      rent: {
        period: "Ao dia",
        price: 150,
      },
    },
    {
      brand: "AUDI",
      name: "RS 5 Coupé",
      type: "gasoline",
      thumbnail:
        "https://img2.gratispng.com/20180816/paa/kisspng-ferrari-s-p-a-car-ferrari-488-enzo-ferrari-ferrari-png-free-png-images-toppng-5b75fbb0461eb8.4406679715344588002872.jpg",
      rent: {
        period: "Ao dia",
        price: 120,
      },
    },
    {
      brand: "tesla",
      name: "Model X",
      type: "electric",
      thumbnail:
        "https://toppng.com/uploads/preview/tesla-model-x-11562971244z3uhlgfqpe.png",
      rent: {
        period: "Ao dia",
        price: 150,
      },
    },
  ];

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

      <CarList
        keyExtractor={(item: any) => item.name}
        data={cars}
        renderItem={({ item }: any) => <CardCard car={item} />}
      ></CarList>
    </Container>
  );
};
