import styled from "styled-components/native"
import { theme } from "../../styles/theme"
import * as Animatable from "react-native-animatable"
import { TouchableOpacity } from "react-native"

export const Container = styled.View`
flex:1;
background-color: ${theme.colors.black};
`
export const Containerlogo = styled.View`
flex:2;
justify-content: center;
align-items: center;
    
`

export const ContainerForm = styled(Animatable.View)`
    flex:1;
    background-color: ${theme.colors.orange_10};
    border-top-right-radius: 25px;
    border-top-left-radius: 25px;
    padding-left: 5%;
    padding-right: 5%;

`

export const Title =styled.Text`
    font-size: 24px;
    font-weight: bold;
    margin-top: 28px;
    margin-bottom: 12px;
    color:${theme.colors.black}
`
export const Text =styled.Text`
    color: ${theme.colors.black};
`
export const TextBtn =styled.Text`
color: ${theme.colors.white};
font-size: 18px;
font-weight: bold;
    
`
export const button = styled(TouchableOpacity)`
position: absolute;
background-color: ${theme.colors.black};
border-radius: 50px;
padding:12px;
width: 60%;
bottom: 15%;
align-self:center ;
align-items: center;
justify-content: center;
`