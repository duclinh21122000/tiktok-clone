import React from 'react';
import Header from './Header';
import Sidebar from './Sidebar';

type Props = {
    children: React.ReactElement;
};

const DefaultLayout: React.FC<Props> = ({ children }) => {
    return (
        <div>
            <Header />
            <div className="container">
                <Sidebar />
                <div className="content">{children}</div>
            </div>
        </div>
    );
};

export default DefaultLayout;
