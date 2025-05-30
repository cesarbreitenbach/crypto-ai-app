import React, { useState } from 'react';
import { ScrollView, ActivityIndicator } from 'react-native';
import { fetchInsights } from '../../services/api';
import { Insight } from '../../types/insightTypes';
import { Button, ButtonText, Container, Title } from './styles';
import { CardOverview } from '../../components/CardOverview';
import { CardTechnicalIndicators } from '../../components/CardTechnicalIndicators';
import { CardScenarios } from '../../components/CardScenarios';
import { CardSignals } from '../../components/CardSignals';
import { CardConclusion } from '../../components/CardConclusion';

export const HomeScreen = () => {
  const [insight, setInsight] = useState<Insight | null>(null);
  const [loading, setLoading] = useState(false);

  const handleFetchInsight = async () => {
    try {
      setLoading(true);
      const data = await fetchInsights();
      setInsight(data);
    } catch (error) {
      console.error('Erro ao buscar insights:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container>
      <Title>CryptoInsighter</Title>

      <Button onPress={handleFetchInsight} disabled={loading}>
        <ButtonText>{loading ? 'Carregando...' : 'Obter Análise'}</ButtonText>
      </Button>

      <ScrollView showsVerticalScrollIndicator={false}>
        {insight && (
          <>
            <CardOverview data={insight.overview} />
            <CardTechnicalIndicators data={insight.technicalIndicators} />
            <CardScenarios data={insight.scenarios} />
            <CardSignals data={insight.signals} />
            <CardConclusion conclusion={insight.conclusion} />
          </>
        )}
        {loading && <ActivityIndicator style={{ marginTop: 20 }} size="large" />}
      </ScrollView>
    </Container>
  );
};