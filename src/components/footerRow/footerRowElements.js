import styled from "styled-components"

export const FooterRowContainer = styled.div`
    width: 20%;

    @media screen and (max-width: 670px){
        width: 100%;
        margin-bottom: 3rem;    
    }
`;

export const ProductRowHeading = styled.h1`
    font-size: 1.5rem;
    font-weight: 800;
    color: var(--main_bg);
    margin-bottom: 2rem;
`;

export const ProductRowItem = styled.li`
    font-size: .8rem;
    color: #fff;
    padding: .5rem 0;
`;