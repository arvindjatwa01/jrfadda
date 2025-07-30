import React from "react";

import { Outlet } from "react-router-dom";

import HeaderPage from "components/common/HeaderPage";

const LayoutPage = () => {
    return (
        <>
            {/* <div className="flex h-screen">
                <div className="flex flex-col flex-1 space-y-4">
                    <HeaderPage />
                    <div className={`flex-1 overflow-y-auto h-[calc(100vh-4rem)]`}>
                        <Outlet />
                    </div>
                </div>
            </div> */}
            <div className="flex h-screen flex-col md:flex-row">
                <div className="flex flex-col flex-1 space-y-4">
                    <HeaderPage />
                    <div className="flex-1 overflow-y-auto h-[calc(100vh-4rem)]">
                        <Outlet />
                    </div>
                </div>
            </div>
        </>
    );
};

export default LayoutPage;
