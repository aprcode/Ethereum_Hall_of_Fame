import React, {Component} from 'react';
import {drizzleConnect} from '@drizzle/react-plugin';
import { Table } from 'antd';





const mapStateToProps = state => ({state});

class Container extends React.PureComponent
{
  state = {
    dataKey: null,
    listDons : null,
   };

    columns = [
     {
       title: 'Name forever save',
       dataIndex: 'name',
       key: 'name',
     },
     {
       title: 'Amount in ether',
       dataIndex: 'amount',
       key: 'amount',
     },

   ];


componentDidMount()
{
  const { drizzle } = this.props;
      const contract = drizzle.contracts.Billboard;

      // get and save the key for the variable we are interested in
      const dataKey = contract.methods["getDons"].cacheCall();
      this.setState({ dataKey });
}

 RawtoJSON(res)
{
  const {drizzle} = this.props;
  let dons =[]
  for(let i =0; i<res.amonts.length; i++)
  {
    dons.push({
      'name' : res.user[i],
      'amount' : drizzle.web3.utils.fromWei(res.amonts[i])
    })
  }
  return dons;
}



  render(){

      const { Billboard } = this.props.drizzleState.contracts;
       const storedData = Billboard.getDons[this.state.dataKey];
       let JsonDons ;
          let listDons =  (storedData && storedData.value);
          if(listDons !== undefined)
          {
            JsonDons = this.RawtoJSON(listDons)
            JsonDons.sort(function(a, b) {
                return parseFloat(b.amount) - parseFloat(a.amount);
                });
          }
      return (
        <Table dataSource={JsonDons} columns={this.columns} />

  )
}
}

export default Container;
