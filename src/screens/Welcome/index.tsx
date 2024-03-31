import React from 'react';
import * as C from "./styles"
import logo from "../../assets/logo.png"

import * as Animatable from "react-native-animatable"
import {useNavigation} from "@react-navigation/native"
import { stackTypes } from '../../routes';

export const Welcome = () => {
  const navigation = useNavigation<stackTypes>()
  
  return (
    <C.Container>
      
      <C.Containerlogo>
        <Animatable.Image animation="flipInY" source={logo} style={{ width: "100%" }} resizeMode='contain' />
      </C.Containerlogo>

      <C.ContainerForm animation="fadeInUp" delay={600}>
        <C.Title>
          Aqui está o seu passaporte para mundos virtuais.
        </C.Title>
        <C.Text>
          Acesse nosso mundo para começar
        </C.Text>
        <C.button onPress={()=> navigation.navigate('Home')}>
        <C.TextBtn>
          Começar
        </C.TextBtn>
        </C.button>
   </C.ContainerForm>

    </C.Container>)
}
