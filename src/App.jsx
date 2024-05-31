import React from "react";
import { Login, Users,Model1,Model2,Model3,Model4 } from "./pages";
import { Header, Main, Footer } from "./components";
import { Outlet } from "react-router-dom";

const App = () => {
    return (
        <div>
            <Header />
            <Main>
                <Login />
                <Users />
                <Model1 />
                <Model2 />
                <Model3 />
                <Model4 />
            </Main>
            <Outlet />
            <Footer />
        </div>
    );
};

export default App;
