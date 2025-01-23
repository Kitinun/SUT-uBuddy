import { Navigate } from "react-router-dom";

function ProtectedRoute({ children }) {
  const isAuthenticated = () => {
    const token = localStorage.getItem("token");
    const user = localStorage.getItem("user");
    return token && user;
  };

  return isAuthenticated() ? children : <Navigate to="/" replace />;
}

export default ProtectedRoute;
