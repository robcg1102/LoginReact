import { Component } from "react";
import { MyContext } from "../context";

export default class Login extends Component {
  componentDidMount() {
    if (document.cookie) {
      console.log("Ya estabas adentro");
      return this.props.history.push("/profile");
    }
  }

  render() {
    return (
      <MyContext.Consumer>
        {(context) => (
          <div>
            <h3>Login</h3>
            <form
              onSubmit={(e) => {
                context.handleLogin(e, () => {
                  this.props.history.push("/profile");
                });
              }}
            >
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={context.loginForm.email}
                onChange={e => context.handleInput(e, 'loginForm')}
              />
              <input
                type="password"
                name="password"
                placeholder="Password"
                value={context.loginForm.password}
                onChange={e => context.handleInput(e, 'loginForm')}
              />
              <button>Login</button>
            </form>
          </div>
        )}
      </MyContext.Consumer>
    );
  }
}
