import Head from 'next/head';
import Image from 'next/image';
import withLayout from '@Components/HOC/Layout';
import React from 'react';
import { Col, Row } from 'antd';
import LastestBlock from '@Components/HomePage/LastestBlock';

const HomePage = () => {
  return (
    <div>
      <Row>
        <Col md={15}>
          <LastestBlock/>
        </Col>
        <Col md={7}>
          This is me
        </Col>
      </Row>
    </div>
  )
}
export default withLayout(HomePage);
