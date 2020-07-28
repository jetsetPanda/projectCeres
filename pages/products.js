import React from 'react';
import Header from "../components/Header";
import ProductsDisplay from "../components/ProductsDisplay";

function Products({productList}) {

    const [applianceList, setApplianceList] = React.useState(productList);
    const updateApplianceList = (list) => setApplianceList(list);

    const [showMore, setShowMore] = React.useState(false);
    const showMoreClicked = () => setShowMore(true)

    const [isQuickShip, setIsQuickShip] = React.useState(false);
    const toggleQuickShip = () => setIsQuickShip(!isQuickShip);

    let applianceCategory = ['Gas Ranges', 'Vacuum Cleaners', 'Toaster Ovens'];
    let sortCriteria = ['Highest Price', 'Lowest Price', 'Top Rated', 'Best Sellers', 'In Stock' ]

    React.useEffect(() => {
        const quickShipOnly = () => { return productList.filter(sku =>
            sku.is_quick_ship === true
        )};

        let filterResults = isQuickShip ? quickShipOnly() : productList;

        updateApplianceList(filterResults);
    }, [isQuickShip]);


    return (
        <div className="wrapper">
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
                                <input
                                    type="checkbox"
                                    onClick={toggleQuickShip}
                                />
                                <label htmlFor="quickship-toggle"> Quick Ship</label>
                            </div>
                        </div>
                    </div>
                    <div className="btn clear-btn">
                        <button>
                            Clear All
                        </button>
                    </div>
                </div>

            </div>

            <div className="container products-display">
                <ProductsDisplay list={applianceList}/>

                {/*{ showMore ? <ProductsDisplay list={moreAppliances}/> : (<></>)}*/}

            </div>

            { !showMore ? (
                <div className="btn more-btn">
                    <button
                        onClick={showMoreClicked}
                    >
                        Show More
                    </button>
                </div>
            ) : (<></>)}


        </div>
    );

}

export default Products;