import { RectButton } from "react-native-gesture-handler";
import styled from "styled-components/native";
import { RFValue } from "react-native-responsive-fontsize";

type Props = {
  color?: string;
};

type ButtonTextProps = {
  light: boolean;
};

export const Container = styled(RectButton)<Props>`
  width: 100%;
  background-color: ${({ color, theme }) => color || theme.colors.main};

  padding: 19px;
  align-items: center;
  justify-content: center;
  margin-bottom: 8px;
`;

export const Title = styled.Text<ButtonTextProps>`
  font-family: ${({ theme }) => theme.fonts.primary_500};
  font-size: ${RFValue(15)}px;
  color: ${({ light, theme }) =>
    light ? theme.colors.header : theme.colors.shape};
`;
