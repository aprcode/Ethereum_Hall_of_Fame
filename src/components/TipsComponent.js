import  React, {Component} from 'react';
import {drizzleConnect} from '@drizzle/react-plugin';
import { Button, Input } from 'antd';
import { Icon, InlineIcon } from '@iconify/react';
import ethereumIcon from '@iconify-icons/mdi/ethereum';
const web3 = require('web3');

class TipsComponent extends React.PureComponent
{
  state = {
    dataKeys : null,
    ether : "0.0",
    name : ""
  }

  constructor()
  {
    super();
    this.tips = this.tips.bind(this);
  }



  tips()
  {
    const {drizzle} = this.props;
    const contract = drizzle.contracts.Billboard;
    const dataKey = contract.methods["invest"].cacheSend(this.state.name,{
      from : this.props.drizzleState.accounts[3],
      gas: 2500000,
      value : drizzle.web3.utils.toWei(this.state.ether, "ether")
    });

    var state = drizzle.store.getState();

    this.setState({ dataKey });

  }



  render()
  {
    return(
      <>
      <Input size="large" onChange={(e)=> this.setState({name : e.target.value})}  placeholder="Name"  />
      <br />
      <br />
      <Input size="large" onChange={(e)=> this.setState({ether : e.target.value})} prefix={<Icon icon={ethereumIcon} />}  placeholder="Ether Amount" />
      <br />
      <br />
      <Button onClick={this.tips} type="primary">Save me in a block !</Button>
      </>
    )
  }


}


export default TipsComponent;
