import React, { FunctionComponent, useEffect, useRef, useState } from 'react';
import { Row, Col, Popover } from 'antd';
import { logo_main } from 'variables/image';
import styles from './styles.module.scss';
import SButton from '@Components/Base/Button';
import { IconArrowDown, IconBritainFlag, IconDarkMode, IconSearch, IconUser } from '@Components/Base/ListSvg';
import useIntersectionObserver from 'src/utils/hooks/useIntersectionObserver';

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

  const popOverLanguage = (
    <div className={styles.popOverLanguage}>
      MM
    </div>
  );
  const headerRef = useRef<HTMLDivElement | null>(null);
  const [isVisibleStickyMenu, setVisibleStickyMenu] = useState<boolean>(false);

  const showStickyMenu = (): void => {
    const scrollPov = window?.pageYOffset;
    if (headerRef && headerRef.current){
      if (scrollPov >= headerRef.current.offsetTop){
        setVisibleStickyMenu(true);
      } else setVisibleStickyMenu(false);
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', showStickyMenu)
  })

  return (
    <div className={`${styles.headerBlog} ${isVisibleStickyMenu ? styles.stickyHeader : ''}`}>
      <div className={styles.headerContent}>
        <div className={styles.logoBlog}>
          <img src={logo_main} title="logo blog" alt="logo blog" />
        </div>
        <Row>
          <Col md={6} lg={6}>
            <div className={styles.groupBtnLeft}>
              <SButton
                arialLabel="dark-mode"
                icon={<IconDarkMode width={18} height={18} viewBox="0 0 12 12" fill="#292929" />}
              />
              <Popover content={popOverLanguage} title="Title" trigger="hover">
                <SButton
                  arialLabel="dark-mode"
                  icon={<div className={styles.btnLanguage}>
                    <IconBritainFlag />
                    <IconArrowDown width={8} height={5} viewBox="0 0 8 5" fill="#292929" />
                  </div>}
                />
              </Popover>
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
            <div className={styles.groupBtnRight}>
              <SButton
                arialLabel="dark-mode"
                icon={<IconSearch width={18} height={18} viewBox="0 0 18 18" fill="#292929" />}
              />
              <SButton
                arialLabel="dark-mode"
                icon={<IconUser width={20} height={20} viewBox="0 0 24 24" fill="#292929" />}
              />
            </div>
          </Col>
        </Row>
      </div>
      <div ref={headerRef} />
    </div>
  )
}

export default Header
