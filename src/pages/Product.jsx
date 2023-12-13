import styled from "styled-components"
import Navbar from "../components/Navbar";
import Announcement from "../components/Announcement";
import Footer from "../components/Footer";
import NewsLetter from "../components/NewsLetter";
import { Add, Remove } from "@material-ui/icons";
import { mobile } from "../responsive";

const Container=styled.div`

`;

const Wrapper=styled.div`
    padding:50px;
    display:flex;
    ${mobile({
        padding:"10px",
        flexDirection:"column"
    })}
`;

const ImgContainer=styled.div`
    flex:1;
`;

const Image=styled.img`
    width:100%;
    height:90vh;
    object-fit:cover;
    ${mobile({
        height:"50vh"
    })}
`;

const InfoContainer=styled.div`
    flex:1;
    padding: 0px 50px;
    ${mobile({
        padding:" 0px 10px"
    })}
`;

const Title=styled.h1`
    font-weight:200;
`;

const Description=styled.p`
    margin:20px 0px;
`;

const Price=styled.span`
    font-weight:100;
    font-size:40px;
`;

const FilterContainer=styled.div`
    width:50%;
    margin:30px 0px;
    display:flex;
    justify-content:space-between;
    ${mobile({
        width:"100%"
    })}
`;

const Filter=styled.div`
    display:flex;
    align-items:center;
`;

const FilterColor=styled.div`
    width:20px;
    height:20px;
    border-radius:50%;
    background-color: ${props=>props.color};
    margin:0px 5px;
    cursor:pointer;
`;

const FilterTitle=styled.span`
    font-size:20px;
    font-weight:200;
`;

const FilterSize=styled.select`
    margin-left:10px;
    padding:5px;
`;

const FilterSizeOption=styled.option`

`;

const AddContainer=styled.div`
    width:50%;
    display:flex;
    align-items:center;
    justify-content:space-between;
    ${mobile({
        width:"100%"
    })}
`;

const AmountContainer=styled.div`
    display:flex;
    align-items:center;
    font-weight:700;
`;

const Amount=styled.span`
    width:30px;
    height:30px;
    border-radius:10px;
    border 1px solid #D5C4FBff;
    display:flex;
    align-items:center;
    justify-content:center;
    margin:0px 5px;
`;

const Button=styled.button`
    padding:15px;
    border:2px solid #D5C4FBff;
    background-color:white;
    cursor:pointer;
    font-weight:500;

    &:hover{
        background-color:#F2E1FD;
    }
`;

const Product = () => {
  return (
    <Container>
        <Navbar/>
        <Announcement/>
        <Wrapper>
            <ImgContainer>
                <Image src="https://github.com/Pugal-Ramyaa/E-commerce-web-application/blob/main/3.jpg?raw=true"/>
            </ImgContainer>
            <InfoContainer>
                <Title>
                    Fluffy Spring Scrunchie
                </Title>
                <Description>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat, perspiciatis eos? Corrupti, doloribus eius ipsam nam reiciendis esse at asperiores voluptatum velit, ea quas, iure blanditiis consectetur ab a harum?
                </Description>
                <Price>Rs 100/-</Price>
                <FilterContainer>
                    <Filter>
                        <FilterTitle>
                            Color
                        </FilterTitle>
                        <FilterColor color="#E78587"></FilterColor>
                        <FilterColor color="#B0E0E6"></FilterColor>
                        <FilterColor color="#FFE5B4"></FilterColor>
                    </Filter>
                    <Filter>
                        <FilterTitle>
                            Size
                        </FilterTitle>
                        <FilterSize>
                            <FilterSizeOption>Mini</FilterSizeOption>
                            <FilterSizeOption>Skinny</FilterSizeOption>
                            <FilterSizeOption>Fluffy</FilterSizeOption>
                            <FilterSizeOption>XXL</FilterSizeOption>
                        </FilterSize>

                    </Filter>
                </FilterContainer>
                <AddContainer>
                    <AmountContainer>
                        <Remove/>
                        <Amount>1</Amount>
                        <Add/>
                    </AmountContainer>
                    <Button>Add to Container</Button>
                </AddContainer>
            </InfoContainer>
        </Wrapper>
        <NewsLetter/>
        <Footer/>
    </Container>
  )
}

export default Product