import styled from 'styled-components/native';
import { theme } from '../../styles/theme';
export const Container = styled.View`
  flex: 1;
  padding: 20px;
  background-color: ${theme.colors.black};
  padding-top: 45px;
`;


// Título da tela
export const Title = styled.Text`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 20px;
`;
export const Input = styled.TextInput`
 border-radius: 16px;
 border-color:   ${theme.colors.orange};
 border-width:1px;
 padding: 15px;
 margin-bottom: 12px;
 color: ${theme.colors.gray_10};

`
