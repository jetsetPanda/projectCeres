import React from 'react';
import styled from "styled-components";
import getStyles from "../styles/styles_constant";

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

    const styles = getStyles(props);

    return (
        <React.Fragment>
            <div className="container">
                <Container>
                    <HeaderText style={styles}>Appliance Packages</HeaderText>
                    <HeaderCaption style={styles}>{styles.pCopy}</HeaderCaption>
                </Container>
            </div>

        </React.Fragment>

    );
};

export default Header;