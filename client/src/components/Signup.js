import { Component } from "react";
import { MyContext } from "../context";

export default class Signup extends Component {
  render() {
    return (
      <MyContext.Consumer>
        {(context) => (
          <div>
            <h3>Signup</h3>
            <form
              onSubmit={(e) => {
                context.handleSignup(e)
                this.props.history.push("/login");
              }}
            >
              <input
                type="text"
                name="name"
                placeholder="Username"
                value={context.formSignup.name}
                onChange={e=>context.handleInput(e, 'formSignup')}
              />
              <input
                type="email"
                name="email"
                placeholder="email"
                value={context.formSignup.email}
                onChange={e=>context.handleInput(e, 'formSignup')}
              />
              <input
                type="password"
                name="password"
                placeholder="password"
                value={context.formSignup.password}
                onChange={e=>context.handleInput(e, 'formSignup')}
              />
              <button>Registrarse</button>
            </form>
          </div>
        )}
      </MyContext.Consumer>
    );
  }
}
