import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Insight } from '../../types/insightTypes';

interface Props {
  insight: Insight;
}

export const InsightCard: React.FC<Props> = ({ insight }) => (
  <View style={styles.card}>
    <Text style={styles.title}>{insight.title}</Text>
    <Text>{insight.description}</Text>
    <Text style={styles.value}>{insight.value}</Text>
  </View>
);

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#eee',
    borderRadius: 8,
    padding: 16,
    marginVertical: 8,
  },
  title: { fontWeight: 'bold', fontSize: 16 },
  value: { fontSize: 14, color: '#555' },
});