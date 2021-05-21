/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PolyBread, PolyBreadInterface } from "../PolyBread";

const _abi = [
  {
    inputs: [],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Approval",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnershipTransferred",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "Paused",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
    ],
    name: "Snapshot",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Transfer",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "Unpaused",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
    ],
    name: "allowance",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "approve",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "balanceOf",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "snapshotId",
        type: "uint256",
      },
    ],
    name: "balanceOfAt",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "burn",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "burnFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "decimals",
    outputs: [
      {
        internalType: "uint8",
        name: "",
        type: "uint8",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "subtractedValue",
        type: "uint256",
      },
    ],
    name: "decreaseAllowance",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "addedValue",
        type: "uint256",
      },
    ],
    name: "increaseAllowance",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "mint",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "name",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "owner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "pause",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "paused",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "snapshot",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "symbol",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "totalSupply",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "snapshotId",
        type: "uint256",
      },
    ],
    name: "totalSupplyAt",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "recipient",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "transfer",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "sender",
        type: "address",
      },
      {
        internalType: "address",
        name: "recipient",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "transferFrom",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "unpause",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x60806040523480156200001157600080fd5b506040805180820182526009815268141bdb1e509c99585960ba1b6020808301918252835180850190945260048452631416509160e21b9084015281519192916200005f9160039162000480565b5080516200007590600490602084019062000480565b50506005805460ff191660121790555060006200009162000117565b600a80546001600160a01b0319166001600160a01b038316908117909155604051919250906000907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0908290a350600a805460ff60a01b191690556200011133620000fb6200011b565b60ff16600a0a612710026200012460201b60201c565b6200051c565b3390565b60055460ff1690565b6001600160a01b03821662000180576040805162461bcd60e51b815260206004820152601f60248201527f45524332303a206d696e7420746f20746865207a65726f206164647265737300604482015290519081900360640190fd5b6200018e6000838362000233565b620001aa81600254620002a060201b62000bb31790919060201c565b6002556001600160a01b03821660009081526020818152604090912054620001dd91839062000bb3620002a0821b17901c565b6001600160a01b0383166000818152602081815260408083209490945583518581529351929391927fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef9281900390910190a35050565b6200023d62000302565b1562000283576040805162461bcd60e51b815260206004820152601060248201526f14185d5cd8589b194e881c185d5cd95960821b604482015290519081900360640190fd5b6200029b8383836200031260201b62000c141760201c565b505050565b600082820183811015620002fb576040805162461bcd60e51b815260206004820152601b60248201527f536166654d6174683a206164646974696f6e206f766572666c6f770000000000604482015290519081900360640190fd5b9392505050565b600a54600160a01b900460ff1690565b6200032a8383836200029b60201b620008901760201c565b6001600160a01b038316620003545762000344826200037f565b6200034e620003b0565b6200029b565b6001600160a01b0382166200036e5762000344836200037f565b62000379836200037f565b6200029b825b6001600160a01b0381166000908152600660205260409020620003ad90620003a783620003c2565b620003e1565b50565b620003c06007620003a76200043d565b565b6001600160a01b0381166000908152602081905260409020545b919050565b6000620003fa60096200044360201b62000c6c1760201c565b905080620004088462000447565b10156200029b578254600180820185556000858152602080822090930193909355938401805494850181558252902090910155565b60025490565b5490565b80546000906200045a57506000620003dc565b8154829060001981019081106200046d57fe5b90600052602060002001549050620003dc565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f10620004c357805160ff1916838001178555620004f3565b82800160010185558215620004f3579182015b82811115620004f3578251825591602001919060010190620004d6565b506200050192915062000505565b5090565b5b8082111562000501576000815560010162000506565b6117db806200052c6000396000f3fe608060405234801561001057600080fd5b506004361061014d5760003560e01c806370a08231116100c35780639711715a1161007c5780639711715a146103be578063981b24d0146103c6578063a457c2d7146103e3578063a9059cbb1461040f578063dd62ed3e1461043b578063f2fde38b146104695761014d565b806370a0823114610330578063715018a61461035657806379cc67901461035e5780638456cb591461038a5780638da5cb5b1461039257806395d89b41146103b65761014d565b80633950935111610115578063395093511461027d5780633f4ba83a146102a957806340c10f19146102b357806342966c68146102df5780634ee2cd7e146102fc5780635c975abb146103285761014d565b806306fdde0314610152578063095ea7b3146101cf57806318160ddd1461020f57806323b872dd14610229578063313ce5671461025f575b600080fd5b61015a61048f565b6040805160208082528351818301528351919283929083019185019080838360005b8381101561019457818101518382015260200161017c565b50505050905090810190601f1680156101c15780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b6101fb600480360360408110156101e557600080fd5b506001600160a01b038135169060200135610525565b604080519115158252519081900360200190f35b610217610543565b60408051918252519081900360200190f35b6101fb6004803603606081101561023f57600080fd5b506001600160a01b03813581169160208101359091169060400135610549565b6102676105d0565b6040805160ff9092168252519081900360200190f35b6101fb6004803603604081101561029357600080fd5b506001600160a01b0381351690602001356105d9565b6102b1610627565b005b6102b1600480360360408110156102c957600080fd5b506001600160a01b038135169060200135610693565b6102b1600480360360208110156102f557600080fd5b5035610703565b6102176004803603604081101561031257600080fd5b506001600160a01b038135169060200135610717565b6101fb610760565b6102176004803603602081101561034657600080fd5b50356001600160a01b0316610770565b6102b161078f565b6102b16004803603604081101561037457600080fd5b506001600160a01b03813516906020013561083b565b6102b1610895565b61039a6108ff565b604080516001600160a01b039092168252519081900360200190f35b61015a61090e565b6102b161096f565b610217600480360360208110156103dc57600080fd5b50356109d9565b6101fb600480360360408110156103f957600080fd5b506001600160a01b038135169060200135610a09565b6101fb6004803603604081101561042557600080fd5b506001600160a01b038135169060200135610a71565b6102176004803603604081101561045157600080fd5b506001600160a01b0381358116916020013516610a85565b6102b16004803603602081101561047f57600080fd5b50356001600160a01b0316610ab0565b60038054604080516020601f600260001961010060018816150201909516949094049384018190048102820181019092528281526060939092909183018282801561051b5780601f106104f05761010080835404028352916020019161051b565b820191906000526020600020905b8154815290600101906020018083116104fe57829003601f168201915b5050505050905090565b6000610539610532610c70565b8484610c74565b5060015b92915050565b60025490565b6000610556848484610d60565b6105c684610562610c70565b6105c1856040518060600160405280602881526020016116ab602891396001600160a01b038a166000908152600160205260408120906105a0610c70565b6001600160a01b031681526020810191909152604001600020549190610ebb565b610c74565b5060019392505050565b60055460ff1690565b60006105396105e6610c70565b846105c185600160006105f7610c70565b6001600160a01b03908116825260208083019390935260409182016000908120918c168152925290205490610bb3565b61062f610c70565b6001600160a01b03166106406108ff565b6001600160a01b031614610689576040805162461bcd60e51b815260206004820181905260248201526000805160206116d3833981519152604482015290519081900360640190fd5b610691610f52565b565b61069b610c70565b6001600160a01b03166106ac6108ff565b6001600160a01b0316146106f5576040805162461bcd60e51b815260206004820181905260248201526000805160206116d3833981519152604482015290519081900360640190fd5b6106ff8282610ff5565b5050565b61071461070e610c70565b826110e5565b50565b6001600160a01b03821660009081526006602052604081208190819061073e9085906111e1565b91509150816107555761075085610770565b610757565b805b95945050505050565b600a54600160a01b900460ff1690565b6001600160a01b0381166000908152602081905260409020545b919050565b610797610c70565b6001600160a01b03166107a86108ff565b6001600160a01b0316146107f1576040805162461bcd60e51b815260206004820181905260248201526000805160206116d3833981519152604482015290519081900360640190fd5b600a546040516000916001600160a01b0316907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0908390a3600a80546001600160a01b0319169055565b6000610872826040518060600160405280602481526020016116f36024913961086b86610866610c70565b610a85565b9190610ebb565b905061088683610880610c70565b83610c74565b61089083836110e5565b505050565b61089d610c70565b6001600160a01b03166108ae6108ff565b6001600160a01b0316146108f7576040805162461bcd60e51b815260206004820181905260248201526000805160206116d3833981519152604482015290519081900360640190fd5b6106916112de565b600a546001600160a01b031690565b60048054604080516020601f600260001961010060018816150201909516949094049384018190048102820181019092528281526060939092909183018282801561051b5780601f106104f05761010080835404028352916020019161051b565b610977610c70565b6001600160a01b03166109886108ff565b6001600160a01b0316146109d1576040805162461bcd60e51b815260206004820181905260248201526000805160206116d3833981519152604482015290519081900360640190fd5b610714611367565b60008060006109e98460076111e1565b91509150816109ff576109fa610543565b610a01565b805b949350505050565b6000610539610a16610c70565b846105c1856040518060600160405280602581526020016117816025913960016000610a40610c70565b6001600160a01b03908116825260208083019390935260409182016000908120918d16815292529020549190610ebb565b6000610539610a7e610c70565b8484610d60565b6001600160a01b03918216600090815260016020908152604080832093909416825291909152205490565b610ab8610c70565b6001600160a01b0316610ac96108ff565b6001600160a01b031614610b12576040805162461bcd60e51b815260206004820181905260248201526000805160206116d3833981519152604482015290519081900360640190fd5b6001600160a01b038116610b575760405162461bcd60e51b815260040180806020018281038252602681526020018061163d6026913960400191505060405180910390fd5b600a546040516001600160a01b038084169216907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a3600a80546001600160a01b0319166001600160a01b0392909216919091179055565b600082820183811015610c0d576040805162461bcd60e51b815260206004820152601b60248201527f536166654d6174683a206164646974696f6e206f766572666c6f770000000000604482015290519081900360640190fd5b9392505050565b610c1f838383610890565b6001600160a01b038316610c4357610c36826113bb565b610c3e6113e5565b610890565b6001600160a01b038216610c5a57610c36836113bb565b610c63836113bb565b610890826113bb565b5490565b3390565b6001600160a01b038316610cb95760405162461bcd60e51b815260040180806020018281038252602481526020018061175d6024913960400191505060405180910390fd5b6001600160a01b038216610cfe5760405162461bcd60e51b81526004018080602001828103825260228152602001806116636022913960400191505060405180910390fd5b6001600160a01b03808416600081815260016020908152604080832094871680845294825291829020859055815185815291517f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b9259281900390910190a3505050565b6001600160a01b038316610da55760405162461bcd60e51b81526004018080602001828103825260258152602001806117386025913960400191505060405180910390fd5b6001600160a01b038216610dea5760405162461bcd60e51b81526004018080602001828103825260238152602001806115f86023913960400191505060405180910390fd5b610df58383836113f2565b610e3281604051806060016040528060268152602001611685602691396001600160a01b0386166000908152602081905260409020549190610ebb565b6001600160a01b038085166000908152602081905260408082209390935590841681522054610e619082610bb3565b6001600160a01b038084166000818152602081815260409182902094909455805185815290519193928716927fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef92918290030190a3505050565b60008184841115610f4a5760405162461bcd60e51b81526004018080602001828103825283818151815260200191508051906020019080838360005b83811015610f0f578181015183820152602001610ef7565b50505050905090810190601f168015610f3c5780820380516001836020036101000a031916815260200191505b509250505060405180910390fd5b505050900390565b610f5a610760565b610fa2576040805162461bcd60e51b815260206004820152601460248201527314185d5cd8589b194e881b9bdd081c185d5cd95960621b604482015290519081900360640190fd5b600a805460ff60a01b191690557f5db9ee0a495bf2e6ff9c91a7834c1ba4fdd244a5e8aa4e537bd38aeae4b073aa610fd8610c70565b604080516001600160a01b039092168252519081900360200190a1565b6001600160a01b038216611050576040805162461bcd60e51b815260206004820152601f60248201527f45524332303a206d696e7420746f20746865207a65726f206164647265737300604482015290519081900360640190fd5b61105c600083836113f2565b6002546110699082610bb3565b6002556001600160a01b03821660009081526020819052604090205461108f9082610bb3565b6001600160a01b0383166000818152602081815260408083209490945583518581529351929391927fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef9281900390910190a35050565b6001600160a01b03821661112a5760405162461bcd60e51b81526004018080602001828103825260218152602001806117176021913960400191505060405180910390fd5b611136826000836113f2565b6111738160405180606001604052806022815260200161161b602291396001600160a01b0385166000908152602081905260409020549190610ebb565b6001600160a01b038316600090815260208190526040902055600254611199908261144a565b6002556040805182815290516000916001600160a01b038516917fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef9181900360200190a35050565b60008060008411611232576040805162461bcd60e51b815260206004820152601660248201527504552433230536e617073686f743a20696420697320360541b604482015290519081900360640190fd5b61123c6009610c6c565b841115611290576040805162461bcd60e51b815260206004820152601d60248201527f4552433230536e617073686f743a206e6f6e6578697374656e74206964000000604482015290519081900360640190fd5b600061129c84866114a7565b84549091508114156112b55760008092509250506112d7565b60018460010182815481106112c657fe5b906000526020600020015492509250505b9250929050565b6112e6610760565b1561132b576040805162461bcd60e51b815260206004820152601060248201526f14185d5cd8589b194e881c185d5cd95960821b604482015290519081900360640190fd5b600a805460ff60a01b1916600160a01b1790557f62e78cea01bee320cd4e420270b5ea74000d11b0c9f74754ebdbfc544b05a258610fd8610c70565b60006113736009611548565b600061137f6009610c6c565b6040805182815290519192507f8030e83b04d87bef53480e26263266d6ca66863aa8506aca6f2559d18aa1cb67919081900360200190a1905090565b6001600160a01b0381166000908152600660205260409020610714906113e083610770565b611551565b61069160076113e0610543565b6113fa610760565b1561143f576040805162461bcd60e51b815260206004820152601060248201526f14185d5cd8589b194e881c185d5cd95960821b604482015290519081900360640190fd5b610890838383610c14565b6000828211156114a1576040805162461bcd60e51b815260206004820152601e60248201527f536166654d6174683a207375627472616374696f6e206f766572666c6f770000604482015290519081900360640190fd5b50900390565b81546000906114b85750600061053d565b82546000905b808210156115075760006114d2838361159d565b9050848682815481106114e157fe5b906000526020600020015411156114fa57809150611501565b8060010192505b506114be565b60008211801561152f57508385600184038154811061152257fe5b9060005260206000200154145b15611540575060001901905061053d565b50905061053d565b80546001019055565b600061155d6009610c6c565b905080611569846115c2565b1015610890578254600180820185556000858152602080822090930193909355938401805494850181558252902090910155565b600060028083066002850601816115b057fe5b04600283046002850401019392505050565b80546000906115d35750600061078a565b8154829060001981019081106115e557fe5b9060005260206000200154905061078a56fe45524332303a207472616e7366657220746f20746865207a65726f206164647265737345524332303a206275726e20616d6f756e7420657863656564732062616c616e63654f776e61626c653a206e6577206f776e657220697320746865207a65726f206164647265737345524332303a20617070726f766520746f20746865207a65726f206164647265737345524332303a207472616e7366657220616d6f756e7420657863656564732062616c616e636545524332303a207472616e7366657220616d6f756e74206578636565647320616c6c6f77616e63654f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e657245524332303a206275726e20616d6f756e74206578636565647320616c6c6f77616e636545524332303a206275726e2066726f6d20746865207a65726f206164647265737345524332303a207472616e736665722066726f6d20746865207a65726f206164647265737345524332303a20617070726f76652066726f6d20746865207a65726f206164647265737345524332303a2064656372656173656420616c6c6f77616e63652062656c6f77207a65726fa26469706673582212209f9bc3e6f64379e616996e76fb2da34408a64e516900ef53f67089e760dc8fc164736f6c63430007030033";

export class PolyBread__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<PolyBread> {
    return super.deploy(overrides || {}) as Promise<PolyBread>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): PolyBread {
    return super.attach(address) as PolyBread;
  }
  connect(signer: Signer): PolyBread__factory {
    return super.connect(signer) as PolyBread__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): PolyBreadInterface {
    return new utils.Interface(_abi) as PolyBreadInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): PolyBread {
    return new Contract(address, _abi, signerOrProvider) as PolyBread;
  }
}