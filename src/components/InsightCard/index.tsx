import React from 'react';
import { Text, StyleSheet } from 'react-native';
import Animated, { FadeIn } from 'react-native-reanimated';
import { Insight } from '../../types/insightTypes';

interface Props {
  insight: Insight;
}

const formatCurrency = (value: string) => {
  const number = parseFloat(value.replace(/[^0-9.-]+/g, ''));
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'USD',
  }).format(number);
};

const formatPercentage = (value: string) => {
  return value;
};

export const InsightCard: React.FC<Props> = ({ insight }) => (
  <Animated.View style={styles.card} entering={FadeIn.duration(500)}>
    <Text style={styles.title}>📈 Visão Geral</Text>
    <Text>Preço: {formatCurrency(insight.overview.price)}</Text>
    <Text>Market Cap: {insight.overview.marketCap}</Text>
    <Text>Volume (24h): {insight.overview.volume24h}</Text>
    <Text>Variação 1h: {formatPercentage(insight.overview.change1h)}</Text>
    <Text>Variação 24h: {formatPercentage(insight.overview.change24h)}</Text>
    <Text>Variação 7d: {formatPercentage(insight.overview.change7d)}</Text>
    <Text>Alta 24h: {formatCurrency(insight.overview.high24h)}</Text>
    <Text>Baixa 24h: {formatCurrency(insight.overview.low24h)}</Text>

    <Text style={styles.title}>📊 Indicadores Técnicos</Text>
    <Text>Suportes: {insight.technicalIndicators.support.map(formatCurrency).join(', ')}</Text>
    <Text>Resistências: {insight.technicalIndicators.resistance.map(formatCurrency).join(', ')}</Text>
    <Text>MA50: {formatCurrency(insight.technicalIndicators.ma50)}</Text>
    <Text>MA200: {formatCurrency(insight.technicalIndicators.ma200)}</Text>
    <Text>RSI: {insight.technicalIndicators.rsi}</Text>
    <Text>MACD: {insight.technicalIndicators.macd}</Text>

    <Text style={styles.title}>📌 Cenários</Text>
    <Text>🔼 Bullish: {insight.scenarios.bullish}</Text>
    <Text>🔽 Bearish: {insight.scenarios.bearish}</Text>

    <Text style={styles.title}>📍 Sinais</Text>
    <Text>Volume: {insight.signals.volumeCondition}</Text>
    <Text>Candlestick: {insight.signals.candlestickPatterns}</Text>

    <Text style={styles.title}>📣 Conclusão</Text>
    <Text>{insight.conclusion}</Text>
  </Animated.View>
);

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#f7f7f7',
    borderRadius: 8,
    padding: 16,
    marginTop: 16,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 16,
    marginTop: 12,
    marginBottom: 4,
  },
});