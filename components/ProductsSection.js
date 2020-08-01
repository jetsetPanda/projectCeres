import React from 'react';
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
        return {viewportWidth,viewportHeight};
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

    // const sortByPrice = () => {
    //     let sortedItems = [...applianceList].sort((a,b) => {
    //         return
    //     })
    // }

    React.useEffect(() => {
        let filterQuickShip = isQuickShip ? getQuickShipItems(productList) : productList;
        let filterResults = showMore ? filterQuickShip : filterQuickShip.slice(0,8);
        updateApplianceList(filterResults);
    }, [isQuickShip, showMore]);

    const { viewportWidth } = useCurrentViewport();
    const responsiveBreakpoint = 620;

    return (
        <React.Fragment>
            <Header/>

            {
                viewportWidth <= responsiveBreakpoint ? (
                    <div className="filter-bar-mobile container">
                        <h1>I'M MOBILE!!</h1>
                    </div>
                ) : (
                    <div className="filter-bar-desktop">
                        <div className="container filter-bar-group">
                            <div className="filter-group">
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
                                <button
                                    // onClick={handleClearAll}
                                >
                                    Clear All
                                </button>
                            </div>
                        </div>
                    </div>
                )
            }




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



        </React.Fragment>
    );

}

export default ProductsSection;