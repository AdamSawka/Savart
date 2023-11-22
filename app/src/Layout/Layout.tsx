import React, { useState } from "react";
import {
    styled,
} from "@mui/material/styles";
import Box, { BoxProps } from "@mui/material/Box";
import { Outlet } from "react-router";
import Navigation from "components/Navigation/Navigation";
import Footer from "components/Footer/Footer";
import NavLinksList from "components/Navigation/NavLinkList";

const LayoutWrapper = styled("div")({

});

const MainContentWrapper = styled(Box)<BoxProps>({

});

const ContentWrapper = styled("main")(({  }) => ({

}));

const Layout = () => {
    const [navVisible, setNavVisible] = useState<boolean>(false);
    const toggleNavVisibility = () => setNavVisible(!navVisible);

    return (
            <LayoutWrapper
                className="layout-wrapper"
            >
                    <Navigation
                        navVisible={navVisible}
                        setNavVisible={setNavVisible}
                        NavLinksList={NavLinksList}
                        toggleNavVisibility={toggleNavVisibility}
                    />
                <MainContentWrapper
                    className="layout-content-wrapper"
                >
                    <ContentWrapper
                        className="layout-page-content"
                    >
                        <Outlet />
                    </ContentWrapper>
                    <Footer />
                </MainContentWrapper>
            </LayoutWrapper>
    );
};
export default Layout;
