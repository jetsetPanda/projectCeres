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
    font-size: ${props => props.style.h1.size};
    line-height: ${props => props.style.h1.lineH};
    color: #222222;
`

const HeaderCaption = styled.p`
    max-width: 900px;
    font-size: ${props => props.style.p.size};
    line-height: ${props => props.style.p.lineH};
    color: #333333;
`

const Header = (props) => {

    const styles = (props.viewport === 'mobile') ? {
        h1: {
            size: '25px',
            lineH: '29px'
        },
        p: {
            size: '12px',
            lineH: '15px'
        }

    } : {
        h1: {
            size: '40px',
            lineH: '47px'
        },
        p: {
            size: '20px',
            lineH: '23px'
        }
    };

    return (
        <React.Fragment>
            <div className="container">
                <Container>
                    <HeaderText style={styles}>Appliance Packages</HeaderText>
                    <HeaderCaption style={styles}>Looking for a great deal on home appliances? Packages are the best bet. Most appliance packages consist of a range, refrigerator, over-the-range microwave, and dishwasher. However, some upscale brands have packages that incorporate wall ovens, cooktops, and integrated refrigerators. </HeaderCaption>
                </Container>
            </div>

        </React.Fragment>

    );
};

export default Header;