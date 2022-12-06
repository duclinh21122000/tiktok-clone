import React from 'react';
import classNames from 'classnames/bind';
import styles from './Popper.module.scss';

const cx = classNames.bind(styles);

type Props = {
    className?: any;
    children?: any;
};

const Wrapper: React.FC<Props> = ({ className, children }) => {
    return <div className={cx('wrapper', className)}>{children}</div>;
};

export default Wrapper;
