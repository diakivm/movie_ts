import React, {FC} from 'react';
import {Routes, Route} from "react-router-dom";
import {publicRoutes} from "./routes";

const AppRoutes: FC = () => {

    const isAuth = true

    return (
        <Routes>
            {
                isAuth ?
                       publicRoutes.map(item => {
                           return <Route key={item.path}
                                         path={item.path}
                                         element={item.element}
                           />
                       })
                       :
                       <></>
            }
        </Routes>
    );
};

export default AppRoutes;