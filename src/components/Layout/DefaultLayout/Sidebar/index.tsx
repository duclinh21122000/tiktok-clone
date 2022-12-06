import React from 'react';
import className from 'classnames/bind';
import styles from './Sidebar.module.scss';

type Props = {};

const cx = className.bind(styles);

const Sidebar: React.FC<Props> = () => {
    return (
        <aside className={cx('wrapper')}>
            <h2>Sidebar</h2>
        </aside>
    );
};

export default Sidebar;
