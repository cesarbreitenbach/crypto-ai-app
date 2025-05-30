import React from 'react';
import { Container, Title, Row, Label, Value, BulletList, BulletItem, SuportArea } from './styles';
import { TechnicalIndicators } from '../../types/insightTypes';
import { View } from 'react-native';
import { formatCurrency, formatNumber } from '../../utils/format';

interface Props {
  data: TechnicalIndicators;
}

export const CardTechnicalIndicators: React.FC<Props> = ({ data }) => (
  <Container>
    <Title>Indicadores Técnicos</Title>
    <Row><Label>MA50:</Label><Value>{formatCurrency(data.ma50)}</Value></Row>
    <Row><Label>MA200:</Label><Value>{formatCurrency(data.ma200)}</Value></Row>
    <Row><Label>RSI:</Label><Value>{formatNumber(data.rsi)}</Value></Row>
    <Row><Label>MACD:</Label><Value>{formatNumber(data.macd)}</Value></Row>

    <SuportArea>
      <View>
        <Label style={{ marginTop: 12 }}>Suportes:</Label>
        <BulletList>
          {data.support.map((s, i) => (
            <BulletItem key={`support-${i}`}>• {formatCurrency(s)}</BulletItem>
          ))}
        </BulletList>
      </View>
      <View>
        <Label style={{ marginTop: 12 }}>Resistências:</Label>
        <BulletList>
          {data.resistance.map((r, i) => (
            <BulletItem key={`resistance-${i}`}>• {formatCurrency(r)}</BulletItem>
          ))}
        </BulletList>
      </View>
    </SuportArea>


  </Container>
);