import React from 'react';
import { Container, Title, Label, TextBlock } from './styles';
import { Signals } from '../../types/insightTypes';

interface Props {
  data: Signals;
}

export const CardSignals: React.FC<Props> = ({ data }) => (
  <Container>
    <Title>Sinais</Title>

    <Label>🔊 Condição de Volume:</Label>
    <TextBlock>{data.volumeCondition}</TextBlock>

    <Label>🕯️ Padrões de Candlestick:</Label>
    <TextBlock>{data.candlestickPatterns}</TextBlock>
  </Container>
);