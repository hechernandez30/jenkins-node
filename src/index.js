import React from "react";
   import ReactDOM from "react-dom";
   import { BrowserRouter, Route, Switch } from "react-router-dom";

   import page1 from "./page1";
   import page2 from "./page2";

    const rootElement = document.getElementById("root");
    ReactDOM.render(
      <BrowserRouter>
       <Switch>
        <Route exact path="/" component={page1} />
        <Route path="/page2" component={page2} />
      </Switch>
      </BrowserRouter>,
      rootElement
    );
