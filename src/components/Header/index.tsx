import React, { FunctionComponent } from 'react';
import { Row, Col } from 'antd';
import styles from './styles.module.scss';

interface HeaderProps {

}
const Header:FunctionComponent<HeaderProps> = () => {

  const arrMenu = [
    { name: 'Home', slug: 'home', key: 'home' },
    { name: 'Blog', slug: 'blog', key: 'blog' },
    { name: 'Music', slug: 'music', key: 'music' },
    { name: 'Book', slug: 'book', key: 'book' },
    { name: 'About', slug: 'about', key: 'about' },
  ]

  return (
    <div>
      <Row>
        <Col md={6} lg={6}>
          XX
        </Col>
        <Col md={12} lg={12}>
          <ul className={styles.listMenu}>
            {arrMenu.map((itemMenu) => (
              <li key={itemMenu.key}>{itemMenu.name}</li>
            ))}
          </ul>
        </Col>
        <Col md={6} lg={6}>
          XZ
        </Col>
      </Row>
    </div>
  )
}

export default Header
