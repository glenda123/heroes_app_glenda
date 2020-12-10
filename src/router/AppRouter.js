import React, {useContext} from 'react'
import {
    BrowserRouter as Router,
    Switch
  } from "react-router-dom";
import { AuthContext } from '../auth/AuthContext';
import { PrivateRoute } from './PrivateRoute';
import { PublicRoute } from './PublicRoute';
import { LoginScreen } from '../components/login/LoginScreen';
import { DashboardRoutes } from './DashboardRoutes';



// import { Marvel } from '../components/marvel/Marvel';
// import { Navbar } from '../components/ui/Navbar';


export const AppRouter = () => {
    
  const {user} = useContext(AuthContext)
  return (
        <Router>
        <div>
         {/*  <Navbar/> */}
  
          {/* A <Switch> looks through its children <Route>s and
              renders the first one that matches the current URL. */}
          <Switch>
            <PublicRoute  exact 
              path="/login" 
              component={LoginScreen}
              isAuthenticaded={user.logged}
              />
            
            <PrivateRoute  
            path="/" 
            component={DashboardRoutes}
            isAuthenticaded={user.logged}
            />
            
            
            
          </Switch>
        </div>
      </Router>
    )
}


