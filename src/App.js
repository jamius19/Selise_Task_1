import React from 'react';
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import Home from "./home/Home";

// Importing Global Style Overrides
import './global/stylesheets/overrides.scss'

// Importing Stylesheets
import './App.scss';

/* Stateless react component with React Router
 * for stateless pagination with hyperlinks.
 */
function App() {
    return (
        <Router>
            <Switch>
                <Route exact path={["/", "/page/:pageNo(\\d+)"]}>
                    <Home/>
                </Route>

                <Route path="*">
                   <div className="container mt-4">
                      <h4> Wrong Path. Go back to <Link to={"/"}>Home?</Link></h4>
                   </div>
                </Route>
            </Switch>
        </Router>
    );
}

export default App;
