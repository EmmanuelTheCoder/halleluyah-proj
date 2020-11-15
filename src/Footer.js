import React from 'react';
import styled from 'styled-components';


const Footer = () =>{
    return(
        <React.Fragment>
            <Container className="footer">
                <p>CAC Halleluyah Chapel, 2020. </p>
            </Container>
        </React.Fragment>
);

}
export default Footer;

const Container = styled.div`
    text-align: center;
    margin-top: 4rem;
    background: rgb(97, 95, 95);
    height: 5rem;
    
    p{
        font-size: 1.3rem;
        font-family: sans-serif;
        font-weight: 500;
        line-height: 5rem;
        color: rgb(190, 187, 187);
    }
`

