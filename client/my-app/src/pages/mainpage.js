import React from "react";
import TabList from "../components/tabslist";
import TabForm from "../components/tabform";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import NavbarComponent from "../components/navbar";

function MainPage() {
  return (
    <div className="App">
      <NavbarComponent></NavbarComponent>
      <BrowserRouter>
        <Switch>
          <Route path="/" exact={true} component={TabList} />
          <Route path="/addNewTab" exact={true} component={TabForm} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default MainPage;
