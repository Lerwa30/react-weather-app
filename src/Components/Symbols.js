import React from "react";

import { useSelector, UseSelector } from "react-redux";
import { selectDisplay } from "../redux/slices/displayCountrySlice";

const Symbols = () => {
    const currentDisplay = useSelector(selectDisplay)
    return <div className="symbols">
        <div className="stack">
            <h2>Flag of {currentDisplay.name.common}:</h2>
            {currentDisplay.flags ? (
                <img src={currentDisplay.flags.png} />
            ) : (
                "No Data Found"
            )}
        </div>
        <div className="stack"></div>
    </div>
};

export default Symbols;