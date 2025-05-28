import axios from 'axios';
import { Insight } from '../../types/insightTypes';

export const fetchInsights = async (): Promise<Insight[]> => {
  const { data } = await axios.get<Insight[]>('https://sua-api.com/insights');
  return data;
};