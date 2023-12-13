import styled from "styled-components"
import Navbar from "../components/Navbar"
import Announcement from "../components/Announcement"
import Products from "../components/Products"
import NewsLetter from "../components/NewsLetter"
import Footer from "../components/Footer"
import { mobile } from "../responsive"

const Container=styled.div``;
const Title =styled.h1`
    margin:20px;
    ${mobile({
        fontSize:"32px"
    })}
`;
const FilterContainer=styled.div`
    display:flex;
    justify-content:space-between;
    
`;
const Filter=styled.div`
    margin:20px;
    ${mobile({
        margin:"0px 20px",
        display:"flex",
        flexDirection:"column"
    })}
`;


const FilterText =styled.span`
    font-size:20px;
    font-weight:600;
    margin-right:20px;
    ${mobile({
        fontSize:"16px",
        marginRight:"0px"
    })}
`;

const Select = styled.select`
    padding:10px;
    margin-right:20px;
    ${mobile({
        margin:"10px 0px"
    })}
`;

const Option = styled.option`

`;
const ProductList = () => {
  return (
    <Container>
        <Navbar/>
        <Announcement/>
        <Title>All Products</Title>
        <FilterContainer>
            <Filter>
                <FilterText>Filter Products:</FilterText>
                <Select>
                    <Option disabled selected>
                        Color
                    </Option>
                    <Option>Black</Option>
                    <Option>Blue</Option>
                    <Option>Red</Option>
                    <Option>Pink</Option>
                    <Option>Violet</Option>
                    <Option>Purple</Option>
                    <Option>Orange</Option>
                    <Option>Yellow</Option>
                    <Option>Green</Option>
                    <Option>Brown</Option>
                    <Option>White</Option>
                </Select>
                <Select>
                    <Option disabled selected>
                        Model
                    </Option>
                    <Option>Scrunchies</Option>
                    <Option>HeadBands</Option>
                    <Option>Mini Bow Clips</Option>\
                    <Option>Classic Hairbow</Option>
                    <Option>Combos</Option>
                </Select>
                <Select>
                    <Option disabled selected>
                        Material
                    </Option>
                    <Option>Satin</Option>
                    <Option>Organza</Option>
                    <Option>Cotton</Option>\
                    <Option>Velvet</Option>
                    <Option>Mesh</Option>
                </Select>
            </Filter>
            <Filter>
                <FilterText>Sort Products:</FilterText>
                <Select>
                    <Option selected>
                        Newest
                    </Option>
                    <Option>Price Low to High</Option>
                    <Option>Price High to Low</Option>
                    <Option>Relevant</Option>
                </Select>
            </Filter>
        </FilterContainer>
        <Products/>
        <NewsLetter/>
        <Footer/>
    </Container>
  )
}

export default ProductList