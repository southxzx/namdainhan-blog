import React, { FunctionComponent } from 'react';
import Image from 'next/image';
import styles from './styles.module.scss';
import SButton from '@Components/Base/Button';
import { IconBookmark } from '@Components/Base/ListSvg';
import Dot from '@Components/Base/Dot';

interface HorizontalCardProps {

}
const HorizontalCard: FunctionComponent<HorizontalCardProps> = () => {
  return (
    <article className={styles.cardContainer}>
      <div className={styles.cardBody}>
        <div className={styles.cardContent}>
          <a className={styles.title}>
            <h5>You are Not Lazy or Undisciplined. You Have Internal Resistance.</h5>
          </a>
          <p className={styles.excerpt}>Why you can’t just do it, and what to do instead, and what to do instead, and what to do instead</p>
        </div>
        <div className={styles.cardBottomInfo}>
          <div className={styles.cardInfo}>
            <p className={styles.author}>Daniel Dang</p>
            <Dot/>
            <p className={styles.duration}>6 min read</p>
            <Dot/>
            <p className={styles.topic}>Self-taught</p>
          </div>
          <SButton
            arialLabel="dark-mode"
            icon={<IconBookmark width={18} height={18} viewBox="0 0 24 24" fill="#292929" />}
          />
        </div>
      </div>
      <div className={styles.cardCover}>
        <Image
          src="https://miro.medium.com/fit/c/300/201/0*FjXAcqaJwbGxRLfV"
          width={300}
          height={200}
          // layout="fill"
          objectFit="cover"
          alt="You are Not Lazy or Undisciplined. You Have Internal Resistance."
        />
      </div>
    </article>
  )
}

export default HorizontalCard
