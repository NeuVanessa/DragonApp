import styled from "styled-components/native";
import { Dimensions } from "react-native";

interface IndexProps {
  active: boolean;
}


interface CategoryProps {
  type:'Global' | 'Comum'
}

export const Container = styled.View`
  flex: 1;
  background: ${({ theme }) => theme.colors.background_global};
`;

const { width } = Dimensions.get("window");

export const CarouselItem = styled.View`
  flex-direction: row;
  align-self: center;
  padding-right: 24px;

`;

export const Category = styled.TouchableOpacity<CategoryProps>`
 margin-left:10px;
 width: 80px;
 border-radius:5px;
 justify-content:center;
 align-items:center;
 align-self:center;
 background-color: ${({type}) => (type  ? "#DCBE98" : '#F7F7F8')};
`
// ${props => props.fill === 'contained' ? '#1DD195': 'transparent'  }
export const Index = styled.View<IndexProps>`
  width:8px;
  height: 8px;
  border-radius:50px;
  background-color: ${({ active }) => (active ? "black" : "grey")};
  align-self:center;
  justify-content:center;
 align-items:center;
 margin-left:5px;
  
`;

export const Wrapper = styled.View`
  width: ${width}px;
  height: 132px;
  justify-content: center;
  align-items: center;
`;
export const Item = styled.Image`
  width: 280px;
  height: 132px;
  
`;
