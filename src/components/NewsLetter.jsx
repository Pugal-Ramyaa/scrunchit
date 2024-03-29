import { Send } from "@material-ui/icons"
import styled from "styled-components";
import { mobile } from "../responsive";

const Container=styled.div`
    height:60vh;
    background-color:#E8F0FDff;
    display:flex;
    align-items:center;
    justify-content:center;
    flex-direction:column;
    
`;
const Title=styled.h1`
    font-size:70px;
    margin-bottom:20px;
    ${mobile({
        textAlign:"center",
        fontSize:"50px"
    })}
`;
const Description=styled.div`
    font-size:24px;
    font-weight:300;
    margin-bottom:20px;
    ${mobile({
        textAlign:"center",
        fontSize:"16px"
    })}
`;
const InputContainer=styled.div`
    width:50%;
    height:40px;
    background-color:white;
    display:flex;
    justify-content:space-between;
    border: 1px solid lightgray;

    ${mobile({
        width:"80%"
    })}
    
`;
const Input=styled.input`
    border:none;
    flex:8;
    padding-left:20px;
`;
const Button=styled.button`
    flex:1;
    border:none;
    background-color:#D5C4FBff;
    color:white;
    cursor:pointer;
`;
const NewsLetter = () => {
  return (
    <Container>
        <Title>
            NewsLetter
        </Title>
        <Description>
            Get Timely updates about your favourite products and offers !
        </Description>
        <InputContainer>
            <Input placeholder="Your email Address"/>
            <Button>
                <Send/>
            </Button>
        </InputContainer>
    </Container>
  )
}

export default NewsLetter