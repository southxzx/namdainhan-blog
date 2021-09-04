import React, { FunctionComponent } from 'react';
import styles from './styles.module.scss';
interface TitleProps {
  align?: 'left' | 'center' | 'right';
  title: string;
}
const Title: FunctionComponent<TitleProps> = ({ align, title }) => {
  return (
    <h3 className={styles.titleBlock}>{title}</h3>
  )
}

export default Title
