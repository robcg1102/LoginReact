import { Component } from "react";
import { MyContext } from "../context";
// import AUTH_SERVICE from "../services/authService";

export default class Profile extends Component {
  //   state = {
  //     user: {},
  //   };

  componentDidMount() {
    if (!document.cookie) {
      return this.props.history.push("/login");
    }
  }

  render() {
    return (
      <MyContext.Consumer>
        {(context) => {
          console.log(context.user);
          return (
            <div>
              <h2>Hola</h2>
            </div>
          );
        }}
      </MyContext.Consumer>
    );
  }
}
