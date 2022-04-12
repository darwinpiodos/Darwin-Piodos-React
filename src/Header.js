import userEvent from '@testing-library/user-event';
import{Link, useHistory} from 'react-router-dom';
import './App.css';

function Header()
{


    let user= JSON.parse(localStorage.getItem('user-info'))
    const history=useHistory();

    function logOut()
    {
        localStorage.clear();
        history.push('/register')
    }

    function profile()
    {
      
        history.push('/add')
    }

     
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

                        {localStorage.getItem('user-info') ?    
                        <div class="dropdown">
                            <button class="btn btn-primary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                              <span>{user &&  user.name}</span>
                            </button>
                            <ul class="dropdown-menu"              aria-labelledby="dropdownMenuButton1">
                                <li><a class="dropdown-item" href="#" onClick={logOut}>Logout</a></li>
                                <li><a class="dropdown-item" href="#" onClick={profile}>Profile</a></li>
                              
                              
                            </ul>
                        </div>

                        :null   

                                }


                    </nav>


                </div>
            </div>
        </div>
    )
}

export default Header;