'use strict'
Object.defineProperty(exports, '__esModule', { value: true })
exports.AddressMappingTest__factory = void 0
/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
const ethers_1 = require('ethers')
const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: '_from',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'address',
        name: '_to',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'uint256',
        name: '_id',
        type: 'uint256',
      },
      {
        indexed: false,
        internalType: 'bytes',
        name: '_data',
        type: 'bytes',
      },
    ],
    name: 'TxToL1',
    type: 'event',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'sender',
        type: 'address',
      },
    ],
    name: 'getL1AddressTest',
    outputs: [
      {
        internalType: 'address',
        name: 'l1Address',
        type: 'address',
      },
    ],
    stateMutability: 'pure',
    type: 'function',
  },
]
const _bytecode =
  '0x608060405234801561001057600080fd5b5060c08061001f6000396000f3fe6080604052348015600f57600080fd5b506004361060285760003560e01c8063dac3dea914602d575b600080fd5b605060048036036020811015604157600080fd5b50356001600160a01b0316606c565b604080516001600160a01b039092168252519081900360200190f35b6000607582607b565b92915050565b61111061111160901b0119019056fea264697066735822122033cd793f1c604ce7fdedd902345f6505eceec7e58a07cd353c64d0211e50775364736f6c634300060b0033'
const isSuperArgs = xs => xs.length > 1
class AddressMappingTest__factory extends ethers_1.ContractFactory {
  constructor(...args) {
    if (isSuperArgs(args)) {
      super(...args)
    } else {
      super(_abi, _bytecode, args[0])
    }
    this.contractName = 'AddressMappingTest'
  }
  deploy(overrides) {
    return super.deploy(overrides || {})
  }
  getDeployTransaction(overrides) {
    return super.getDeployTransaction(overrides || {})
  }
  attach(address) {
    return super.attach(address)
  }
  connect(signer) {
    return super.connect(signer)
  }
  static createInterface() {
    return new ethers_1.utils.Interface(_abi)
  }
  static connect(address, signerOrProvider) {
    return new ethers_1.Contract(address, _abi, signerOrProvider)
  }
}
exports.AddressMappingTest__factory = AddressMappingTest__factory
AddressMappingTest__factory.bytecode = _bytecode
AddressMappingTest__factory.abi = _abi
