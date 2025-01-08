import React from 'react'
import styled from 'styled-components'
import apple from '../assets/apple.jpg'
import strawberry from '../assets/strawberry.jpg'

const CategoriesWrapper = styled.section`
display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  padding: 20px;
`;

const CategoryCard = styled.div`
    width: 150px;
    text-align: center;
    margin: 10px;
    padding: 10px;
    background-color: #fff;
    border: 1px solid #ddd;
    border-radius: 5px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);

  img {
    width: 80px;
    height: 80px;
    margin-bottom: 10px;
    border-radius: 20px;
  }

  h4 {
    font-size: 1rem;
    margin-bottom: 5px;
    color: #333;
  }
`;

const categories = [
    {name:'Red Apple',image: apple},
    {name:'Strawberry',image: strawberry},
    {name:'Red Apple',image: apple},
    {name:'Strawberry',image: strawberry},
    {name:'Red Apple',image: apple},
    {name:'Strawberry',image: strawberry},
];

const Categories = () => (
    <CategoriesWrapper>
        {categories.map((category)=>(
            <CategoryCard key={category.name}>
            <img src={category.image} alt={category.name} />
            <h4>{category.name}</h4>
            </CategoryCard>
        ))}
    </CategoriesWrapper>
)

export default Categories;
