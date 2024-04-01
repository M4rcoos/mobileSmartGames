import styled from 'styled-components/native';
import { theme } from '../../styles/theme';
import { Image} from 'react-native';


export const Container = styled.View`
  flex: 1;
  background-color: ${theme.colors.black};
`;

export const CameraContainer = styled.View`
  flex: 1;
  height: 100%;
`;

export const DetailsContainer = styled.ScrollView`

`;

export const ImageContainer = styled.View`
  width: 100%;
  height: 200px;
  margin-top: 30px;

`;

export const GameImage = styled(Image)`
  width: 100%;
  height: 100%;
  resize-mode: contain;
`;

export const Title = styled.Text`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 10px;
  color: ${theme.colors.orange_10};
`;

export const Price = styled.Text`
  font-size: 18px;
  margin-bottom: 10px;
  color: ${theme.colors.orange};
`;

export const Description = styled.Text`
  font-size: 16px;
  margin-bottom: 10px;
  color: ${theme.colors.gray_10};
  font-style: italic;
`;

export const PlatformsTitle = styled.Text`
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 5px;
  color: ${theme.colors.orange_10};
`;

export const PlatformsContainer = styled.View`
  flex-direction: row;
  flex-wrap: wrap;
  margin-bottom: 10px;
`;

export const Platform = styled.Text`
  margin-right: 10px;
  margin-bottom: 5px;
  font-size: 16px;
  color: ${theme.colors.gray_10};
`;

export const StoresTitle = styled.Text`
  font-size: 18px;
  font-weight: bold;
  color: ${theme.colors.orange_10};
  margin-bottom: 8px;
`;

export const StoreContainer = styled.TouchableOpacity`
  background-color: ${theme.colors.gray_10};
  padding: 10px;
  border-radius: 5px;
  margin-bottom: 10px;
`;

export const StoreName = styled.Text`
  font-size: 16px;
  font-weight: bold;
  margin-bottom: 5px;
  color: ${theme.colors.white};
`;

export const StoreAddress = styled.Text`
  font-size: 14px;
`;

export const BuyButton = styled.TouchableOpacity`
  background-color: ${theme.colors.orange};
  padding: 15px;
  border-radius: 5px;
  align-items: center;
  margin-top: 20px;
 
`;
export const mapButton = styled.TouchableOpacity`
  background-color: #1393FF;
  padding: 15px;
  border-radius: 5px;
  align-items: center;
  margin-top: 20px;
  margin-bottom: 60px;
 
`;

export const BuyButtonText = styled.Text`
  font-size: 18px;
  font-weight: bold;
  color: ${theme.colors.white};
`;

export const ScanButton = styled.TouchableOpacity`
  padding: 15px;
  border-radius: 5px;
    
  align-items: center;

`;

export const ScanButtonText = styled.Text`
  font-size: 18px;
  font-weight: bold;
  color: ${theme.colors.white};
`;
export const PriceAndDicount = styled.View`
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
`
export const MsgQr = styled.Text`
  font-size: 18px;
  font-weight: bold;
  color: ${theme.colors.orange};
  text-align: center;
`;
