import styled from "styled-components/native";
import { FlatList } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import { Car } from "../../@types/Cars";
import { RectButton } from "react-native-gesture-handler";

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.background_primary};
`;

export const Header = styled.View`
  width: 100%;
  height: ${RFValue(116)}px;
  background-color: ${({ theme }) => theme.colors.header};

  justify-content: flex-end;
`;

export const HeaderContainer = styled.View`
  flex-direction: row;
  justify-content: space-around;
  margin-bottom: ${RFValue(24)}px;
`;

export const TotalCars = styled.Text`
  font-size: ${RFValue(15)}px;
  font-family: ${({ theme }) => theme.fonts.primary_400};
  color: ${({ theme }) => theme.colors.text};
`;

export const CarList = styled(FlatList as new () => FlatList<Car>)``;

export const MyCarsButton = styled(RectButton)`
  height: 60px;
  width: 60px;

  border-radius: 30px;

  justify-content: center;
  align-items: center;

  background-color: ${({ theme }) => theme.colors.main};

  position: absolute;
  bottom: 13px;
  right: 22px;
`;
