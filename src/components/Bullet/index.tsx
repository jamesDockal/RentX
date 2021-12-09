import React from "react";

import { Container } from "./styles";

type Props = {
  active: boolean;
};

export const Bullet: React.FC<Props> = ({ active }) => {
  return <Container active={active} />;
};
