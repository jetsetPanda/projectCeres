import React from 'react';
import styles from "../styles/Header.module.css"

const Header = () => {
    return (
        <React.Fragment>
            <div className="container header">
                <h1>Appliance Packages</h1>
                <p>Looking for a great deal on home appliances? Packages are the best bet. Most appliance packages consist of a range, refrigerator, over-the-range microwave, and dishwasher. However, some upscale brands have packages that incorporate wall ovens, cooktops, and integrated refrigerators. </p>
            </div>
        </React.Fragment>

    );
};

export default Header;