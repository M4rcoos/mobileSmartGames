import React from 'react';
import * as C from "./styles"
// Propriedades esperadas pelo componente Game
interface GameProps {
  game: {
    nameGame: string;
    description: string;
    linkImage: string;
    platforms: { namePlatform: string }[];
    price: number;
  };
  onBuy: () => void; // Função a ser chamada ao clicar no botão de comprar
}

// Componente Game que exibe os detalhes de um jogo
const Game: React.FC<GameProps> = ({ game, onBuy }) => {
  
  return (
    <C.GameContainer>
      <C.GameImage source={{ uri: game.linkImage }} resizeMode='cover' />
      <C.GameTitle>{game.nameGame}</C.GameTitle>
      <C.PlatformText>{game.platforms?.map(platform => platform.namePlatform).join(', ')}</C.PlatformText>
      <C.PriceText>R$ {game.price.toFixed(2)}</C.PriceText>
      <C.BuyButton onPress={onBuy}>
        <C.BuyButtonText>Ver jogo</C.BuyButtonText>
      </C.BuyButton>
    </C.GameContainer>
  );
};

export default Game;
