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
  AcessoriesWrapper,
  Footer,
} from "./styles";

import SpeedSvg from "../../assets/speed.svg";
import AccelerationSvg from "../../assets/acceleration.svg";
import ForceSvg from "../../assets/force.svg";
import GasolineSvg from "../../assets/gasoline.svg";
import ExchangeSvg from "../../assets/exchange.svg";
import PeopleSvg from "../../assets/people.svg";
import { Button } from "../../components/Button";
import { useNavigation } from "@react-navigation/core";

type Props = {};

export const CarDetails: React.FC<Props> = ({}) => {
  const navigation = useNavigation();

  function handleSelectRentalPeriod() {
    navigation.navigate("SchedulingComplete");
  }

  return (
    <Container>
      <Header>
        <BackButton onPress={() => {}} />
      </Header>

      <ImageContainer>
        <ImagesSlider
          imageUrl={[
            "https://img2.gratispng.com/20180816/paa/kisspng-ferrari-s-p-a-car-ferrari-488-enzo-ferrari-ferrari-png-free-png-images-toppng-5b75fbb0461eb8.4406679715344588002872.jpg",
          ]}
        />
      </ImageContainer>

      <Content>
        <Details>
          <Description>
            <Brand>Lamborghini</Brand>
            <Name>Hiracan</Name>
          </Description>

          <Rent>
            <Period>Ao dia</Period>
            <Price>R$ 580</Price>
          </Rent>
        </Details>

        <AcessoriesWrapper>
          <Accessory name="380Km/h" icon={SpeedSvg} />
          <Accessory name="3.2s" icon={AccelerationSvg} />
          <Accessory name="800 HP" icon={ForceSvg} />
          <Accessory name="Gasolina" icon={GasolineSvg} />
          <Accessory name="Auto" icon={ExchangeSvg} />
          <Accessory name="2 Pessoas" icon={PeopleSvg} />
        </AcessoriesWrapper>
        <About>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda
          adipisci accusamus ratione cum magnam cumque quasi quos dolor eveniet
          animi maxime, sunt itaque et nostrum. Ut illo dolorem accusamus?
          Recusandae!
        </About>
      </Content>

      <Footer>
        <Button name="Selecionar Periodo" onPress={handleSelectRentalPeriod} />
      </Footer>
    </Container>
  );
};
