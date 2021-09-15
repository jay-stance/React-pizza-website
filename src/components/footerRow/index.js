import React from 'react'
import {FooterRowContainer, ProductRowHeading, ProductRowList, ProductRowItem} from "./footerRowElements"

const FooterRow = ({ footer }) => {
    console.log("Footer List: ", footer)
    return (
    <FooterRowContainer >
        <ProductRowHeading > {footer.heading} </ProductRowHeading >
        <ul >
            {footer.links.map((link, index) => {return (
                <ProductRowItem key={index} > {link} </ProductRowItem >
            )} )}
        </ul >
    </FooterRowContainer>
    )
}

export default FooterRow