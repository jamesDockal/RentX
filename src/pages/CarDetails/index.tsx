import React from "react";
import { Accessory } from "../../components/Accessory";

import { BackButton } from "../../components/BackButton";
import { ImagesSlider } from "../../components/ImagesSlider";
import {
  Container,
  Header,
  ImageContainer,
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
import Animated, {
  Extrapolate,
  interpolate,
  useAnimatedScrollHandler,
  useAnimatedStyle,
  useSharedValue,
} from "react-native-reanimated";
import { StatusBar } from "react-native";

type Params = {
  car: Car;
};

export const CarDetails: React.FC = ({}) => {
  const navigation = useNavigation();
  const route = useRoute();
  const { car } = route.params as Params;

  const scrollY = useSharedValue(0);
  const scrollHandler = useAnimatedScrollHandler((event) => {
    scrollY.value = event.contentOffset.y;
  });

  const headerStyleAnimation = useAnimatedStyle(() => {
    return {
      height: interpolate(
        scrollY.value,
        [0, 200],
        [200, 70],
        Extrapolate.CLAMP
      ),
    };
  });

  const sliderCarStyleAnimation = useAnimatedStyle(() => {
    return {
      opacity: interpolate(scrollY.value, [0, 150], [1, 0], Extrapolate.CLAMP),
    };
  });

  function handleSelectRentalPeriod() {
    navigation.navigate("Scheduling", {
      car,
    });
  }

  return (
    <Container>
      <StatusBar
        barStyle="dark-content"
        translucent
        backgroundColor="transparent"
      />

      <Animated.View style={[headerStyleAnimation]}>
        <Header>
          <BackButton />
        </Header>

        <Animated.View
          style={[
            sliderCarStyleAnimation,
            {
              marginTop: 32,
            },
          ]}
        >
          <ImagesSlider imagesUrl={car.photos} />
        </Animated.View>
      </Animated.View>

      <Animated.ScrollView
        contentContainerStyle={{
          padding: 24,
          alignItems: "center",
        }}
        showsVerticalScrollIndicator={false}
        onScroll={scrollHandler}
        scrollEventThrottle={16}
      >
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
          {car.accessories.map((accessory) => (
            <Accessory
              key={accessory.name}
              name={accessory.name}
              icon={getAccessoryIcon(accessory.type)}
            />
          ))}
        </AccessoriesWrapper>
        <About>
          {car.about}
          {car.about}
          {car.about}
          {car.about}
          {car.about}
          {car.about}
        </About>
      </Animated.ScrollView>

      <Footer>
        <Button name="Selecionar Periodo" onPress={handleSelectRentalPeriod} />
      </Footer>
    </Container>
  );
};
