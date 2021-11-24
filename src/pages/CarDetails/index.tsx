import React from "react";
import { Accessory } from "../../components/Accessory";

import { BackButton } from "../../components/BackButton";
import { ImagesSlider } from "../../components/ImagesSlider";
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
  About,
  AccessoriesWrapper,
  Footer,
} from "./styles";

import { Button } from "../../components/Button";
import { useNavigation, useRoute } from "@react-navigation/core";
import { Car } from "../../@types/Cars";
import { getAccessoryIcon } from "../../utils/getAccessoryIcon";

type Params = {
  car: Car;
};

export const CarDetails: React.FC = ({}) => {
  const navigation = useNavigation();
  const route = useRoute();
  const { car } = route.params as Params;

  function handleSelectRentalPeriod() {
    navigation.navigate("Scheduling");
  }

  return (
    <Container>
      <Header>
        <BackButton />
      </Header>

      <ImageContainer>
        <ImagesSlider imageUrl={car.photos} />
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

        <AccessoriesWrapper>
          {/* <Accessory name="380Km/h" icon={SpeedSvg} />
          <Accessory name="3.2s" icon={AccelerationSvg} />
          <Accessory name="800 HP" icon={ForceSvg} />
          <Accessory name="Gasolina" icon={GasolineSvg} />
          <Accessory name="Auto" icon={ExchangeSvg} />
          <Accessory name="2 Pessoas" icon={PeopleSvg} /> */}
          {car.accessories.map((accessory) => (
            <Accessory
              key={accessory.name}
              name={accessory.name}
              icon={getAccessoryIcon(accessory.type)}
            />
          ))}
        </AccessoriesWrapper>
        <About>{car.about}</About>
      </Content>

      <Footer>
        <Button name="Selecionar Periodo" onPress={handleSelectRentalPeriod} />
      </Footer>
    </Container>
  );
};
