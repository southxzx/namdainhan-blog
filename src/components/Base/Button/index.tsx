import React, { FunctionComponent, ReactElement, ReactNode } from 'react';
import { Button } from 'antd';

declare const ButtonTypes: ["default", "primary", "ghost", "dashed", "link", "text"];
declare const ButtonSizes: ["large", "middle", "small"];
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
const SButton: FunctionComponent<Partial<ButtonProps>> = ({ type, size, arialLabel, icon, loading, noBorder, children }) => {
  return (
    <div >
      <Button
        icon={icon}
        loading={loading}
      >
        {children}
      </Button>
    </div>
  )
}

export default SButton
