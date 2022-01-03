import {
    Navigate
  } from 'react-router-dom';

  const PrivateRoute = ({ children }) => {
    let auth =  JSON.parse(localStorage.getItem('token'));
    
    return auth ? children : <Navigate to="/login" />;
  }

  export default PrivateRoute;