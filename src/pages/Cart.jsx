import styled from 'styled-components'
import Announcement from '../components/Announcement'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { Add, Remove } from '@mui/icons-material';
// import { useSelector } from "react-redux";
// import { useEffect, useState } from "react";
// import { userRequest } from "../requestMethods";
// import { useHistory } from "react-router";
import ProductList from "../pages/ProductList";
// import { SetLink } from './SetLink'
import { Link } from 'react-router-dom'
import { useState } from 'react';



const Container = styled.div``;

const Wrapper = styled.div`
  padding: 20px;
`;

const Title = styled.h1`
  font-weight: 300;
  text-align: center;
`;

const Top = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
`;

const TopButton = styled.button`
  padding: 10px;
  font-weight: 600;
  cursor: pointer;
  border: ${(props) => props.type === "filled" && "none"};
  border-radius: 4.5px;
  background-color: ${(props) =>
    props.type === "filled" ? "black" : "transparent"};
  color: ${(props) => props.type === "filled" && "white"};
  transition: all 0.4s ease;
  &:hover{
    background-color: #206060;
    color: white;
  }
`;

const TopTexts = styled.div`
`;

const TopText = styled.span`
  text-decoration: underline;
  cursor: pointer;
  margin: 0px 10px;
`;

const Bottom = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Info = styled.div`
  flex: 3;
`;

const Product = styled.div`
  display: flex;
  justify-content: space-between;
`;

const ProductDetail = styled.div`
  flex: 2;
  display: flex;
`;

const Image = styled.img`
  width: 200px;
`;

const Details = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

const ProductName = styled.span``;

const ProductId = styled.span``;

const ProductColor = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
`;

const ProductSize = styled.span``;

const PriceDetail = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const QtyContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;

const Qty = styled.div`
  font-size: 24px;
  margin: 5px;
`;

const ProductPrice = styled.div`
  font-size: 30px;
  font-weight: 200;
`;

const Hr = styled.hr`
  background-color: #eee;
  border: none;
  height: 1px;
  margin: 10px 0;
`;

const Summary = styled.div`
  flex: 1;
  border: 0.5px solid lightgray;
  border-radius: 10px;
  padding: 20px;
  height: 50vh;
`;

const SummaryTitle = styled.h1`
  font-weight: 200;
`;

const SummaryItem = styled.div`
  margin: 30px 0px;
  display: flex;
  justify-content: space-between;
  font-weight: ${(props) => props.type === "total" && "500"};
  font-size: ${(props) => props.type === "total" && "24px"};
`;

const SummaryItemText = styled.span``;

const SummaryItemPrice = styled.span``;

const Button = styled.button`
  width: 100%;
  padding: 10px;
  background-color: black;
  color: white;
  font-weight: 600;
  border-radius: 4.5px;
  transition: all 0.3s ease;
  &:hover{
    background-color: rgba(0,0,0, 0.9);
    color: white;
  }
`;

