import React from 'react'
import { ProductsContainer, ProductsHeading, ProductWrapper, ProductCard, ProductImg, ProductInfo, ProductTittle, ProductDesc, ProductPrice, ProductButton } from "./productsElements"

const Products = ({ heading, data }) => {
    return (
        <ProductsContainer>
            <ProductsHeading> {heading} </ProductsHeading>
                <ProductWrapper>
                {data.map((product, index) => {
                    return (
                        <ProductCard key={index} >
                            <ProductImg src={product.img} alt={product.alt} />
                            <ProductInfo>
                                <ProductTittle> {product.name} </ProductTittle>
                                <ProductDesc> {product.desc} </ProductDesc>
                                <ProductPrice> {product.price} </ProductPrice>
                                <ProductButton> {product.button} </ProductButton>
                            </ProductInfo>
                        </ ProductCard>
                    )
                })}
                </ProductWrapper>            
        </ProductsContainer>
    )
}

export default Products
