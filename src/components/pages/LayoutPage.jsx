import React from "react";

import { Outlet } from "react-router-dom";

import HeaderPage from "components/common/HeaderPage";
import SubHeader from "components/common/SubHeader";
import FooterPage from "components/common/FooterPage";

const LayoutPage = () => {
    return (
        <div className="flex h-screen">
            <div className="flex flex-col flex-1">
                <HeaderPage />
                <SubHeader />
                <div className={`flex-1 overflow-y-auto py-6 h-[calc(100vh-4rem)]`}>
                    <Outlet />
                </div>
                <FooterPage />
            </div>
        </div>
    );
};

export default LayoutPage;
