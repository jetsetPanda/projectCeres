import React from 'react';
import Header from "../components/Header";

function Products({productList}) {

    const appliances = productList;

    let applianceCategory = ['Gas Ranges', 'Vacuum Cleaners', 'Toaster Ovens'];
    let sortCriteria = ['Highest Price', 'Lowest Price', 'Top Rated', 'Best Sellers', 'In Stock' ]

    return (
        <div>
            <Header/>

            <div className="filter-bar">
                <div className="container filter-bar-group">
                    <div className="filter-group">
                        <div className="filter-item">
                            <label
                                htmlFor="select-appliance">Select Appliances:</label>
                            <select
                                name="select-appliance-dropdown" id="select-appliance"
                            >
                                {applianceCategory.map((option, index) => {
                                    return (
                                        <option
                                            key={index}
                                            value={option}
                                        >
                                            {option}
                                        </option>
                                    )
                                })}
                            </select>
                        </div>

                        <div className="filter-item">
                            <label
                                htmlFor="sort-criteria">Sort By:
                            </label>
                            <select
                                name="select-sort-criteria" id="select-sort-criteria"
                            >
                                {sortCriteria.map((option, index) => {
                                    return (
                                        <option
                                            key={index}
                                            value={option}
                                        >
                                            {option}
                                        </option>
                                    )
                                })}
                            </select>
                        </div>

                        <div className="quickship">
                            <label
                                htmlFor="sort-criteria">Delivery Method:
                            </label>
                            <div className="quickship-toggle">
                                <input type="checkbox" id="quickship-toggle" name="quickship-toggle"
                                       value="isQuickship"/>
                                <label htmlFor="quickship-toggle"> Quick Ship</label>
                            </div>
                        </div>
                    </div>
                    <div className="clear-btn">
                        <button>
                            Clear All
                        </button>
                    </div>
                </div>

            </div>



            <div className="container">
                <div className="products-display">
                    {appliances.map(appliance => {
                        return (
                            <div className="product-card">
                                <div className="product-image">
                                    <img
                                        className="img img-raised round-radius"
                                        src={`https://assets.ajmadison.com/${appliance.image.folder}/${appliance.image.filename}.jpg`}
                                        width="305"
                                        height="204"
                                    ></img>
                                </div>
                                <div className="product-description">
                                    <p>
                                        {appliance.brand} {appliance.series} {appliance.description}
                                    </p>
                                </div>
                                {appliance.is_quick_ship ?
                                    (
                                        <img
                                            className="img img-raised round-radius"
                                            src="quickship-pdp.png"
                                            width="79"
                                            height="19"
                                        ></img>
                                    )
                                    : (<></>)
                                }
                                <p className="product-price">
                                    ${appliance.prices.final}
                                </p>
                                <div className="discounts-bar">
                                    <p className="product-discount">
                                        Save ${appliance.prices.list_price - appliance.prices.final}
                                    </p>
                                    <p className="product-listprice">
                                        ${appliance.prices.list_price}
                                    </p>
                                </div>

                            </div>
                        )
                    })}

                </div>
            </div>


        </div>
    );

}

export default Products;