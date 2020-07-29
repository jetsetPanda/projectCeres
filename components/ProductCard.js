import React from "react";
import styled from "styled-components";
import ProductDescription from "./ProductDescription";

//styled components
const CardContainer = styled.div`
    max-width: 305px;
    margin: 20px 0;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-content: flex-start;
`
const ApplianceImage = styled.img`
    max-width: 305px;
    height: 205px
`
const Quickship = styled.img`
    width: 79px;
    height: 19px;
    margin: 0;
    padding: 0;
`
const NotQuickship = styled.div`
    width: 79px;
    height: 19px;
    background: white;
    margin: 0;
    padding: 0
`
const DiscountBar = styled.div`
    display: flex;
    justify-content: flex-start;
    width: 100%
`
const Brand = styled.span`
    font-weight: 700
`
const ProductPrice = styled.p`
    font-weight: 700;
    font-size: 20px;
    margin: 8px 0 0 0;
    width: 100%
`
const ProductDiscount = styled.p`
    font-weight: 500;
    font-size: 12px;
    line-height: 15px;
    color: #3B8448;
    margin: 5px 0.5em 5px 0
`

const ProductListPrice = styled.p`
    font-family: HelveticaNeue, sans-serif;
    font-size: 12px;
    line-height: 15px;
    text-decoration-line: line-through;
    color: #666666;
    margin: 5px 0.5em 5px 0
`

export default function ProductCard(props) {

let applianceList = props.list

return (
    <React.Fragment>
        {applianceList.map(appliance => {
            return (
            <CardContainer>

                <ApplianceImage
                    src={`https://assets.ajmadison.com/${appliance.image.folder}/${appliance.image.filename}.jpg`}
                />

                <div className="product-description">
                    <p>
                        <Brand>
                            {appliance.brand}
                        </Brand>
                        <ProductDescription data={appliance} />
                    </p>
                </div>
                {appliance.is_quick_ship ?
                    (
                        <Quickship
                            src="quickship-pdp.png"
                        />
                    )
                    : (<NotQuickship/>)
                }
                <ProductPrice>
                    ${appliance.prices.final}
                </ProductPrice>
                <DiscountBar>
                    <ProductDiscount>
                        {`Save $${(Math.round((appliance.prices.list_price - appliance.prices.final) *100) /100).toFixed(2)}`}
                    </ProductDiscount>
                    <ProductListPrice>
                        {`$${(Math.round(appliance.prices.list_price *100) /100).toFixed(0)}.99`}
                    </ProductListPrice>
                </DiscountBar>

                <div className="btn cta-btn">
                    <button>
                        View Package
                    </button>
                </div>

            </CardContainer>
            )
        })}

    </React.Fragment>
    )
};
