import React, { FunctionComponent } from 'react';
import { Row, Col } from 'antd';
import styles from './styles.module.scss';

interface HeaderProps {

}
const Header:FunctionComponent<HeaderProps> = () => {
  return (
    <div>
      <Row>
        <Col md={6} lg={6}>
          XX
        </Col>
        <Col md={12} lg={12}>
          <div className={styles.listMenu}>
            MENU
          </div>
        </Col>
        <Col md={6} lg={6}>
          XZ
        </Col>
      </Row>
    </div>
  )
}

export default Header
