import React from "react";
import { Button, Icon, Label } from "semantic-ui-react";
import Navi from "./Navi";
import Catagories from "./Catagories";
import ProductList from "../pages/ProductList";
import { Grid } from "semantic-ui-react";

export default function Dashboard() {
  return (
    <div>
      <Grid>
        <Grid.Row>
          <Grid.Column width={4}>
            <Catagories />
          </Grid.Column>
          <Grid.Column width={12}>
            <ProductList />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </div>
  );
}