import styled from "styled-components"
import { mobile } from "../responsive";

const Container=styled.div`
    width:100vw;
    height:100vh;
    background-image:linear-gradient(#E8F0FD,#F2E1FD,#D5C4FB);
    display:flex;
    align-items:center;
    justify-content:center;
`;

const Wrapper=styled.div`
    width:40%;
    padding:20px;
    background-color:white;
    border-radius:20px;
    ${mobile({
        width:"70%"
    })}
`;
const Title=styled.h1`
    text-align:center;
    font-size:34px;
    font-weight:600;
`;
const Form=styled.form`
    display:flex;
    flex-wrap:wrap;
`;



const Input=styled.input`
    flex:1;
    min-width:40%;
    margin:20px 10px 0px 0px;
    padding:10px;
`;

const Agreement=styled.span`
    font-size:12px;
    margin:20px 0px;
`;

const Button=styled.button`
    width:40%;
    border:none;
    padding:15px 20px;
    background-color:#D5C4FBff;
    color:white;
    cursor:pointer;
`;


const Register = () => {
  return (
    <Container>
        <Wrapper>
            <Title>Create an Account</Title>
            <Form>
                <Input placeholder="First name"/>
                <Input placeholder="Last name"/>
                <Input placeholder="Username"/>
                <Input placeholder="Email Address"/>
                <Input placeholder="Password"/>
                <Input placeholder="Confirm Password"/>
                <Agreement>
                    By creating an account , I consent to the processing of my personal data in accordance with the <b>PRIVACY POLICY </b> 
                </Agreement>
                <Button>CREATE</Button>
            </Form>
        </Wrapper>
    </Container>
  )
}

export default Register