import React, { useEffect, useState } from 'react';
import { ScrollView, TextInput, Image } from 'react-native';
import logo from "../../assets/logoHome.png"
import Game from '../../components/Game';
import * as C from "./styles"
import { theme } from '../../styles/theme';
import { GlobalContext } from '../../context/GlobalContext';
import { IGame } from '../../interfaces/Interfaces';
import { api } from '../../services/api';
import axios from 'axios';

// Container principal da tela

// Dados fictícios de jogos

const gamesData = [
  {
    idGame: 1,
    nameGame: 'FIFA 22',
    description: 'O jogo de futebol mais popular.',
    linkImage: 'https://pt.wikipedia.org/wiki/Watch_Dogs_2#/media/Ficheiro:Watch_Dogs_2_cover.png',
    price: 199.99,
    discount: 20,
    platforms: [
      { idPlatform: 1, namePlatform: 'PlayStation' },
      { idPlatform: 2, namePlatform: 'Xbox' },
    ],
    stores: [
      { adress: 'Rua A, 123', sales_quantity: 100, name: 'Loja 1', linkMap: 'https://example.com/map1', idStore: 1 },
      { adress: 'Rua B, 456', sales_quantity: 150, name: 'Loja 2', linkMap: 'https://example.com/map2', idStore: 2 },
    ],
  },
  {
    idGame: 2,
    nameGame: 'FIFA 22',
    description: 'O jogo de futebol mais popular.',
    linkImage: 'https://upload.wikimedia.org/wikipedia/pt/6/6c/God_of_War_3_capa.png',
    price: 199.99,
    discount: 20,
    platforms: [
      { idPlatform: 1, namePlatform: 'PlayStation' },
      { idPlatform: 2, namePlatform: 'Xbox' },
    ],
    stores: [
      { adress: 'Rua A, 123', sales_quantity: 100, name: 'Loja 1', linkMap: 'https://example.com/map1', idStore: 1 },
      { adress: 'Rua B, 456', sales_quantity: 150, name: 'Loja 2', linkMap: 'https://example.com/map2', idStore: 2 },
    ],
  },
  {
    idGame: 3,
    nameGame: 'FIFA 22',
    description: 'O jogo de futebol mais popular.',
    linkImage: 'https://www.guiaviagensbrasil.com/imagens/Imagem%20do%20mar%20calma%20e%20belo%20da%20Praia%20da%20Engenhoca-Itacar%C3%A9-Bahia-BA.jpg',
    price: 199.99,
    discount: 20,
    platforms: [
      { idPlatform: 1, namePlatform: 'PlayStation' },
      { idPlatform: 2, namePlatform: 'Xbox' },
    ],
    stores: [
      { adress: 'Rua A, 123', sales_quantity: 100, name: 'Loja 1', linkMap: 'https://example.com/map1', idStore: 1 },
      { adress: 'Rua B, 456', sales_quantity: 150, name: 'Loja 2', linkMap: 'https://example.com/map2', idStore: 2 },
    ],
  },
  // Adicione mais jogos fictícios conforme necessário
];


type Movie = {
  id: string;
  title: string;
  releaseYear: string;
};
export const Home = () => {
  const [games, setGames] = React.useState<IGame[] | null>([]);
  const [error, setError] = React.useState<string | null>(null);
  const [input, setInput] = React.useState('');

  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState<Movie[]>([]);

  const getMovies = async () => {
    try {
      const response = await axios.get('http://localhost:3000/api/games');
   
    
      console.log(response)
    } catch (error) {
      console.error(JSON.stringify(error)); 
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getMovies();
  }, []);
    // Função a ser chamada ao comprar um jogo
    const handleBuy = () => {
      // Implemente sua lógica de compra aqui
      console.log('Compra realizada com sucesso!');
    };

    return (
      <C.Container>
        <Image source={logo} />
        <C.Input placeholder='Busque seu jogos' placeholderTextColor={theme.colors.gray_10} />
        <ScrollView showsVerticalScrollIndicator={false}>
          {/* Renderiza cada jogo com dados fictícios */}
          {games?.map(game => (
            <Game key={game.idGame} game={game} onBuy={handleBuy} />
          ))}
        </ScrollView>
      </C.Container>
    );
  };

