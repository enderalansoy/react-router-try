import React from 'react'
import { Link } from 'react-router-dom'

const Layout = () => (
  <div className="App">
        <div className="wrapper">
          <div className="sidebar" data-color="blue" data-image="/logo/sidebar-6.png">
            <div className="sidebar-wrapper">
              <div className="logo">
                <a href="/">
                  <img className="img-responsive" src="/logo/synclogo.png" alt="SYNC" width="250" height="60" />
                </a>
              </div>

              <ul className="nav">
                <li className="active">
                  <Link to="/home">
                    <i className="pe-7s-graph">Home</i>
                  </Link>
                </li>

                <li className="inactive">
                  <Link to="/statistics">
                    <i className="pe-7s-graph2">Statistics</i>
                  </Link>
                </li>
                
                <li className="inactive">
                  <Link to="/maps">
                    <i className="pe-7s-map">Maps</i>
                  </Link>
                </li>

                <li className="inactive">
                  <Link to="/messaging">
                    <i className="pe-7s-mail">Messaging</i>
                  </Link>
                </li>

                <li className="inactive">
                  <Link to="/vehicles">
                    <i className="pe-7s-ca">Vehicles</i>
                  </Link>
                </li>

                <li className="inactive">
                  <Link to="/drivers">
                    <i className="pe-7s-user">Drivers</i>
                  </Link>
                </li>

              </ul>
            </div>
          </div>
          </div>
          </div>
);

export default Layout;