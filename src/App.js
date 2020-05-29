import React from "react";
import Layout from "./componets/Layout";
import Notification from "./componets/Notification";
import Card from "./componets/Card";
import Nav from "./componets/Nav";
import Tabs from "./componets/Tabs";
import Grids from "./componets/Grids";
import Alert from "./componets/Alert";
import Button from "./componets/Button";
import "./style/tailwind.generated.css";

const App = () => {
  return (
    <Layout>
      <div>
        <h1 className="">Components</h1>
        <div>
          <Notification test>
            <p>Notification messsage</p>
          </Notification>
        </div>
        <h3>Buttons</h3>
        <Button />
        <h3>Cards</h3>
        <Card />
        <Card vertical />
        <h3>Alerts</h3>
        <Alert info />
        <Alert danger />
        <Alert success />
        <Alert.danger />
        <h3>Navigation</h3>
        <Nav />
        <br />
        <Tabs />
        <br />
        <Grids />
      </div>
    </Layout>
  );
};

export default App;
