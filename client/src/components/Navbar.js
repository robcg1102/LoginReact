import { Link, useHistory } from "react-router-dom";
import { MyContext } from "../context";

const Navbar = () => {
  let history = useHistory();

  return (
    <MyContext.Consumer>
      {(context) => {
        return (
          <div>
            <Link to="/">Home</Link>
            <Link to="/signup"> Signup </Link>
            <Link to="/login"> Login </Link>
            {context.loggedUser && (
              <span
                onClick={() =>
                  context.handleLogout(() => {
                    history.push("/login");
                  })
                }
              >
                Logout
              </span>
            )}
          </div>
        );
      }}
    </MyContext.Consumer>
  );
};

export default Navbar;
