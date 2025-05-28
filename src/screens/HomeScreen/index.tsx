import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, ActivityIndicator, StyleSheet } from 'react-native';
import { fetchInsights } from '../../services/api';
import { Insight } from '../../types/insightTypes';
import { InsightCard } from '../../components/InsightCard';

export const HomeScreen = () => {
  const [insights, setInsights] = useState<Insight[]>([]);
  const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     fetchInsights()
//       .then(setInsights)
//       .catch(console.error)
//       .finally(() => setLoading(false));
//   }, []);

  if (loading) return <ActivityIndicator style={styles.loader} size="large" />;

  return (
    <View style={styles.container}>
      <FlatList
        data={insights}
        keyExtractor={(_, index) => index.toString()}
        renderItem={({ item }) => <InsightCard insight={item} />}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16 },
  loader: { flex: 1, justifyContent: 'center' },
});