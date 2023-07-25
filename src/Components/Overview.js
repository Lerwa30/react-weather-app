import React from "react";

import { useSelector, UseSelector } from "react-redux";
import { selectDisplay } from "../redux/slices/displayCountrySlice";

const Overview = () => {
    const currentDisplay = useSelector(selectDisplay);
    return <div className="stack">
        <h1>{currentDisplay.name.common}</h1>
        <h2>Capital: {currentDisplay.capital}</h2>
        <h3>Population: {currentDisplay.population}</h3>
    </div>
};

export default Overview;