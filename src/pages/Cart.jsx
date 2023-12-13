import styled from "styled-components"
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Announcement from "../components/Announcement";
import { Add, Remove } from "@material-ui/icons";
import { mobile } from "../responsive";

const Container=styled.div`

`;

const Wrapper=styled.div`
    padding:20px;
    ${mobile({
        padding:"10px"
    })}
`;

const Title=styled.h1`
    font-weight:300;
    text-align:center;
`;

const Top=styled.div`
    display:flex;
    align-items:center;
    justify-content:space-between;
    padding:20px;
`;

const TopButton=styled.button`
    padding:10px;
    font-weight:600;
    cursor:pointer;
    border:${props=>props.type === "filled" && "none"};
    background-color:${props=>props.type === "filled" ? "black":"transparent"};
    color:${props=>props.type === "filled" && "white"};
`;

const Bottom=styled.div`
    display:flex;
    justify-content:space-between;
    margin-bottom:50px;
    ${mobile({
        flexDirection:"column"
    })}
`;

const Info=styled.div`
    flex:3;
`;

const Product=styled.div`
    display:flex;
    justify-content:space-between;
    ${mobile({
        flexDirection:"column"
    })}
`;

const ProductDetails=styled.div`
    flex:2;
    display:flex;
`;

const Image=styled.img`
    width:200px;
`;

const ProductId=styled.span`

`;

const ProductName=styled.span`
    font-weight:400;
`;

const ProductSize=styled.span`

`;

const ProductColor=styled.div`
    width:20px;
    height:20px;
    border-radius:50%;
    background-color:${props=>props.color};

`;

const PriceDetails=styled.div`
    flex:1;
    display:flex;
    align-items:center;
    justify-content:center;
    flex-direction:column;
`;

const Details=styled.div`
    padding:20px;
    display:flex;
    flex-direction:column;
    justify-content:space-around;
`;

const AmountContainer=styled.div`
    display:flex;
    align-items:center;
    margin-bottom:20px;
`;
const ProductAmount =styled.div`
    font-size:24px;
    margin:5px;
    ${mobile({
        margin:"10px 15px"
    })}
`;
const ProductPrice =styled.div`
    font-size:30px;
    font-weight:200;
    ${mobile({
        marginBottom:"20px"
    })}
`;
const Hr=styled.hr`
    background-color:#F2E1FD;
    border:none;
    height:1px;
    margin:20px;
`;

const Summary=styled.div`
    flex:1;
    border:0.5px solid lightgray;
    border-radius:10px;
    padding:20px;
    height:50vh;
`;

const SummaryItem=styled.div`
    margin:30px 0px;
    display:flex;
    justify-content:space-between;
    font-weight: ${props=>props.type === "total" && "500"};
    font-size: ${props=>props.type === "total" && "24px"};
`;

const SummaryItemText=styled.span`

`;

const OrderTitle=styled.h1`
    font-weight:300;
`;

const SummaryItemPrice=styled.span`

`;
const Button=styled.button`
    width:100%;
    padding:10px;
    background-color:#D5C4FB;
    border:none;
    color:white;
    font-weight:600;
`;
const TopTexts=styled.div`
    ${mobile({
        display:"none"
    })}
`;

const TopText=styled.span`
    text-decoration:underline;
    cursor:pointer;
    margin: 0px 10px;
`;

const Cart = () => {
  return (
    <Container>
        <Navbar/>
        <Announcement/>
        <Wrapper>
            <Title>
                YOUR BAG
            </Title>
            <Top>
                <TopButton>CONTINUE SHOPPING</TopButton>
                <TopTexts>
                    <TopText>Shopping Bag(2)</TopText>
                    <TopText>Your WishList (0)</TopText>
                </TopTexts>
                <TopButton type="filled">CHECKOUT NOW!</TopButton>
            </Top>
            <Bottom>
                <Info>
                    <Product>
                        <ProductDetails>
                            <Image src="https://github.com/Pugal-Ramyaa/E-commerce-web-application/blob/main/1.jpg?raw=true"/>
                            <Details>
                                <ProductName><b>Product:</b>Off White Floral Scrunchie</ProductName>
                                <ProductId><b>ID:</b>7373724871</ProductId>
                                <ProductColor color="#FFE6D8"/>
                                <ProductSize><b>Size:</b>XL</ProductSize>
                            </Details>
                        </ProductDetails>
                        <PriceDetails>
                            <AmountContainer>
                                <Add/>
                                <ProductAmount>4</ProductAmount>
                                <Remove/>
                            </AmountContainer>
                            <ProductPrice>
                                Rs 400/-
                            </ProductPrice>
                        </PriceDetails>
                    </Product>
                    <Hr/>
                    <Product>
                        <ProductDetails>
                            <Image src="https://github.com/Pugal-Ramyaa/E-commerce-web-application/blob/main/2.jpg?raw=true"/>
                            <Details>
                                <ProductName><b>Product:</b>Green Combo Scrunchies </ProductName>
                                <ProductId><b>ID:</b>9488440936</ProductId>
                                <ProductColor color="#B5B35C"/>
                                <ProductSize><b>Size:</b>Skinny</ProductSize>
                            </Details>
                        </ProductDetails>
                        <PriceDetails>
                            <AmountContainer>
                                <Add/>
                                <ProductAmount>1</ProductAmount>
                                <Remove/>
                            </AmountContainer>
                            <ProductPrice>
                                Rs 300/-
                            </ProductPrice>
                        </PriceDetails>
                    </Product>
                </Info>
                <Summary>
                    <OrderTitle>ORDER SUMMARY</OrderTitle>
                    <SummaryItem>
                        <SummaryItemText>SubTotal</SummaryItemText>
                        <SummaryItemPrice>Rs 700</SummaryItemPrice>
                    </SummaryItem>
                    <SummaryItem>
                        <SummaryItemText>Estimated Shipping</SummaryItemText>
                        <SummaryItemPrice>Rs 50</SummaryItemPrice>
                    </SummaryItem>
                    <SummaryItem>
                        <SummaryItemText>Shipping Discount</SummaryItemText>
                        <SummaryItemPrice>- Rs 50</SummaryItemPrice>
                    </SummaryItem>
                    <SummaryItem type="total">
                        <SummaryItemText >Total</SummaryItemText>
                        <SummaryItemPrice>Rs 700</SummaryItemPrice>
                    </SummaryItem>
                    <Button>CheckOut Now</Button>
                </Summary>
            </Bottom>
        </Wrapper>
        <Footer/>
    </Container>
  )
}

export default Cart