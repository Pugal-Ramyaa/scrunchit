import { FavoriteBorderOutlined, SearchOutlined, ShoppingCartOutlined } from "@material-ui/icons";
import styled from "styled-components"
import { mobile } from "../responsive";

const Info=styled.div`
    Opacity:0;
    width:100%;
    height:100%;
    position:absolute;
    top:0;
    left:0;
    background-color:rgba(0,0,0,0.2);
    z-index:3;
    display:flex;
    align-items:center;
    justify-content:center;
    transition:400ms;
`;

const Container=styled.div`
    flex:1;
    margin:5px;
    min-width:calc(100vw/4.5);
    height:350px;
    display:flex;
    align-item:center;
    justify-content:center;
    position:relative;
    background-color:#E8F0FDff;

    &:hover ${Info}{
        opacity:1;
    }

    
`;

const Image=styled.img`
    height:88%;
    padding-top:20px;
    z-index:2;
`;

const Icon=styled.div`
    width:40px;
    height:40px;
    border-radius:50%;
    background-color:#E8F0FDff;
    display:flex;
    align-items:center;
    justify-content:center;
    margin:8px;
    cursor:pointer;
    transition: 400ms;
    &:hover{
        background-color:#F2E1FDff;
        transform:scale(1.1);
    }

`;

const Product = ({item}) => {
  return (
    <Container>
        <Image src={item.img}/>
        <Info>
            <Icon>
                <ShoppingCartOutlined/>
            </Icon>
            <Icon>
                <SearchOutlined/>
            </Icon>
            <Icon>
                <FavoriteBorderOutlined/>
            </Icon>
        </Info>
    </Container>
  )
}

export default Product