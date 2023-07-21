import React from "react";
import { useSelector } from "react-redux";
import { selectPotentials } from "../redux/slices/potentialCountriesSlice";

const OptionDisplay = () => {
    const currentPotentials = useSelector(selectPotentials);
    console.log(currentPotentials);
    return <div className="stack">{currentPotentials.map(e => {
        return (<h2>{e.name.common}</h2>)
    })}</div>;
};

export default OptionDisplay;
