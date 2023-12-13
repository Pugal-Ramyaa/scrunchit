import styled from "styled-components"
import Register from "./Register";
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
    width:25%;
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
    flex-direction:column;
`;

const Input=styled.input`
    flex:1;
    min-width:40%;
    margin:10px 0px;
    padding:10px;
`;

const Button=styled.button`
    width:40%;
    border:none;
    padding:15px 20px;
    background-color:#D5C4FBff;
    color:white;
    cursor:pointer;
    margin-bottom:10px;
`;

const Link=styled.div`
    margin:5px 0px;
    font-size:12px;
    text-decoration:underline;
    cursor:pointer;
`;


const Login = () => {
  return (
    <Container>
        <Wrapper>
            <Title>SIGN IN</Title>
            <Form>
                <Input placeholder="Username"/>
                <Input placeholder="Password"/>
                <Button>LOGIN</Button>
                <Link>FORGOT PASSWORD ?</Link>
                <Link>NEW USER ? CREATE AN ACCOUNT HERE</Link>
            </Form>
        </Wrapper>
    </Container>
  )
}

export default Login