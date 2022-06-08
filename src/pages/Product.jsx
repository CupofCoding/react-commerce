import styled from 'styled-components'
import Navbar from '../components/Navbar';
import Announcement from '../components/Announcement';
import Footer from '../components/Footer';
import { Add, Remove } from '@mui/icons-material';

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
  height: 85vh;
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

const FilterContainer = styled.div`
  width: 50%;
  margin: 30px 0px;
  display: flex;
  justify-content: space-between;
`;

const Filter = styled.div`
  display: flex;
  align-items: center;
`;

const FilterTitle = styled.span`
  font-size: 20px;
  font-weight: 200;
`;

const FilterColor = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
  margin: 0px 5px;
  cursor: pointer;
`;

const FilterSize = styled.select`
  margin-left: 10px;
  padding: 5px;
`;

const FilterSizeOption = styled.option`
`;

const QtyContainer = styled.div`
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const EditQtyContainer = styled.div`
  display: flex;
  align-items: center;
  font-weight: 700;
`;

const Qty = styled.span`
  width: 30px;
  height: 30px;
  border-radius: 7.5px;
  border: 1.5px solid rgba(0, 128, 128, 0.7); //Teal
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0px 5px;
`;

const Button = styled.button`
  padding: 10px;
  color: white;
  background-color: rgba(0, 128, 128, 0.8); 
  border: 2px solid rgba(0, 128, 128, 0.7); //Teal
  border-radius: 5px;
  cursor: pointer;
  font-weight: 500;
  
  &:hover{
      background-color: #206060;
  }
`;

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
          <FilterContainer>
            <Filter>
              {/* Filter Method */}
              <FilterTitle>Color:</FilterTitle>
              <FilterColor color="black"></FilterColor>
              <FilterColor color="slategray"></FilterColor>
              <FilterColor color="silver"></FilterColor>
            </Filter>
            <Filter>
              <FilterTitle>Size</FilterTitle>
              <FilterSize>
                  <FilterSizeOption>XS</FilterSizeOption>
                  <FilterSizeOption>S</FilterSizeOption>
                  <FilterSizeOption>M</FilterSizeOption>
                  <FilterSizeOption>L</FilterSizeOption>
                  <FilterSizeOption>XL</FilterSizeOption>
              </FilterSize>
            </Filter>
          </FilterContainer>
          <QtyContainer>
            <EditQtyContainer>
              <Remove />
              <Qty>1</Qty>
              <Add />
            </EditQtyContainer>
            <Button>Add to Cart</Button>
          </QtyContainer>
        </InfoContainer>
      </Wrapper>
      <Footer />
    </Container>
  )
}

export default Product
