import styled from 'styled-components/native';
import { theme } from '../../styles/theme';

// Componente de estilização para o jogo
export const GameContainer = styled.View`
  border: 1px solid ${theme.colors.gray_10};
  border-radius: 10px;
  padding: 10px;
  margin-bottom: 20px;
`;

// Imagem do jogo
export const GameImage = styled.Image`
  width: 100%;
  height: 200px;
  border-radius: 10px;
  margin-bottom: 10px;
  
  
`;

// Título do jogo
export const GameTitle = styled.Text`
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 5px;
  color: ${theme.colors.orange_10};
`;

// Plataforma do jogo
export const PlatformText = styled.Text`
  margin-bottom: 5px;
  font-weight:bold;
  color: ${theme.colors.white};
`;

// Valor do jogo
export const PriceText = styled.Text`
  font-size: 16px;
  font-weight: bold;
  margin-bottom: 10px;
  color: ${theme.colors.white};
`;

// Botão de comprar
export const BuyButton = styled.TouchableOpacity`
  background-color: ${theme.colors.orange_10};
  padding: 10px;
  border-radius: 5px;
  align-items: center;
`;

// Texto do botão de comprar
export const BuyButtonText = styled.Text`
 color: ${theme.colors.white};
  font-weight: bold;
`;