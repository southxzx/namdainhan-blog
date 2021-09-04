import React from 'react'
import styles from './styles.module.scss';

const Dot = () => {
  return (
    <div className={styles.dotStyle}>
      <svg width="2" height="2" viewBox="0 0 2 2" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M2 1C2 1.55228 1.55228 2 1 2C0.447715 2 0 1.55228 0 1C0 0.447715 0.447715 0 1 0C1.55228 0 2 0.447715 2 1Z" fill="#757575" />
      </svg>
    </div>
  )
}
export default Dot
