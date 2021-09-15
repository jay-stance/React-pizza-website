import React from 'react'
import FooterRow from "../footerRow"
import {FooterDate} from "./data"
import {FooterContainer, ContactUs, FooterWrapper, FooterCopyRight} from "./footerElements"

const Footer = () => {
    return (
      
    <FooterContainer>
        <FooterWrapper>
            {FooterDate.map((footer, index) => {
                return (
                    <FooterRow key={index} footer={footer} />
            )
            })}
        </FooterWrapper>
        <FooterCopyRight> Copyright reserved 2021, Jay Stance <sup>&copy;</sup></FooterCopyRight>
    </FooterContainer>

    )
}

export default Footer
