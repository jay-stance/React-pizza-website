import styled from "styled-components"

export const FooterContainer = styled.footer`
    padding: 4rem 10%;
    padding-top: 5rem;
    background: var(--bg_color);
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

export const FooterWrapper = styled.section`
    display: flex;
    justify-content: space-around;
    align-items: flex-start;
    width: 100%;

    @media screen and (max-width: 670px){
        flex-direction: column;
    }
`

export const FooterCopyRight = styled.p`
    padding-top: 4rem;
    color: #fff;

    @media screen and (max-width: 670px){
        width: 100%;
        text-align: left;
    }
`