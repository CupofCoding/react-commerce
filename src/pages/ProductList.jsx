import styled from 'styled-components'
import Navbar from '../components/Navbar';
import Announcement from '../components/Announcement';
import Products from '../components/Products';
import Footer from '../components/Footer';

const Container = styled.div`
`;

const Title = styled.h1`
    margin: 20px;
`;

const FilterContainer = styled.div`
    display: flex;
    justify-content: space-between;
`;
    
const Filter = styled.div`
    margin: 20px;
`;

const FilterText = styled.span`
    font-size: 20px;
    font-weight: 600;
    margin-right: 15px
`;

const Select = styled.select`
    padding: 5px;
    margin-right: 20px; 
`;

const Option = styled.option`
`;

const ProductList = () => {
  return (
    <Container>
        <Navbar />
        <Announcement />
        <Title>Category</Title>
        <FilterContainer>
            <Filter>
                <FilterText>Filter Product:</FilterText>
                {/* Filter Method */}
                <Select>
                    <Option disable selected>Color</Option> {/* Default Option */}
                    <Option>White</Option>
                    <Option>Black</Option>
                    <Option>Blue</Option>
                    <Option>Green</Option>
                    <Option>Red</Option>
                    <Option>Yellow</Option>
                </Select>
                <Select>
                    <Option disable slected>Size</Option>
                    <Option>XS</Option>
                    <Option>S</Option>
                    <Option>M</Option>
                    <Option>L</Option>
                    <Option>XL</Option>
                </Select>
            </Filter>
            <Filter>
                <FilterText>Sort Products:</FilterText>
                {/* Sorting Method */}
                <Select>
                    <Option selected>Newest</Option>
                    <Option>Price (asc)</Option>
                    <Option>Price (desc)</Option>
                </Select>
            </Filter>
        </FilterContainer>
        <Products />
        <Footer />
    </Container>
  );
};

export default ProductList;