import React from 'react';
import { Link } from 'react-router-dom';

export class Footer extends React.Component {
    render() {
      return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
            © Team Of Developers 2019
            </div>
          </nav>
      );
    }
}