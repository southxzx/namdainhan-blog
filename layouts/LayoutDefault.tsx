import React, { FunctionComponent } from 'react';
import Header from '../src/components/Header';

interface LayoutDefaultProps {
  children?: React.ReactNode;
}
const LayoutDefault: FunctionComponent<LayoutDefaultProps> = ({ children }) => {
  return (
    <div>
      <Header />
      <main>
        <div className="wrap-content">
          {children}
        </div>
      </main>
    </div>
  )
}

export default LayoutDefault
