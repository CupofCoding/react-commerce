import styled from 'styled-components'
import Navbar from '../components/Navbar';
import Announcement from '../components/Announcement';
// import Products from '../components/Products';
import Footer from '../components/Footer';

const Container = styled.div`
`;

const Wrapper = styled.div`
  padding: 50px;
  display: flex;
`;

const ImageContainer = styled.div`
  flex: 1;
`;

const Image = styled.img`
  width: 100%;
  height: 90vh;
  object-fit: cover;
`;

const InfoContainer = styled.div`
  flex: 1;
  padding: 0 50px;
`;

const Title = styled.h1`
  font-weight: 400;
`;

const Description = styled.p`
  font-weight: 200;
  font-size: 18px;
  margin: 20px 0px;
`;

const Price = styled.span`
  font-size: 30px;
  font-weight: 200p;
`;

// const Container = styled.div`
// `;

const Product = () => {
  return (
    <Container>
      <Navbar />
      <Announcement />
      <Wrapper>
        <ImageContainer>
          <Image src="https://picsum.photos/750" />
        </ImageContainer>
        <InfoContainer>
          <Title>Product Name</Title>
          <Description>Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis cumque excepturi sed, placeat amet possimus laudantium sequi perferendis, exercitationem est quod obcaecati voluptatum nisi eius fugit nesciunt illum autem ea.</Description>
          <Price>$ 40</Price>
        </InfoContainer>
      </Wrapper>
      <Footer />
    </Container>
  )
}

export default Product
