import React, {Component} from 'react';
import {LoginButton, LogoutButton, Greeting } from './logg';
import logo from './../../assets/js/svgs/solid/address-card.svg';
import App from './../app';
import Navbar from './../header/navbar';

class LoginControl extends Component {
  constructor(props) {
    super(props);
    this.handleChangeLogin = this.handleChangeLogin.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleLogoutClick = this.handleLogoutClick.bind(this);
    this.state = {
      isLoggedIn: false,
      login: '',
      pwd: ''
    };
  }

  handleChangeLogin(props) {
    let login = props.login;
    let pwd = props.pwd;
    if(login === 'duncan' && pwd === 'pwd') {
      this.setState({isLoggedIn: true});
      
    } else {
      this.setState({isLoggedIn: false});
      
    }
    
  }

  handleSubmit(event, props) {
    event.preventdefault();
    //console.log(this.state);
    const isLoggedIn = this.state.isLoggedIn;
    let button;

    if (isLoggedIn) {
        
    } else {
      
    }

    
  }

  handleLogoutClick(props) {
    this.setState({isLoggedIn: false});
  }

  render() {
    

    return (
      <div>
            <div className="wrapper fadeInDown">
                
                <div id="formContent">
               

              
                    <div className="fadeIn first">
                         <img src={logo} id="icon" alt="User Icon" />
                    </div>

              
                    <form action="/" method="POST" onSubmit={this.handleSubmit} >
                        <input type="text" id="login" className="fadeIn second" name="login" placeholder="login" onChange={this.handleChangeLogin}/>
                        <input type="password" id="password" className="fadeIn third" name="login" placeholder="password" onChange={this.handleChangeLogin}/>
                        <input type="submit" className="fadeIn fourth" value="Envoyer"  />
                    </form>

                
                <div id="formFooter">
                    <a className="underlineHover" href="#">Forgot Password?</a>
                </div>

            </div>
        </div>
      </div>
    );
  }
}

export default LoginControl;