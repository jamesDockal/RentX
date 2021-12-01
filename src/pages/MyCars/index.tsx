import React, { useEffect, useState } from "react";
import { StatusBar, FlatList } from "react-native";
import { useTheme } from "styled-components";
import { Car } from "../../@types/Cars";
import { BackButton } from "../../components/BackButton";
import { CardCard } from "../../components/CardCard";
import { api } from "../../services/api";
import { AntDesign } from "@expo/vector-icons";

import {
  Container,
  Header,
  Title,
  Subtitle,
  Content,
  Appointments,
  AppointmentsTitle,
  AppointmentsQuantity,
  CarWrapper,
  CarFooter,
  CarFooterTitle,
  CarFooterPeriod,
  CarFooterDate,
} from "./styles";
import { Load } from "../../components/Load";

type CarDTO = {
  car: Car;
  endDate: string;
  startDate: string;
  user_id: string;
};

type SchedulesResponse = {
  data: CarDTO;
};

type Props = {};

export const MyCars: React.FC<Props> = ({}) => {
  const [cars, setCars] = useState<CarDTO[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const theme = useTheme();
  useEffect(() => {
    api.get("/schedules_byuser/1").then(({ data }: SchedulesResponse) => {
      setIsLoading(false);
      setCars([data]);
    });
  }, []);
  return (
    <Container>
      <Header>
        <StatusBar
          barStyle="light-content"
          translucent
          backgroundColor="transparent"
        />

        <BackButton color={theme.colors.shape} />
        <Title>
          Escolha uma {"\n"}
          data de inicio e {"\n"}
          fim do aluguel
        </Title>

        <Subtitle>Segurança, Segurança e praticidadee</Subtitle>
      </Header>

      {isLoading ? (
        <Load />
      ) : (
        <Content>
          <Appointments>
            <AppointmentsTitle>Agendamentos feitos</AppointmentsTitle>
            <AppointmentsQuantity>05</AppointmentsQuantity>
          </Appointments>
          <FlatList
            data={cars}
            keyExtractor={(item) => item.car.id}
            renderItem={({ item }) => (
              <CarWrapper>
                <CardCard car={item.car} />
                <CarFooter>
                  <CarFooterTitle>Período</CarFooterTitle>
                  <CarFooterPeriod>
                    <CarFooterDate>{item.startDate}</CarFooterDate>
                    <AntDesign
                      name="arrowright"
                      size={20}
                      color={theme.colors.title}
                      style={{ marginHorizontal: 10 }}
                    />
                    <CarFooterDate>{item.endDate}</CarFooterDate>
                  </CarFooterPeriod>
                </CarFooter>
              </CarWrapper>
            )}
          />
        </Content>
      )}
    </Container>
  );
};
