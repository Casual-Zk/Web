import React from 'react'
import { Link } from 'react-router-dom'
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


const Home = (props) => {

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
    Use:
    {menu.Main && (
      <section className="home-home-page">    
      </section>
    )}

    button functions: onClick={RequestAccount} /// onClick={() => MenuButton(2)}


  */

  


  return (
    <div className="home-container">
      <Helmet>
        <title>Zk Chickens</title>
        <meta property="og:title" content="Zk Chickens" />
      </Helmet>
      <div className="home-nav-container">
        <header data-thq="thq-navbar" className="home-navbar">
          <div className="home-logo-container">
            <div className="home-logo-image-container">
              <img
                alt="image"
                src="/playground_assets/logo-200w.png"
                className="home-logo-image"
              />
            </div>
            <span className="home-logo-text">Zk Chickens</span>
          </div>
          <div
            data-thq="thq-navbar-nav"
            data-role="Nav"
            className="home-desktop-menu"
          >
            <nav
              data-thq="thq-navbar-nav-links"
              data-role="Nav"
              className="home-nav"
            >
              <button
                id="homePageButton"
                className="home-button button-clean button"
              >
                Home
              </button>
              <button
                id="profilePageButton"
                className="home-button1 button-clean button"
              >
                Profile
              </button>
              <button
                id="mintPageButton"
                className="home-button2 button-clean button"
              >
                Item Mint
              </button>
              <button
                id="whitepaperButton"
                className="home-button3 button-clean button"
              >
                Whitepaper
              </button>
            </nav>
          </div>
          <div data-thq="thq-navbar-btn-group" className="home-btn-group">
            <div className="home-socials">
              <button className="social button">
                <a
                  href="https://twitter.com/bora_ozenbirkan"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  <img
                    id="twitterButton"
                    alt="image"
                    src="/playground_assets/twitter.svg"
                    className="home-image"
                  />
                </a>
              </button>
              <button className="social button">
                <a
                  href="https://discord.com/"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  <img
                    id="discordButton"
                    alt="image"
                    src="/playground_assets/discord.svg"
                    className="home-image01"
                  />
                </a>
              </button>
            </div>
            <button id="loginButton" className="home-view button">
              <span>Login</span>
              <img
                alt="image"
                src="/playground_assets/google_logo-200h.png"
                className="home-image02"
              />
            </button>
          </div>
          <div data-thq="thq-burger-menu" className="home-burger-menu">
            <button className="button home-button4">
              <svg viewBox="0 0 1024 1024" className="home-icon">
                <path d="M128 554.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 298.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 810.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
              </svg>
            </button>
          </div>
          <div data-thq="thq-mobile-menu" className="home-mobile-menu">
            <div
              data-thq="thq-mobile-menu-nav"
              data-role="Nav"
              className="home-nav1"
            >
              <div className="home-container01">
                <div data-thq="thq-close-menu" className="home-menu-close">
                  <svg
                    id="closeBurgerMenu"
                    viewBox="0 0 1024 1024"
                    className="home-icon2"
                  >
                    <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
                  </svg>
                </div>
              </div>
              <nav
                data-thq="thq-mobile-menu-nav-links"
                data-role="Nav"
                className="home-nav2"
              >
                <button
                  id="burgerHomePageButton"
                  className="home-button5 button-clean button"
                >
                  Home
                </button>
                <button
                  id="burgerProfileButton"
                  className="home-button6 button-clean button"
                >
                  <span className="home-text001">
                    <span>Profile</span>
                    <br></br>
                  </span>
                </button>
                <button
                  id="burgerMintPageButton"
                  className="home-button7 button-clean button"
                >
                  Item Mint
                </button>
                <button
                  id="burgerWhitepaperButton"
                  className="home-button8 button-clean button"
                >
                  Whitepaper
                </button>
              </nav>
              <div className="home-container02">
                <button id="burgerLoginButton" className="home-login button">
                  <span>
                    <span>Login</span>
                    <br></br>
                  </span>
                </button>
              </div>
            </div>
          </div>
        </header>
      </div>
      {menu.Main && (
        <div className="home-home-page">
          <img
            alt="image"
            src="/playground_assets/cover_0_1.png"
            className="home-cover-image"
          />
          <div className="home-wide-home-page">
            <div className="home-entry">
              <div className="home-container03">
                <h1 className="home-text007">Zk Chickens</h1>
                <span className="home-text008">
                  <span>
                    Zk Chickens is a casual game on ZkSync Era. You can play while
                    you sit on toilet or commuting! In this game everyone has a
                    chance to win big, for just the top players!
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  <br></br>
                </span>
                <img
                  id="downloadButton"
                  alt="image"
                  src="/playground_assets/download%20button-300h.png"
                  className="home-download-button"
                />
              </div>
              <img
                alt="image"
                src="/playground_assets/in-game-image-sample-300h.png"
                className="home-image03"
              />
            </div>
            <div className="home-egg">
              <img
                alt="image"
                src="/playground_assets/egg-600w.png"
                className="home-image04"
              />
              <div className="home-container04">
                <h1 className="home-text011">
                  <span className="home-text012">Everyone Can Win BIG!</span>
                  <br></br>
                </h1>
                <span className="home-text014">
                  <span>
                    Current Play-To-Earn systems are not sustainable. If everyone
                    can earn, that means people will lose big in the end. If the
                    only top players earns, that would kill the excitement of the
                    game for the most players.
                  </span>
                  <br></br>
                  <br></br>
                  <span>
                    Here we have a lottery system to distribute rewards! After
                    every win in a match, players earn an egg. With that egg
                    players join the weekly lottery and have chance to win one of
                    the prize pools! Better skills, more egg, higher chance to win
                    big!
                  </span>
                  <br></br>
                </span>
              </div>
            </div>
            <div className="home-token-distribution">
              <div className="home-container05">
                <h1 className="home-text020">
                  <span className="home-text021">Token For Gamers!</span>
                  <br></br>
                </h1>
                <span className="home-text023">
                  <span>
                    90% of tokens are testers who participate our testnet! 5% for
                    liquidity pool for gamers to trade on DEX, 5% for the team who
                    built Zk Chickens.
                  </span>
                  <br></br>
                  <br></br>
                  <span>
                    No Play-To-Earn allocation! Distribution of the game rewards
                    are not on our hands! WILL EXPLAIN IT LATER...
                  </span>
                  <br></br>
                </span>
              </div>
              <img
                alt="image"
                src="/playground_assets/token%20allocation-600w.png"
                className="home-image05"
              />
            </div>
            <div className="home-minter-cards">
              <img
                alt="image"
                src="/playground_assets/minter%20cards-500w.png"
                className="home-image06"
              />
              <div className="home-container06">
                <h1 className="home-text029">
                  <span className="home-text030">No One Left Behind!</span>
                  <br></br>
                </h1>
                <span className="home-text032">
                  <span>
                    90% of token are allocated for our testnet player the tokens
                    actually linked with Minter Cards that allow you to mint
                    tokens over time!
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  <br></br>
                  <br></br>
                  <span>
                    So, even though you missed the testnet to participate, you
                    don&apos;t miss the oppourtunity to get allocation!
                  </span>
                </span>
              </div>
            </div>
            <div className="home-lp-heroes">
              <div className="home-container07">
                <h1 className="home-text037">
                  <span className="home-text038">
                    Become a LP Hero, Earn 10%!
                  </span>
                  <br></br>
                </h1>
                <span className="home-text040">
                  <span>
                    Our LP Heroes who provided liquidity for gamers on DEX will
                    get the 10% of the treasury!
                  </span>
                  <br></br>
                  <br></br>
                  <span>
                    If you missed the oppourtunity to provide liquidity on
                    Genesis, don&apos;t worry! You can buy a LP Hero from the
                    market and start to earn 10% now!
                  </span>
                  <br></br>
                </span>
              </div>
              <img
                alt="image"
                src="/playground_assets/lp%20hero-400h.png"
                className="home-image07"
              />
            </div>
            <div className="home-treasury">
              <h1 className="home-text046">Treasury</h1>
              <img
                alt="image"
                src="/playground_assets/treasury_map-1400w.png"
                className="home-image08"
              />
            </div>
          </div>
          <div className="home-narrow-home-page">
            <div className="home-entry1">
              <div className="home-container08">
                <h1 className="home-text047">Zk Chickens</h1>
                <span className="home-text048">
                  <span>
                    Zk Chickens is a casual game on ZkSync Era. You can play while
                    you sit on toilet or commuting! In this game everyone has a
                    chance to win big, for just the top players!
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  <br></br>
                </span>
                <img
                  id="downloadButton"
                  alt="image"
                  src="/playground_assets/download%20button-300h.png"
                  className="home-download-button1"
                />
              </div>
              <img
                alt="image"
                src="/playground_assets/in-game-image-sample-300h.png"
                className="home-image09"
              />
            </div>
            <div className="home-egg1">
              <img
                alt="image"
                src="/playground_assets/egg-600w.png"
                className="home-image10"
              />
              <div className="home-container09">
                <h1 className="home-text051">
                  <span className="home-text052">Everyone Can Win BIG!</span>
                  <br></br>
                </h1>
                <span className="home-text054">
                  <span>
                    Current Play-To-Earn systems are not sustainable. If everyone
                    can earn, that means people will lose big in the end. If the
                    only top players earns, that would kill the excitement of the
                    game for the most players.
                  </span>
                  <br></br>
                </span>
              </div>
              <div className="home-container10">
                <span className="home-text057">
                  <span>
                    Here we have a lottery system to distribute rewards! After
                    every win in a match, players earn an egg. With that egg
                    players join the weekly lottery and have chance to win one of
                    the prize pools! Better skills, more egg, higher chance to win
                    big!
                  </span>
                  <br></br>
                </span>
              </div>
            </div>
            <div className="home-token-distribution1">
              <div className="home-container11">
                <h1 className="home-text060">
                  <span className="home-text061">Token For Gamers!</span>
                  <br></br>
                </h1>
                <span className="home-text063">
                  <span>
                    90% of tokens are testers who participate our testnet! 5% for
                    liquidity pool for gamers to trade on DEX, 5% for the team who
                    built Zk Chickens.
                  </span>
                  <br></br>
                </span>
              </div>
              <img
                alt="image"
                src="/playground_assets/token%20allocation-600w.png"
                className="home-image11"
              />
              <div className="home-container12">
                <span className="home-text066">
                  <span>
                    No Play-To-Earn allocation! Distribution of the game rewards
                    are not on our hands! WILL EXPLAIN IT LATER...
                  </span>
                  <br></br>
                </span>
              </div>
            </div>
            <div className="home-minter-cards1">
              <img
                alt="image"
                src="/playground_assets/minter%20cards-500w.png"
                className="home-image12"
              />
              <div className="home-container13">
                <h1 className="home-text069">
                  <span className="home-text070">No One Left Behind!</span>
                  <br></br>
                </h1>
                <span className="home-text072">
                  90% of token are allocated for our testnet player the tokens
                  actually linked with Minter Cards that allow you to mint tokens
                  over time!
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
              </div>
              <div className="home-container14">
                <span className="home-text073">
                  So, even though you missed the testnet to participate, you
                  don&apos;t miss the oppourtunity to get allocation!
                </span>
              </div>
            </div>
            <div className="home-lp-heroes1">
              <div className="home-container15">
                <h1 className="home-text074">
                  <span className="home-text075">
                    Become a LP Hero, Earn 10%!
                  </span>
                  <br></br>
                </h1>
                <span className="home-text077">
                  <span>
                    Our LP Heroes who provided liquidity for gamers on DEX will
                    get the 10% of the treasury!
                  </span>
                  <br></br>
                </span>
              </div>
              <img
                alt="image"
                src="/playground_assets/lp%20hero-400h.png"
                className="home-image13"
              />
              <div className="home-container16">
                <span className="home-text080">
                  <span>
                    If you missed the oppourtunity to provide liquidity on
                    Genesis, don&apos;t worry! You can buy a LP Hero from the
                    market and start to earn 10% now!
                  </span>
                  <br></br>
                </span>
              </div>
            </div>
            <div className="home-treasury1">
              <h1 className="home-text083">Treasury</h1>
              <img
                alt="image"
                src="/playground_assets/treasury_map-1400w.png"
                className="home-image14"
              />
            </div>
          </div>
        </div>
      )}
      {menu.Profile && (
        <div className="home-profile-page">
          <div className="home-profile-info-container">
            <div className="home-pp-container">
              <img
                id="profilePhoto"
                alt="image"
                src="/playground_assets/profile_photo-200h.png"
                className="home-profile-photo"
              />
            </div>
            <div className="home-info-container">
              <div className="home-info-space-1">
                <div className="home-text-space">
                  <span className="profile-basic-text home-text084">
                    Username:
                  </span>
                  <span
                    id="profileUsernameText"
                    className="home-text085 profile-basic-text"
                  >
                    Bozen
                  </span>
                </div>
                <div className="home-text-space1">
                  <span className="home-text086 profile-basic-text">
                    Wallet Address:
                  </span>
                  <span
                    id="profileAddressText"
                    className="home-text087 profile-basic-text"
                  >
                    0x0000....0000
                  </span>
                </div>
                <div className="home-text-space2">
                  <span className="home-text088 profile-basic-text">
                    Token Balance:
                  </span>
                  <span
                    id="profileTokenBalanceText"
                    className="home-text089 profile-basic-text"
                  >
                    0
                  </span>
                </div>
              </div>
              <div className="home-info-space-2">
                <div className="home-text-space3">
                  <span className="home-text090 profile-basic-text">
                    Current Week:
                  </span>
                  <span
                    id="profileCurrentWeekText"
                    className="home-text091 profile-basic-text"
                  >
                    0
                  </span>
                </div>
                <div className="home-text-space4">
                  <span className="home-text092 profile-basic-text">
                    My Eggs:
                  </span>
                  <span
                    id="profileMyEggsText"
                    className="home-text093 profile-basic-text"
                  >
                    0
                  </span>
                </div>
                <div className="home-text-space5">
                  <span className="home-text094 profile-basic-text">
                    Total Eggs:
                  </span>
                  <span
                    id="profileTotalEggsText"
                    className="home-text095 profile-basic-text"
                  >
                    0
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="home-profile-button-container">
            <div className="home-active-profile-button">
              <span id="inventoryButton" className="home-active-profile-text">
                Inventory
              </span>
            </div>
            <div className="home-passive-profile-button">
              <span id="lotteryButton" className="home-passive-profile-text">
                <span>Lottery</span>
                <br></br>
              </span>
            </div>
          </div>
          <div className="home-lottery-panel">
            <div className="home-week-counter">
              <span className="home-text098">
                <span>Week</span>
                <br></br>
              </span>
              <div className="home-container17">
                <img
                  id="weekLeftNavButton"
                  alt="image"
                  src="/playground_assets/left_button-200w.png"
                  className="home-image15"
                />
                <input
                  type="number"
                  id="lotteryWeekInput"
                  min="0"
                  className="home-textinput input"
                />
                <img
                  id="weekRightNavButton"
                  alt="image"
                  src="/playground_assets/right_button-200w.png"
                  className="home-image16"
                />
              </div>
            </div>
            <div className="home-week-info">
              <div className="home-text-space6">
                <span className="home-text101 top10-text">My Eggs:</span>
                <span id="lotteryMyEggsText" className="home-text102 top10-text">
                  0
                </span>
              </div>
              <div className="home-text-space7">
                <span className="home-text103 top10-text">Total Eggs:</span>
                <span
                  id="lotteryTotalEggsText"
                  className="home-text104 top10-text"
                >
                  0
                </span>
              </div>
              <div className="home-text-space8">
                <span className="home-text105 top10-text">Result:</span>
                <span id="lotteryResultText" className="home-text106 top10-text">
                  No luck for this week...
                </span>
              </div>
              <img
                id="claimRewardButton"
                alt="image"
                src="/playground_assets/claimrewardbutton-200h.png"
                className="home-image17"
              />
            </div>
            <div className="home-top10">
              <span className="home-text107 top10-text">
                <span>Top 10</span>
                <br></br>
              </span>
              <div className="home-list-container">
                <div className="home-title">
                  <span className="home-text110 top10-text">
                    <span>Address</span>
                    <br></br>
                  </span>
                  <span className="home-text113 top10-text">
                    <span>Eggs</span>
                    <br></br>
                  </span>
                </div>
                <div className="home-record">
                  <span id="top10_0_address" className="home-text116 top10-text">
                    0x85be25d0Ef53959dB27D42df1f7da57549154D5f
                  </span>
                  <span className="home-text117 top10-text">
                    <span>10</span>
                    <br></br>
                  </span>
                </div>
                <div className="home-record01">
                  <span id="top10_1_address" className="home-text120 top10-text">
                    0x85be25d0Ef53959dB27D42df1f7da57549154D5f
                  </span>
                  <span id="top10_1_eggs" className="home-text121 top10-text">
                    <span>9</span>
                    <br></br>
                  </span>
                </div>
                <div className="home-record02">
                  <span id="top10_2_address" className="home-text124 top10-text">
                    0x85be25d0Ef53959dB27D42df1f7da57549154D5f
                  </span>
                  <span id="top10_2_eggs" className="home-text125 top10-text">
                    <span>8</span>
                    <br></br>
                  </span>
                </div>
                <div className="home-record03">
                  <span id="top10_3_address" className="home-text128 top10-text">
                    0x85be25d0Ef53959dB27D42df1f7da57549154D5f
                  </span>
                  <span id="top10_3_eggs" className="home-text129 top10-text">
                    <span>7</span>
                    <br></br>
                  </span>
                </div>
                <div className="home-record04">
                  <span id="top10_4_address" className="home-text132 top10-text">
                    0x85be25d0Ef53959dB27D42df1f7da57549154D5f
                  </span>
                  <span id="top10_4_eggs" className="home-text133 top10-text">
                    <span>6</span>
                    <br></br>
                  </span>
                </div>
                <div className="home-record05">
                  <span id="top10_5_address" className="home-text136 top10-text">
                    0x85be25d0Ef53959dB27D42df1f7da57549154D5f
                  </span>
                  <span id="top10_5_eggs" className="home-text137 top10-text">
                    <span>5</span>
                    <br></br>
                  </span>
                </div>
                <div className="home-record06">
                  <span id="top10_6_address" className="home-text140 top10-text">
                    0x85be25d0Ef53959dB27D42df1f7da57549154D5f
                  </span>
                  <span id="top10_6_eggs" className="home-text141 top10-text">
                    <span>4</span>
                    <br></br>
                  </span>
                </div>
                <div className="home-record07">
                  <span id="top10_7_address" className="home-text144 top10-text">
                    0x85be25d0Ef53959dB27D42df1f7da57549154D5f
                  </span>
                  <span id="top10_7_eggs" className="home-text145 top10-text">
                    <span>3</span>
                    <br></br>
                  </span>
                </div>
                <div className="home-record08">
                  <span id="top10_8_address" className="home-text148 top10-text">
                    0x85be25d0Ef53959dB27D42df1f7da57549154D5f
                  </span>
                  <span id="top10_8_eggs" className="home-text149 top10-text">
                    <span>2</span>
                    <br></br>
                  </span>
                </div>
                <div className="home-record09">
                  <span id="top10_9_address" className="home-text152 top10-text">
                    0x85be25d0Ef53959dB27D42df1f7da57549154D5f
                  </span>
                  <span id="top10_9_eggs" className="home-text153 top10-text">
                    <span>1</span>
                    <br></br>
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="home-inventory-panel">
            <div className="item-container-small">
              <h1 className="home-item-name top10-text">Knife</h1>
              <img
                alt="image"
                src="/playground_assets/knife_inv-200h.png"
                className="item-image"
              />
              <div className="home-container18">
                <span className="home-text156 top10-text">
                  <span>In Wallet:</span>
                  <br></br>
                </span>
                <span id="invKnifeText" className="home-text159 top10-text">
                  <span>0</span>
                  <br></br>
                </span>
              </div>
            </div>
            <div className="home-glock item-container-small">
              <h1 className="home-item-name01 top10-text">
                <span>Glock</span>
                <br></br>
              </h1>
              <img
                alt="image"
                src="/playground_assets/glock_inv-200h.png"
                className="home-item-image01 item-image"
              />
              <div className="home-container19">
                <span className="home-text164 top10-text">
                  <span>In Wallet:</span>
                  <br></br>
                </span>
                <span id="invWalletGlockText" className="home-text167 top10-text">
                  <span>0</span>
                  <br></br>
                </span>
              </div>
            </div>
            <div className="home-shotgun item-container-small">
              <h1 className="home-item-name02 top10-text">Shotgun</h1>
              <img
                alt="image"
                src="/playground_assets/shoutgun_inv-200h.png"
                className="home-item-image02 item-image"
              />
              <div className="home-container20">
                <span className="home-text170 top10-text">
                  <span>In Wallet:</span>
                  <br></br>
                </span>
                <span
                  id="invWalletShotgunText"
                  className="home-text173 top10-text"
                >
                  <span>0</span>
                  <br></br>
                </span>
              </div>
            </div>
            <div className="home-m4 item-container-small">
              <h1 className="home-item-name03 top10-text">M4</h1>
              <img
                alt="image"
                src="/playground_assets/m4_inv-200h.png"
                className="home-item-image03 item-image"
              />
              <div className="home-container21">
                <span className="home-text176 top10-text">
                  <span>In Wallet:</span>
                  <br></br>
                </span>
                <span id="invWalletM4Text" className="home-text179 top10-text">
                  <span>0</span>
                  <br></br>
                </span>
              </div>
            </div>
            <div className="home-awp item-container-small">
              <h1 className="home-item-name04 top10-text">AWP</h1>
              <img
                alt="image"
                src="/playground_assets/awp_inv-200h.png"
                className="home-item-image04 item-image"
              />
              <div className="home-container22">
                <span className="home-text182 top10-text">
                  <span>In Wallet:</span>
                  <br></br>
                </span>
                <span id="invWalletAWPText" className="home-text185 top10-text">
                  <span>0</span>
                  <br></br>
                </span>
              </div>
            </div>
            <div className="item-container-big home-ammo-12-gauge">
              <h1 className="home-item-name05 top10-text">12-Gauge</h1>
              <img
                alt="image"
                src="/playground_assets/12gauge_inv-200h.png"
                className="home-item-image05 item-image"
              />
              <div className="home-container23">
                <span className="home-text188 top10-text">
                  <span>In Wallet:</span>
                  <br></br>
                </span>
                <span id="invWalletGaugeText" className="home-text191 top10-text">
                  <span>0</span>
                  <br></br>
                </span>
              </div>
              <div className="home-container24">
                <span className="home-text194 top10-text">
                  <span>In Game:</span>
                  <br></br>
                </span>
                <span id="invGameGaugeText" className="home-text197 top10-text">
                  <span>0</span>
                  <br></br>
                </span>
              </div>
              <input
                type="number"
                id="invGaugeInput"
                max="9999"
                min="1"
                step="1"
                placeholder="Enter Amount"
                className="input inv-consume-input"
              />
              <img
                id="invGaugeConsumeButton"
                alt="image"
                src="/playground_assets/consume%20button-500h.png"
                className="inv-consume-button"
              />
            </div>
            <div className="home-ammo-9-mm item-container-big">
              <h1 className="home-item-name06 top10-text">9 mm</h1>
              <img
                alt="image"
                src="/playground_assets/9mm_inv-200h.png"
                className="home-item-image06 item-image"
              />
              <div className="home-container25">
                <span className="home-text200 top10-text">
                  <span>In Wallet:</span>
                  <br></br>
                </span>
                <span id="invWallet9mmText" className="home-text203 top10-text">
                  <span>0</span>
                  <br></br>
                </span>
              </div>
              <div className="home-container26">
                <span className="home-text206 top10-text">
                  <span>In Game:</span>
                  <br></br>
                </span>
                <span id="invGame9mmText" className="home-text209 top10-text">
                  <span>0</span>
                  <br></br>
                </span>
              </div>
              <input
                type="number"
                id="inv9mmInput"
                max="9999"
                min="1"
                step="1"
                placeholder="Enter Amount"
                className="home-textinput02 input inv-consume-input"
              />
              <img
                id="inv9mmConsumeButton"
                alt="image"
                src="/playground_assets/consume%20button-500h.png"
                className="home-image19 inv-consume-button"
              />
            </div>
            <div className="home-ammo-556-mm item-container-big">
              <h1 className="home-item-name07 top10-text">5.56 mm</h1>
              <img
                alt="image"
                src="/playground_assets/5_56_inv-200h.png"
                className="home-item-image07 item-image"
              />
              <div className="home-container27">
                <span className="home-text212 top10-text">
                  <span>In Wallet:</span>
                  <br></br>
                </span>
                <span id="invWallet556mmText" className="home-text215 top10-text">
                  <span>0</span>
                  <br></br>
                </span>
              </div>
              <div className="home-container28">
                <span className="home-text218 top10-text">
                  <span>In Game:</span>
                  <br></br>
                </span>
                <span id="invGame556mmText" className="home-text221 top10-text">
                  <span>0</span>
                  <br></br>
                </span>
              </div>
              <input
                type="number"
                id="inv556mmInput"
                max="9999"
                min="1"
                step="1"
                placeholder="Enter Amount"
                className="home-textinput03 input inv-consume-input"
              />
              <img
                id="inv556mmConsumeButton"
                alt="image"
                src="/playground_assets/consume%20button-500h.png"
                className="home-image20 inv-consume-button"
              />
            </div>
            <div className="home-ammo-762-mm item-container-big">
              <h1 className="home-item-name08 top10-text">7.62 mm</h1>
              <img
                alt="image"
                src="/playground_assets/7_62_inv-200h.png"
                className="home-item-image08 item-image"
              />
              <div className="home-container29">
                <span className="home-text224 top10-text">
                  <span>In Wallet:</span>
                  <br></br>
                </span>
                <span id="invWallet762mmText" className="home-text227 top10-text">
                  <span>0</span>
                  <br></br>
                </span>
              </div>
              <div className="home-container30">
                <span className="home-text230 top10-text">
                  <span>In Game:</span>
                  <br></br>
                </span>
                <span id="invGame762mmText" className="home-text233 top10-text">
                  <span>0</span>
                  <br></br>
                </span>
              </div>
              <input
                type="number"
                id="inv762mmInput"
                max="9999"
                min="1"
                step="1"
                placeholder="Enter Amount"
                className="home-textinput04 input inv-consume-input"
              />
              <img
                id="inv762mmConsumeButton"
                alt="image"
                src="/playground_assets/consume%20button-500h.png"
                className="home-image21 inv-consume-button"
              />
            </div>
          </div>
        </div>
      )}
      {menu.Mint && (
        <div className="home-mint-page">
          <div className="home-items">
            <div className="home-item item-container-big">
              <h1 className="home-item-name09 top10-text">Knife</h1>
              <img
                alt="image"
                src="/playground_assets/knife_inv-200h.png"
                className="home-item-image09 item-image"
              />
              <span className="home-price-text top10-text">Price: 1 ZCH</span>
              <div className="home-price-input-container">
                <span className="home-text236 top10-text">Amount:</span>
                <input
                  type="number"
                  id="mintKnifeAmountInput"
                  max="999"
                  min="1"
                  step="1"
                  placeholder="Enter amount..."
                  className="input mint-amount-input"
                />
              </div>
              <img
                id="mintKnifeButton"
                alt="image"
                src="/playground_assets/mint_button-500h.png"
                className="mint-button"
              />
            </div>
            <div className="home-item1 item-container-big">
              <h1 className="home-item-name10 top10-text">Glock</h1>
              <img
                alt="image"
                src="/playground_assets/glock_inv-200h.png"
                className="home-item-image10 item-image"
              />
              <span className="home-price-text1 top10-text">Price: 10 ZCH</span>
              <div className="home-price-input-container1">
                <span className="home-text237 top10-text">Amount:</span>
                <input
                  type="number"
                  id="mintGlockAmountInput"
                  max="999"
                  min="1"
                  step="1"
                  placeholder="Enter amount..."
                  className="home-textinput06 input mint-amount-input"
                />
              </div>
              <img
                id="mintGlockButton"
                alt="image"
                src="/playground_assets/mint_button-500h.png"
                className="home-image23 mint-button"
              />
            </div>
            <div className="home-item2 item-container-big">
              <h1 className="home-item-name11 top10-text">Shotgun</h1>
              <img
                alt="image"
                src="/playground_assets/shoutgun_inv-200h.png"
                className="home-item-image11 item-image"
              />
              <span className="home-price-text2 top10-text">Price: 30 ZCH</span>
              <div className="home-price-input-container2">
                <span className="home-text238 top10-text">Amount:</span>
                <input
                  type="number"
                  id="mintShotgunAmountInput"
                  max="999"
                  min="1"
                  step="1"
                  placeholder="Enter amount..."
                  className="home-textinput07 input mint-amount-input"
                />
              </div>
              <img
                id="mintShotgunButton"
                alt="image"
                src="/playground_assets/mint_button-500h.png"
                className="home-image24 mint-button"
              />
            </div>
            <div className="home-item3 item-container-big">
              <h1 className="home-item-name12 top10-text">M4</h1>
              <img
                alt="image"
                src="/playground_assets/m4_inv-200h.png"
                className="home-item-image12 item-image"
              />
              <span className="home-price-text3 top10-text">Price: 100 ZCH</span>
              <div className="home-price-input-container3">
                <span className="home-text239 top10-text">Amount:</span>
                <input
                  type="number"
                  id="mintM4AmountInput"
                  max="999"
                  min="1"
                  step="1"
                  placeholder="Enter amount..."
                  className="home-textinput08 input mint-amount-input"
                />
              </div>
              <img
                id="mintM4Button"
                alt="image"
                src="/playground_assets/mint_button-500h.png"
                className="home-image25 mint-button"
              />
            </div>
            <div className="home-item4 item-container-big">
              <h1 className="home-item-name13 top10-text">
                <span>AWP</span>
                <br></br>
              </h1>
              <img
                alt="image"
                src="/playground_assets/awp_inv-200h.png"
                className="home-item-image13 item-image"
              />
              <span className="home-price-text4 top10-text">Price: 200 ZCH</span>
              <div className="home-price-input-container4">
                <span className="home-text242 top10-text">Amount:</span>
                <input
                  type="number"
                  id="mintAWPAmountInput"
                  max="999"
                  min="1"
                  step="1"
                  placeholder="Enter amount..."
                  className="home-textinput09 input mint-amount-input"
                />
              </div>
              <img
                id="mintAWPButton"
                alt="image"
                src="/playground_assets/mint_button-500h.png"
                className="home-image26 mint-button"
              />
            </div>
            <div className="home-item5 item-container-big">
              <h1 className="home-item-name14 top10-text">
                <span>12-Gaguge</span>
                <br></br>
              </h1>
              <img
                alt="image"
                src="/playground_assets/12gauge_inv-200h.png"
                className="home-item-image14 item-image"
              />
              <span className="home-price-text5 top10-text">
                Price: 0.0001 ZCH
              </span>
              <div className="home-price-input-container5">
                <span className="home-text245 top10-text">Amount:</span>
                <input
                  type="number"
                  id="mintGaugeAmountInput"
                  max="99999"
                  min="1"
                  step="1"
                  placeholder="Enter amount..."
                  className="home-textinput10 input mint-amount-input"
                />
              </div>
              <img
                id="mintGaugeButton"
                alt="image"
                src="/playground_assets/mint_button-500h.png"
                className="home-image27 mint-button"
              />
            </div>
            <div className="home-item6 item-container-big">
              <h1 className="home-item-name15 top10-text">
                <span>9 mm</span>
                <br></br>
              </h1>
              <img
                alt="image"
                src="/playground_assets/9mm_inv-200h.png"
                className="home-item-image15 item-image"
              />
              <span className="home-price-text6 top10-text">
                Price: 0.0002 ZCH
              </span>
              <div className="home-price-input-container6">
                <span className="home-text248 top10-text">Amount:</span>
                <input
                  type="number"
                  id="mint9mmAmountInput"
                  max="99999"
                  min="1"
                  step="1"
                  placeholder="Enter amount..."
                  className="home-textinput11 input mint-amount-input"
                />
              </div>
              <img
                id="mint9mmButton"
                alt="image"
                src="/playground_assets/mint_button-500h.png"
                className="home-image28 mint-button"
              />
            </div>
            <div className="home-item7 item-container-big">
              <h1 className="home-item-name16 top10-text">
                <span>5.56 mm</span>
                <br></br>
              </h1>
              <img
                alt="image"
                src="/playground_assets/5_56_inv-200h.png"
                className="home-item-image16 item-image"
              />
              <span className="home-price-text7 top10-text">
                Price: 0.0003 ZCH
              </span>
              <div className="home-price-input-container7">
                <span className="home-text251 top10-text">Amount:</span>
                <input
                  type="number"
                  id="mint556mmAmountInput"
                  max="99999"
                  min="1"
                  step="1"
                  placeholder="Enter amount..."
                  className="home-textinput12 input mint-amount-input"
                />
              </div>
              <img
                id="mint556mmButton"
                alt="image"
                src="/playground_assets/mint_button-500h.png"
                className="home-image29 mint-button"
              />
            </div>
            <div className="home-item8 item-container-big">
              <h1 className="home-item-name17 top10-text">
                <span>7.62 mm</span>
                <br></br>
              </h1>
              <img
                alt="image"
                src="/playground_assets/7_62_inv-200h.png"
                className="home-item-image17 item-image"
              />
              <span className="home-price-text8 top10-text">
                Price: 0.0005 ZCH
              </span>
              <div className="home-price-input-container8">
                <span className="home-text254 top10-text">Amount:</span>
                <input
                  type="number"
                  id="mint762mmAmountInput"
                  max="99999"
                  min="1"
                  step="1"
                  placeholder="Enter amount..."
                  className="home-textinput13 input mint-amount-input"
                />
              </div>
              <img
                id="mint762mmButton"
                alt="image"
                src="/playground_assets/mint_button-500h.png"
                className="home-image30 mint-button"
              />
            </div>
          </div>
        </div>
      )}
      <footer className="home-footer">
        <div className="home-main">
          <div className="home-branding">
            <div className="home-heading">
              <h2 className="home-logo">
                <span className="home-text255">Zk Chickens</span>
                <br></br>
              </h2>
              <p className="home-caption">Casual steps of the Web3 Gaming!</p>
            </div>
            <div className="home-socials1">
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noreferrer noopener"
                className="home-twitter1 social button"
              >
                <img
                  alt="image"
                  src="/playground_assets/twitter.svg"
                  className="home-image31"
                />
              </a>
              <a
                href="https://discord.com"
                target="_blank"
                rel="noreferrer noopener"
                className="home-discord1 social button"
              >
                <img
                  alt="image"
                  src="/playground_assets/discord.svg"
                  className="home-image32"
                />
              </a>
            </div>
          </div>
          <div className="home-links">
            <div className="home-list">
              <h3 className="home-heading1">Site</h3>
              <div className="home-items1">
                <Link to="/" className="home-link2 button-clean button">
                  Home
                </Link>
                <Link to="/profile" className="home-link3 button-clean button">
                  Profile
                </Link>
                <Link to="/mint" className="home-link4 button-clean button">
                  Item Mint
                </Link>
                <button className="home-link5 button-clean button">
                  Whitepaper
                </button>
              </div>
            </div>
          </div>
          <div className="home-socials2">
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noreferrer noopener"
              className="home-twitter2 social button"
            >
              <img
                alt="image"
                src="/playground_assets/twitter.svg"
                className="home-image33"
              />
            </a>
            <a
              href="https://discord.com"
              target="_blank"
              rel="noreferrer noopener"
              className="home-discord2 social button"
            >
              <img
                alt="image"
                src="/playground_assets/discord.svg"
                className="home-image34"
              />
            </a>
          </div>
        </div>
        <span className="home-copyright">
          © 2023 Zk Chickens. All Rights Reserved.
        </span>
      </footer>
      <div>
        <DangerousHTML
          html={`<script>
 /*
  Accordion - Code Embed
  */
  const accordionContainers = document.querySelectorAll('[data-role="accordion-container"]'); // All accordion containers
  const accordionContents = document.querySelectorAll('[data-role="accordion-content"]'); // All accordion content
  const accordionIconsClosed = document.querySelectorAll('[data-role="accordion-icon-closed"]'); // All accordion closed icons
  const accordionIconsOpen = document.querySelectorAll('[data-role="accordion-icon-open"]'); // All accordion open icons

  accordionContents.forEach((accordionContent) => {
      accordionContent.style.display = "none"; //Hides all accordion contents
  });

  accordionIconsClosed.forEach((icon) => {
    icon.style.display = "flex"
  })

  accordionIconsOpen.forEach((icon) => {
    icon.style.display = "none"
  })

  accordionContainers.forEach((accordionContainer, index) => {
      accordionContainer.addEventListener("click", () => {
          if (accordionContents[index].style.display === "flex") {
              // If the accordion is already open, close it
              accordionContents[index].style.display = "none";
              accordionIconsClosed[index].style.display = "flex";
              accordionIconsOpen[index].style.display = "none"
          } else {
              // If the accordion is closed, open it
              accordionContents.forEach((accordionContent) => {
                  accordionContent.style.display = "none"; //Hides all accordion contents
              });

              accordionIconsClosed.forEach((accordionIcon) => {
                  accordionIcon.style.display = "flex"; // Resets all icon transforms to 0deg (default)
              });

              accordionIconsOpen.forEach((accordionIcon) => {
                accordionIcon.style.display = "none";
              })
              
              accordionContents[index].style.display = "flex"; // Shows accordion content
              accordionIconsClosed[index].style.display = "none"; // Rotates accordion icon 180deg
              accordionIconsOpen[index].style.display = "flex";
          }
      });
  });
</script>
`}
        ></DangerousHTML>
      </div>
    </div>
  )
}

export default Home
