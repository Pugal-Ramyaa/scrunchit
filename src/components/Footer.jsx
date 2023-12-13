import { Facebook, Instagram, Mail, Phone, Pinterest, Room, Twitter } from "@material-ui/icons";
import styled from "styled-components"
import { mobile } from "../responsive";

const Container=styled.div`
    display:flex;
    ${mobile({
        flexDirection:"column",
    })}
    
`;
const Left=styled.div`
    flex:1;
    display:flex;
    flex-direction:column;
    padding:20px;
    
`;

const Logo=styled.h1``;

const Description=styled.p`
    margin:20px 0px;
`;

const SocialContainer=styled.div`
    display:flex;
`;

const SocialIcon=styled.div`
    width:40px;
    height:40px;
    border-radius:50%;
    color:white;
    background-color: ${props=>props.color};
    display:flex;
    align-items:center;
    justify-content:center;
    margin-right:20px;
`;


const Center=styled.div`
    flex:1;
    padding:20px;
    ${mobile({
        display:"none"
    })}
`;

const Title=styled.h3`
    margin-bottom:30px;
`;

const List=styled.ul`
    margin:0;
    padding:0;
    List-style:none;
    display:flex;
    flex-wrap:wrap;
`;

const ListItem=styled.li`
    width:50%;
    margin-bottom:10px;
`;

const Right=styled.div`
    flex:1;
    padding:20px;
    ${mobile({
        backgroundColor:"#F2E1FD"
    })}
`;

const ContactItem=styled.div`
    margin-bottom:20px;
    display:flex;
    align-items:center;
`;
const Payment =styled.img`
    width:60%;
`;

const Footer = () => {
  return (
    <Container>
        <Left>
            <Logo>SCRUNCHIT</Logo>
            <Description>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos magnam impedit animi quaerat quae placeat adipisci culpa tempore est minima, a magni odio deleniti veritatis quod officiis dolor laborum ducimus.</Description>
            <SocialContainer>
                <SocialIcon color="#D1ECFDff">
                    <Facebook/>
                </SocialIcon>
                <SocialIcon color="#F2E1FDff">
                    <Instagram/>
                </SocialIcon>
                <SocialIcon color="#EBD0FDff">
                    <Pinterest/>
                </SocialIcon>
                <SocialIcon color="#D5C4FBff">
                    <Twitter/>
                </SocialIcon>
            </SocialContainer>
        </Left>
        <Center>
            <Title> Useful Links</Title>
            <List>
                <ListItem>Home</ListItem>
                <ListItem>Cart</ListItem>
                <ListItem>Kids scrunchies</ListItem>
                <ListItem>Scrunchies</ListItem>
                <ListItem>HeadBands</ListItem>
                <ListItem>Bow HairClips</ListItem>
                <ListItem>My Account</ListItem>
                <ListItem>Order Tracking</ListItem>
                <ListItem>WishList</ListItem>
                <ListItem>Terms and Conditions</ListItem>
            </List>
        </Center>
        <Right>
            <Title>Contact</Title>
            <ContactItem>
                <Room style={{marginRight:"10px"}}/>
                145 Sivanthakulam Main Road , Tuticorin
            </ContactItem>
            <ContactItem>
                <Phone style={{marginRight:"10px"}}/>
                +91 9344955384
            </ContactItem>
            <ContactItem>
                <Mail style={{marginRight:"10px"}}/>
                pugalramyaa2003@gmail.com
            </ContactItem>
            <Payment src="https://github.com/Pugal-Ramyaa/E-commerce-web-application/blob/main/Mobile_Card_View@2x.png?raw=true"/>
        </Right>
    </Container>
  )
}

export default Footer