import React from "react";

import { Route, Routes } from "react-router-dom";

import { HOME_PAGE_URL, LOGIN_PAGE_URL } from "./data/navigations";

import LoginPage from "./components/pages/LoginPage";
import HomePage from "components/pages/HomePage";
import LayoutPage from "components/pages/LayoutPage";
import MantorsSection from "components/master/dashboard/MantorsSection";

const AppRoutes = () => {
    return (
        <>
            <Routes>
                <Route path={LOGIN_PAGE_URL} element={<LoginPage />} />
                {/* <Route path={HOME_PAGE_URL} element={<MantorsSection />} /> */}
                <Route path={HOME_PAGE_URL} element={<LayoutPage />}>
                    <Route index element={<HomePage />} />
                </Route>
            </Routes>
        </>
    );
};

export default AppRoutes;
