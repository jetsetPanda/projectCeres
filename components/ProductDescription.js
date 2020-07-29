import React from "react";
import styled from "styled-components";

const Brand = styled.span`
    font-weight: 700
`

export default function ProductDescription(props){
    let {brand, series, description} = props.data;

    let text = ` ${series} ${description}`;

    let ellipsis = (text.length >= 104) ? '...' : '';

    return (
        <React.Fragment>
            <Brand>{brand}</Brand>
            {`${text.substr(0, 104)}${ellipsis}`}
        </React.Fragment>

    )
};