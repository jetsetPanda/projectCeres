import React from 'react';
import styled from "styled-components";

//my styled components
const CardContainer = styled.div`
    max-width: 100%;
    margin: 20px 0;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-content: flex-start;
`
const MobileCard = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`
const MobileColumn = styled.div`
    width: 160px;
    height: 144px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
`
const ApplianceImage = styled.img`
    width: 157px;
    height: 144px;
`
const Quickship = styled.img`
    width: 74px;
    height: 18px;
    margin: 5px 0;
    padding: 0;
`
const DiscountBar = styled.div`
    display: flex;
    justify-content: flex-start;
    width: 100%;
    margin: 5px 0;
`
const ProductPrice = styled.p`
    font-weight: 700;
    font-size: 15px;
    margin: 0;
    width: 100%
`
const ProductDiscount = styled.p`
    font-weight: 500;
    font-size: 12px;
    line-height: 15px;
    color: #3B8448;
    margin: 2px 0.5em 2px 0
`

const ProductListPrice = styled.p`
    font-family: HelveticaNeue, sans-serif;
    font-size: 12px;
    line-height: 15px;
    text-decoration-line: line-through;
    color: #9B9B9B;
    margin: 2px 0.5em 2px 0
`

const Description = styled.p`
    font-size: 12px;
    font-weight: 500;
    line-height: 14px;
    margin: 2px 0;
`

const MobileProductDescription = props => {
    let {brand, series, description} = props.data;

    let text = `${brand} ${series} ${description}`;

    let ellipsis = (text.length >= 73) ? '...' : '';

    return (
        <React.Fragment>
            {`${text.substr(0, 73)}${ellipsis}`}
        </React.Fragment>

    )
}

const MobileProductCard = props => {

    const appliances = props.list

    return (
        <React.Fragment>
            {appliances.map(appliance => {
                return (
                    <CardContainer>
                        <MobileCard>
                            <MobileColumn>
                                <ApplianceImage
                                    src={`https://assets.ajmadison.com/${appliance.image.folder}/${appliance.image.filename}.jpg`}
                                />
                            </MobileColumn>
                            <MobileColumn>
                                <ProductPrice>
                                    {`$ ${(Math.round((appliance.prices.final) *100) /100).toFixed(2)}`}
                                </ProductPrice>
                                <DiscountBar>
                                    <ProductDiscount>
                                        {`Save $${(Math.round((appliance.prices.list_price - appliance.prices.final) *100) /100).toFixed(2)}`}
                                    </ProductDiscount>
                                    <ProductListPrice>
                                        {`$${(Math.round(appliance.prices.list_price *100) /100).toFixed(0)}.99`}
                                    </ProductListPrice>
                                </DiscountBar>

                                <Description>
                                    <MobileProductDescription data={appliance} />
                                </Description>

                                {appliance.is_quick_ship ?
                                    (
                                        <Quickship
                                            src="quickship-pdp.png"
                                        />
                                    )
                                    : (" ")
                                }

                            </MobileColumn>
                        </MobileCard>


                    </CardContainer>
                )
            })}

        </React.Fragment>
    )
};

export default MobileProductCard;