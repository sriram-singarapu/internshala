import React from "react";
import Navibar from "./Navbar";
import pro from "./assests/pro.png";
import mobile from "./assests/Frame 1.png";
import { Image, Button } from "react-bootstrap";
import block from "./assests/Group 35924.png";
import "bootstrap/dist/css/bootstrap.min.css";

import "./App.css";

const App = () => {
  return (
    <div>
      <Navibar />
      <div className="content-container">
        <div className="text-container">
          <strong>
            <h1>Make The Best Financial Decisions</h1>
          </strong>
          <p>
            Cum Et Convallis Risus Aliquam, Nunc, Scelerisque Aliquet Faucibus
            Tincidunt Eu Adipiscing Socils Arou Lorem Porttitor{" "}
          </p>
          <div>
            <Button variant="dark">Download</Button>
            <Button variant="link" style={{ fontSize: "24px" }}>
              <i className="fa fa-play-circle-o"></i> Watch video
            </Button>{" "}
          </div>
          <div>
            <Image src={block} className="block"></Image>
          </div>
        </div>
        <div className="image-container">
          <Image src={mobile} className="mobile-image" />
          <Image src={pro} className="pro-image" />
          <Image src={pro} className="pro-image-top" />
        </div>
      </div>
    </div>
  );
};

export default App;
