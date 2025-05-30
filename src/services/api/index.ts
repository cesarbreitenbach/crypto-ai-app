import axios from 'axios';
import { Insight } from '../../types/insightTypes';

export const fetchInsights = async (): Promise<Insight> => {
  const { data } = await axios.get<Insight>('https://cbengenharia.space/api/btc-analysis');
  console.log(`peguei data ${JSON.stringify(data)}`)
  return data;
};