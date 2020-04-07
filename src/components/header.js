import React,{Component} from 'react';
import './header.css';
import logo from '../img/type2.png';

class Header extends Component{
    render(){
        return(
          <div>
              <span className="newTeamName"> {JSON.parse(sessionStorage.getItem("mySessionStorageDate"))}</span>
              <span className="title">Search for Alice </span>
              <img id="logo" src={logo} alt="Logo"/>
          </div>  
        );
    }
}

export default Header;