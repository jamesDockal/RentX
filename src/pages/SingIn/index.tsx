import React from "react";
import {
  StatusBar,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import { useTheme } from "styled-components";
import { Button } from "../../components/Button";
import { Input } from "../../components/Input";
import { PasswordInput } from "../../components/PasswordInput";

import { Container, Footer, Header, SubTitle, Title, Form } from "./styles";

type Props = {};

export const SingIn: React.FC<Props> = ({}) => {
  const theme = useTheme();

  return (
    <KeyboardAvoidingView behavior="position" enabled>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <Container>
          <StatusBar
            barStyle="dark-content"
            backgroundColor="transparent"
            translucent
          />

          <Header>
            <Title>Estamos{"\n"}quase lá.</Title>
            <SubTitle>
              Faça seu login para começar {"\n"}
              um experiência incrivel.
            </SubTitle>
          </Header>

          <Form>
            <Input
              iconName="mail"
              placeholder="E-mail"
              keyboardType="email-address"
              autoCorrect={false}
              autoCapitalize="none"
            />
            <PasswordInput iconName="lock" placeholder="Senha" />
          </Form>

          <Footer>
            <Button
              name="Login"
              onPress={() => {}}
              isEnabled={false}
              isLoading={false}
            />

            <Button
              name="Criar conta gratuita"
              onPress={() => {}}
              color={theme.colors.background_secondary}
              light
              isEnabled={false}
              isLoading={false}
            />
          </Footer>
        </Container>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};
