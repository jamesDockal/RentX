import React, { useState } from "react";
import { useTheme } from "styled-components/native";

import { Alert, StatusBar } from "react-native";
import { BackButton } from "../../components/BackButton";
import ArrowSvg from "../../assets/arrow.svg";
import {
  Container,
  Header,
  Title,
  RentalPeriod,
  DateInfo,
  DateTitle,
  DateValue,
  Content,
  Footer,
} from "./styles";
import { Button } from "../../components/Button";
import { Calendar, DayProps, MarkedDateProps } from "../../components/Calendar";
import { useNavigation, useRoute } from "@react-navigation/core";
import { generateInterval } from "../../components/Calendar/generateInterval";
import { addDays, format } from "date-fns";
import { Car } from "../../@types/Cars";

type RentalPeriod = {
  startFormatted: string;
  endFormatted: string;
};

type Params = {
  car: Car;
};

type Props = {};

export const Scheduling: React.FC<Props> = ({}) => {
  const [lastSelectedDate, setLastSelectedDate] = useState<DayProps>(
    {} as DayProps
  );
  const [markedDates, setMarkedDates] = useState<MarkedDateProps>(
    {} as MarkedDateProps
  );
  const [rentalPeriod, setRentalPeriod] = useState<RentalPeriod>(
    {} as RentalPeriod
  );

  const theme = useTheme();
  const navigation = useNavigation();
  const route = useRoute();
  const { car } = route.params as Params;

  function handleConfirm() {
    if (!rentalPeriod.startFormatted || !rentalPeriod.endFormatted) {
      Alert.alert("Selecione o intervalo para alugar.");
    } else {
      navigation.navigate("SchedulingDetails", {
        car,
        dates: Object.keys(markedDates),
      });
    }
  }

  function handleChangeDate(date: DayProps) {
    let start = !lastSelectedDate.timestamp ? date : lastSelectedDate;
    let end = date;

    if (start.timestamp > end.timestamp) {
      start = end;
      end = start;
    }

    setLastSelectedDate(end);
    const interval = generateInterval(start, end);
    setMarkedDates(interval);

    const firstDate = Object.keys(interval)[0];
    const endDate = Object.keys(interval)[Object.keys(interval).length - 1];

    setRentalPeriod({
      startFormatted: format(addDays(new Date(firstDate), 1), "dd/MM/yyyy"),
      endFormatted: format(addDays(new Date(endDate), 1), "dd/MM/yyyy"),
    });
  }

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

        <RentalPeriod>
          <DateInfo>
            <DateTitle>DE</DateTitle>
            <DateValue selected={!!rentalPeriod.startFormatted}>
              {rentalPeriod.startFormatted}
            </DateValue>
          </DateInfo>

          <ArrowSvg />

          <DateInfo>
            <DateTitle>ATÉ</DateTitle>
            <DateValue selected={!!rentalPeriod.endFormatted}>
              {rentalPeriod.endFormatted}
            </DateValue>
          </DateInfo>
        </RentalPeriod>
      </Header>

      <Content>
        <Calendar onDayPress={handleChangeDate} markedDates={markedDates} />
      </Content>

      <Footer>
        <Button name="Confirmar" onPress={handleConfirm} />
      </Footer>
    </Container>
  );
};
