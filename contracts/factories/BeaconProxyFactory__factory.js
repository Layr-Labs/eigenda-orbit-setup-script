'use strict'
Object.defineProperty(exports, '__esModule', { value: true })
exports.BeaconProxyFactory__factory = void 0
/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
const ethers_1 = require('ethers')
const _abi = [
  {
    inputs: [],
    name: 'beacon',
    outputs: [
      {
        internalType: 'address',
        name: '',
        type: 'address',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'bytes32',
        name: 'salt',
        type: 'bytes32',
      },
    ],
    name: 'calculateExpectedAddress',
    outputs: [
      {
        internalType: 'address',
        name: '',
        type: 'address',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'user',
        type: 'address',
      },
      {
        internalType: 'bytes32',
        name: 'userSalt',
        type: 'bytes32',
      },
    ],
    name: 'calculateExpectedAddress',
    outputs: [
      {
        internalType: 'address',
        name: '',
        type: 'address',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'cloneableProxyHash',
    outputs: [
      {
        internalType: 'bytes32',
        name: '',
        type: 'bytes32',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'bytes32',
        name: 'userSalt',
        type: 'bytes32',
      },
    ],
    name: 'createProxy',
    outputs: [
      {
        internalType: 'address',
        name: '',
        type: 'address',
      },
    ],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'user',
        type: 'address',
      },
      {
        internalType: 'bytes32',
        name: 'userSalt',
        type: 'bytes32',
      },
    ],
    name: 'getSalt',
    outputs: [
      {
        internalType: 'bytes32',
        name: '',
        type: 'bytes32',
      },
    ],
    stateMutability: 'pure',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: '_beacon',
        type: 'address',
      },
    ],
    name: 'initialize',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
]
const _bytecode =
  '0x608060405234801561001057600080fd5b50610c47806100206000396000f3fe608060405234801561001057600080fd5b506004361061006d5760003560e01c806329a5c5cf14610072578063396a5f95146100ab57806359659e90146100c857806397881f8d146100d0578063b3e3bf42146100ea578063c4d66de814610116578063e75b21411461013e575b600080fd5b61008f6004803603602081101561008857600080fd5b503561016a565b604080516001600160a01b039092168252519081900360200190f35b61008f600480360360208110156100c157600080fd5b50356101b1565b61008f6101ee565b6100d86101fd565b60408051918252519081900360200190f35b6100d86004803603604081101561010057600080fd5b506001600160a01b03813516906020013561022a565b61013c6004803603602081101561012c57600080fd5b50356001600160a01b0316610262565b005b61008f6004803603604081101561015457600080fd5b506001600160a01b03813516906020013561031d565b600080610177338461022a565b9050600081604051610188906103a3565b8190604051809103906000f59050801580156101a8573d6000803e3d6000fd5b50949350505050565b60006101e882604051806020016101c7906103a3565b6020820181038252601f19601f820116604052508051906020012030610348565b92915050565b6000546001600160a01b031681565b60405161020c602082016103a3565b6020820181038252601f19601f820116604052508051906020012081565b604080516001600160a01b03939093166020808501919091528382019290925280518084038201815260609093019052815191012090565b6001600160a01b0381166102ae576040805162461bcd60e51b815260206004820152600e60248201526d24a72b20a624a22fa122a0a1a7a760911b604482015290519081900360640190fd5b6000546001600160a01b0316156102fb576040805162461bcd60e51b815260206004820152600c60248201526b1053149150511657d253925560a21b604482015290519081900360640190fd5b600080546001600160a01b0319166001600160a01b0392909216919091179055565b60008061032a848461022a565b905061034081604051806020016101c7906103a3565b949350505050565b604080516001600160f81b031960208083019190915260609390931b6bffffffffffffffffffffffff191660218201526035810194909452605580850193909352805180850390930183526075909301909252805191012090565b610861806103b18339019056fe608060405234801561001057600080fd5b50336001600160a01b03166359659e906040518163ffffffff1660e01b815260040160206040518083038186803b15801561004a57600080fd5b505afa15801561005e573d6000803e3d6000fd5b505050506040513d602081101561007457600080fd5b5051604080516020810182526000815281517f656970313936372e70726f78792e626561636f6e00000000000000000000000081529151918290036014019091206000805160206107a1833981519152600019909101146100d157fe5b6100e482826001600160e01b036100eb16565b505061049a565b6100fe8261024960201b6100311760201c565b6101395760405162461bcd60e51b81526004018080602001828103825260258152602001806107e26025913960400191505060405180910390fd5b6101b1826001600160a01b0316635c60da1b6040518163ffffffff1660e01b815260040160206040518083038186803b15801561017557600080fd5b505afa158015610189573d6000803e3d6000fd5b505050506040513d602081101561019f57600080fd5b5051610249602090811b61003117901c565b6101ec5760405162461bcd60e51b815260040180806020018281038252603481526020018061082d6034913960400191505060405180910390fd5b6000805160206107a1833981519152828155815115610244576102426102196001600160e01b0361024f16565b836040518060600160405280602181526020016107c1602191396102cb60201b6100371760201c565b505b505050565b3b151590565b60006102626001600160e01b036103e316565b6001600160a01b0316635c60da1b6040518163ffffffff1660e01b815260040160206040518083038186803b15801561029a57600080fd5b505afa1580156102ae573d6000803e3d6000fd5b505050506040513d60208110156102c457600080fd5b5051905090565b60606102df846001600160e01b0361024916565b61031a5760405162461bcd60e51b81526004018080602001828103825260268152602001806108076026913960400191505060405180910390fd5b60006060856001600160a01b0316856040518082805190602001908083835b602083106103585780518252601f199092019160209182019101610339565b6001836020036101000a038019825116818451168082178552505050505050905001915050600060405180830381855af49150503d80600081146103b8576040519150601f19603f3d011682016040523d82523d6000602084013e6103bd565b606091505b5090925090506103d78282866001600160e01b036103f616565b925050505b9392505050565b6000805160206107a18339815191525490565b606083156104055750816103dc565b8251156104155782518084602001fd5b8160405162461bcd60e51b81526004018080602001828103825283818151815260200191508051906020019080838360005b8381101561045f578181015183820152602001610447565b50505050905090810190601f16801561048c5780820380516001836020036101000a031916815260200191505b509250505060405180910390fd5b6102f8806104a96000396000f3fe60806040523661001357610011610017565b005b6100115b61001f61002f565b61002f61002a61013c565b6101af565b565b3b151590565b606061004284610031565b61007d5760405162461bcd60e51b815260040180806020018281038252602681526020018061029d6026913960400191505060405180910390fd5b60006060856001600160a01b0316856040518082805190602001908083835b602083106100bb5780518252601f19909201916020918201910161009c565b6001836020036101000a038019825116818451168082178552505050505050905001915050600060405180830381855af49150503d806000811461011b576040519150601f19603f3d011682016040523d82523d6000602084013e610120565b606091505b50915091506101308282866101d3565b925050505b9392505050565b6000610146610277565b6001600160a01b0316635c60da1b6040518163ffffffff1660e01b815260040160206040518083038186803b15801561017e57600080fd5b505afa158015610192573d6000803e3d6000fd5b505050506040513d60208110156101a857600080fd5b5051905090565b3660008037600080366000845af43d6000803e8080156101ce573d6000f35b3d6000fd5b606083156101e2575081610135565b8251156101f25782518084602001fd5b8160405162461bcd60e51b81526004018080602001828103825283818151815260200191508051906020019080838360005b8381101561023c578181015183820152602001610224565b50505050905090810190601f1680156102695780820380516001836020036101000a031916815260200191505b509250505060405180910390fd5b7fa3f0ad74e5423aebfd80d3ef4346578335a9a72aeaee59ff6cb3582b35133d50549056fe416464726573733a2064656c65676174652063616c6c20746f206e6f6e2d636f6e7472616374a2646970667358221220e7b562ecdee95608075ce5ac1d81442e61bf46e4326f0e62fb4660d9829ca11264736f6c634300060b0033a3f0ad74e5423aebfd80d3ef4346578335a9a72aeaee59ff6cb3582b35133d50426561636f6e50726f78793a2066756e6374696f6e2063616c6c206661696c6564426561636f6e50726f78793a20626561636f6e206973206e6f74206120636f6e7472616374416464726573733a2064656c65676174652063616c6c20746f206e6f6e2d636f6e7472616374426561636f6e50726f78793a20626561636f6e20696d706c656d656e746174696f6e206973206e6f74206120636f6e7472616374a2646970667358221220929e18fde57db3571082b73085fde4b2ef99ea34aaf1626204fcabff6687e0c064736f6c634300060b0033'
const isSuperArgs = xs => xs.length > 1
class BeaconProxyFactory__factory extends ethers_1.ContractFactory {
  constructor(...args) {
    if (isSuperArgs(args)) {
      super(...args)
    } else {
      super(_abi, _bytecode, args[0])
    }
    this.contractName = 'BeaconProxyFactory'
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
exports.BeaconProxyFactory__factory = BeaconProxyFactory__factory
BeaconProxyFactory__factory.bytecode = _bytecode
BeaconProxyFactory__factory.abi = _abi
