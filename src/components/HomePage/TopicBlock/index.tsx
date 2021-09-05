import Title from '@Components/Title';
import React from 'react';
import styles from './styles.module.scss';

const TopicBlock = () => {

  const listTopics = [
    { name: "Self-taught", key: "self-taught", numberOfArticles: 10 },
    { name: "Programming", key: "programming", numberOfArticles: 5 },
    { name: "English", key: "english", numberOfArticles: 2 },
    { name: "Productivity", key: "productivity", numberOfArticles: 7 },
    { name: "Better Living", key: "better-living", numberOfArticles: 3 },
  ]

  return (
    <div className={styles.blockTopic}>
      <Title align="left" title="Topic" />
      <div className={styles.listTopics}>
        { listTopics.map((topicItem) => (
          <div className={styles.topicItem} key={topicItem.key}>{topicItem.name}</div>
        ))}
      </div>
    </div>
  )
}

export default TopicBlock
