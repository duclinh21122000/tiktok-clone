import React from 'react';
import classNames from 'classnames/bind';
import styles from './AccountItem.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

type Props = {};

const cx = classNames.bind(styles);

const AccountItem: React.FC<Props> = () => {
    return (
        <div className={cx('wrapper')}>
            <img
                className={cx('avatar')}
                src="https://i.bloganchoi.com/bloganchoi.com/wp-content/uploads/2022/02/avatar-trang-y-nghia.jpeg?fit=512%2C20000&quality=95&ssl=1"
                alt="Avatar"
            />
            <div className={cx('info')}>
                <h4 className={cx('name')}>
                    <span>Pham Oanh</span>
                    <FontAwesomeIcon className={cx('check-icon')} icon={faCheckCircle} />
                </h4>
                <span className={cx('username')}>lanhnana0504</span>
            </div>
        </div>
    );
};

export default AccountItem;
