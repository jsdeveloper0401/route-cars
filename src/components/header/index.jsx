import "./index.css";
import routes from "@routes";
import { NavLink } from "react-router-dom";
import Logo from "@img/tesla-logo.png";
import Login from "@img/login.png";
import Burger from "@img/burger.png";

const Index = () => {
    return (
        <header className="bg-dark">
            <div className="container">
                <nav className="d-flex justify-content-space-between gap-5 align-items-center">
                    <NavLink>
                        <img src={Logo} alt="" />
                    </NavLink>
                    <ul className="list-unstyled d-flex gap-3">
                        {routes?.map((item, index) => (
                            <li key={index} className="list-unstyled">
                                <NavLink
                                    to={item.path}
                                    className="text-decoration-none text-white">
                                    {item.content}
                                </NavLink>
                            </li>
                        ))}
                    </ul>
                    <div className="input-group">
                        <input type="text" className="input" />
                        <button>
                            <img src={Login} alt="Login" />
                        </button>
                        <button>
                            <img src={Burger} alt="burger menu" />
                        </button>
                    </div>
                </nav>
            </div>
        </header>
    );
};

export default Index;
