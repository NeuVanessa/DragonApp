import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";



export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.background};
`;



export const Header = styled.ImageBackground`
  height: ${RFPercentage(20)}px;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.primary};
  flex-direction: row;
  justify-content:center;
  align-items: center;
 
`;
export const CardContent = styled.View`
flex: 1;
`;

export const Phrase = styled.Text`
  position: relative;
  font-size: ${RFValue(24)}px;
  color: ${({ theme }) => theme.colors.title};
  align-self: center;
  margin: 8px 0px 14px;
  font-family: ${({ theme }) => theme.fonts.regular};
`;
export const House = styled.View`
  width: 100%;
  padding: 0 24px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-top: ${RFValue(28)}px;
`;
export const HouseName = styled.Text`
  margin-left: 20px;
  font-size: ${RFValue(32)}px;
  color: ${({ theme }) => theme.colors.title};
  font-family: ${({ theme }) => theme.fonts.regular};
`;

export const HouseInfo = styled.View`
  bottom: 28px;
  flex-direction: row;
  align-items: center;
`;
export const HouseDescription = styled.Text`
  font-size: ${RFValue(13)}px;
  color: ${({ theme }) => theme.colors.text};
  font-family: ${({ theme }) => theme.fonts.regular};
  width: 260px;
  
`;

export const Photo = styled.Image`
  width: ${RFValue(93)}px;
  height: ${RFValue(162)}px;
  border-radius: 10px;
  border-color: ${({ theme }) => theme.colors.title};;
  border-width: 3px;
`;

export const HouseDetail = styled.View`
  margin-left: 17px;
`;

export const HouseScroll = styled.ScrollView.attrs({

  vertical: true,
  showsVerticalScrollIndicator: false,
  contentContainerStyle: { paddingVertical: 20 },
})`

width: 100%;


  `;


export const LordName = styled.Text`
  margin-left: 20px;
  font-size: ${RFValue(30)}px;
  color: ${({ theme }) => theme.colors.title};
  font-family: ${({ theme }) => theme.fonts.regular};
`;
export const CardLords = styled.View`

`;




export const ContainerLord = styled.View`
flex: 1;
`;
export const NameAndPhotoRow = styled.View`
  margin-left: 20px;
  width: 100%;
`;


export const Row = styled.View`
flex: 1;
width: 100%;

`;
export const CardRow = styled.View`
  justify-content: space-between;
  flex-direction: row;
  width: ${RFValue(93)}px;
  height: ${RFValue(162)}px;
  

`;

export const PhotoLord = styled.Image`
  width: ${RFValue(93)}px;
  height: ${RFValue(140)}px;
  border-color: ${({ theme }) => theme.colors.title};
  border-width: 3px;
`;

export const CardDescription = styled.View`
  width: ${RFValue(240)}px;
  background-color: ${({ theme }) => theme.colors.title};
  margin-top: 0px;
 margin-left:3px;  
 border-color: ${({ theme }) => theme.colors.title};
 border-width: 3px;
 border-radius: 8px;
`;

export const DescriptionLord = styled.Text`
  align-self: center;

  font-size: ${RFValue(14)}px;
  color: ${({ theme }) => theme.colors.lord_name};
  font-family: ${({ theme }) => theme.fonts.medium};
`;

export const LordNameArray = styled.Text`
  font-size: ${RFValue(16)}px;
  color: ${({ theme }) => theme.colors.shape};
  font-family: ${({ theme }) => theme.fonts.regular};
  margin-left: 20px;
  font-size: ${RFValue(20)}px;
`;
export const MoreInfoLord = styled.View`
  flex-direction: row;
  width: ${RFValue(100)}px;
  height: ${RFValue(41)}px;
  margin-right: ${RFValue(50)}px;
  margin-top: ${RFValue(10)}px;
  margin-left: ${RFValue(120)}px;
`;
export const MoreText = styled.Text`
  margin-right: 22px;
  font-size: ${RFValue(14)}px;
  color: ${({ theme }) => theme.colors.primary};
  font-family: ${({ theme }) => theme.fonts.regular};
`;

export const More = styled.Image`
  width: ${RFValue(41)}px;
  height: ${RFValue(41)}px;
  border-radius: 50px;
  bottom: ${RFValue(5)}px;
  right: ${RFValue(18)}px;
`;
export const Footer = styled.ImageBackground`

height: 250px;
  
`;
