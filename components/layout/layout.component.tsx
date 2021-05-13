import React from 'react';
import MainNavigation from './main-navigation.component';

interface LayoutProps {
    children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
    return (
        <div>
            <MainNavigation></MainNavigation>
            <main>{children}</main>
        </div>
    );
};

export default Layout;
