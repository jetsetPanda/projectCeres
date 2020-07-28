import ProductDescription from "./ProductDescription";
import React from "react";

export default function ProductsDisplay(props) {

    let applianceList = props.list

    return (
        <React.Fragment>
            {applianceList.map(appliance => {
                return (
                <div
                className="product-card"
                >
                <div className="product-image">
                <img
                className="img"
                src={`https://assets.ajmadison.com/${appliance.image.folder}/${appliance.image.filename}.jpg`}
                width="305"
                height="204"
                ></img>
                </div>
                <div className="product-description">
                <p><span className="brand">{appliance.brand}</span>
                <ProductDescription data={appliance} />
                </p>
                </div>
                {appliance.is_quick_ship ?
                    (
                        <img
                            className="img"
                            src="quickship-pdp.png"
                            width="79"
                            height="19"
                        ></img>
                    )
                    : (<div className="blanq"></div>)
                }
                <p className="product-price">
                ${appliance.prices.final}
                </p>
                <div className="discounts-bar">
                <p className="product-discount">
                {`Save $${(Math.round((appliance.prices.list_price - appliance.prices.final) *100) /100).toFixed(2)}`}
                </p>
                <p className="product-listprice">
                {`$${(Math.round(appliance.prices.list_price *100) /100).toFixed(0)}.99`}
                </p>
                </div>

                <div className="btn cta-btn">
                <button>
                View Package
                </button>
                </div>

                </div>
                )
            })}
        </React.Fragment>

    )
}
