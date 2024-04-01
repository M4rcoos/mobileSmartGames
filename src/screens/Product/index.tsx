import React, { useEffect, useState } from 'react';
import { Image, Linking, TouchableOpacity, Text, Alert } from 'react-native';
import { Camera, CameraType } from 'expo-camera';
import { api } from '../../services/api';
import { IGame, IStore } from '../../interfaces/Interfaces';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import * as C from './styles'

export const Product = ({ route }) => {
  const { idGame } = route.params;
  const [game, setGame] = useState<IGame>();
  const [hasPermission, setHasPermission] = useState<boolean>(false);
  const [scanned, setScanned] = useState<boolean>(false);
  const [showCamera, setShowCamera] = useState<boolean>(false);
  const [selectedStoreId, setSelectedStoreId] = useState<number | null>(null)

  //pede a permissão para usar a camera
  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);

  // traz os detalhes do game da Api
  const fetchGameDetails = async (): Promise<void> => {
    try {
      const response = await api.get(`/api/games/${idGame}`);
      setGame(response.data);
    } catch (error) {
      console.error(JSON.stringify(error));
    }
  };

  useEffect(() => {
    fetchGameDetails();
  }, []);

  //Cadastra a compra no banco de dados!
  const handleBuy = (idGame: number, idStore: number) => {
    api.put(`/api/games/${idGame}/${idStore}`).then(() => {
      const mensagem = "A sua compra foi efetuada com sucesso!";
      Alert.alert(mensagem);
      console.log()
    })
      .catch((error) => {
        console.error("Erro ao selecionar a loja:", error);
        const mensagem = "Escolha uma loja";
        Alert.alert(mensagem);// Exibir um alerta caso ocorra um erro
      });
  };

  //escanear o qrCode
  const handleBarCodeScanned = ({ type, data }: { type: string, data: string }) => {
    setScanned(true);
    const discount = parseInt(data); // Convertendo o valor do desconto para número inteiro

    if (!isNaN(discount)) { // Verificando se o desconto é um número válido
      // Subtraindo o valor do desconto do preço do jogo
      if (game) {
        const newPrice = game.price - discount;
        console.log('Preço do jogo com desconto:', newPrice);
        // Atualizando o preço do jogo no estado
        setGame({ ...game, price: newPrice });
        // Exibindo mensagem de sucesso
        Alert.alert('Desconto Aplicado', `O desconto de R$${discount.toFixed(2)} foi aplicado com sucesso!`);
      } else {
        console.error('Erro: Jogo não encontrado.');
      }
    } else {
      console.error('Erro: Desconto inválido.');
    }

    setShowCamera(false); // Fecha a câmera após a leitura do código
  };

  //function para selecionar a loja
  const handleStorePress = (store: IStore) => {
    setSelectedStoreId(store.idStore === selectedStoreId ? null : store.idStore);
  };

  const handleMapPress = (store: IStore) => {
    Linking.openURL(store.linkMap);
  };

  const openCamera = () => {
    setScanned(false); // Reseta o estado de scanned
    setShowCamera(true); // Abre a câmera
  };

  return (
    <>
      <C.Container>
        <C.DetailsContainer>
          <C.ImageContainer>
            <C.GameImage source={{ uri: game?.linkImage }} />
          </C.ImageContainer>
          <C.Title>{game?.nameGame}</C.Title>
          <C.PriceAndDicount>
            <C.Price>Preço: R${game?.price.toFixed(2)}</C.Price>
            <C.ScanButton onPress={openCamera}>
              <C.Platform>Ler QR Code</C.Platform>
              <MaterialCommunityIcons name="qrcode-scan" size={34} color="#fff" />
            </C.ScanButton>
          </C.PriceAndDicount>
          <C.Description>{game?.description}</C.Description>
          <C.PlatformsTitle>Plataformas:</C.PlatformsTitle>
          <C.PlatformsContainer>
            {game?.platforms.map((platform) => (
              <C.Platform key={platform.idPlatform}>{platform.namePlatform}</C.Platform>
            ))}
          </C.PlatformsContainer>
          <C.StoresTitle>Comprar nas lojas:</C.StoresTitle>
          {game?.stores.map((store) => (
            <C.StoreContainer key={store.idStore} onPress={() => handleStorePress(store)} style={{ backgroundColor: store.idStore === selectedStoreId ? '#ED663C' : '#ffffff' }}>
              <C.StoreName style={{ color: store.idStore === selectedStoreId ? '#ffffff' : '#000' }}>{store.name}</C.StoreName>
              <C.StoreAddress>{store.address}</C.StoreAddress>
            </C.StoreContainer>
          ))}

          <C.BuyButton onPress={() => handleBuy(game?.idGame ?? 0, selectedStoreId?? 0)}>
            <C.BuyButtonText>Comprar online</C.BuyButtonText>
          </C.BuyButton>

          {selectedStoreId && (
            <C.mapButton onPress={() => handleMapPress(game?.stores.find((store) => store.idStore === selectedStoreId)!)}>
              <C.BuyButtonText>Ir ao roteiro</C.BuyButtonText>
            </C.mapButton>
          )}
        </C.DetailsContainer>
      </C.Container>
      {showCamera && (
        <C.CameraContainer>
          <Camera
            style={{ flex: 1 }}
            type={CameraType.back}
            onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}

          />
          <C.MsgQr>Abra o prduto na Pagina web e pegue seu desconto </C.MsgQr>
        </C.CameraContainer>
      )}
    </>
  );
};

