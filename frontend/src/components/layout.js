import { Outlet, Link } from "react-router-dom";
import React from "react";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router";


const Layout = () => {






    return (
        <div>
            <nav className="navbar navbar-expand-sm sticky-top navbar-dark bg-success shadow p-3 mb-5  rounded ">
                <div className="container">
                    <img style={{height:"50px",width:"60px",marginRight:"5px"}} src="https://www.freepnglogos.com/uploads/graduation-cap-png/graduation-cap-svg-png-icon-download-1.png" ></img>
                    <a className="navbar-brand" href="#">Student's Award Management</a>
                    <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbar1">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbar1">
                        <ul className="navbar-nav w-100">
                            <li className="nav-item active">
                                <Link className="nav-link active" to="/">Home</Link>
                            </li>


                            {/* <li>
                                <a className="nav-link  ms-auto" href="#about">about</a>
                            </li> */}
                            

                        </ul>

                    </div>
                    <div>


                        {/* {!localStorage.getItem("password") ? <Login /> : <Logout />} */}
                        {/* <button className="btn btn-success "><Link to="/login" style={{ textDecoration: 'none', color: 'white' }} >Register</Link></button> */}

                        <button className="btn btn-success border "><Link to="/register" style={{ textDecoration: 'none', color: 'white' }} >Register</Link></button>

                    </div>

                </div>
            </nav>




            <Outlet />
        </div>
    )
};
// function Login() {

//     return (
//        <button classNameName="btn btn-primary" ><Link to="/login"   style={{textDecoration:"none",color:"white"}}> Login to explore </Link></button> 
//     )
// }
// function Logout() {
//     const { logOut, user } = useUserAuth();
//     const navigate = useNavigate();
//     const handleLogout = async () => {
//         try {

//             await logOut();
//             localStorage.clear()
//             window.location.replace("/")
//             navigate("/");
//             alert("LOGGED OUT SUCCESSFULLY")
//         } catch (error) {
//             console.log(error.message);
//         }
//     };
//     return (
//         <Button classNameName="btn btn-danger" onClick={handleLogout}>
//             Log out
//         </Button>

//     )
// }

export default Layout;