import React from 'react';
import classNames from 'classnames/bind';
import styles from './Button.module.scss';
import { Link } from 'react-router-dom';

type Props = {
    text?: boolean;
    primary?: boolean;
    outline?: boolean;
    rounded?: boolean;
    small?: boolean;
    large?: boolean;
    disable?: boolean;
    to?: string;
    href?: string;
    children: any;
    leftIcon?: any;
    rightIcon?: any;
    className?: any;
    [passProps: string]: any;
    onClick?: () => void;
};

const cx = classNames.bind(styles);

const Button: React.FC<Props> = ({
    text = false,
    primary = false,
    outline = false,
    rounded = false,
    small = false,
    large = false,
    disable = false,
    to,
    href,
    children,
    leftIcon,
    rightIcon,
    className,
    onClick,
    ...passProps
}) => {
    let Comp: any = 'button';

    const props: any = {
        onClick,
        ...passProps,
    };

    if (disable) {
        Object.keys(props).forEach((key) => {
            if (key.startsWith('on') && typeof props[key] === 'function') {
                delete props[key];
            }
        });
    }

    if (to) {
        props.to = to;
        Comp = Link;
    } else if (href) {
        props.href = href;
        Comp = 'a';
    }

    const classes = cx('wrapper', {
        [className]: className,
        text,
        primary,
        outline,
        rounded,
        small,
        large,
        disable,
    });

    return (
        <Comp className={classes} {...props}>
            {leftIcon && <span className={cx('icon')}>{leftIcon}</span>}
            <span className={cx('title')}>{children}</span>
            {rightIcon && <span className={cx('icon')}>{rightIcon}</span>}
        </Comp>
    );
};

export default Button;
