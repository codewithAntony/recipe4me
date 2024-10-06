import React, { ReactNode } from 'react';
import Navbar from '@/Components/Navbar';
import './globals.css';

interface LayoutProps {
    children: ReactNode;
}

const layout = ({ children }: LayoutProps) => {
    return (
        <html lang="en">
            <body>
                <Navbar />
                <main>{children}</main>
            </body>
        </html>
    );
};

export default layout;
