import React, { useContext, useEffect, useState } from 'react';
import { ScrollView, TextInput, Image, FlatList } from 'react-native';
import logo from "../../assets/logoHome.png"
import Game from '../../components/Game';
import * as C from "./styles"
import { theme } from '../../styles/theme';
import { GlobalContext } from '../../context/GlobalContext';
import { useNavigation } from '@react-navigation/native';
import { stackTypes } from '../../routes';

export const Home = () => {
  const { input = '', games, setInput } = useContext(GlobalContext);
  const navigation = useNavigation<stackTypes>()
    // Função a ser chamada ao comprar um jogo
    const handleBuy = (id: number) => {
      // Navegar para a página de produto e passar o ID do produto como parâmetro
      navigation.navigate('Product', { idGame: id });
    };
    
     //filtrar pelo nome
    const filteredGames = games?.filter((game) =>
    game.nameGame.toLowerCase().includes(input.toLowerCase())
  );

    return (
      
      <C.Container>
        <Image source={logo} />
        <C.Input placeholder='Busque seu jogos' placeholderTextColor={theme.colors.gray_10}  onChangeText={text => setInput(text)} // Supondo que setInput seja uma função para atualizar o estado do texto de entrada
        value={input}/>
       {filteredGames!.length > 0 ? (
      <FlatList
        data={filteredGames}
        renderItem={({ item }) => (
          <Game key={item.idGame} game={item} onBuy={() => handleBuy(item.idGame)} />
        )}
        keyExtractor={item => item.idGame.toString()}
        showsVerticalScrollIndicator={false}
      />
    ) : (
      <C.Title>Nenhum jogo encontrado.</C.Title>
    )}
      </C.Container>
    );
  };

