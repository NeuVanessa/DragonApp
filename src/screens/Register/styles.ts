import styled from 'styled-components/native';

export const Container = styled.View`
flex:1;
background: #181B17;
align-items:center;
`;

export const Scroll = styled.ScrollView`

`;
export const TextInput = styled.Text`
color:#979797;
padding:0px 10px 10px 10px;
font-size:15px;

`;

export const Title = styled.Text`
  font-size: 24px;
  color: #f4ede8;
  margin: 64px 0 24px;
`;

export const BackToSignIn = styled.TouchableOpacity`
  position: absolute;
  left: 0;
  bottom: 0;
  right: 0;
  background: #312e38;
  border-top-width: 1px;
  border-color: #232129;
  padding: 16px;
  justify-content: center;
  align-items: center;
  flex-direction: row;
`;

export const BackToSignInText = styled.Text`
  color: #fff;
  font-size: 18px;
  margin-left: 16px;
`;
export const Form = styled.View`
  width: 100%;
  margin: 64px 0;
`;