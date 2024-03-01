import { Navigate } from "react-router-dom";

const PrivateRoute = ({ children, isLoggedIn, ...rest }) => {
  return isLoggedIn ? children : <Navigate to="/login" {...rest} />;
};

export default PrivateRoute;
