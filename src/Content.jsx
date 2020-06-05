import React from "react";
import CoffeeCard from "./CoffeeCard";
import { Grid } from "@material-ui/core";

const Content = () => {
    return (
        <div>
            <Grid container spacing={4}>
                <Grid item xs={12} sm={4}>
                    <CoffeeCard
                        title="Keurig K-Duo"
                        subtitle="234,324"
                        description="Use both ground coffee and k-cup pods. Multiple brew sizes: brew an 8, 10, or 12-cup carafe and an 237, 296, or 355ml (8, 10, or 12 oz. ) cup "
                        avatarUrl="https://upload.wikimedia.org/wikipedia/commons/e/e0/Keurig_Logo.png"
                        imageUrl="https://images-na.ssl-images-amazon.com/images/I/61-KUPluVYL._AC_SL1500_.jpg"
                    />
                </Grid>
            </Grid>
        </div>
    );
};

export default Content;
