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
                <nav className="nav">
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
                        <input type="text" className="input" placeholder="Search"/>
                        <button className="nav__btn">
                            <img src={Login} alt="Login" className="nav__img" />
                        </button>
                        <button className="nav__btn">
                            <img
                                src={Burger}
                                alt="burger menu"
                                className="nav__img"
                            />
                        </button>
                    </div>
                </nav>
            </div>
        </header>
    );
};

export default Index;
