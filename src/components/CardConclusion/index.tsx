import React from 'react';
import { Container, Title, Text } from './styles';

interface Props {
  conclusion: string;
}

export const CardConclusion: React.FC<Props> = ({ conclusion }) => (
  <Container>
    <Title>Conclusão</Title>
    <Text>{conclusion}</Text>
  </Container>
);