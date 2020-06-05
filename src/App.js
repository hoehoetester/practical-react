import React from "react";
import "./App.css";
import { Grid } from "@material-ui/core";
import Header from "./Header.jsx";

function App() {
    return (
        <div>
            <Grid container direction="column">
                <Grid item>
                    <Header />
                </Grid>
                <Grid item container>
                    <Grid item xs={1} sm={2} />
                    <Grid item xs={10} sm={8}>
                        Lorem ipsum dolor sit amet consectetur, adipisicing
                        elit. In soluta repellendus quas, quisquam tempora quam.
                        Pariatur itaque natus nostrum excepturi similique.
                        Minima adipisci impedit cum dolores eius reprehenderit
                        corporis? Reiciendis.
                    </Grid>
                    <Grid item xs={1} sm={2} />
                </Grid>
            </Grid>
        </div>
    );
}

export default App;
