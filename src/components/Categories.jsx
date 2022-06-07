import styled from "styled-components";
import { categories } from "../data";
import CategoryItem from "./CategoryItem";


// import React from 'react'
const Container = styled.div`
  padding: 20px;
  display: flex;
  justify-content: space-between;
`;

const Categories = () => {
  return (
    <Container>
        {categories.map(item => (
            <CategoryItem item={item}/>
        ))}
    </Container>
  )
}

export default Categories
