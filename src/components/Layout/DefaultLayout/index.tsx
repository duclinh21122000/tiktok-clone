import React from 'react';
import Header from './Header';
import Sidebar from './Sidebar';
import className from 'classnames/bind';
import styles from './DefaultLayout.module.scss';

type Props = {
    children: React.ReactElement;
};

const cx = className.bind(styles);

const DefaultLayout: React.FC<Props> = ({ children }) => {
    return (
        <div className={cx('wrapper')}>
            <Header />
            <div className={cx('container')}>
                <Sidebar />
                <div className={cx('content')}>{children}</div>
            </div>
        </div>
    );
};

export default DefaultLayout;
