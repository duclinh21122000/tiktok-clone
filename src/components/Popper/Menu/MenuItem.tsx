import React from 'react';
import Button from '@/components/Button';
import classNames from 'classnames/bind';
import styles from './PopperMenu.module.scss';

type Props = {
    data: any;
};

const cx = classNames.bind(styles);

const MenuItem: React.FC<Props> = ({ data }) => {
    return (
        <Button className={cx('menu-item')} leftIcon={data.icon} to={data.to}>
            {data.title}
        </Button>
    );
};

export default MenuItem;
