import Navbar from './Container/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Layout/Home'
import AllUsers from './Layout/AllUsers';
import SignUp from './Layout/SignUp';
import Edit from './Layout/Edit';
import { Route } from "react-router-dom";


function App() {
  return (
    <>
      < Navbar />
      <Route exact path="/">
        <Home />
      </Route>
      <Route path="/@all_user">
        <AllUsers />
      </Route>
      <Route path="/User_@signUp">
        <SignUp />
      </Route>
      <Route path="/User_@editation=:id">
        <Edit />
      </Route>
    </>
  );
}

export default App;
