import React, { Component } from 'react';
import logo from '../logo.png';
import './App.css';
import Web3 from 'web3';

class App extends Component {

    async componentWillMount() {
        window.web3 = new Web3(window.web3.currentProvider)
    }

    constructor(props){
        super(props);
        this.state = {
            account: '0x94E1c599f6739900EfDA8F044c7E5b683265e4cb',
            abi: [
                {
                    "constant":false,
                    "inputs": [
                      {
                          "name": "spender",
                          "type": "address"
                      },
                      {
                          "name": "value",
                          "type": "uint256"
          
                      }
                    ],
                    "name": "approve",
                    "outputs": [
                        {
                            "name": "",
                            "type": "bool"
                        }
                    ],
                    "payable": false,
                    "stateMutability": "nonpayble",
                    "type": "function",
                    "signature": "0x095ea7b3"
                },
                {
                    "constant": true,
                    "inputs": []
                }
              ],
            address: '0x035F0c765F38258A8a457234ebFa5324884Cd327',
            balance: 0,
            networkId: 5777,

        }
    }

    render() {
        return (
            <div>
                <nav className="navbar navbar-dark fixed-top bg-dark flex-md-nowrap p0 shadow">
                    <a 
                    className="navbaar-brand col-sm-3 col-md-2 mr0" 
                    href="http://www.azzotto.com" 
                    target="_blank" 
                    rel="noopener noreferer" >AZZOTTO Token Wallet</a>
                </nav>
                <div className="container-fluid mt-5">
                    <div className="row">
                        <main role="main" className="col-lg-12 d-flex">
                            <h2>My balance: { window.web3.utils.fromWei(this.state.balance.toString(), 'Ether')}</h2>
                            <br />
                            <form onSubmit="{(event) => { 
                            }}">
                                <div className="form-group mr-sm-2">
                                    <input  
                                        id="recipient" 
                                        type="text" 
                                        ref={(input) => {this.recipient = input }} 
                                        className="form-control" 
                                        placeholder="Recipient" 
                                        required />
                                </div>
                                <div className="form-group mr-sm-3">
                                    <input 
                                        id="amount" 
                                        type="text" 
                                        ref="{(input) => { this.amount => input }}" 
                                        className="form-control" 
                                        placeholder="Amount" 
                                        required />
                                </div>
                                <button type="submit" className="btn btn-primary">Send Tokens</button>
                            </form>
                        </main>
                    </div>

                </div>
            </div>
        );
    }
}

export default App;