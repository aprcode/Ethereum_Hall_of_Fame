import logo from './logo.svg';
import Web3Provider from 'web3-react'
import React, { Component } from 'react'
import { Connectors, useWeb3Context } from 'web3-react'
import { ethers } from "ethers";
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table';
import drizzleOptions from './drizzleOptions';
import { DrizzleContext } from '@drizzle/react-plugin';
import Container from './components/Container';
import TipsComponent from './components/TipsComponent';
import {LoadingContainer} from '@drizzle/react-components';
import { Drizzle, generateStore } from "@drizzle/store";
import { Layout, Menu, Row, Col,Typography, Space } from 'antd';

import './style/main.css';


const { Header, Content, Footer } = Layout;
const { Paragraph, Text } = Typography;

class App extends React.Component {

  componentDidMount()
  {

  }


render()
{
  const drizzleStore = generateStore(drizzleOptions);
  const drizzle = new Drizzle(drizzleOptions, drizzleStore);

  return (
    <DrizzleContext.Provider drizzle={drizzle}>
       <DrizzleContext.Consumer>

          {drizzleContext => {
            const {drizzle, drizzleState, initialized} = drizzleContext;

            if(!initialized) {
              return "Loading..."
            }

            return (
              <Layout className="layout">
                 <Header>
                   <div className="logo" />
                   <Menu theme="dark" mode="horizontal" >
                     <Menu.Item key="1">Ethereum Hall Of Fame</Menu.Item>

                   </Menu>
                 </Header>
                 <Content style={{ padding: '50px 50px' }}>

                   <div className="site-layout-content">
                     <>
                     <Row justify="center" align="middle">
                          <Col xs={{ span: 24, offset: 0 }}  xl={{ span: 6}} >
                            <h3 >Ethereum Hall Of Fame</h3>
                              <Paragraph code={true} >This board will be lock for ever in the chain..</Paragraph>

                            <TipsComponent drizzle={drizzle} drizzleState={drizzleState} />
                          </Col>
                          <Col xs={{ span: 24, offset: 0 }}  xl={{ span: 10, offset: 2 }}>
                             <Container drizzle={drizzle} drizzleState={drizzleState} />
                          </Col>
                    </Row>
                     </>
                   <div>
                     <Row justify="center" >
                          <Col xs={{ span: 24, offset: 0 }}  xl={{ span: 16}} >
                            <Space direction="horizontal" style={{width: '100%', justifyContent: 'center'}}>
                            <h7 style={{text : 'center'}}>Source Code :</h7>
                            </Space>
                            <Space direction="horizontal" style={{width: '100%', justifyContent: 'center'}}>
                            <Paragraph >GitHub</Paragraph>
                            </Space>

                          </Col>

                    </Row>
                     </div>
                   </div>
                 </Content>
                 <Footer style={{ textAlign: 'center' }}>Ethereum Hall Of Fame ©2021 Created by BadBlock Foundation</Footer>
               </Layout>
              )
            }}
       </DrizzleContext.Consumer>
     </DrizzleContext.Provider>
  );
}

}

export default App;
