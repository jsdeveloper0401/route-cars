import React from "react";
import {
    Route,
    createBrowserRouter,
    createRoutesFromElements,
    RouterProvider,
} from "react-router-dom";

import App from "../App";
import { Login, Users,Model1,Model2,Model3,Model4 } from "../pages";
const Index = () => {
    const router = createBrowserRouter(
        createRoutesFromElements(
            <Route path="/" element={<App />}>
                <Route index element={<Login/>}/>
                <Route path="users" element={<Users/>}/>
                <Route path="model1" element={<Model1/>}/>
                <Route path="model2" element={<Model2/>}/>
                <Route path="model3" element={<Model3/>}/>
                <Route path="model4" element={<Model4/>}/>
            </Route>
        )
    );
    return <RouterProvider router={router} />;
};

export default Index;
