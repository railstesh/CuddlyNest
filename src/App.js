import React from "react";
import Header from "./components/header";
import SubHeader from "./components/sub-header";
import HotelList from "./components/hotel-list";
import SimpleMap from "./components/simple-map";
import Divider from "@material-ui/core/Divider";

function App() {
  return (
    <>
      <Header />
      <SubHeader />
      <div className="imageComponent">
        <Divider />
        <HotelList />
        <div className="row divWidth">
          <SimpleMap />
        </div>
      </div>
    </>
  );
}

export default App;
