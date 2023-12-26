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
          <Route exact path="/" component={ProductList} />
            <Route exact path="/products" component={ProductList} />
            <Route path="/products/:name" component={ProductDetail} />
            <Route path="/cart" component={CartDetail} />
            <Route path="/product/add" component={ProductAdd} />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </div>
  );
}
