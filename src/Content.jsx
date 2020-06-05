import React from "react";
import CoffeeCard from "./CoffeeCard";
import { Grid } from "@material-ui/core";
import coffeeMakerList from "./constant";

const Content = () => {
    const getCoffeeMakerCard = (coffeeCardObj) => {
        return (
            <Grid item xs={12} sm={4}>
                <CoffeeCard {...coffeeCardObj} />
            </Grid>
        );
    };
    return (
        <div>
            <Grid container spacing={4}>
                {coffeeMakerList.map((coffeeMakeObj) =>
                    getCoffeeMakerCard(coffeeMakeObj)
                )}
            </Grid>
        </div>
    );
};

export default Content;
