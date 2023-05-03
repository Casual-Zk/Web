import React from 'react'
import DangerousHTML from 'dangerous-html/react'
import { Helmet } from 'react-helmet'
import './home.css'
// My libraries
import { useState } from 'react';
import { ethers } from "ethers";
// Firebase
import { initializeApp } from 'firebase/app';
import { getAnalytics } from "firebase/analytics";
import { getAuth, onAuthStateChanged, GoogleAuthProvider, signInWithPopup, signOut } from 'firebase/auth';
import { getFirestore, doc, setDoc, getDoc } from 'firebase/firestore';
import { func } from 'prop-types';
import { async } from 'q';

// Initilize the firebase
const firebaseApp = initializeApp({
  apiKey: "AIzaSyAsTA4RpqGrYq4aeIQVC2ktkgV2aYjiA9Q",
  authDomain: "zk-chickens.firebaseapp.com",
  projectId: "zk-chickens",
  storageBucket: "zk-chickens.appspot.com",
  messagingSenderId: "502041118196",
  appId: "1:502041118196:web:068f3313df703175bca5a1",
  measurementId: "G-2JYDETGV2W"
});
// Initilize the services
const analytics = getAnalytics(firebaseApp);
const auth = getAuth(firebaseApp);
const db = getFirestore(firebaseApp);
const provider = new GoogleAuthProvider();




  const contractAddress = '0x67F6cd2e7B1840a51A98E38cE58D2f4537a45060'; // item Contract
  const contractAbi = [
    {
      "inputs": [],
      "stateMutability": "nonpayable",
      "type": "constructor"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "account",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "operator",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "bool",
          "name": "approved",
          "type": "bool"
        }
      ],
      "name": "ApprovalForAll",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "previousOwner",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "newOwner",
          "type": "address"
        }
      ],
      "name": "OwnershipTransferred",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "operator",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "from",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "to",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "uint256[]",
          "name": "ids",
          "type": "uint256[]"
        },
        {
          "indexed": false,
          "internalType": "uint256[]",
          "name": "values",
          "type": "uint256[]"
        }
      ],
      "name": "TransferBatch",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "operator",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "from",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "to",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "id",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "value",
          "type": "uint256"
        }
      ],
      "name": "TransferSingle",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "internalType": "string",
          "name": "value",
          "type": "string"
        },
        {
          "indexed": true,
          "internalType": "uint256",
          "name": "id",
          "type": "uint256"
        }
      ],
      "name": "URI",
      "type": "event"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "account",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "id",
          "type": "uint256"
        }
      ],
      "name": "balanceOf",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address[]",
          "name": "accounts",
          "type": "address[]"
        },
        {
          "internalType": "uint256[]",
          "name": "ids",
          "type": "uint256[]"
        }
      ],
      "name": "balanceOfBatch",
      "outputs": [
        {
          "internalType": "uint256[]",
          "name": "",
          "type": "uint256[]"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "account",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "id",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "value",
          "type": "uint256"
        }
      ],
      "name": "burn",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "account",
          "type": "address"
        },
        {
          "internalType": "uint256[]",
          "name": "ids",
          "type": "uint256[]"
        },
        {
          "internalType": "uint256[]",
          "name": "values",
          "type": "uint256[]"
        }
      ],
      "name": "burnBatch",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "id",
          "type": "uint256"
        }
      ],
      "name": "exists",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "account",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "operator",
          "type": "address"
        }
      ],
      "name": "isApprovedForAll",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "account",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "id",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "amount",
          "type": "uint256"
        },
        {
          "internalType": "bytes",
          "name": "data",
          "type": "bytes"
        }
      ],
      "name": "mint",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "to",
          "type": "address"
        },
        {
          "internalType": "uint256[]",
          "name": "ids",
          "type": "uint256[]"
        },
        {
          "internalType": "uint256[]",
          "name": "amounts",
          "type": "uint256[]"
        },
        {
          "internalType": "bytes",
          "name": "data",
          "type": "bytes"
        }
      ],
      "name": "mintBatch",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "owner",
      "outputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "renounceOwnership",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "from",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "to",
          "type": "address"
        },
        {
          "internalType": "uint256[]",
          "name": "ids",
          "type": "uint256[]"
        },
        {
          "internalType": "uint256[]",
          "name": "amounts",
          "type": "uint256[]"
        },
        {
          "internalType": "bytes",
          "name": "data",
          "type": "bytes"
        }
      ],
      "name": "safeBatchTransferFrom",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "from",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "to",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "id",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "amount",
          "type": "uint256"
        },
        {
          "internalType": "bytes",
          "name": "data",
          "type": "bytes"
        }
      ],
      "name": "safeTransferFrom",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "operator",
          "type": "address"
        },
        {
          "internalType": "bool",
          "name": "approved",
          "type": "bool"
        }
      ],
      "name": "setApprovalForAll",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "string",
          "name": "newuri",
          "type": "string"
        }
      ],
      "name": "setURI",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "bytes4",
          "name": "interfaceId",
          "type": "bytes4"
        }
      ],
      "name": "supportsInterface",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "id",
          "type": "uint256"
        }
      ],
      "name": "totalSupply",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "newOwner",
          "type": "address"
        }
      ],
      "name": "transferOwnership",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "name": "uri",
      "outputs": [
        {
          "internalType": "string",
          "name": "",
          "type": "string"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    }
  ]; // the ABI of the smart contract 
  const desiredChainId = '0x118'; // Era Test: 118, Era Main: 144
  /*
    *  TESTNET
    *  Name: zkSync Era Testnet
    *  RPC: https://testnet.era.zksync.dev
    *  ID: 280
    *  Currency ETH
    *  Explorer: https://goerli.explorer.zksync.io/
    *  
    *  MAINNET
    *  Name: zkSync Era Mainnet
    *  RPC: https://mainnet.era.zksync.io
    *  ID: 324
    *  Currency ETH
    *  Explorer: https://explorer.zksync.io/  
    *  
  */

  // Initialize userOjbect
  const [user, setUser] = useState({
    walletAddress : "",
    displayName : ""
  });

  // Initialize the menu state
  const [menu, setMenu] = useState({
    Main: true,
    Profile: false,
    Mint: false
  });

  // Variables
  const [walletAddress, setWalletAddress] = useState("");
  const [userName, setUsername] = useState("");
  const [userlogin, setUserLogin] = useState(Boolean);
  const [mintResult, setMintResult] = useState("");

  // Google Login
  function GoogleLogin(){
    signInWithPopup(auth, provider).then((result) => {
      // This gives you a Google Access Token. You can use it to access the Google API.
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;
      // The signed-in user info.
      const userLogin = result.user;
      // IdP data available using getAdditionalUserInfo(result)
      user.displayName = userLogin.displayName;
      setUser(user);
    }).catch((error) => {
      // Handle Errors here.
      const errorCode = error.code;
      console.log("ERROR: " + error.code);
  
      const errorMessage = error.message;
      console.log("ERROR: " + error.message);
  
      // The email of the user's account used.
      const email = error.customData.email;
      // The AuthCredential type that was used.
      const credential = GoogleAuthProvider.credentialFromError(error);
    });
  }

  // Logout
  function Logout(){
    signOut(auth).then(() => {
      console.log("Logged out!")
    }).catch((error) => {
      console.log("ERROR: " + error.message);
    });
  }

  // Menu navigation
  function MenuButton(target) {
    
    // Create a new copy of the menu object and update its values
    const newMenu = { ...menu };
    Object.keys(newMenu).forEach(key => { newMenu[key] = false; })

    if (target == "Main") newMenu.Main = true;
    if (target == "Profile") newMenu.Profile = true;
    if (target == "Mint") newMenu.Mint = true;

    // Update the menu state with the new copy
    setMenu(newMenu);
  }

  // Detect auth state
  onAuthStateChanged(auth, user => {
    if (user) {
      console.log("logged in!");
      setUsername(user.displayName);
      setUserLogin(true);
    } else {
      console.log("No user!");
      setUsername("");
      setUserLogin(false);
    }
  });  

  // Requests access to the user's META MASK WALLET
  async function RequestAccount() {
    console.log('Requesting account...');

    // Check if Meta Mask Extension exists 
    if(window.ethereum) {
      console.log('detected');

      try {
        const accounts = await window.ethereum.request({
          method: "eth_requestAccounts",
        });
        setWalletAddress(accounts[0]);
        user.walletAddress = accounts[0];
        setUser(user);
        
        // Get the current chain ID
        const chainId = await window.ethereum.request({ method: 'eth_chainId' });

        // If the user is not on the desired network, prompt them to switch
        if (chainId !== desiredChainId) {
          try {
            await window.ethereum.request({
              method: 'wallet_addEthereumChain',
              params: [{
                chainId: desiredChainId,
                chainName: "zkSync Era Testnet",
                nativeCurrency: {
                  name: "Ether",
                  symbol: "ETH",
                  decimals: 18
                },
                rpcUrls: ["https://testnet.era.zksync.dev"],
                blockExplorerUrls: ['https://goerli.explorer.zksync.io/']
              }],
            });
          } catch (error) {
            console.error(error);
          }
        }
      } catch (error) {
        console.log('Error connecting...');
      }

    } else {
      alert('Meta Mask not detected');
    }
  }

  // Create a provider to interact with a smart contract
  async function ConnectWallet() {
    if(typeof window.ethereum !== 'undefined') {
      await RequestAccount();

      const mmProvider = new ethers.providers.Web3Provider(window.ethereum);
    }
  }

  async function LinkWallet() {
    // Writes wallet address to the DB
    const authUser = auth.currentUser;
    console.log("Linking the wallet address");
    console.log("Display name: " + authUser.displayName);
    console.log("User ID: " + authUser.uid);
    console.log("Wallet Address: " + user.walletAddress);

    await setDoc(doc(db, "users/", authUser.uid), {
      walletAddress: user.walletAddress
    }, {mergeFields: ["walletAddress"] });
  }

  async function MintItem(itemID, amount) {
    console.log("Minting item. ID: " + itemID + "   Amount: " + amount);

    // Connect to the provider
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    await window.ethereum.request({ method: 'eth_requestAccounts' });
  
    // Get the signer
    const signer = provider.getSigner();
  
    // Create the contract instance
    const contract = new ethers.Contract(contractAddress, contractAbi, signer);
  
    // Send the transaction
    const account = user.walletAddress;
    const data = "0x00";
    const transaction = await contract.mint(account, itemID, amount, data);

    // Wait for the transaction to be mined
    const receipt = await transaction.wait();

    // Check the status of the transaction
    if (receipt.status === 1) {
      console.log("Transaction successful!");
      setMintResult("Minted! ID: " + itemID + " - Amount: " + amount);
    } else {
      console.log("Transaction failed!");
    }
  }

  async function ConsumeItem(itemID, amount) {
    // First, check if the address has enough balance to burn
    console.log("Consuming item. ID: " + itemID + "   Amount: " + amount);

    // Connect to the provider
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    await window.ethereum.request({ method: 'eth_requestAccounts' });
  
    // Get the signer
    const signer = provider.getSigner();
  
    // Create the contract instance
    const contract = new ethers.Contract(contractAddress, contractAbi, signer);
  
    // Send the transaction
    const account = user.walletAddress;
    const data = "0x00";
    const transaction = await contract.burn(account, itemID, amount);

    // Wait for the transaction to be mined
    const receipt = await transaction.wait();

    // Check the status of the transaction
    if (receipt.status === 1) {
      console.log("Transaction successful!");
      setMintResult("Consumed! ID: " + itemID + " - Amount: " + amount);
      ItemConsumed(itemID, amount);
    } else {
      console.log("Transaction failed!");
    }
  }

  async function ItemConsumed(itemID, amount) {
    console.log("Writing consumed item to the db. ID: " + itemID + " - Amount: " + amount);
    const authUser = auth.currentUser;
    const docSnap = await getDoc(doc(db, "users/", authUser.uid));

    if (itemID == 1) {
      // Check how many bullets the user has
      if (docSnap.exists()) {
        const data = docSnap.data();
        console.log("Document data:", data);

        // Check ammo_9mm data field exist?
        // if it exist, get the number from that field and add it to the local amount
        if (data.hasOwnProperty('ammo_9mm')) {
          const existingAmmo = data.ammo_9mm;
          amount += existingAmmo;
        }
      } else {
        // docSnap.data() will be undefined in this case
        console.log("No such document!");
      }      

      await setDoc(doc(db, "users/", authUser.uid), {
        ammo_9mm: amount
      }, {mergeFields: ["ammo_9mm"] });
    }
  }

  /*    NOTES

    HTML side:
    - Change Title: Character NFT template

    Use:
    {menu.Main && (
      <section className="home-home-page">    
      </section>
    )}

    button functions: onClick={RequestAccount} /// onClick={() => MenuButton(2)}


  */