"use strict";
/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
Object.defineProperty(exports, "__esModule", { value: true });
exports.L1ArbitrumTestMessenger__factory = void 0;
const ethers_1 = require("ethers");
const _abi = [
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "address",
                name: "_from",
                type: "address",
            },
            {
                indexed: true,
                internalType: "address",
                name: "_to",
                type: "address",
            },
            {
                indexed: true,
                internalType: "uint256",
                name: "_seqNum",
                type: "uint256",
            },
            {
                indexed: false,
                internalType: "bytes",
                name: "_data",
                type: "bytes",
            },
        ],
        name: "TxToL2",
        type: "event",
    },
    {
        inputs: [
            {
                internalType: "bool",
                name: "_shouldUseInbox",
                type: "bool",
            },
        ],
        name: "setInboxUse",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
];
class L1ArbitrumTestMessenger__factory {
    static createInterface() {
        return new ethers_1.utils.Interface(_abi);
    }
    static connect(address, signerOrProvider) {
        return new ethers_1.Contract(address, _abi, signerOrProvider);
    }
}
exports.L1ArbitrumTestMessenger__factory = L1ArbitrumTestMessenger__factory;
L1ArbitrumTestMessenger__factory.abi = _abi;