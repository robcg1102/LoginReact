import { Component, createContext } from "react";
import AUTH_SERVICE from "./services/authService";

export const MyContext = createContext();

class MyProvider extends Component {
  state = {
    loggedUser: false,
    formSignup: {
      name: "",
      email: "",
      password: "",
    },
    loginForm: {
      email: "",
      password: "",
    },
    user: {}
  };

  handleInput = (e, obj) => {
    const a = this.state[obj];
    const key = e.target.name;
    a[key] = e.target.value;
    this.setState({ obj: a });
  };

  componentDidMount() {
    if (document.cookie) {
      AUTH_SERVICE.getUser()
        .then(({ data }) => {
          this.setState({
            loggedUser: true,
            user: data.user,
          });
          console.log(this.state);
        })
        .catch((err) => console.log(err));
    }
  }

  handleSignup = (e) => {
    e.preventDefault();
    AUTH_SERVICE.signup(this.state.formSignup)
      .then(({ data }) => {
        console.log(data.user.name);
      })
      .catch((err) => {
        if (err.name === "UserExistsError") {
          console.log("El usuario ya existe menso");
        }
        console.log(err);
      });
  };

  handleLogin = (e, cb) => {
    e.preventDefault()
    AUTH_SERVICE.login(this.state.loginForm)
      .then(({ data }) => {
        this.setState({ loggedUser: true, user: data.user })
        console.log(this.state);
        cb()
      })
      .catch(err => {
        console.log(err);
      })
  }

  handleLogout = async (cb) => {
    await AUTH_SERVICE.logout();
    window.localStorage.clear();
    this.setState({ loggedUser: false, user: {} });
    cb();
  };

  render() {
    return (
      <MyContext.Provider
        value={{
          loggedUser: this.state.loggedUser,
          formSignup: this.state.formSignup,
          loginForm: this.state.loginForm,
          handleInput: this.handleInput,
          handleSignup: this.handleSignup,
          handleLogin: this.handleLogin,
          handleLogout: this.handleLogout,
        }}
      >
        {this.props.children}
      </MyContext.Provider>
    );
  }
}

export default MyProvider;
