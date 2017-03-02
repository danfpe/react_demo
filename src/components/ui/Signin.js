import {Component} from 'react'

class SignIn extends Component {
    constructor(props) {
        super(props);
        this.state={value: ''};

        this.handleChange=this.handleChange.bind(this);
        this.handleSubmit=this.handleSubmit.bind(this);
    }
    handleChange(event) {
      this.setState({value: event.target.value})
    }

    handleSubmit(event) {
        alert('A name was submitted:'+this.state.value)
        event.preventDefault();
    }
    render () {
        return (
             <div className="auth-login">
              <form className="login-form" onSubmit={this.handleSubmit}>
                   <h3>我愿意敲开这扇大门</h3>
                  <label>
                  用户名<br/>
                  <input placeholder="请输入您的用户名" value={this.state.value} onChange={this.handleChange} type="text" />
                  </label>
                  <br/>
                  <label>
                  密码<br/>
                  <input placeholder="请输入您的密码" type="text" />
                  </label>
                  <br/>
                  <input className="submit" type="submit" value="登录"/>
                </form>
            </div>
        )
    }
}

export default SignIn