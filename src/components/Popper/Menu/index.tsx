import React from 'react';
import Tippy from '@tippyjs/react/headless';
import { Wrapper as PopperWrapper } from '@/components/Popper';
import MenuItem from './MenuItem';
import classNames from 'classnames/bind';
import styles from './PopperMenu.module.scss';

type Props = {
    items: any[];
    children?: any;
};

const cx = classNames.bind(styles);

const PopperMenu: React.FC<Props> = ({ items, children }) => {
    const renderItems = () => {
        return items.map((item, idx) => <MenuItem key={idx} data={item} />);
    };

    return (
        <Tippy
            interactive
            placement="bottom-end"
            render={(attrs) => (
                <div className={cx('menu-list')} tabIndex={-1} {...attrs}>
                    <PopperWrapper className={cx('menu-popper')}>{renderItems()}</PopperWrapper>
                </div>
            )}
        >
            {children}
        </Tippy>
    );
};

export default PopperMenu;
