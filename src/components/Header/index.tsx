import React, { FunctionComponent } from 'react';
import { Row, Col } from 'antd';
import { logo_main } from 'variables/image';
import styles from './styles.module.scss';
import SButton from '@Components/Base/Button';
import { IconDarkMode } from '@Components/Base/ListSvg';

interface HeaderProps {

}
const Header: FunctionComponent<HeaderProps> = () => {

  const arrMenu = [
    { name: 'Home', slug: 'home', key: 'home' },
    { name: 'Blog', slug: 'blog', key: 'blog' },
    { name: 'Music', slug: 'music', key: 'music' },
    { name: 'Book', slug: 'book', key: 'book' },
    { name: 'About', slug: 'about', key: 'about' },
  ]

  return (
    <div className={styles.headerBlog}>
      <div className={styles.headerContent}>
        <div className={styles.logoBlog}>
          <img src={logo_main} title="logo blog" alt="logo blog" />
        </div>
        <Row>
          <Col md={6} lg={6}>
            <div>
              <SButton
                arialLabel="dark-mode"
                icon={<IconDarkMode width={20} height={20} viewBox="0 0 12 12" fill="#292929" />}
              />
            </div>
          </Col>
          <Col md={12} lg={12}>
            <ul className={styles.listMenu}>
              {arrMenu.map((itemMenu) => (
                <li key={itemMenu.key}><p>{itemMenu.name}</p></li>
              ))}
            </ul>
          </Col>
          <Col md={6} lg={6}>
            XZ
          </Col>
        </Row>
      </div>
    </div>
  )
}

export default Header
