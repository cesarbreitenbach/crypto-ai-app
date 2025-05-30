import React, { JSX } from 'react';
import { Container, Title, Label, TextBlock } from './styles';
import { Scenarios } from '../../types/insightTypes';
import { Text } from 'react-native';

interface Props {
  data: Scenarios;
}

export const CardScenarios: React.FC<Props> = ({ data }) =>{ 

  return (

  <Container>
    <Title>Cenários</Title>

    <Label>📈 Cenário de Alta (Bullish):</Label>
    <TextBlock>{data.bullish}</TextBlock>

    <Label>📉 Cenário de Baixa (Bearish):</Label>
    <TextBlock>{data.bearish}</TextBlock>
  </Container>
)};