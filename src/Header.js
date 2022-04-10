import{Link} from 'react-router-dom';
import './App.css';

function Header()
{
    return(
        <div className="container-fluid p-0">
            <div className="row">
                <div className="col">
                    <nav class="navbar navbar-expand-lg navbar-light bg-light">
                        <div class="container-fluid">
                            
                            <a class="navbar-brand" href="#">E-Comm</a>
                           
                            <div class="collapse navbar-collapse" id="navbarNav">
                                <ul class="navbar-nav">

                                    {
                                        localStorage.getItem('user-info') ?
                                        <>
                                            <li class="nav-item">
                                                <Link to="/add" className="nav-item">Add Products</Link>
                                            </li>
                                            <li class="nav-item">
                                                <Link to="/update" className="nav-item">Update Products</Link>
                                            </li>
                                        </>
                                        :
                                        <>
                                            <li class="nav-item">
                                                <Link to="/login" className="nav-item">Login</Link>
                                            </li>
                                            <li class="nav-item">
                                                <Link to="/register" className="nav-item ">Register</Link>
                                            </li>
                                        </>

                                    }   
                                   
                                </ul>
                            </div>
                        </div>
                    </nav>
                </div>
            </div>
        </div>
    )
}

export default Header;