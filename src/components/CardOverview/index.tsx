import React from 'react';
import { Container, Title, Row, Label, Value } from './styles';
import { Overview } from '../../types/insightTypes';
import { formatCurrency, formatNumber } from '../../utils/format';

interface Props {
  data: Overview;
}

export const CardOverview: React.FC<Props> = ({ data }) => (
  <Container>
    <Title>Visão Geral</Title>
    <Row><Label>Preço atual:</Label><Value>{formatCurrency(data.price)}</Value></Row>
    <Row><Label>Market Cap:</Label><Value>{formatCurrency(data.marketCap)}</Value></Row>
    <Row><Label>Volume 24h:</Label><Value>{formatCurrency(data.volume24h)}</Value></Row>
    <Row><Label>Variação 1h:</Label><Value>{data.change1h}</Value></Row>
    <Row><Label>Variação 24h:</Label><Value>{data.change24h}</Value></Row>
    <Row><Label>Variação 7d:</Label><Value>{data.change7d}</Value></Row>
    <Row><Label>Alta 24h:</Label><Value>{formatCurrency(data.high24h)}</Value></Row>
    <Row><Label>Baixa 24h:</Label><Value>{formatCurrency(data.low24h)}</Value></Row>
  </Container>
);