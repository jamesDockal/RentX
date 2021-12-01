import { RectButton } from "react-native-gesture-handler";
import styled from "styled-components/native";
import { RFValue } from "react-native-responsive-fontsize";

type Props = {
  color?: string;
  isEnabled: boolean;
};

export const Container = styled(RectButton)<Props>`
  width: 100%;
  background-color: ${({ color, theme }) => color || theme.colors.main};

  opacity: ${({ isEnabled }) => (isEnabled ? 1 : 0.5)}

  padding: 19px;
  align-items: center;
  justify-content: center;
`;

export const Title = styled.Text`
  font-family: ${({ theme }) => theme.fonts.primary_500};
  font-size: ${RFValue(15)}px;
  color: ${({ theme }) => theme.colors.shape};
`;
