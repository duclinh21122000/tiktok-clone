import React from 'react';
import './GlobalStyles.scss';

type Props = {
    children: React.ReactElement;
};

const GlobalStyles: React.FC<Props> = ({ children }) => {
    return <div>{children}</div>;
};

export default GlobalStyles;
