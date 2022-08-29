import React from 'react';
import Header from './Header';

type Props = {
    children?: React.ReactNode;
};

const HeaderOnly: React.FC<Props> = ({ children }) => {
    return (
        <div>
            <Header />
            <div className="container">
                <div className="content">{children}</div>
            </div>
        </div>
    );
};

export default HeaderOnly;
