import React, {Component} from 'react';
import { connect } from 'react-redux';
import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';

class Login extends Component {

  constructor(props) {
    super(props);
    this.state = {
    }
  }

  kakaoLoginPopup(){
    Kakao.Auth.login({
     success: function(obj) {
      console.log("Token Get : " + JSON.stringify(obj));
      Kakao.API.request({
          url: '/v1/user/me',
          success: function(res) {
            console.log("NickName : " + JSON.stringify(res));
          },
          fail: function(error) {
            console.log("Nick Err" + JSON.stringify(error));
          }
        });
     },
     fail: function(err) {
       console.log(JSON.stringify(err));
     }
    });
  }

  render() {
    const paperStyle = {
        height: 450,
        width: 350,
        margin: 20,
        marginTop: '10%',
        textAlign: 'center',
        display: 'inline-block',
      }

      const loginHeaderStyle = {
        color: '#fff',
        fontSize: '20px',
        fontWeight: 'normal',
        padding: '20px 0',
        textAlign: 'center',
        textTransform: 'uppercase',
        background: '#2196F3',
        }
    return (
    <div>
      <Paper style={paperStyle} zDepth={3}>
        <div style={loginHeaderStyle}>
          Welcome To Team Space
        </div>
        <form action='#' id='loginForm'>
          <div>
            <div style={{padding: '10px'}}>
              <TextField
                hintText="gray.lee@naver.com"
                floatingLabelText="E-mail"
                floatingLabelFocusStyle = {{color: '#2196F3'}}
                underlineFocusStyle = {{borderColor: '#2196F3'}}
                />
              <br />
            </div>
            <div style={{padding: '10px'}}>
              <TextField
                hintText="insert password"
                floatingLabelText="Password"
                floatingLabelFocusStyle = {{color: '#2196F3'}}
                underlineFocusStyle = {{borderColor: '#2196F3'}}
                />
              <br />
            </div>
            <div style={{padding: '10px'}}>
              <RaisedButton id='loginBtn' type='submit' label='Login' backgroundColor='#2196F3' labelColor='#FFFFFF' style={{margin: 12, width:'300px' }} labelStyle={{fontWeight: 'bold'}} />
              <RaisedButton id='kakaoLoginBtn' onClick={this.kakaoLoginPopup} label='KaKao Login' backgroundColor='#ffef3f' labelColor='#000000' style={{margin: 12, width:'300px' }} labelStyle={{fontWeight: 'bold'}} />
              <br />
            </div>
          </div>
          <div style={{padding: '10px'}}>
          <div style={{float: 'left'}}>
          <FlatButton label="Register Now" rippleColor='#2196F3'/>
          </div>
          <div style={{float: 'right'}}>
          <FlatButton label="Forgot Password?" rippleColor='#2196F3'/>
          </div>
          </div>
        </form>
      </Paper>
    </div>
    );
  }
}


let mapDispatchToProps = (dispatch) => {
    return {

    }
}

Login = connect(undefined, undefined)(Login);

export default Login;
