import styled from "styled-components";

const Container =styled.div`
    height:30px;
    background-color:#D2C1F8ff;
    color:white;
    display:flex;
    align-items:center;
    justify-content:center;
    text-align:center;
    font-size:17px;
    font-weight:600;

    @media only screen and (max-width:380px){
      font-size:14px;
    }
`;

const Announcement = () => {
  return (
    <Container>Super Deal! Free Gifts on Orders Over Rs 300/-</Container>
  )
}

export default Announcement