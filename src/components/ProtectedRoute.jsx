// ProtectedRoute.jsx
function ProtectedRoute({ children }) {
  // เราสามารถลบ Authentication check ออกและ return children เลย
  return children;
}

export default ProtectedRoute;
