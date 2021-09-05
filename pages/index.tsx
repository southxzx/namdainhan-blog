import Head from 'next/head';
import Image from 'next/image';
import withLayout from '@Components/HOC/Layout';
import React from 'react';
import { Col, Row } from 'antd';
import LastestBlock from '@Components/HomePage/LastestBlock';
import TopicBlock from '@Components/HomePage/TopicBlock';

const HomePage = () => {
  return (
    <div>
      <Row gutter={48}>
        <Col md={15}>
          <LastestBlock/>
        </Col>
        <Col md={9}>
          <TopicBlock/>
        </Col>
      </Row>
    </div>
  )
}
export default withLayout(HomePage);
