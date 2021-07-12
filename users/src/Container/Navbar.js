import { NavLink } from "react-router-dom";


function Navbar() {
    return (
        <>
            <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
                <div className="container">
                    <h6 className="navbar-brand" >CurdApp</h6>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item active">
                                <NavLink className="nav-link" to="/">Home </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/@all_user">AllUsers</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/User_@signUp">SignUp</NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    );
}
export default Navbar;