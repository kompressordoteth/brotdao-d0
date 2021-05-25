/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PbNFT, PbNFTInterface } from "../PbNFT";

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
        name: "approved",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "tokenId",
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
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        indexed: false,
        internalType: "bool",
        name: "approved",
        type: "bool",
      },
    ],
    name: "ApprovalForAll",
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
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "NFTMinted",
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
        indexed: true,
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "Transfer",
    type: "event",
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
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "approve",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
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
    inputs: [],
    name: "baseURI",
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
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "breads",
    outputs: [
      {
        internalType: "address",
        name: "createdBy",
        type: "address",
      },
      {
        internalType: "string",
        name: "name",
        type: "string",
      },
      {
        internalType: "string",
        name: "description",
        type: "string",
      },
      {
        internalType: "string",
        name: "url",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "getApproved",
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
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "address",
        name: "operator",
        type: "address",
      },
    ],
    name: "isApprovedForAll",
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
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "string",
        name: "tokenURI",
        type: "string",
      },
      {
        internalType: "string",
        name: "_name",
        type: "string",
      },
      {
        internalType: "string",
        name: "_desc",
        type: "string",
      },
      {
        internalType: "string",
        name: "_url",
        type: "string",
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
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "ownerOf",
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
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "safeTransferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "_data",
        type: "bytes",
      },
    ],
    name: "safeTransferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        internalType: "bool",
        name: "approved",
        type: "bool",
      },
    ],
    name: "setApprovalForAll",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes4",
        name: "interfaceId",
        type: "bytes4",
      },
    ],
    name: "supportsInterface",
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
    inputs: [
      {
        internalType: "uint256",
        name: "index",
        type: "uint256",
      },
    ],
    name: "tokenByIndex",
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
        name: "owner",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "index",
        type: "uint256",
      },
    ],
    name: "tokenOfOwnerByIndex",
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
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "tokenURI",
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
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "transferFrom",
    outputs: [],
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
];