const Cart = ({ type }) => {
  
  // const [openItems, setOpenItems] = useState(false);
  const [items, setItems] = useState({
    item_id: 1,
    item_qty: 1,      
  });
  
  const handleItem = (name, operation) =>
    setItems((prev) => {
        return {
            ...prev, 
            [name]: operation === 'incr' ? items[name] ++ : items[name] --,
        };
    });
  // const cart = useSelector((state) => state.cart);
  // const [stripeToken, setStripeToken] = useState(null);
  // const history = useHistory();

  // const onToken = (token) => {
  //   setStripeToken(token);
  // };

  // useEffect(() => {
  //   const makeRequest = async () => {
  //     try {
  //       const res = await userRequest.post("/checkout/payment", {
  //         tokenId: stripeToken.id,
  //         amount: 500,
  //       });
  //       history.push("/success", {
  //         stripeData: res.data,
  //         products: cart, });
  //     } catch {}
  //   };
  //   stripeToken && makeRequest();
  // }, [stripeToken, cart.total, history]);
  
  return (
    <Container>
      <Navbar />
      <Announcement />
      <Wrapper>
        <Title>Your Cart</Title>
        <Top>
          <Link to="/products/:category" element={<ProductList />}>
            <TopButton>Continue Shopping</TopButton>
          </Link>
          <TopTexts>Shopping Bag(4)</TopTexts>
          <TopText>Your Wishlist (2)</TopText>
          <TopButton type="filled">Checkout Now</TopButton>
        </Top>
        <Bottom>
          <Info>
            <Product>
              <ProductDetail>
                <Image />
                <Details>
                  <ProductName>
                    <b>Product:</b> ProductName
                  </ProductName>
                  <ProductId>
                    <b>ID:</b> 314159265359
                  </ProductId>
                  <ProductColor color="black" />
                  <ProductSize>
                    <b>Size:</b> 8.5
                  </ProductSize>
                </Details>
              </ProductDetail>
              <PriceDetail>
                <QtyContainer>
                  <Remove />
                  <Qty>1</Qty>
                  <Add />
                </QtyContainer>
                <QtyContainer>
                  <button
                    disabled={items.item_qty <= 0}
                    className="itemCounterButton" 
                    onClick={()=>handleItem('item_qty','decr')}>-</button>
                  <span className="guestCounterNumber"> {items.item_qty} </span>
                  <button
                    className="itemCounterButton" 
                    onClick={()=>handleItem('item_qty','incr')}>+</button>
                </QtyContainer>
                <ProductPrice>$ 40.00</ProductPrice>
              </PriceDetail>
            </Product>
            <Hr />
            <Product>
              <ProductDetail>
                <Image />
                <Details>
                  <ProductName>
                    <b>Product:</b> ProductName
                  </ProductName>
                  <ProductId>
                    <b>ID:</b> 314159265359
                  </ProductId>
                  <ProductColor color="gray" />
                  <ProductSize>
                    <b>Size:</b> 37.5
                  </ProductSize>
                </Details>
              </ProductDetail>
              <PriceDetail>
                <QtyContainer>
                  <Remove />
                  <Qty>1</Qty>
                  <Add />
                </QtyContainer>
                <QtyContainer>
                  <button
                    disabled={items.item_qty <= 0}
                    className="itemCounterButton" 
                    onClick={()=>handleItem('item_qty','decr')}>-</button>
                  <span className="guestCounterNumber"> {items.item_qty} </span>
                  <button
                    className="itemCounterButton" 
                    onClick={()=>handleItem('item_qty','incr')}>+</button>
                </QtyContainer>
                <ProductPrice>$ 15.99</ProductPrice>
              </PriceDetail>
            </Product>


          </Info>
          <Summary>
            <SummaryTitle>Order Summary</SummaryTitle>
            <SummaryItem>
              <SummaryItemText>Subtotal</SummaryItemText>
              <SummaryItemPrice>$ 80</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem>
              <SummaryItemText>Estimated Shipping</SummaryItemText>
              <SummaryItemPrice>$ 80</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem>
              <SummaryItemText>Shipping Discount</SummaryItemText>
              <SummaryItemPrice>$ 80</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem type="total">
              <SummaryItemText>Total</SummaryItemText>
              <SummaryItemPrice>$ 80</SummaryItemPrice>
            </SummaryItem>
            {/* <StripeCheckout
              name="Lama Shop"
              image="https://avatars.githubusercontent.com/u/1486366?v=4"
              billingAddress
              shippingAddress
              description={`Your total is $${cart.total}`}
              amount={cart.total * 100}
              token={onToken}
              stripeKey={KEY}
            > */}
            <Button>Checkout Now</Button>
            {/* </StripeCheckout> */}
          </Summary>
        </Bottom>
      </Wrapper>
      <Footer />
      
    </Container>
  )
}

export default Cart