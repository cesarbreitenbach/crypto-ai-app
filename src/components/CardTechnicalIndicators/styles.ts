import styled from 'styled-components/native';

export const Container = styled.View`
  background-color: #f9f9f9;
  border-radius: 12px;
  padding: 16px;
  margin-bottom: 12px;
  shadow-color: #000;
  shadow-opacity: 0.1;
  shadow-radius: 4px;
  elevation: 3;
`;

export const Title = styled.Text`
  font-size: 18px;
  font-weight: bold;
  color: #333;
  margin-bottom: 12px;
`;

export const Row = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 8px;
`;

export const Label = styled.Text`
  font-size: 14px;
  color: #777;
`;

export const Value = styled.Text`
  font-size: 14px;
  font-weight: bold;
  color: #111;
`;

export const BulletList = styled.View`
  margin-top: 4px;
`;

export const BulletItem = styled.Text`
  font-size: 14px;
  color: #111;
  margin-left: 8px;
  margin-bottom: 4px;
`;

export const SuportArea = styled.View`
  flex-direction: row;
  justify-content: space-around;
`;