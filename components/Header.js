import React from 'react';
import styled from "styled-components";

// styled components
const Container = styled.div`
    margin-top: 20px;
    align-items: center;
    max-width: 1280px;
    margin: 0 auto;
`

const HeaderText = styled.h1`
    font-size: ${props => props.size};
    line-height: 47px;
    color: #222222;
`

const HeaderCaption = styled.p`
    max-width: 900px;
    font-size: ${props => props.size};
    line-height: 23px;
    color: #333333;
`

const Header = (props) => {

    const fontSizes = (props.viewport === 'mobile') ? {
        h1 : '25px',
        p : '12px'
    } : {
        h1 : '40px',
        p : '20px'
    };

    return (
        <React.Fragment>
            <div className="container">
                <Container>
                    <HeaderText size={fontSizes.h1}>Appliance Packages</HeaderText>
                    <HeaderCaption size={fontSizes.p}>Looking for a great deal on home appliances? Packages are the best bet. Most appliance packages consist of a range, refrigerator, over-the-range microwave, and dishwasher. However, some upscale brands have packages that incorporate wall ovens, cooktops, and integrated refrigerators. </HeaderCaption>
                </Container>
            </div>

        </React.Fragment>

    );
};

export default Header;