const _bytecode =
  "0x60806040523480156200001157600080fd5b5060405180604001604052806005815260200164141893919560da1b81525060405180604001604052806005815260200164141093919560da1b815250620000666301ffc9a760e01b6200015460201b60201c565b81516200007b906006906020850190620001f6565b50805162000091906007906020840190620001f6565b50620000a46380ac58cd60e01b62000154565b620000b6635b5e139f60e01b62000154565b620000c863780e9d6360e01b62000154565b5060009050620000d7620001d9565b600a80546001600160a01b0319166001600160a01b038316908117909155604051919250906000907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0908290a350604080518082019091526007815266697066733a2f2f60c81b60208201526200014e90620001dd565b62000292565b6001600160e01b03198082161415620001b4576040805162461bcd60e51b815260206004820152601c60248201527f4552433136353a20696e76616c696420696e7465726661636520696400000000604482015290519081900360640190fd5b6001600160e01b0319166000908152602081905260409020805460ff19166001179055565b3390565b8051620001f2906009906020840190620001f6565b5050565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f106200023957805160ff191683800117855562000269565b8280016001018555821562000269579182015b82811115620002695782518255916020019190600101906200024c565b50620002779291506200027b565b5090565b5b808211156200027757600081556001016200027c565b6124d380620002a26000396000f3fe608060405234801561001057600080fd5b50600436106101425760003560e01c806370a08231116100b8578063a22cb4651161007c578063a22cb46514610509578063a40d1b1014610537578063b88d4fde146106da578063c87b56dd1461079e578063e985e9c5146107bb578063f2fde38b146107e957610142565b806370a082311461035a578063715018a6146103805780638da5cb5b1461038857806395d89b4114610390578063986e784b1461039857610142565b806323b872dd1161010a57806323b872dd146102805780632f745c59146102b657806342842e0e146102e25780634f6ccce7146103185780636352211e146103355780636c0360eb1461035257610142565b806301ffc9a71461014757806306fdde0314610182578063081812fc146101ff578063095ea7b31461023857806318160ddd14610266575b600080fd5b61016e6004803603602081101561015d57600080fd5b50356001600160e01b03191661080f565b604080519115158252519081900360200190f35b61018a610832565b6040805160208082528351818301528351919283929083019185019080838360005b838110156101c45781810151838201526020016101ac565b50505050905090810190601f1680156101f15780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b61021c6004803603602081101561021557600080fd5b50356108c8565b604080516001600160a01b039092168252519081900360200190f35b6102646004803603604081101561024e57600080fd5b506001600160a01b03813516906020013561092a565b005b61026e610a05565b60408051918252519081900360200190f35b6102646004803603606081101561029657600080fd5b506001600160a01b03813581169160208101359091169060400135610a16565b61026e600480360360408110156102cc57600080fd5b506001600160a01b038135169060200135610a6d565b610264600480360360608110156102f857600080fd5b506001600160a01b03813581169160208101359091169060400135610a98565b61026e6004803603602081101561032e57600080fd5b5035610ab3565b61021c6004803603602081101561034b57600080fd5b5035610ac9565b61018a610af1565b61026e6004803603602081101561037057600080fd5b50356001600160a01b0316610b52565b610264610bba565b61021c610c78565b61018a610c87565b6103b5600480360360208110156103ae57600080fd5b5035610ce8565b60405180856001600160a01b03168152602001806020018060200180602001848103845287818151815260200191508051906020019080838360005b838110156104095781810151838201526020016103f1565b50505050905090810190601f1680156104365780820380516001836020036101000a031916815260200191505b50848103835286518152865160209182019188019080838360005b83811015610469578181015183820152602001610451565b50505050905090810190601f1680156104965780820380516001836020036101000a031916815260200191505b50848103825285518152855160209182019187019080838360005b838110156104c95781810151838201526020016104b1565b50505050905090810190601f1680156104f65780820380516001836020036101000a031916815260200191505b5097505050505050505060405180910390f35b6102646004803603604081101561051f57600080fd5b506001600160a01b0381351690602001351515610ece565b610264600480360360a081101561054d57600080fd5b6001600160a01b038235169190810190604081016020820135600160201b81111561057757600080fd5b82018360208201111561058957600080fd5b803590602001918460018302840111600160201b831117156105aa57600080fd5b91908080601f0160208091040260200160405190810160405280939291908181526020018383808284376000920191909152509295949360208101935035915050600160201b8111156105fc57600080fd5b82018360208201111561060e57600080fd5b803590602001918460018302840111600160201b8311171561062f57600080fd5b919390929091602081019035600160201b81111561064c57600080fd5b82018360208201111561065e57600080fd5b803590602001918460018302840111600160201b8311171561067f57600080fd5b919390929091602081019035600160201b81111561069c57600080fd5b8201836020820111156106ae57600080fd5b803590602001918460018302840111600160201b831117156106cf57600080fd5b509092509050610fd3565b610264600480360360808110156106f057600080fd5b6001600160a01b03823581169260208101359091169160408201359190810190608081016060820135600160201b81111561072a57600080fd5b82018360208201111561073c57600080fd5b803590602001918460018302840111600160201b8311171561075d57600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600092019190915250929550611175945050505050565b61018a600480360360208110156107b457600080fd5b50356111d3565b61016e600480360360408110156107d157600080fd5b506001600160a01b0381358116916020013516611456565b610264600480360360208110156107ff57600080fd5b50356001600160a01b0316611484565b6001600160e01b0319811660009081526020819052604090205460ff165b919050565b60068054604080516020601f60026000196101006001881615020190951694909404938401819004810282018101909252828152606093909290918301828280156108be5780601f10610893576101008083540402835291602001916108be565b820191906000526020600020905b8154815290600101906020018083116108a157829003601f168201915b5050505050905090565b60006108d382611599565b61090e5760405162461bcd60e51b815260040180806020018281038252602c8152602001806123c8602c913960400191505060405180910390fd5b506000908152600460205260409020546001600160a01b031690565b600061093582610ac9565b9050806001600160a01b0316836001600160a01b031614156109885760405162461bcd60e51b815260040180806020018281038252602181526020018061244c6021913960400191505060405180910390fd5b806001600160a01b031661099a6115a6565b6001600160a01b031614806109bb57506109bb816109b66115a6565b611456565b6109f65760405162461bcd60e51b815260040180806020018281038252603881526020018061231b6038913960400191505060405180910390fd5b610a0083836115aa565b505050565b6000610a116002611618565b905090565b610a27610a216115a6565b82611623565b610a625760405162461bcd60e51b815260040180806020018281038252603181526020018061246d6031913960400191505060405180910390fd5b610a008383836116c7565b6001600160a01b0382166000908152600160205260408120610a8f9083611813565b90505b92915050565b610a0083838360405180602001604052806000815250611175565b600080610ac160028461181f565b509392505050565b6000610a928260405180606001604052806029815260200161237d602991396002919061183b565b60098054604080516020601f60026000196101006001881615020190951694909404938401819004810282018101909252828152606093909290918301828280156108be5780601f10610893576101008083540402835291602001916108be565b60006001600160a01b038216610b995760405162461bcd60e51b815260040180806020018281038252602a815260200180612353602a913960400191505060405180910390fd5b6001600160a01b0382166000908152600160205260409020610a9290611618565b610bc26115a6565b6001600160a01b0316610bd3610c78565b6001600160a01b031614610c2e576040805162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604482015290519081900360640190fd5b600a546040516000916001600160a01b0316907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0908390a3600a80546001600160a01b0319169055565b600a546001600160a01b031690565b60078054604080516020601f60026000196101006001881615020190951694909404938401819004810282018101909252828152606093909290918301828280156108be5780601f10610893576101008083540402835291602001916108be565b600c8181548110610cf557fe5b600091825260209182902060049091020180546001808301805460408051601f60026000199685161561010002969096019093169490940491820187900487028401870190528083526001600160a01b039093169550929390929190830182828015610da25780601f10610d7757610100808354040283529160200191610da2565b820191906000526020600020905b815481529060010190602001808311610d8557829003601f168201915b50505060028085018054604080516020601f6000196101006001871615020190941695909504928301859004850281018501909152818152959695945090925090830182828015610e345780601f10610e0957610100808354040283529160200191610e34565b820191906000526020600020905b815481529060010190602001808311610e1757829003601f168201915b5050505060038301805460408051602060026001851615610100026000190190941693909304601f8101849004840282018401909252818152949594935090830182828015610ec45780601f10610e9957610100808354040283529160200191610ec4565b820191906000526020600020905b815481529060010190602001808311610ea757829003601f168201915b5050505050905084565b610ed66115a6565b6001600160a01b0316826001600160a01b03161415610f3c576040805162461bcd60e51b815260206004820152601960248201527f4552433732313a20617070726f766520746f2063616c6c657200000000000000604482015290519081900360640190fd5b8060056000610f496115a6565b6001600160a01b03908116825260208083019390935260409182016000908120918716808252919093529120805460ff191692151592909217909155610f8d6115a6565b6001600160a01b03167f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c318360405180821515815260200191505060405180910390a35050565b6000600c805490509050600c60405180608001604052808b6001600160a01b0316815260200189898080601f016020809104026020016040519081016040528093929190818152602001838380828437600092019190915250505090825250604080516020601f8a0181900481028201810190925288815291810191908990899081908401838280828437600092019190915250505090825250604080516020601f8801819004810282018101909252868152918101919087908790819084018382808284376000920182905250939094525050835460018082018655948252602091829020845160049092020180546001600160a01b0319166001600160a01b03909216919091178155838201518051949591946110f894509185019201906121bd565b50604082015180516111149160028401916020909101906121bd565b50606082015180516111309160038401916020909101906121bd565b50505061113d8982611852565b604051819033907f4cc0a9c4a99ddc700de1af2c9f916a7cbfdb71f14801ccff94061ad1ef8a804090600090a3505050505050505050565b6111866111806115a6565b83611623565b6111c15760405162461bcd60e51b815260040180806020018281038252603181526020018061246d6031913960400191505060405180910390fd5b6111cd84848484611870565b50505050565b60606111de82611599565b6112195760405162461bcd60e51b815260040180806020018281038252602f81526020018061241d602f913960400191505060405180910390fd5b60008281526008602090815260409182902080548351601f60026000196101006001861615020190931692909204918201849004840281018401909452808452606093928301828280156112ae5780601f10611283576101008083540402835291602001916112ae565b820191906000526020600020905b81548152906001019060200180831161129157829003601f168201915b5050505050905060606112bf610af1565b90508051600014156112d35750905061082d565b8151156113945780826040516020018083805190602001908083835b6020831061130e5780518252601f1990920191602091820191016112ef565b51815160209384036101000a600019018019909216911617905285519190930192850191508083835b602083106113565780518252601f199092019160209182019101611337565b6001836020036101000a038019825116818451168082178552505050505050905001925050506040516020818303038152906040529250505061082d565b8061139e856118c2565b6040516020018083805190602001908083835b602083106113d05780518252601f1990920191602091820191016113b1565b51815160209384036101000a600019018019909216911617905285519190930192850191508083835b602083106114185780518252601f1990920191602091820191016113f9565b6001836020036101000a0380198251168184511680821785525050505050509050019250505060405160208183030381529060405292505050919050565b6001600160a01b03918216600090815260056020908152604080832093909416825291909152205460ff1690565b61148c6115a6565b6001600160a01b031661149d610c78565b6001600160a01b0316146114f8576040805162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604482015290519081900360640190fd5b6001600160a01b03811661153d5760405162461bcd60e51b81526004018080602001828103825260268152602001806122a56026913960400191505060405180910390fd5b600a546040516001600160a01b038084169216907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a3600a80546001600160a01b0319166001600160a01b0392909216919091179055565b6000610a9260028361199d565b3390565b600081815260046020526040902080546001600160a01b0319166001600160a01b03841690811790915581906115df82610ac9565b6001600160a01b03167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92560405160405180910390a45050565b6000610a92826119a9565b600061162e82611599565b6116695760405162461bcd60e51b815260040180806020018281038252602c8152602001806122ef602c913960400191505060405180910390fd5b600061167483610ac9565b9050806001600160a01b0316846001600160a01b031614806116af5750836001600160a01b03166116a4846108c8565b6001600160a01b0316145b806116bf57506116bf8185611456565b949350505050565b826001600160a01b03166116da82610ac9565b6001600160a01b03161461171f5760405162461bcd60e51b81526004018080602001828103825260298152602001806123f46029913960400191505060405180910390fd5b6001600160a01b0382166117645760405162461bcd60e51b81526004018080602001828103825260248152602001806122cb6024913960400191505060405180910390fd5b61176f838383610a00565b61177a6000826115aa565b6001600160a01b038316600090815260016020526040902061179c90826119ad565b506001600160a01b03821660009081526001602052604090206117bf90826119b9565b506117cc600282846119c5565b5080826001600160a01b0316846001600160a01b03167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef60405160405180910390a4505050565b6000610a8f83836119db565b600080808061182e8686611a3f565b9097909650945050505050565b6000611848848484611aba565b90505b9392505050565b61186c828260405180602001604052806000815250611b84565b5050565b61187b8484846116c7565b61188784848484611bd6565b6111cd5760405162461bcd60e51b81526004018080602001828103825260328152602001806122736032913960400191505060405180910390fd5b6060816118e757506040805180820190915260018152600360fc1b602082015261082d565b8160005b81156118ff57600101600a820491506118eb565b60608167ffffffffffffffff8111801561191857600080fd5b506040519080825280601f01601f191660200182016040528015611943576020820181803683370190505b50859350905060001982015b831561199457600a840660300160f81b8282806001900393508151811061197257fe5b60200101906001600160f81b031916908160001a905350600a8404935061194f565b50949350505050565b6000610a8f8383611d3e565b5490565b6000610a8f8383611d56565b6000610a8f8383611e1c565b600061184884846001600160a01b038516611e66565b81546000908210611a1d5760405162461bcd60e51b81526004018080602001828103825260228152602001806122516022913960400191505060405180910390fd5b826000018281548110611a2c57fe5b9060005260206000200154905092915050565b815460009081908310611a835760405162461bcd60e51b81526004018080602001828103825260228152602001806123a66022913960400191505060405180910390fd5b6000846000018481548110611a9457fe5b906000526020600020906002020190508060000154816001015492509250509250929050565b60008281526001840160205260408120548281611b555760405162461bcd60e51b81526004018080602001828103825283818151815260200191508051906020019080838360005b83811015611b1a578181015183820152602001611b02565b50505050905090810190601f168015611b475780820380516001836020036101000a031916815260200191505b509250505060405180910390fd5b50846000016001820381548110611b6857fe5b9060005260206000209060020201600101549150509392505050565b611b8e8383611efd565b611b9b6000848484611bd6565b610a005760405162461bcd60e51b81526004018080602001828103825260328152602001806122736032913960400191505060405180910390fd5b6000611bea846001600160a01b031661202b565b611bf6575060016116bf565b6060611d04630a85bd0160e11b611c0b6115a6565b88878760405160240180856001600160a01b03168152602001846001600160a01b0316815260200183815260200180602001828103825283818151815260200191508051906020019080838360005b83811015611c72578181015183820152602001611c5a565b50505050905090810190601f168015611c9f5780820380516001836020036101000a031916815260200191505b5095505050505050604051602081830303815290604052906001600160e01b0319166020820180516001600160e01b038381831617835250505050604051806060016040528060328152602001612273603291396001600160a01b0388169190612031565b90506000818060200190516020811015611d1d57600080fd5b50516001600160e01b031916630a85bd0160e11b1492505050949350505050565b60009081526001919091016020526040902054151590565b60008181526001830160205260408120548015611e125783546000198083019190810190600090879083908110611d8957fe5b9060005260206000200154905080876000018481548110611da657fe5b600091825260208083209091019290925582815260018981019092526040902090840190558654879080611dd657fe5b60019003818190600052602060002001600090559055866001016000878152602001908152602001600020600090556001945050505050610a92565b6000915050610a92565b6000611e288383611d3e565b611e5e57508154600181810184556000848152602080822090930184905584548482528286019093526040902091909155610a92565b506000610a92565b600082815260018401602052604081205480611ecb57505060408051808201825283815260208082018481528654600181810189556000898152848120955160029093029095019182559151908201558654868452818801909252929091205561184b565b82856000016001830381548110611ede57fe5b906000526020600020906002020160010181905550600091505061184b565b6001600160a01b038216611f58576040805162461bcd60e51b815260206004820181905260248201527f4552433732313a206d696e7420746f20746865207a65726f2061646472657373604482015290519081900360640190fd5b611f6181611599565b15611fb3576040805162461bcd60e51b815260206004820152601c60248201527f4552433732313a20746f6b656e20616c7265616479206d696e74656400000000604482015290519081900360640190fd5b611fbf60008383610a00565b6001600160a01b0382166000908152600160205260409020611fe190826119b9565b50611fee600282846119c5565b5060405181906001600160a01b038416906000907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef908290a45050565b3b151590565b60606118488484600085856120458561202b565b612096576040805162461bcd60e51b815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e7472616374000000604482015290519081900360640190fd5b60006060866001600160a01b031685876040518082805190602001908083835b602083106120d55780518252601f1990920191602091820191016120b6565b6001836020036101000a03801982511681845116808217855250505050505090500191505060006040518083038185875af1925050503d8060008114612137576040519150601f19603f3d011682016040523d82523d6000602084013e61213c565b606091505b509150915061214c828286612157565b979650505050505050565b6060831561216657508161184b565b8251156121765782518084602001fd5b60405162461bcd60e51b8152602060048201818152845160248401528451859391928392604401919085019080838360008315611b1a578181015183820152602001611b02565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f106121fe57805160ff191683800117855561222b565b8280016001018555821561222b579182015b8281111561222b578251825591602001919060010190612210565b5061223792915061223b565b5090565b5b80821115612237576000815560010161223c56fe456e756d657261626c655365743a20696e646578206f7574206f6620626f756e64734552433732313a207472616e7366657220746f206e6f6e20455243373231526563656976657220696d706c656d656e7465724f776e61626c653a206e6577206f776e657220697320746865207a65726f20616464726573734552433732313a207472616e7366657220746f20746865207a65726f20616464726573734552433732313a206f70657261746f7220717565727920666f72206e6f6e6578697374656e7420746f6b656e4552433732313a20617070726f76652063616c6c6572206973206e6f74206f776e6572206e6f7220617070726f76656420666f7220616c6c4552433732313a2062616c616e636520717565727920666f7220746865207a65726f20616464726573734552433732313a206f776e657220717565727920666f72206e6f6e6578697374656e7420746f6b656e456e756d657261626c654d61703a20696e646578206f7574206f6620626f756e64734552433732313a20617070726f76656420717565727920666f72206e6f6e6578697374656e7420746f6b656e4552433732313a207472616e73666572206f6620746f6b656e2074686174206973206e6f74206f776e4552433732314d657461646174613a2055524920717565727920666f72206e6f6e6578697374656e7420746f6b656e4552433732313a20617070726f76616c20746f2063757272656e74206f776e65724552433732313a207472616e736665722063616c6c6572206973206e6f74206f776e6572206e6f7220617070726f766564a26469706673582212201ba9f0c2b180819935f4ba3cf72e83854628446ada652b8162ae2d5521bd828264736f6c63430007030033";

export class PbNFT__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<PbNFT> {
    return super.deploy(overrides || {}) as Promise<PbNFT>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): PbNFT {
    return super.attach(address) as PbNFT;
  }
  connect(signer: Signer): PbNFT__factory {
    return super.connect(signer) as PbNFT__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): PbNFTInterface {
    return new utils.Interface(_abi) as PbNFTInterface;
  }
  static connect(address: string, signerOrProvider: Signer | Provider): PbNFT {
    return new Contract(address, _abi, signerOrProvider) as PbNFT;
  }
}
