import React, { FunctionComponent, ReactElement, ReactNode } from 'react';
import { Button } from 'antd';
import classNames from 'classnames';
import styles from './styles.module.scss';

declare const ButtonTypes: ["default", "primary", "ghost", "dashed", "link", "text"];
declare const ButtonSizes: ["large", "medium", "small"];
interface ButtonProps {
  type: typeof ButtonTypes[number];
  size: typeof ButtonSizes[number];
  arialLabel: string;
  icon: ReactNode;
  justIcon: boolean;
  loading: boolean;
  noBorder: boolean;
  className: string;
  children: ReactNode;
}
const SButton: FunctionComponent<Partial<ButtonProps>> = ({ type, size, arialLabel, icon, loading, noBorder, className, children }) => {

  const btnStyles = classNames({
    [styles.btn]: true,
    [styles[`btn-${size}`]]: true,
    [styles.justIcon]: !!icon,
  })

  return (
    <button className={classNames(className, btnStyles)}>
      {icon && icon}
      {children}
    </button>
  )
}
SButton.defaultProps = {
  type: "primary",
  size: "medium",
}
export default SButton
