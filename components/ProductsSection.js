import React from 'react';
import styled from "styled-components";
import Header from "./Header";
import ProductCard from "./ProductCard";
import ScreenSizeContext from "../context/ScreenSizeContext";

function ProductsSection({productList}) {

    const initState = {
        applianceList : productList,
        showMore : false,
        isQuickship : false,
    }

    const useCurrentViewport = () => {
        const { viewportWidth, viewportHeight } = React.useContext(ScreenSizeContext);
        // Omar: for my purposes I am currently only concerned with viewport width, thus:
        return (viewportWidth < responsiveBreakpoint) ? "mobile" : "desktop";
        //otherwise:
        // return {viewportWidth,viewportHeight};
    }

    const [applianceList, setApplianceList] = React.useState(initState.applianceList);
    const updateApplianceList = (list) => setApplianceList(list);

    const [showMore, setShowMore] = React.useState(initState.showMore);
    const showMoreClicked = () => setShowMore(!showMore);

    const [isQuickShip, setIsQuickShip] = React.useState(initState.isQuickship);
    const toggleQuickShip = () => setIsQuickShip(!isQuickShip);

    let applianceCategory = ['All', 'Cooktop', 'Dishwasher', 'Microwave', 'Range', 'Range Hood', 'Refrigerator', 'Wall Oven'];

    let sortCriteria = ['Highest Price', 'Lowest Price'];

    const getQuickShipItems = (list) => { return list.filter(sku =>
        sku.is_quick_ship === true
    )};

    React.useEffect(() => {
        let filterQuickShip = isQuickShip ? getQuickShipItems(productList) : productList;
        let filterResults = showMore ? filterQuickShip : filterQuickShip.slice(0,8);
        updateApplianceList(filterResults);
    }, [isQuickShip, showMore]);

    /**
     * @Omar: for the purposes of this app, I will arbitrarily switch to mobile components only on the 768px breakpoint ( less than ipad res)
     * @type {number}
     */
    const responsiveBreakpoint = 768;

    let currentViewport  = useCurrentViewport(); // using my custom observer hook

    return (
        <React.Fragment>
            <Wrapper>
                <Header viewport={currentViewport}/>
            </Wrapper>

            {
                currentViewport === 'mobile' ? (
                    <Wrapper>
                        <h2>Mobile Filter Button</h2>
                        <h1>MOBILE STUFF!</h1>
                    </Wrapper>


                ) : (
                    <React.Fragment>

                        <div className="filter-bar-desktop">
                            <Wrapper>
                                <div className="container filter-bar-group">
                                    <div className="filter-row">
                                        <div className="filter-item">
                                            <label
                                                htmlFor="select-appliance">Select Appliances:</label>
                                            <select
                                                name="select-appliance-dropdown" id="select-appliance"
                                            >
                                                {applianceCategory.map((category, index) => {
                                                    return (
                                                        <option
                                                            key={index}
                                                            value={category}
                                                        >
                                                            {category}
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
                                                            // onClick={sortByPrice}
                                                        >
                                                            {option}
                                                        </option>
                                                    )
                                                })}
                                            </select>
                                        </div>
                                    </div>

                                    <div className="filter-row">
                                        <div className="quickship">
                                            <label>Delivery Method:</label>
                                            <div className="quickship-toggle">
                                                <input
                                                    type="checkbox"
                                                    onClick={toggleQuickShip}
                                                />
                                                <label htmlFor="quickship-toggle"> Quick Ship</label>
                                            </div>
                                        </div>
                                        <div className="btn clear-btn">
                                            <button
                                                // onClick={handleClearAll}
                                            >
                                                Clear All
                                            </button>
                                        </div>
                                    </div>
                                </div>

                            </Wrapper>

                        </div>

                        <Wrapper>
                            <div className="container products-display">
                                <ProductCard list={applianceList}/>
                            </div>
                            <div className="btn more-btn">
                                <button
                                    onClick={showMoreClicked}
                                >
                                    { showMore ? (
                                        <>Show Less</>
                                    ) : (
                                        <>Show More</>
                                    )
                                    }
                                </button>
                            </div>
                        </Wrapper>
                    </React.Fragment>
                )

            }






        </React.Fragment>
    );

}

const Wrapper = styled.div`
  width: 90vw;
    margin: 0 auto
`

export default ProductsSection;