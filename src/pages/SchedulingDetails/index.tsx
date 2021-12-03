import React, { useState, useEffect } from "react";

import { Feather } from "@expo/vector-icons";
import { Alert } from "react-native";

import { Accessory } from "../../components/Accessory";

import { BackButton } from "../../components/BackButton";
import { ImagesSlider } from "../../components/ImagesSlider";
import { Button } from "../../components/Button";
import {
  Container,
  Header,
  ImageContainer,
  Content,
  Details,
  Description,
  Brand,
  Name,
  Rent,
  Period,
  Price,
  AcessoriesWrapper,
  Footer,
  RentalPeriod,
  CalendarIcon,
  DateInfo,
  DateValue,
  DateTitle,
  RentalPrice,
  RentalPriceLabel,
  RentalPriceDetails,
  RentalPriceQuota,
  RentalPriceTotal,
} from "./styles";

import { RFValue } from "react-native-responsive-fontsize";
import { useTheme } from "styled-components/native";
import { useNavigation, useRoute } from "@react-navigation/core";
import { Car } from "../../@types/Cars";
import { getAccessoryIcon } from "../../utils/getAccessoryIcon";
import { addDays, format } from "date-fns";
import { api } from "../../services/api";

type Params = {
  car: Car;
  dates: string[];
};

type IRentalPeriod = {
  start: string;
  end: string;
};

type Props = {};

export const SchedulingDetails: React.FC<Props> = ({}) => {
  const [rentalPeriod, setRentalPeriod] = useState<IRentalPeriod>(
    {} as IRentalPeriod
  );
  const [isLoading, setIsLoading] = useState(false);

  const theme = useTheme();

  const navigation = useNavigation();
  const route = useRoute();
  const { car, dates } = route.params as Params;

  const rentTotal = Number(dates.length * car.rent.price);

  async function handleConfirm() {
    setIsLoading(true);
    const { data } = await api.get(`/schedules_bycars/${car.id}`);
    const unavailable_dates = [...data.unavailable_dates, ...dates];

    await api.post(`/schedules_byuser`, {
      user_id: 1,
      car,
      startDate: format(addDays(new Date(dates[0]), 1), "dd/MM/yyyy"),
      endDate: format(
        addDays(new Date(dates[dates.length - 1]), 1),
        "dd/MM/yyyy"
      ),
    });
    api
      .put(`/schedules_bycars/${car.id}`, {
        id: car.id,
        unavailable_dates,
        start: format(addDays(new Date(dates[0]), 1), "dd/MM/yyyy"),
        end: format(
          addDays(new Date(dates[dates.length - 1]), 1),
          "dd/MM/yyyy"
        ),
      })
      .then(() => {
        setIsLoading(false);

        navigation.navigate("SchedulingComplete");
      })
      .catch(() => {
        setIsLoading(false);

        Alert.alert("Não foi possivel confirmar o agendamemnto");
      });
  }

  useEffect(() => {
    setRentalPeriod({
      start: format(addDays(new Date(dates[0]), 1), "dd/MM/yyyy"),
      end: format(addDays(new Date(dates[dates.length - 1]), 1), "dd/MM/yyyy"),
    });
  }, []);

  return (
    <Container>
      <Header>
        <BackButton onPress={() => {}} />
      </Header>

      <ImageContainer>
        <ImagesSlider imagesUrl={car.photos} />
      </ImageContainer>

      <Content>
        <Details>
          <Description>
            <Brand>{car.brand}</Brand>
            <Name>{car.name}</Name>
          </Description>

          <Rent>
            <Period>{car.rent.period}</Period>
            <Price>R$ {car.rent.price}</Price>
          </Rent>
        </Details>

        <AcessoriesWrapper>
          {car.accessories.map((accessory) => (
            <Accessory
              key={accessory.name}
              name={accessory.name}
              icon={getAccessoryIcon(accessory.type)}
            />
          ))}
        </AcessoriesWrapper>

        <RentalPeriod>
          <CalendarIcon>
            <Feather
              name="calendar"
              size={RFValue(24)}
              color={theme.colors.shape}
            />
          </CalendarIcon>

          <DateInfo>
            <DateTitle>De</DateTitle>
            <DateValue>{rentalPeriod.start}</DateValue>
          </DateInfo>

          <Feather
            name="chevron-right"
            size={RFValue(10)}
            color={theme.colors.text}
          />

          <DateInfo>
            <DateTitle>De</DateTitle>
            <DateValue>{rentalPeriod.end}</DateValue>
          </DateInfo>
        </RentalPeriod>

        <RentalPrice>
          <RentalPriceLabel>TOTAL</RentalPriceLabel>
          <RentalPriceDetails>
            <RentalPriceQuota>
              R$ {car.rent.price} x{dates.length} diárias
            </RentalPriceQuota>
            <RentalPriceTotal>R$ {rentTotal}</RentalPriceTotal>
          </RentalPriceDetails>
        </RentalPrice>
      </Content>

      <Footer>
        <Button
          name="Confirmar"
          onPress={handleConfirm}
          color={theme.colors.success}
          isEnabled={!isLoading}
          isLoading={isLoading}
        />
      </Footer>
    </Container>
  );
};
