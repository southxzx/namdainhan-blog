import HorizontalCard from '@Components/ArticleCard/HorizontalCard'
import Title from '@Components/Title'
import React from 'react'

const LastestBlock = () => {
  return (
    <div>
      <Title align="left" title="The Lastest"/>
      <HorizontalCard/>
      <HorizontalCard/>
      <HorizontalCard/>
      <HorizontalCard/>
    </div>
  )
}

export default LastestBlock
