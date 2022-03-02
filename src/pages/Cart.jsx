import styled from "styled-components";
import Announcement from "../components/Announcement";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Add, Remove } from "@material-ui/icons";
import { mobile } from "../responsive";

const Container =  styled.div ``;
const Wrapper =  styled.div `
  padding: 20px;
  ${mobile({padding: "10px"})}
`;
const Title =  styled.h1 `
  font-weight: 300;
  text-align: center;
`;
const Top =  styled.div `
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
`;
const TopButtom = styled.button `
  padding: 10px;
  font-weight: 600;
  cursor: pointer;
  border: ${props => props.type === "filled" && "none"};
  background-color: ${(props) => props.type === "filled" ? "black" : "transparent"};
  color: ${(props) => props.type === "filled" && "white"};
`;
const TopTexts = styled.div `
${mobile({display: "none"})}
`;
const TopText = styled.span `
  text-decoration: underline;
  cursor: pointer;
  margin: 0 10px;
`;

const Bottom =  styled.div `
  display: flex;
  justify-conteent: space-between;
  ${mobile({flexDirection: "column"})}
`;
const Info =  styled.div `
  flex: 3;
`;
const Product = styled.div `
  display: flex;
  justify-content: space-between;
  ${mobile({flexDirection: "column"})}
`;
const ProductDetail = styled.div `
  flex: 2;
  display: flex;
`;
const Image = styled.img `
  width: 200px;
`;
const Details = styled.div `
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;
const ProductName = styled.span ``;
const ProductId = styled.span ``;
const ProductColor = styled.div `
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
`;
const ProductSize = styled.span ``;
const PriceDetail = styled.span `
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const ProductAmountContainer = styled.div `
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;
const ProductAmount = styled.div `
  font-size: 24px;
  margin: 5px;
  ${mobile({margin: "5px 15px"})}
`;
const ProductPrice = styled.div `
  font-size: 30px;
  font-weight: 200;
  ${mobile({marginBottom: "20px"})}
`;

const Hr = styled.hr `
  background-color: #eee;
  border: none;
  height: 1px;
`;

const Summary =  styled.div `
  flex: 1;
  border: .5px solid lightgray;
  border-radius: 10px;
  padding: 20px;
  height: 50vh;
`;
const SummaryTitle = styled.h1 `
  font-weight: 200;
`;
const SummaryItem = styled.div `
  margin: 30px 0px;
  display: flex;
  justify-content: space-between;
  font-weight: ${props => props.type === "total" && "500"};
  font-size: ${props => props.type === "total" && "24px"};
`;
const SummaryItemText = styled.span ``;
const SummaryItemPrice = styled.span ``;
const Button = styled.button `
  width: 100%; 
  padding: 10px;
  background-color: black;
  color: white;
  font-weight: 600;
  cursor: pointer;
`;

const Cart = () => {
  return (
    <Container>
      <Navbar/>
      <Announcement/>
      <Wrapper>
        <Title>YOUR BAG</Title>
        <Top>
          <TopButtom>CONTINUE SHOPPING</TopButtom>
          <TopTexts>
            <TopText>Shopping Bag (2)</TopText>
            <TopText>Your Wishlist (0)</TopText>
          </TopTexts>
          <TopButtom type="filled">CHECKOUT NOW</TopButtom>
        </Top>
        <Bottom>
          <Info>
            <Product>
              <ProductDetail>
                <Image src="https://authenticfeet.vteximg.com.br/arquivos/ids/230038-600-600/Tenis-Nike-Revolution-5-Masculino-Preto.jpg?v=637052139521070000"/>
                <Details>
                  <ProductName><b>Product: </b>TÊNIS NIKE REVOLUTION 5 </ProductName>
                  <ProductId><b>ID: </b>983450</ProductId>
                  <ProductColor color="black"/>
                  <ProductSize><b>Size: </b>41</ProductSize>
                </Details>
              </ProductDetail>
              <PriceDetail>
                <ProductAmountContainer>
                  <Add/>
                  <ProductAmount>2</ProductAmount>
                  <Remove/>
                </ProductAmountContainer>
                <ProductPrice>R$ 299,99</ProductPrice>
              </PriceDetail>
            </Product>
            <Hr/>

            <Product>
              <ProductDetail>
                <Image src="https://imgcentauro-a.akamaihd.net/600x600/9470432R/tenis-olympikus-corre1-masculino-img.jpg"/>
                <Details>
                  <ProductName><b>Product: </b>TÊNIS OLYMPIKUS CORRE 1 </ProductName>
                  <ProductId><b>ID: </b>983467</ProductId>
                  <ProductColor color="blue"/>
                  <ProductSize><b>Size: </b>43</ProductSize>
                </Details>
              </ProductDetail>
              <PriceDetail>
                <ProductAmountContainer>
                  <Add/>
                  <ProductAmount>2</ProductAmount>
                  <Remove/>
                </ProductAmountContainer>
                <ProductPrice>R$ 219,99</ProductPrice>
              </PriceDetail>
            </Product>
          </Info>
          <Summary>
            <SummaryTitle>ORDER SUMMARY</SummaryTitle>
            <SummaryItem>
              <SummaryItemText>Subtotal</SummaryItemText>
              <SummaryItemPrice>R$ 80,00</SummaryItemPrice>
            </SummaryItem>

            <SummaryItem>
              <SummaryItemText>Estimated Shipping</SummaryItemText>
              <SummaryItemPrice>R$ 20,00</SummaryItemPrice>
            </SummaryItem>

            <SummaryItem>
              <SummaryItemText>Shipping Discount</SummaryItemText>
              <SummaryItemPrice>R$ -5.99</SummaryItemPrice>
            </SummaryItem>

            <SummaryItem type="total">
              <SummaryItemText>Total</SummaryItemText>
              <SummaryItemPrice>R$ 80,00</SummaryItemPrice>
            </SummaryItem>
            <Button>CHECKOUT NOW</Button>
          </Summary>
        </Bottom>
      </Wrapper>
      <Footer/>
    </Container>
  )
}

export default Cart