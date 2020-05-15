import React from "react";
import "./main.css";

class MainPage extends React.Component {
  render() {
    return (
      <div className="main-page-box">
        <div id="main-content">
          <div id="image">
            {/* <img src="../../photos/FLAME-logo/default.png" alt="lol" /> */}
          </div>
        </div>
        <div id="footer">
          <h1>F.L.A.M.E.</h1>
          <h3>Financial Literacy and Manage Everything</h3>
          <footer>Copyright &copy; 2020 F.L.A.M.E.</footer>
        </div>
      </div>
    );
  }
}

export default MainPage;
