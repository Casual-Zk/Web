import React from 'react'
import { Link } from 'react-router-dom'
import DangerousHTML from 'dangerous-html/react'
import { Helmet } from 'react-helmet'
import './home.css'
// My libraries
import { useState, useEffect } from 'react';
import { ethers, utils } from "ethers";
// Firebase
import { initializeApp } from 'firebase/app';
import { getAnalytics } from "firebase/analytics";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword , onAuthStateChanged, signOut, sendEmailVerification, sendPasswordResetEmail, reauthenticateWithCredential, deleteUser, AuthErrorCodes} from 'firebase/auth';
import { getFirestore, doc, setDoc, getDoc, deleteDoc } from 'firebase/firestore';
import { func, number } from 'prop-types';
import { async } from 'q';

// Initilize the firebase
const firebaseApp = initializeApp({
  apiKey: "AIzaSyDdANG2EbRRBgGxC7XisiBpHUH4v1awocE",
  authDomain: "zkchickens.firebaseapp.com",
  projectId: "zkchickens",
  storageBucket: "zkchickens.appspot.com",
  messagingSenderId: "622001726277",
  appId: "1:622001726277:web:034fcb915f3f8ab7a0142c"
});
// Initilize the services
const analytics = getAnalytics(firebaseApp);
const auth = getAuth(firebaseApp);
const db = getFirestore(firebaseApp);

const Home = (props) => {

  ////////////////////////////////////////////////////
  /////////           Variables             //////////
  ////////////////////////////////////////////////////

  const tokenAddress = '0x2B0758ee301AF7AA2C5fA9B7060648fbB2D0dDBD';
  const itemAddress = '0xa2B1aD5a0c739A4AbDd9943cF2cA0AE3ad90E67A';
  const treasuryAddress = '0xA10c223751b208BF18dc0CA9e087B0577fE5b6A8';

  const tokenAbi = [
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "owner",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "spender",
          "type": "address"
        }
      ],
      "name": "allowance",
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
          "name": "spender",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "amount",
          "type": "uint256"
        }
      ],
      "name": "approve",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "account",
          "type": "address"
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
    }
  ];
  const itemAbi = [
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
    }
  ];
  const treasuryAbi = [
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "id",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "amount",
          "type": "uint256"
        }
      ],
      "name": "consume",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256[]",
          "name": "ids",
          "type": "uint256[]"
        },
        {
          "internalType": "uint256[]",
          "name": "amounts",
          "type": "uint256[]"
        }
      ],
      "name": "consumeBatch",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "function"
    }
  ];

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
    nickname: "",
    walletAddress : "",
    tokenBalance: 0,
    eggs : {},  // week Number => egg number
  
    knifeAmount : 0,
    glockAmount : 0,
    shotgunAmount : 0,
    m4Amount : 0,
    awpAmount : 0,
  
    game_5_56mm : 0,
    game_7_62mm : 0,
    game_9mm : 0,
    game_12_gauge : 0,

    wallet_5_56mm : 0,
    wallet_7_62mm : 0,
    wallet_9mm : 0,
    wallet_12_gauge : 0
  });

  // Initialize the menu state
  const [menu, setMenu] = useState({
    Main: true,
    Profile: false,
    Mint: false
  });

  // variable for coding side to check which page in on
  const cMenu = {
    Main: true,
    Profile: false,
    Mint: false
  }
  
  // Profile menu
  const [profilePanel, setProfilePanel] = useState({
    Inventory: true,
    Lottery: false
  });
  const [profileInfo, setProfileInfo] = useState({
    NormalProfile: true,
    SetUsername: false,
    DeleteUser: false
  });
  const [profileEntry, setProfileEntry] = useState({
    Login: true,
    Register: false,
    Reset: false,
    VerificationPanel: false,
    NicknamePanel: false,
    WalletPanel: false,
    Deleted: false
  });

  // Variables
  const [connectedWallet, setConnectedWallet] = useState("");
  const [shortWallet, setShortWallet] = useState("");
  const [mintApproved, setMintApprove] = useState(Boolean);
  const [consumeApproved, setConsumeApprove] = useState(Boolean);
  const [mintResult, setMintResult] = useState("");
  
  const [userlogin, setUserLogin] = useState(Boolean);
  const [hasUserBalance, setHasUserBalance] = useState(Boolean);
  const [onProfEntry, setOnProfEntry] = useState(true);
  const [verifyWarning, setVerifyWarning] = useState("");
  const [loginWarning, setLoginWarning] = useState("");
  const [registerWarning, setRegisterWarning] = useState("");
  const [resetWarning, setResetWarning] = useState("");

  var [weekNum, setWeekNum] = useState(Number);

  // Just for render, useless vars
  const [cccount, setCount] = useState(0);
  const [cccBool, RenderNow] = useState(Boolean);
  function uselessCode() {
    setCount(cccount + 1); // update state
    RenderNow(false);
  }


  ////////////////////////////////////////////////////
  /////////              UI                 //////////
  ////////////////////////////////////////////////////

  // Menu navigation
  function MenuButton(target) {    
    // Create a new copy of the menu object and update its values
    const newMenu = { ...menu };
    Object.keys(newMenu).forEach(key => { newMenu[key] = false; })
    Object.keys(cMenu).forEach(key => { cMenu[key] = false; })

    if (target == "Main") {newMenu.Main = true; cMenu.Main = true; }
    if (target == "Profile") {
      newMenu.Profile = true; cMenu.Profile = true; 

      // if wallet is set, then close entry panels
      if (user.walletAddress != "" && userlogin) { 
        setOnProfEntry(false); 
        ProfileMenuEntryPanels("None");
      } 
    }
    if (target == "Mint") {newMenu.Mint = true; cMenu.Mint = true; }

    // Update the menu state with the new copy
    setMenu(newMenu);
  }

  // Profile
  function ProfileMenuPanelButton(target) {    
    // Create a new copy of the menu object and update its values
    const newMenu = { ...profilePanel };
    Object.keys(newMenu).forEach(key => { newMenu[key] = false; })

    if (target == "Inventory") newMenu.Inventory = true;
    if (target == "Lottery") newMenu.Lottery = true;

    // Update the menu state with the new copy
    setProfilePanel(newMenu);
  }

  function ProfileMenuInfoButton(target) {    
    // Create a new copy of the menu object and update its values
    const newInfo = { ...profileInfo };
    Object.keys(newInfo).forEach(key => { newInfo[key] = false; })

    if (target == "NormalProfile") newInfo.NormalProfile = true;
    if (target == "SetUsername") newInfo.SetUsername = true;
    if (target == "DeleteUser") newInfo.DeleteUser = true;

    // Update the menu state with the new copy
    setProfileInfo(newInfo);
  }

  function ProfileMenuEntryPanels(target) {    
    // Create a new copy of the menu object and update its values
    const newEntry = { ...profileEntry };
    Object.keys(newEntry).forEach(key => { newEntry[key] = false; })

    if (target == "Login") newEntry.Login = true;
    if (target == "Register") newEntry.Register = true;
    if (target == "Reset") newEntry.Reset = true;
    if (target == "Verification") newEntry.VerificationPanel = true;
    if (target == "Nickname") newEntry.NicknamePanel = true;
    if (target == "Wallet") newEntry.WalletPanel = true;
    if (target == "Deleted") newEntry.Deleted = true;

    // Update the menu state with the new copy
    setProfileEntry(newEntry);
  }


  ////////////////////////////////////////////////////
  /////////            Database             //////////
  ////////////////////////////////////////////////////

  /**
   *                    TO-DO 
   *  -> Prevent verification and reset email spams
   *  -> Error messages for register and reset
   *
  */

  // Register
  function Register(email, password, password2){
    // Check inputs
    if (email === "") {
      setRegisterWarning("Missing email!");
      return;
    }
    else if (password === "" || password2 === "") {
      setRegisterWarning("Missing password!");
      return;
    }
    else if (password !== password2) {
      setRegisterWarning("Passwords are not the same!");
      return;
    }

    //const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in 
      //user = userCredential.user;
      // ... No need to use user data, onAuthStateChange uses it already!
    })
    .catch((error) => {
      console.log("Register ERROR code: " + error.code);
      console.log("Register ERROR message: " + error.message);

      if (error.code == AuthErrorCodes.INVALID_EMAIL) {
        setRegisterWarning("Invalid email!");
      }
      else if (error.code == AuthErrorCodes.WEAK_PASSWORD) {
        setRegisterWarning("Weak password!");
      }
      else {
        setRegisterWarning("Something unexpected occourred! Error Code: " + error.code);
      }
    });
  }

  // Login
  function Login(email, password){
    //const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in 
      //const user = userCredential.user;
      // ...
    })
    .catch((error) => {
      console.log("Login ERROR code: " + error.code);
      console.log("Login ERROR message: " + error.message);
      
      if (error.code == AuthErrorCodes.INVALID_EMAIL) {
        setLoginWarning("Invalid email!");
      }
      else if (password === "") {
        setLoginWarning("Missing password!");
      }
      else if (error.code == AuthErrorCodes.INVALID_PASSWORD || error.code == AuthErrorCodes.USER_DELETED) {
        setLoginWarning("Wrong email or password!");
      }
      else {
        setLoginWarning("Something unexpected occourred! Error Code: " + error.code);
      }
      
    });
  }

  // Detect auth state
  onAuthStateChanged(auth, _user => {
    if (_user && !userlogin) {
      LoginProccess();
    } else if (!_user) {
      setUserLogin(false);
    }
  });   

  async function LoginProccess() {
    /**
     *  Flow
     *  -> Email verification?
     *  -> User data exist? : get nickname, connect and link wallet
     *  -> Wallet linked? : Connect and link wallet
     *  -> Get all data then open profile UI
    */
    
    console.log("Login Proccess started");

    // Get current user
    const _user = auth.currentUser;
    setOnProfEntry(true); // Start with entry profile: Verification, nickname, wallet link
    setUserLogin(true);

    // Check email verification
    if (!_user.emailVerified) {
      // Open email verification UI
      ProfileMenuEntryPanels("Verification");
      return;
    }

    // Get all data and open profile UI
    

    // Get user data from DB
    const docSnap = await getDoc(doc(db, "users/", _user.uid));

    // If there is no such data, then create an empty user with this ID in DB
    if (!docSnap.exists()){      
      console.log("docSnap doesn't exists! Adding new user - ID: " + _user.uid);

      // Open "Set Username" UI
      ProfileMenuEntryPanels("Nickname");
      return;
    }    
    // if exists then get the data and check if wallet linked
    else {
      console.log("Data exist, checking wallet");
      const data = docSnap.data();
      user.nickname = data.nickname;  
      if (!data.hasOwnProperty('walletAddress')) {
        console.log("No wallet linked, opening wallet link UI");
        // Open wallet connect & Link UI
        ProfileMenuEntryPanels("Wallet");
        return;
      }
      // else means wallet is linked, then check and get the other data
      else {
        console.log("Wallet linked! Getting other data");
        user.walletAddress = data.walletAddress;

        var userBalanceSum = 0;

        if (data.hasOwnProperty('eggs')) {
          user.eggs = data.eggs;
        }  
        if (data.hasOwnProperty('game_5_56mm')) {
          user.game_5_56mm = data.game_5_56mm; userBalanceSum += data.game_5_56mm;
        }     
        if (data.hasOwnProperty('game_7_62mm')) {
          user.game_7_62mm = data.game_7_62mm; userBalanceSum += data.game_7_62mm;
        }     
        if (data.hasOwnProperty('game_9mm')) {
          user.game_9mm = data.game_9mm; userBalanceSum += data.game_9mm;
        }     
        if (data.hasOwnProperty('game_12_gauge')) {
          user.game_12_gauge = data.game_12_gauge; userBalanceSum += data.game_12_gauge;
        } 

        if (userBalanceSum > 0) { setHasUserBalance(true); }
      } 
      setOnProfEntry(false);
      ProfileMenuEntryPanels("None");
    }     
    RenderNow(true);             
  } 

  // Logout
  function Logout(){
    signOut(auth).then(() => {
      console.log("Logged out!");
      setUserLogin(false);
      ProfileMenuEntryPanels("Login");
    }).catch((error) => {
      console.log("ERROR: " + error.message);
    });

    MenuButton("Main");
  } 

  function SendEmailVerification(){    
    sendEmailVerification(auth.currentUser)
    .then(() => {
      console.log("Email verification sent!");
      console.log(auth.currentUser.email);
      setVerifyWarning("Verification email sent to " + auth.currentUser.email + ". Reload the page after you verify your email address!");
    });
  }

  function SendPasswordReset(email){
    // Check input
    if (email === "") {
      setResetWarning("Missing email!");
      return;
    }

    sendPasswordResetEmail(auth, email)
    .then(() => {
      console.log("Password Reset email sent!");
      setResetWarning("Password Reset email sent!");
    })
    .catch((error) => {
      console.log("Login ERROR code: " + error.code);
      console.log("Login ERROR message: " + error.message);

      if (error.code == AuthErrorCodes.INVALID_EMAIL) {
        setResetWarning("Invalid email!");
      }
      else {
        setResetWarning("Something unexpected occourred! Error Code: " + error.code);
      }
    });
  }

  async function SetUsername(newNickname) {
    // Writes new username to the DB
    const authUser = auth.currentUser;
    console.log("Linking the wallet address");
    console.log("Display name: " + authUser.displayName);
    console.log("User ID: " + authUser.uid);
    console.log("New Username: " + newNickname);

    await setDoc(doc(db, "users/", authUser.uid), {
      nickname: newNickname
    }, {mergeFields: ["nickname"] });

    user.nickname = newNickname;
    setUser(user);
    MenuButton("Profile");
  }

  async function SetInitialNickname(nickname) {
    // Writes new username to the DB
    const authUser = auth.currentUser;
    console.log("User ID: " + authUser.uid);
    console.log("Initial Username: " + nickname);

    await setDoc(doc(db, "users/", authUser.uid), {
      nickname: nickname
    }, {mergeFields: ["nickname"] });

    user.nickname = nickname;
    setUser(user);
    ProfileMenuEntryPanels("Wallet");
  }

  async function LinkWallet() {
    // Writes wallet address to the DB
    const authUser = auth.currentUser;
    console.log("Linking the wallet address");
    console.log("User ID: " + authUser.uid);
    console.log("Wallet Address to Link: " + connectedWallet);

    await setDoc(doc(db, "users/", authUser.uid), {
      walletAddress: connectedWallet
    }, {mergeFields: ["walletAddress"] });

    user.walletAddress = connectedWallet;
    setUser(user);
    MenuButton("Profile");
  }

  async function DeleteUser() {
    // Writes wallet address to the DB
    const authUser = auth.currentUser;

    console.log("DELETING CURRENT USER !!!");
    console.log("Display name: " + authUser.displayName);
    console.log("User ID: " + authUser.uid);
    console.log("Nickname: " + user.nickname);

    await deleteDoc(doc(db, "users/", authUser.uid));
    console.log("Deleted from DB. Now deleting auth info");

    // Delete the user account
    deleteUser(authUser).then(() => {
      console.log("Successfully deleted user");
      // Just account deleted text container !!
    }).catch((error) => {
      // Logout and open login UI with warning text "Login again and try to delete again"
    });
  }

  ////////////////////////////////////////////////////
  /////////             WEB 3               //////////
  ////////////////////////////////////////////////////


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

        var wAddress = window.ethereum.selectedAddress;

        setConnectedWallet(wAddress);
        var short = wAddress.slice(0, 6) + "...." + wAddress.slice(38);
        setShortWallet(short);
        GetBalances();
        CheckApprovals();
      } catch (error) {
        console.log('Error connecting...');
      }

    } else {
      alert('Meta Mask not detected');
    }
    
    console.log("connected: " + connectedWallet + " -- Short: " + shortWallet);
  }

  // Create a provider to interact with a smart contract
  async function ConnectWallet() {
    if(typeof window.ethereum !== 'undefined') {
      await RequestAccount();

      const mmProvider = new ethers.providers.Web3Provider(window.ethereum);
    }
    else {
      // Redirect the user to the MetaMask website to download
      window.open('https://metamask.io/download.html', '_blank');
    }
  }

  // On wallet change
  useEffect(() => {
    if(typeof window.ethereum !== 'undefined') {
      // Detect changes in MetaMask wallet address
      const handleWalletAddressChange = async () => {
        if (window.ethereum && window.ethereum.selectedAddress) {
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
          var newAddress = window.ethereum.selectedAddress;

          setConnectedWallet(newAddress);
          var short = newAddress.slice(0, 6) + "...." + newAddress.slice(38);
          setShortWallet(short);
          GetBalances();
          CheckApprovals();
        }
      };
      handleWalletAddressChange(); // initial check
      window.ethereum.on('accountsChanged', handleWalletAddressChange);
      return () => {
        window.ethereum.removeListener('accountsChanged', handleWalletAddressChange);
      };
    }
  }, []);

  // Get item and token balances
  async function GetBalances() {
    console.log("Getting balances from wallet");
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    
    // Get token balance
    const tokenContract = new ethers.Contract(tokenAddress, tokenAbi, provider);

    const tBalance = await tokenContract.balanceOf(window.ethereum.selectedAddress);
    const balanceInEthers = utils.formatUnits(tBalance, 'ether'); // wei to ether
    const formattedBalance = parseInt(parseFloat(balanceInEthers)); // Remove decimals
    user.tokenBalance = formattedBalance;

    // Get item balances
    const itemContract = new ethers.Contract(itemAddress, itemAbi, provider);

    const a = window.ethereum.selectedAddress;
    const tokenIds = [0, 1, 2, 3, 4, 5, 6, 7, 8];
    const addresses =[a, a, a, a, a, a, a, a, a];    
    const batchBalances = await itemContract.balanceOfBatch(addresses, tokenIds);

    var userBalanceSum = 0;
    batchBalances.forEach(balance => userBalanceSum += Number(balance));
    if (userBalanceSum > 0) { setHasUserBalance(true); }

    user.knifeAmount = batchBalances[0];
    user.glockAmount = batchBalances[1];
    user.shotgunAmount = batchBalances[2];
    user.m4Amount = batchBalances[3];
    user.awpAmount = batchBalances[4];
    user.wallet_12_gauge = batchBalances[5];
    user.wallet_9mm = batchBalances[6];
    user.wallet_5_56mm = batchBalances[7];
    user.wallet_7_62mm = batchBalances[8];
    setUser(user);
    RenderNow(true);
  }
  
  // Check Approvals
  async function CheckApprovals() {
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    
    // Check mint approval
    const tokenContract = new ethers.Contract(tokenAddress, tokenAbi, provider);

    // Get token allowance for item Contract to transfer funds
    var tokenAllowance = await tokenContract.allowance(window.ethereum.selectedAddress, itemAddress);
    tokenAllowance = utils.formatUnits(tokenAllowance, 'ether');
    setMintApprove(tokenAllowance > 10000 ? true : false);

    // Check item approval to consume
    const itemContract = new ethers.Contract(itemAddress, itemAbi, provider);
    setConsumeApprove(await itemContract.isApprovedForAll(window.ethereum.selectedAddress, treasuryAddress));

    RenderNow(true);
  }

  async function approveForMint() {
    console.log("Givin approval of 100k tokens to spend");

    // Connect to the provider
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    await window.ethereum.request({ method: 'eth_requestAccounts' });
  
    // Get the signer
    const signer = provider.getSigner();
  
    // Create the contract instance
    const tokenContract = new ethers.Contract(tokenAddress, tokenAbi, signer);

    // Approval amount
    var amount = ethers.utils.parseUnits("1000000", "ether");
  
    // Send the transaction
    const transaction = await tokenContract.approve(itemAddress, amount);

    // Wait for the transaction to be mined
    const receipt = await transaction.wait();

    // Check the status of the transaction
    if (receipt.status === 1) {
      console.log("Transaction successful!");
      setMintApprove(true);
      RenderNow(true);
    } else {
      console.log("Transaction failed!");
    }
  }  

  async function approveForConsume() {
    console.log("Givin approval of items to consume");

    // Connect to the provider
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    await window.ethereum.request({ method: 'eth_requestAccounts' });
  
    // Get the signer
    const signer = provider.getSigner();
  
    // Create the contract instance
    const itemContract = new ethers.Contract(itemAddress, itemAbi, signer);
  
    // Send the transaction
    const transaction = await itemContract.setApprovalForAll(treasuryAddress, true);

    // Wait for the transaction to be mined
    const receipt = await transaction.wait();

    // Check the status of the transaction
    if (receipt.status === 1) {
      console.log("Transaction successful!");
      setConsumeApprove(true);
      RenderNow(true);
    } else {
      console.log("Transaction failed!");
    }
  }  

  async function MintItem(itemID, amount) {
    console.log("Minting item. ID: " + itemID + "   Amount: " + amount);

    // Connect to the provider
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    await window.ethereum.request({ method: 'eth_requestAccounts' });
  
    // Get the signer
    const signer = provider.getSigner();
  
    // Create the contract instance
    const itemContract = new ethers.Contract(itemAddress, itemAbi, signer);
  
    // Send the transaction
    const account = window.ethereum.selectedAddress;
    const data = "0x00";
    const transaction = await itemContract.mint(account, itemID, amount, data);

    // Wait for the transaction to be mined
    const receipt = await transaction.wait();

    // Check the status of the transaction
    if (receipt.status === 1) {
      console.log("Transaction successful!");
      MintSuccess(itemID, amount);

      // Update token balance
      const tokenContract = new ethers.Contract(tokenAddress, tokenAbi, provider);
      const tBalance = await tokenContract.balanceOf(window.ethereum.selectedAddress);
      const balanceInEthers = utils.formatUnits(tBalance, 'ether'); // wei to ether
      const formattedBalance = parseInt(parseFloat(balanceInEthers)); // Remove decimals
      user.tokenBalance = formattedBalance;
      RenderNow(true);
    } else {
      console.log("Transaction failed!");
    }
  }

  function MintSuccess(id, amount) {
    switch(id) {
      case 0:
        user.knifeAmount = Number(user.knifeAmount) + Number(amount);
        break;
      case 1:
        user.glockAmount = Number(user.glockAmount) + Number(amount);
        break;
      case 2:
        user.shotgunAmount = Number(user.shotgunAmount) + Number(amount);
        break;
      case 3:
        user.m4Amount = Number(user.m4Amount) + Number(amount);
        break;
      case 4:
        user.awpAmount = Number(user.awpAmount) + Number(amount);
        break;
      case 5:
        user.wallet_12_gauge = Number(user.wallet_12_gauge) + Number(amount);
        break;
      case 6:
        user.wallet_9mm = Number(user.wallet_9mm) + Number(amount);
        break;
      case 7:
        user.wallet_5_56mm = Number(user.wallet_5_56mm) + Number(amount);
        break;
      case 8:
        user.wallet_7_62mm = Number(user.wallet_7_62mm) + Number(amount);
        break;
      break;
    }
    
    setUser(user);
    RenderNow(true);
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
    const treasuryContract = new ethers.Contract(treasuryAddress, treasuryAbi, signer);
  
    // Send the transaction
    const transaction = await treasuryContract.consume(itemID, amount);

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

  /**
   * @param {Number} itemID
   * @param {Number} amount 
   */
  async function ItemConsumed(itemID, amount) {
    console.log("Writing consumed item to the db. ID: " + itemID + " - Amount: " + amount);
    const authUser = auth.currentUser;
    const docSnap = await getDoc(doc(db, "users/", authUser.uid));

    // Check if user data exist in the first place
    if (docSnap.exists()) {
      const data = docSnap.data();

      switch(itemID) {
        case 5:
          // Subtract the consumed amount from wallet amount
          user.wallet_12_gauge -= amount;

          // Get current number and add to the consumed amount      
          if (data.hasOwnProperty('game_12_gauge')) {
            const existingAmmo = data.game_12_gauge;
            amount = Number(amount) + Number(existingAmmo);
          }

          // Write updated number to db
          await setDoc(doc(db, "users/", authUser.uid), {
            game_12_gauge: amount
          }, {mergeFields: ["game_12_gauge"] });

          // Update user
          user.game_12_gauge = amount;
          break;
        case 6:
          // Subtract the consumed amount from wallet amount
          user.wallet_9mm -= amount;

          // Get current number and add to the consumed amount      
          if (data.hasOwnProperty('game_9mm')) {
            const existingAmmo = data.game_9mm;
            amount = Number(amount) + Number(existingAmmo);
          }

          // Write updated number to db
          await setDoc(doc(db, "users/", authUser.uid), {
            game_9mm: amount
          }, {mergeFields: ["game_9mm"] });

          // Update user
          user.game_9mm = amount;
          break;
        case 7:
          user.wallet_5_56mm -= amount;
    
          if (data.hasOwnProperty('game_5_56mm')) {
            const existingAmmo = data.game_5_56mm;
            amount = Number(amount) + Number(existingAmmo);
          }
          await setDoc(doc(db, "users/", authUser.uid), {
            game_5_56mm: amount
          }, {mergeFields: ["game_5_56mm"] });

          user.game_5_56mm = amount;
          break;
        case 8:
          user.wallet_7_62mm -= amount;
    
          if (data.hasOwnProperty('game_7_62mm')) {
            const existingAmmo = data.game_7_62mm;
            amount = Number(amount) + Number(existingAmmo);
          }
          await setDoc(doc(db, "users/", authUser.uid), {
            game_7_62mm: amount
          }, {mergeFields: ["game_7_62mm"] });

          user.game_7_62mm = amount;
          break;
        break;
      }
    } else {
      console.log("docSnap doesn't exists! Adding new user: displayName: "+_user.displayName+", ID: "+_user.uid);

      await setDoc(doc(db, "users/", _user.uid), {
        nickname: _user.displayName,
      }, {mergeFields: ["nickname"] });

      console.log("Adding the info to local!");
      user.nickname = _user.displayName;
    }   
    
    setUser(user);  
    RenderNow(true);     
  }

  async function ClaimRewardButton() {
    console.log("Claiming Reward");
  }

  ////////////////////////////////////////////////////
  /////////             Other               //////////
  ////////////////////////////////////////////////////

  function weekCounterChange(up) {
    if (up){
      weekNum = weekNum + 1;
      setWeekNum(weekNum);
    }
    else if (weekNum > 1) {
      weekNum = weekNum - 1;
      setWeekNum(weekNum);
    }
    document.getElementById("lotteryWeekInput").value = weekNum;
  }

  function testConsume(itemID, amount){
    console.log("Test Consume ID: " + itemID + " - Amount: " + amount);
  }

  /*    NOTES
    Use interface abi for approve/mint/burn functions, shor abi.

    Use:
    {menu.Main && (
      <section className="home-home-page">    
      </section>
    )}

    button functions: onClick={RequestAccount} /// onClick={() => MenuButton(2)}

    Add mint&consume button functions:
      onClick={() => testConsume(3, document.getElementById("invGaugeInput").value)}
    /

    TO-DO:
    - Add favicon to public folder

    - Delete burger and mobile menu divs

    - Add this line of code somewhere below between Main and Proife divs, on the main stage! This forces to re-render to update values on the screen. Use it: RenderNow(true);
    {cccBool && (
      <div onClick={uselessCode()}><p>Count: {cccount}</p></div>
    )}

    - Add menu.Main .... stuff to display pages
    - Add onClick={() => MenuButton("Main")} to nav buttons
    - Replace login text: {userlogin ? (user.nickname == "" ? ("Profile") : (user.nickname)) : ("Login")}
    - Add onClick = {() => MenuButton("Profile")}  to login button props.
    - Do the same for burger menu login as well
    - onClick={() => Logout()} to logout button
    - {userlogin && ( --> to Profile button in nav bar (for burger as well), display if logged in.
    - <a href="https://www.bitcoin.com"> IMAGE </a> to download image, for narrow menu as well !!
    - profilePanel.Inventory ... to profile menus
    - Add onClick={() => ProfileMenuPanelButton("Inventory")} to profile menu button divs
    - Change prof menu btn div class name: className= {profilePanel.Inventory ? ("home-active-profile-button") : ("home-passive-profile-button")}
    - Change it's text's class name: className= {profilePanel.Inventory ? ("home-active-profile-text") : ("home-passive-profile-text")}
    - onClick={() => ClaimRewardButton()} to claim rew btn
    - onClick={() => weekCounterChange(false)} to week count btn
    - value = {weekNum} to lottery week input
    - Add mint & consume button functions like above
    - Add {user.walletAddress === "" ? ("Wallet is not linked!") : (user.walletAddress)} to wallet address space
    - {user.walletAddress != connectedWallet && --> to link wallet button and function
    - {connectedWallet === "" && --> to connect wallet button and function
    - Add function to profile buttons onClick={() => ConnectWallet()}
    - onClick={() => ProfileMenuInfoButton("SetUsername")} --> set username and delete buttons on profile
    - Back buttons again for set username and delete
    - onClick={() => SetUsername(document.getElementById("newUsernameInput").value)} --> to set username button
    - Add delete user button as well

    ### onClick={() => SendEmailVerification(true)}

    // Nav Bar
    CSS
    .home-view'e 
      - ana yerde margin-left: 200px; ekle
      - 1200px media'da 50px yap
      - 767px media'da 0px yap
    .
    Butonlar
      - Ana mediada:
      navbar-nav.flex-column{
        flex-direction: row !important;
      }
      - 767px mediada: column !important;
      - Yine 767'de buton boyutunu değiştir:
      .home-button2 {
        font-size: 20px;
      }
    .

    --> Tuğberk'in yeni nav bar'ı ekle, eskisini sil.

    index.HTML
    Tepeye link yerine:
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-9ndCyUaIbzAi2FUVXJi0CjmCapSmO7SnpJef0486qhLnuZ2cdeRhO02iuK6FUUVM" crossorigin="anonymous"></link>
    
    body bitimine :
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js" integrity="sha384-geWF76RCwLtnZ8qwWowPQNguL3RmwHVBC9FhGdlKrxdiJJigb/j/68SIy3Te4Bkz" crossorigin="anonymous"></script>

    

    // Profile
    - {user.tokenBalance.toString()} to token balance

    // Profile - Entry
    - add warning texts to entry panels: {verifyWarning}
    - add view conditions {profileEntry.WalletPanel && connectedWallet === "" (
    - Verification button: SendEmailVerification(true)
    - Add button functions
    - Add nickname and wallet panel inputs

    // Mint Page
    - {connectedWallet === "" && <div> } to connect wallet IMAGE, shortWallet to text
    - onClick={()=> ConnectWallet()} to connect wallet image
    - {!mintApproved && connectedWallet != "" &&  <div> } to mint info container
    - {mintApproved && to all mint button images!
    - onClick={()=> approveForMint()} to approve button
    - onClick={()=> MintItem(1, document.getElementById("lotteryWeekInput").value)} to mint item buttons. (id, amount)

    // Inevntory
    - Add {user.knifeAmount.toString()} and other inventor info to the places
    - Add {(user.awpAmount > 0) && <div>} to inventory containers
    - Add {((user.wallet_9mm > 0) || (user.game_9mm > 0)) && to the inventory ammo containers
    - {!consumeApproved && connectedWallet != "" && to info container
    - {consumeApproved && to item containers' consume buttons
    - onClick={()=> approveForConsume()} to approve button
    - onClick={()=> ConsumeItem(1, document.getElementById("lotteryWeekInput").value))} to consume button (id, amount)  
    - {!hasUserBalance && to no balance warning text
  */

  


  return (
    <div className="home-container">
      <Helmet>
        <title>Zk Chickens</title>
        <meta property="og:title" content="Zk Chickens" />
      </Helmet>
      <nav className="navbar navbar-expand-md navbar-dark w-100" style={{backgroundColor: '#27272d'}}>
        <div className="container">
          <a className="navbar-brand" href="#">
            <div className="home-logo-container">
              <div className="home-logo-image-container">
                <img
                  alt="image"
                  src="/playground_assets/logo.png"
                  className="home-logo-image"
                />
              </div>
              <span className="home-logo-text">Zk Chickens</span>
            </div>
          </a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse justify-content-center" id="navbarSupportedContent">
            <ul className="navbar-nav flex-column">
              <li className='nav-item'>
                <button
                    onClick={() => MenuButton("Main")}
                    id="homePageButton"
                    className="home-button2 button-clean button"
                  >
                    Home
                </button>
              </li>
              {userlogin && (
                <li className='nav-item'>                      
                  <button
                    onClick={() => MenuButton("Profile")}
                    id="profilePageButton"
                    className="home-button2 button-clean button"
                  >
                    Profile
                  </button>
                </li>
              )}
              <li className='nav-item'>
                <button
                  onClick={() => MenuButton("Mint")}
                  id="mintPageButton"
                  className="home-button2 button-clean button"
                >
                  Item Mint
                </button>
              </li>
              <li className='nav-item'>
                <button
                  id="whitepaperButton"
                  className="home-button2 button-clean button"
                >
                  Whitepaper
                </button>
              </li>
              <li className='nav-item'>
                <span className='navbar-text ms-auto'>
                  <button 
                    onClick = {() => MenuButton("Profile")}   
                    id="loginButton" className="home-view button">
                    <span>{userlogin ? (user.nickname == "" ? ("Profile") : (user.nickname)) : ("Login")}</span>
                  </button>
                </span>
              </li>
            </ul>     
          </div>
        </div>
      </nav>
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
                    Welcome to Zk Chickens, the casual shooter game in the ZkSync Era! Experience thrilling shooting action while on the go. Our deflationary system ensures price appreciation, and our lottery gives everyone a fair chance to win, regardless of skill level. Join now for exciting rewards and endless fun!
                  </span>
                  <br></br>
                  <br></br>
                </span>
                <a href="https://play.google.com/store/apps/details?id=com.casualzkgame.zkchickens">
                  <img
                    id="downloadButton"
                    alt="image"
                    src="/playground_assets/PlayStore%20Logo.png"
                    className="home-download-button"
                  />
                </a>
              </div>
            </div>
            <div className="home-egg">
              <img
                alt="image"
                src="/playground_assets/Egg_Ribbon.png"
                className="home-image04"
              />
              <div className="home-container04">
                <h1 className="home-text011">
                  <span className="home-text012">Fair Chance, Weekly Excitement!</span>
                  <br></br>
                </h1>
                <span className="home-text014">
                  <span>
                    In our unique system, we avoid the pitfalls of unsustainable Play-To-Earn setups. Instead, we introduce a lottery system to distribute rewards more fairly. After each victorious match, players earn an "egg." These eggs serve as entries into the weekly lottery, where players have the opportunity to win from various prize pools. The more skilled players accumulate more eggs, increasing their chances of landing significant rewards.
                  </span>
                  <br></br>
                  <br></br>
                  <span>
                    By adopting this system, we strike a balance between player engagement and rewarding skills. It ensures that players of all levels have a chance to win exciting prizes, promoting a lively and enjoyable gaming experience for everyone involved. Say goodbye to unsustainable models and hello to an inclusive and thrilling gaming environment!
                  </span>
                  <br></br>
                </span>
              </div>
            </div>
            <div className="home-token-distribution">
              <div className="home-container05">
                <h1 className="home-text020">
                  <span className="home-text021">Deflation Ahead!</span>
                  <br></br>
                </h1>
                <span className="home-text023">
                  <span>
                    In our tokenomics strategy, 95% of the tokens will be available right from the start. This approach is chosen to prevent excessive inflation that has negatively affected other gaming projects in the past. Additionally, we plan to airdrop 90% of the tokens to our testers who actively participate in our testnet, rewarding them for their valuable feedback and contributions.
                  </span>
                  <br></br>
                  <br></br>
                  <span>
                    To prevent hyperinflation, we won't directly allocate tokens as game rewards. Instead, we'll utilize a carefully managed 'Chicken Treasury' for sustainable and exciting player rewards. Through the treasury, token burns will reduce the existing token supply and create a deflationary environment!
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
            <div className="home-treasury">
              <h1 className="home-text046">Chicken Treasury</h1>
              <span className="home-text063">
                <span>
                  The treasury is designed to create a sustainable and engaging gaming ecosystem. It incentivizes various stakeholders, ensures continuous development, and drives player interaction, contributing to the game's long-term success and the potential growth in token value.
                </span>
                <br></br>
                <br></br>
                <span>
                  Every week, the treasury contract will distribute the tokens income that comes from item sales to 4 parties shown below. The main objective of the treasury is to avoid extreme inflation like other game projects suffering. Instead of printing loads of tokens to provide game rewards to players, we provide the game reward through the treasury!
                </span>
                <br></br>
                <br></br>
                <span>
                  While 30% token burn effectively reducing the token supply and creating deflation, potentially driving up token prices, the community rewards will incentivize the communities to challange each other and make the playground more fun! This also will help to shape our clan system which we will develop and implement to the game after the launch.
                </span>
                <br></br>
                <br></br>
                <span>
                  In case the 10% allocation for development is insufficient, holders have the power to vote for an increase, ensuring a democratic approach to resource allocation and sustaining the game's growth and success.
                </span>
                <br></br>
                <br></br>
              </span>
              <img
                alt="image"
                src="/playground_assets/Treasury-New_WHITE.png"
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
                    Welcome to Zk Chickens, the casual shooter game in the ZkSync Era! Experience thrilling shooting action while on the go. Our deflationary system ensures price appreciation, and our lottery gives everyone a fair chance to win, regardless of skill level. Join now for exciting rewards and endless fun!
                  </span>
                  <br></br>
                </span>                
                <a href="https://play.google.com/store/apps/details?id=com.casualzkgame.zkchickens">
                  <img
                    id="downloadButton"
                    alt="image"
                    src="/playground_assets/PlayStore%20Logo.png"
                    className="home-download-button1"
                  />
                </a>
              </div>
            </div>
            <div className="home-egg1">
              <img
                alt="image"
                src="/playground_assets/Egg_Ribbon.png"
                className="home-image10"
              />
              <div className="home-container09">
                <h1 className="home-text051">
                  <span className="home-text052">Fair Chance, Weekly Excitement!</span>
                  <br></br>
                </h1>
                <span className="home-text054">
                  <span>
                    In our unique system, we avoid the pitfalls of unsustainable Play-To-Earn setups. Instead, we introduce a lottery system to distribute rewards more fairly. After each victorious match, players earn an "egg." These eggs serve as entries into the weekly lottery, where players have the opportunity to win from various prize pools. The more skilled players accumulate more eggs, increasing their chances of landing significant rewards.
                  </span>
                  <br></br>
                </span>
              </div>
              <div className="home-container10">
                <span className="home-text057">
                  <span>
                    By adopting this system, we strike a balance between player engagement and rewarding skills. It ensures that players of all levels have a chance to win exciting prizes, promoting a lively and enjoyable gaming experience for everyone involved. Say goodbye to unsustainable models and hello to an inclusive and thrilling gaming environment!
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
                    In our tokenomics strategy, 95% of the tokens will be available right from the start. This approach is chosen to prevent excessive inflation that has negatively affected other gaming projects in the past. Additionally, we plan to airdrop 90% of the tokens to our testers who actively participate in our testnet, rewarding them for their valuable feedback and contributions.
                  </span>
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
                  To prevent hyperinflation, we won't directly allocate tokens as game rewards. Instead, we'll utilize a carefully managed 'Chicken Treasury' for sustainable and exciting player rewards. Through the treasury, token burns will reduce the existing token supply and create a deflationary environment!
                  </span>
                  <br></br>
                </span>
              </div>
            </div>
            <div className="home-treasury1">
              <h1 className="home-text083">Chicken Treasury</h1>
              <span className="home-text063">
                <span>
                  The treasury is designed to create a sustainable and engaging gaming ecosystem. It incentivizes various stakeholders, ensures continuous development, and drives player interaction, contributing to the game's long-term success and the potential growth in token value.
                </span>
                <br></br>
                <br></br>
                <span>
                  Every week, the treasury contract will distribute the tokens income that comes from item sales to 4 parties shown below. The main objective of the treasury is to avoid extreme inflation like other game projects suffering. Instead of printing loads of tokens to provide game rewards to players, we provide the game reward through the treasury!
                </span>
                <br></br>
                <br></br>
                <span>
                  While 30% token burn effectively reducing the token supply and creating deflation, potentially driving up token prices, the community rewards will incentivize the communities to challange each other and make the playground more fun! This also will help to shape our clan system which we will develop and implement to the game after the launch.
                </span>
                <br></br>
                <br></br>
                <span>
                  In case the 10% allocation for development is insufficient, holders have the power to vote for an increase, ensuring a democratic approach to resource allocation and sustaining the game's growth and success.
                </span>
                <br></br>
                <br></br>
              </span>
              <img
                alt="image"
                src="/playground_assets/Treasury-New_WHITE.png"
                className="home-image14"
              />
            </div>
          </div>
        </div>
      )}
      {cccBool && (
        <div onClick={uselessCode()}><p>Count: {cccount}</p></div>
      )}
      {menu.Profile && (        
        <div className="home-profile-page">
          {profileEntry.Login && (
            <div className="home-login-container">
              <span className="home-login-text profile-basic-text">
                <span>Login</span>
                <br></br>
              </span>
              <input
                type="email"
                id="loginEmailInput"
                placeholder="Enter email address..."
                autoComplete="email"
                className="home-login-email-input input"
              />
              <input
                type="password"
                id="loginPasswordInput"
                placeholder="Enter password..."
                autoComplete="current-password"
                className="home-login-password-input input"
              />
              <div className="home-login-button-container">
                <button 
                  onClick={() => Login(
                    document.getElementById("loginEmailInput").value,
                    document.getElementById("loginPasswordInput").value
                  )}  
                  className="home-login-button button"
                >Login</button>
                <button
                  onClick={() => ProfileMenuEntryPanels("Register")}  
                  className="button home-register-ui-button"
                > Register</button>
              </div>
              <button
                onClick={() => ProfileMenuEntryPanels("Reset")} 
                className="home-reset-ui-button button"
              > Reset Password
              </button>
              <span className="home-reset-message-text profile-basic-text">
                <span>
                  {loginWarning}
                </span>
                <br></br>
              </span>
            </div>
          )}
          {profileEntry.Register && (
            <div className="home-register-container">
              <span className="home-register-text profile-basic-text">
                <span>Register</span>
                <br></br>
              </span>
              <input
                type="email"
                id="registerEmailInput"
                placeholder="Enter email address..."
                autoComplete="email"
                className="home-register-email-input input"
              />
              <input
                type="password"
                id="registerPasswordInput"
                placeholder="Enter password..."
                className="home-register-password-input input"
              />
              <input
                type="password"
                id="registerPasswordRepeatInput"
                placeholder="Re-enter password..."
                className="home-register-password-input1 input"
              />
              <div className="home-register-button-container">
                <button
                  onClick={() => ProfileMenuEntryPanels("Login")}  
                  className="button home-register-back-button"
                > Back to Login
                </button>
                <button 
                  onClick={() => Register(
                    document.getElementById("registerEmailInput").value,
                    document.getElementById("registerPasswordInput").value,
                    document.getElementById("registerPasswordRepeatInput").value
                  )}  
                  className="home-register-button button"
                >Register</button>
              </div>
              <span className="home-reset-message-text profile-basic-text">
                <span>
                  {registerWarning}
                </span>
                <br></br>
              </span>
            </div>
          )}
          {profileEntry.Reset && (
            <div className="home-reset-container">
              <span className="home-reset-text profile-basic-text">
                <span>Reset Password</span>
                <br></br>
              </span>
              <input
                type="email"
                id="resetEmailInput"
                placeholder="Enter email address..."
                autoComplete="email"
                className="home-register-email-input1 input"
              />
              <div className="home-reset-button-container">
                <button 
                  onClick={() => ProfileMenuEntryPanels("Login")}  
                  className="button home-reset-back-button"
                > Back to Login
                </button>
                <button 
                  onClick={() => SendPasswordReset(
                    document.getElementById("resetEmailInput").value
                  )}  
                  className="home-reset-password-button button"
                >Reset Password
                </button>
              </div>
              <span className="home-reset-message-text profile-basic-text">
                <span>
                  {resetWarning}
                </span>
                <br></br>
              </span>
            </div>
          )}
          {profileEntry.VerificationPanel && (
            <div className="home-verify-container">
              <span className="home-verify-text profile-basic-text">
                <span>Verify your email address!</span>
                <br></br>
              </span>
              <span className="home-verify-message-text profile-basic-text">
                <span> {verifyWarning} </span>
                <br></br>
              </span>
              <button 
                onClick={() => SendEmailVerification(true)} 
                className="home-verify-button button"
              >
                Send Verification Email
              </button>
              <img
                onClick={() => Logout()} 
                id="logoutButton"
                alt="image"
                src="/playground_assets/logoutbutton.png"
                className="home-logout-button-Verification"
              />
            </div>
          )}
          {profileEntry.NicknamePanel && (
            <div className="home-username-container">
              <span className="home-username-text profile-basic-text">
                <span>Set Your Nickname</span>
                <br></br>
              </span>
              <input
                type="text"
                id="nicknameInput"
                placeholder="Enter your nickname..."
                autoComplete="off"
                className="home-login-email-input1 input"
              />
              <button
                onClick={() => SetInitialNickname(
                  document.getElementById("nicknameInput").value
                )} 
                className="home-reset-ui-button1 button"
                >Set Nickname</button>
            </div>
          )}
          {profileEntry.WalletPanel && connectedWallet === "" && (
          <div className="home-wallet-connect-container">
            <span className="home-wallet-text profile-basic-text">
              <span>Connect your wallet and link with your account</span>
              <br></br>
            </span>
            <button 
              onClick={() => ConnectWallet()}
              className="home-main-connect-button button"
            >Connect</button>
          </div>
          )}
          {profileEntry.WalletPanel && connectedWallet !== "" && (
            <div className="home-wallet-link-container">
              <span className="home-wallet-link-text profile-basic-text">
                <span>Connect your wallet and link with your account</span>
                <br></br>
              </span>
              <span className="home-link-message-text profile-basic-text">
                <span>Connected: {shortWallet}</span>
                <br></br>
              </span>
              <button 
                onClick={() => LinkWallet()}
                className="home-main-link-button button"
              >Link to Account</button>
            </div>
          )}
          {profileEntry.Deleted && (
            <div className="home-deleted-container">
              <span className="home-delete-message-text profile-basic-text">
                <span>Your account has been deleted now!</span>
                <br></br>
              </span>
              <button className="home-delete-menu-button button">Ok (-_-)</button>
            </div>
          )}
          {!onProfEntry && userlogin && (
            <div className="home-profile-info-container">            
              <div className="home-info-container">
                {profileInfo.DeleteUser &&
                  <div className="home-delete-account-container">
                    <span className="home-text084 profile-basic-text">
                      <span>WARNING!</span>
                      <br></br>
                    </span>
                    <span className="home-text087 profile-basic-text">
                      <span>
                        By deleting you account, all your account information will be
                        deleted! All your in-game assets will be deleted! This CANNOT
                        be undone! Are you sure you want to delete your account?
                      </span>
                      <br></br>
                    </span>
                    <div className="home-container17">
                      <button className="button home-button09" onClick={() => ProfileMenuInfoButton("NormalProfile")}>
                        <span>
                          <span>Nope, go back!</span>
                          <br></br>
                        </span>
                      </button>
                      <button className="home-button10 button" onClick={()=> DeleteUser()}>
                        Yes, DELETE my account!
                      </button>
                    </div>
                  </div>
                }
                {profileInfo.SetUsername &&
                  <div className="home-new-username-container">
                    <span className="home-text093 profile-basic-text">
                      <span>Set a new username</span>
                      <br></br>
                    </span>
                    <input
                      type="text"
                      id="newUsernameInput"
                      placeholder="Enter username..."
                      className="home-new-username-input input"
                    />
                    <div className="home-container18">
                      <button className="button home-button11" onClick={() => ProfileMenuInfoButton("NormalProfile")}>
                        Go back to profile
                      </button>
                      <button className="home-button12 button"
                        onClick={() => SetUsername(document.getElementById("newUsernameInput").value)}>
                        Update username
                      </button>
                    </div>
                  </div>
                }
                {profileInfo.NormalProfile &&
                  <div className="home-info-space-1">
                    <div className="home-text-space">
                      <span className="profile-basic-text home-text096">
                        Nickname:
                      </span>
                      <span
                        id="profileUsernameText"
                        className="home-text097 profile-basic-text"
                      >
                        {user.nickname}
                      </span>
                    </div>
                    <div className="home-text-space1">
                      <span className="home-text098 profile-basic-text">
                        Wallet Address:
                      </span>
                      <span
                        id="profileAddressText"
                        className="home-text099 profile-basic-text"
                      >
                        {shortWallet}
                      </span>
                    </div>
                    <div className="home-text-space2">
                      <span className="home-text100 profile-basic-text">
                        Token Balance:
                      </span>
                      <span
                        id="profileTokenBalanceText"
                        className="home-text101 profile-basic-text"
                      >
                        {user.tokenBalance.toString()}
                      </span>
                    </div>
                  </div>
                }
                {profileInfo.NormalProfile &&
                  <div className="home-info-space-2">
                    <div className="home-text-space3">
                      <span className="home-text102 profile-basic-text">
                        Current Week:
                      </span>
                      <span
                        id="profileCurrentWeekText"
                        className="home-text103 profile-basic-text"
                      >
                        0
                      </span>
                    </div>
                    <div className="home-text-space4">
                      <span className="home-text104 profile-basic-text">
                        My Eggs:
                      </span>
                      <span
                        id="profileMyEggsText"
                        className="home-text105 profile-basic-text"
                      >
                        0
                      </span>
                    </div>
                    <div className="home-text-space5">
                      <span className="home-text106 profile-basic-text">
                        Total Eggs:
                      </span>
                      <span
                        id="profileTotalEggsText"
                        className="home-text107 profile-basic-text"
                      >
                        0
                      </span>
                    </div>
                  </div>
                }
                {profileInfo.NormalProfile &&
                  <div className="home-button-container">
                    <img
                      onClick={() => ProfileMenuInfoButton("SetUsername")}  
                      id="setUsernameButton"
                      alt="image"
                      src="/playground_assets/set%20username%20button.png"
                      className="home-set-username--utton"
                    />
                    {connectedWallet === "" && 
                    <img
                      onClick={() => ConnectWallet()}                  
                      id="profileConnectButton"
                      alt="image"
                      src="/playground_assets/connect%20button.png"
                      className="home-connect-button"
                    />             
                    }
                    {user.walletAddress != connectedWallet &&
                    <img
                      onClick={() => LinkWallet()} 
                      id="linkButton"
                      alt="image"
                      src="/playground_assets/linkbutton.png"
                      className="home-link-button"
                    />
                    }
                    <img
                      onClick={() => Logout()} 
                      id="logoutButton"
                      alt="image"
                      src="/playground_assets/logoutbutton.png"
                      className="home-logout-button"
                    />
                    <img
                      onClick={() => ProfileMenuInfoButton("DeleteUser")} 
                      id="deleteAccountButton"
                      alt="image"
                      src="/playground_assets/delete%20account%20button.png"
                      className="home-delete-button"
                    />
                  </div>
                }
              </div>
            </div>
          )}
          {!onProfEntry && userlogin &&  (
            <div className="home-profile-button-container">
              <div 
                className= {profilePanel.Inventory ? ("home-active-profile-button") : ("home-passive-profile-button")}
                onClick={() => ProfileMenuPanelButton("Inventory")}>
                  <span id="inventoryButton" 
                  className= {profilePanel.Inventory ? ("home-active-profile-text") : ("home-passive-profile-text")}>
                    Inventory
                  </span>
              </div>
              <div 
                className= {profilePanel.Lottery ? ("home-active-profile-button") : ("home-passive-profile-button")}
                onClick={() => ProfileMenuPanelButton("Lottery")}>
                  <span id="lotteryButton" 
                  className= {profilePanel.Lottery ? ("home-active-profile-text") : ("home-passive-profile-text")}>
                    <span>Lottery</span>
                    <br></br>
                  </span>
              </div>
            </div>
          )}
          {profilePanel.Lottery && !onProfEntry && userlogin &&  (
            <div className="home-lottery-panel">
              <div className="home-week-counter">
                <span className="home-text098">
                  <span>Week</span>
                  <br></br>
                </span>
                <div className="home-container17">
                  <img
                    onClick={() => weekCounterChange(false)}
                    id="weekLeftNavButton"
                    alt="image"
                    src="/playground_assets/left_button-200w.png"
                    className="home-image15"
                  />
                  <input
                    type="number"
                    id="lotteryWeekInput"
                    defaultValue= {weekNum}
                    min="0"
                    className="home-textinput input"
                  />
                  <img
                    onClick={() => weekCounterChange(true)}
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
                  onClick={() => ClaimRewardButton()} 
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
          )}
          {profilePanel.Inventory && !onProfEntry && userlogin &&  (
            <div className="home-inventory-panel">
              {!hasUserBalance && 
                <div className="home-mint-info-container">
                  <div className="home-text168">
                    <img
                      src="/playground_assets/info_64x64-200h.png"
                      alt="image"
                      className="home-image18"
                    />
                    <span className="home-price-text top10-text">
                      You don't have any items to show. Mint new items from item mint menu above.
                    </span>
                  </div>
                </div>
              }
              {!consumeApproved && connectedWallet != "" && 
                <div className="home-mint-info-container">
                  <div className="home-text168">
                    <img
                      src="/playground_assets/info_64x64-200h.png"
                      alt="image"
                      className="home-image18"
                    />
                    <span className="home-price-text top10-text">
                      You need to give allowance to Trasury contract in order to
                      consume items and use in the game. By consuming the items, items
                      will be sent to the Treasury contract and you will obtain the
                      same item in the game. Please approve allowance to proceed.
                    </span>
                  </div>
                  <img
                    onClick={()=> approveForConsume()}
                    src="/playground_assets/approve%20button-200h.png"
                    alt="image"
                    className="home-image19"
                  />
                </div>
              }
              {(user.knifeAmount > 0) &&
                <div className="item-container-small">
                  <h1 className="home-item-name top10-text">Knife</h1>
                  <img
                    alt="image"
                    src="/playground_assets/Web_Knife.png"
                    className="item-image"
                  />
                  <div className="home-container18">
                    <span className="home-text156 top10-text">
                      <span>In Wallet:</span>
                      <br></br>
                    </span>
                    <span id="invKnifeText" className="home-text159 top10-text">
                      <span>{user.knifeAmount.toString()}</span>
                      <br></br>
                    </span>
                  </div>
                </div>
              }              
              {(user.glockAmount > 0) &&
              <div className="home-glock item-container-small">
                <h1 className="home-item-name01 top10-text">
                  <span>Glock</span>
                  <br></br>
                </h1>
                <img
                  alt="image"
                  src="/playground_assets/Web_Glock.png"
                  className="home-item-image01 item-image"
                />
                <div className="home-container19">
                  <span className="home-text164 top10-text">
                    <span>In Wallet:</span>
                    <br></br>
                  </span>
                  <span id="invWalletGlockText" className="home-text167 top10-text">
                    <span>{user.glockAmount.toString()}</span>
                    <br></br>
                  </span>
                </div>
              </div>  
              }            
              {(user.shotgunAmount > 0) &&
                <div className="home-shotgun item-container-small">
                  <h1 className="home-item-name02 top10-text">Shotgun</h1>
                  <img
                    alt="image"
                    src="/playground_assets/Web_Shotgun.png"
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
                      <span>{user.shotgunAmount.toString()}</span>
                      <br></br>
                    </span>
                  </div>
                </div>   
              }           
              {(user.m4Amount > 0) &&
                <div className="home-m4 item-container-small">
                  <h1 className="home-item-name03 top10-text">M4</h1>
                  <img
                    alt="image"
                    src="/playground_assets/Web_M4.png"
                    className="home-item-image03 item-image"
                  />
                  <div className="home-container21">
                    <span className="home-text176 top10-text">
                      <span>In Wallet:</span>
                      <br></br>
                    </span>
                    <span id="invWalletM4Text" className="home-text179 top10-text">
                      <span>{user.m4Amount.toString()}</span>
                      <br></br>
                    </span>
                  </div>
                </div>
              }
              {(user.awpAmount > 0) &&
                <div className="home-awp item-container-small">
                  <h1 className="home-item-name04 top10-text">AWP</h1>
                  <img
                    alt="image"
                    src="/playground_assets/Web_AWP.png"
                    className="home-item-image04 item-image"
                  />
                  <div className="home-container22">
                    <span className="home-text182 top10-text">
                      <span>In Wallet:</span>
                      <br></br>
                    </span>
                    <span id="invWalletAWPText" className="home-text185 top10-text">
                      <span>{user.awpAmount.toString()}</span>
                      <br></br>
                    </span>
                  </div>
                </div>
              }
              {((user.wallet_12_gauge > 0) || (user.game_12_gauge > 0)) &&
                <div className="item-container-big home-ammo-12-gauge">
                  <h1 className="home-item-name05 top10-text">12-Gauge</h1>
                  <img
                    alt="image"
                    src="/playground_assets/Web_12Gauge.png"
                    className="home-item-image05 item-image"
                  />
                  <div className="home-container23">
                    <span className="home-text188 top10-text">
                      <span>In Wallet:</span>
                      <br></br>
                    </span>
                    <span id="invWalletGaugeText" className="home-text191 top10-text">
                      <span>{user.wallet_12_gauge.toString()}</span>
                      <br></br>
                    </span>
                  </div>
                  <div className="home-container24">
                    <span className="home-text194 top10-text">
                      <span>In Game:</span>
                      <br></br>
                    </span>
                    <span id="invGameGaugeText" className="home-text197 top10-text">
                      <span>{user.game_12_gauge.toString()}</span>
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
                  {consumeApproved &&
                    <img
                      onClick={()=> ConsumeItem(5, document.getElementById("invGaugeInput").value)}
                      id="invGaugeConsumeButton"
                      alt="image"
                      src="/playground_assets/consume%20button-500h.png"
                      className="inv-consume-button"
                    />
                  }
                </div>
              }
              {((user.wallet_9mm > 0) || (user.game_9mm > 0)) &&
                <div className="home-ammo-9-mm item-container-big">
                  <h1 className="home-item-name06 top10-text">9 mm</h1>
                  <img
                    alt="image"
                    src="/playground_assets/Web_9mm.png"
                    className="home-item-image06 item-image"
                  />
                  <div className="home-container25">
                    <span className="home-text200 top10-text">
                      <span>In Wallet:</span>
                      <br></br>
                    </span>
                    <span id="invWallet9mmText" className="home-text203 top10-text">
                      <span>{user.wallet_9mm.toString()}</span>
                      <br></br>
                    </span>
                  </div>
                  <div className="home-container26">
                    <span className="home-text206 top10-text">
                      <span>In Game:</span>
                      <br></br>
                    </span>
                    <span id="invGame9mmText" className="home-text209 top10-text">
                      <span>{user.game_9mm.toString()}</span>
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
                  {consumeApproved &&
                    <img
                      onClick={()=> ConsumeItem(6, document.getElementById("inv9mmInput").value)}
                      id="inv9mmConsumeButton"
                      alt="image"
                      src="/playground_assets/consume%20button-500h.png"
                      className="home-image19 inv-consume-button"
                    />
                  }
                </div>
              }
              {((user.wallet_5_56mm > 0) || (user.game_5_56mm > 0)) &&
                <div className="home-ammo-556-mm item-container-big">
                  <h1 className="home-item-name07 top10-text">5.56 mm</h1>
                  <img
                    alt="image"
                    src="/playground_assets/Web_556mm.png"
                    className="home-item-image07 item-image"
                  />
                  <div className="home-container27">
                    <span className="home-text212 top10-text">
                      <span>In Wallet:</span>
                      <br></br>
                    </span>
                    <span id="invWallet556mmText" className="home-text215 top10-text">
                      <span>{user.wallet_5_56mm.toString()}</span>
                      <br></br>
                    </span>
                  </div>
                  <div className="home-container28">
                    <span className="home-text218 top10-text">
                      <span>In Game:</span>
                      <br></br>
                    </span>
                    <span id="invGame556mmText" className="home-text221 top10-text">
                      <span>{user.game_5_56mm.toString()}</span>
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
                  {consumeApproved &&
                    <img
                      onClick={()=> ConsumeItem(7, document.getElementById("inv556mmInput").value)}
                      id="inv556mmConsumeButton"
                      alt="image"
                      src="/playground_assets/consume%20button-500h.png"
                      className="home-image20 inv-consume-button"
                    />
                  }
                </div>
              }
              {((user.wallet_7_62mm > 0) || (user.game_7_62mm > 0)) &&
                <div className="home-ammo-762-mm item-container-big">
                  <h1 className="home-item-name08 top10-text">7.62 mm</h1>
                  <img
                    alt="image"
                    src="/playground_assets/Web_762mm.png"
                    className="home-item-image08 item-image"
                  />
                  <div className="home-container29">
                    <span className="home-text224 top10-text">
                      <span>In Wallet:</span>
                      <br></br>
                    </span>
                    <span id="invWallet762mmText" className="home-text227 top10-text">
                      <span>{user.wallet_7_62mm.toString()}</span>
                      <br></br>
                    </span>
                  </div>
                  <div className="home-container30">
                    <span className="home-text230 top10-text">
                      <span>In Game:</span>
                      <br></br>
                    </span>
                    <span id="invGame762mmText" className="home-text233 top10-text">
                      <span>{user.game_7_62mm.toString()}</span>
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
                  {consumeApproved &&
                    <img
                      onClick={()=> ConsumeItem(8, document.getElementById("inv762mmInput").value)}
                      id="inv762mmConsumeButton"
                      alt="image"
                      src="/playground_assets/consume%20button-500h.png"
                      className="home-image21 inv-consume-button"
                    />
                  }
                </div>
              }
            </div>
          )}
        </div>
      )}
      {menu.Mint && (
        <div className="home-mint-page">
          <div className="home-items">
            <div className="home-connect-button-container">
              <div className="home-text250">
                <span className="home-text251 top10-text">Connected Wallet:</span>
                <span className="home-text252 top10-text">{shortWallet}</span>
              </div>
              {connectedWallet === "" && 
                <img
                  onClick={()=> ConnectWallet()}
                  src="/playground_assets/connect%20button.png"
                  alt="image"
                  className="home-image24"
                />  
              }
            </div>
            {!mintApproved && connectedWallet != "" && 
              <div className="home-mint-info-container">
                <div className="home-text168">
                  <img
                    src="/playground_assets/info_64x64-200h.png"
                    alt="image"
                    className="home-image18"
                  />
                  <span className="home-price-text top10-text">
                    You need to give allowance to Trasury contract in order to
                    consume items and use in the game. By consuming the items, items
                    will be sent to the Treasury contract and you will obtain the
                    same item in the game. Please approve allowance to proceed.
                  </span>
                </div>
                <img
                  onClick={()=> approveForMint()}
                  src="/playground_assets/approve%20button-200h.png"
                  alt="image"
                  className="home-image19"
                />
              </div>
            }
            <div className="home-item item-container-big">
              <h1 className="home-item-name09 top10-text">Knife</h1>
              <img
                alt="image"
                src="/playground_assets/Web_Knife.png"
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
              {mintApproved && 
                <img
                  onClick={()=> MintItem(0, document.getElementById("mintKnifeAmountInput").value)}
                  id="mintKnifeButton"
                  alt="image"
                  src="/playground_assets/mint_button-500h.png"
                  className="mint-button"
                />
              }
            </div>
            <div className="home-item1 item-container-big">
              <h1 className="home-item-name10 top10-text">Glock</h1>
              <img
                alt="image"
                src="/playground_assets/Web_Glock.png"
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
              {mintApproved && 
                <img
                  onClick={()=> MintItem(1, document.getElementById("mintGlockAmountInput").value)}
                  id="mintGlockButton"
                  alt="image"
                  src="/playground_assets/mint_button-500h.png"
                  className="home-image23 mint-button"
                />
              }
            </div>
            <div className="home-item2 item-container-big">
              <h1 className="home-item-name11 top10-text">Shotgun</h1>
              <img
                alt="image"
                src="/playground_assets/Web_Shotgun.png"
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
              {mintApproved && 
                <img
                  onClick={()=> MintItem(2, document.getElementById("mintShotgunAmountInput").value)}
                  id="mintShotgunButton"
                  alt="image"
                  src="/playground_assets/mint_button-500h.png"
                  className="home-image24 mint-button"
                />
              }
            </div>
            <div className="home-item3 item-container-big">
              <h1 className="home-item-name12 top10-text">M4</h1>
              <img
                alt="image"
                src="/playground_assets/Web_M4.png"
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
              {mintApproved && 
                <img
                  onClick={()=> MintItem(3, document.getElementById("mintM4AmountInput").value)}
                  id="mintM4Button"
                  alt="image"
                  src="/playground_assets/mint_button-500h.png"
                  className="home-image25 mint-button"
                />
              }
            </div>
            <div className="home-item4 item-container-big">
              <h1 className="home-item-name13 top10-text">
                <span>AWP</span>
                <br></br>
              </h1>
              <img
                alt="image"
                src="/playground_assets/Web_AWP.png"
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
              {mintApproved && 
              <img
                  onClick={()=> MintItem(4, document.getElementById("mintAWPAmountInput").value)}
                  id="mintAWPButton"
                  alt="image"
                  src="/playground_assets/mint_button-500h.png"
                  className="home-image26 mint-button"
                />
              }
            </div>
            <div className="home-item5 item-container-big">
              <h1 className="home-item-name14 top10-text">
                <span>12-Gaguge</span>
                <br></br>
              </h1>
              <img
                alt="image"
                src="/playground_assets/Web_12Gauge.png"
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
              {mintApproved && 
                <img
                  onClick={()=> MintItem(5, document.getElementById("mintGaugeAmountInput").value)}
                  id="mintGaugeButton"
                  alt="image"
                  src="/playground_assets/mint_button-500h.png"
                  className="home-image27 mint-button"
                />
              }
            </div>
            <div className="home-item6 item-container-big">
              <h1 className="home-item-name15 top10-text">
                <span>9 mm</span>
                <br></br>
              </h1>
              <img
                alt="image"
                src="/playground_assets/Web_9mm.png"
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
              {mintApproved && 
                <img
                  onClick={()=> MintItem(6, document.getElementById("mint9mmAmountInput").value)}
                  id="mint9mmButton"
                  alt="image"
                  src="/playground_assets/mint_button-500h.png"
                  className="home-image28 mint-button"
                />
              }
            </div>
            <div className="home-item7 item-container-big">
              <h1 className="home-item-name16 top10-text">
                <span>5.56 mm</span>
                <br></br>
              </h1>
              <img
                alt="image"
                src="/playground_assets/Web_556mm.png"
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
              {mintApproved && 
                <img
                  onClick={()=> MintItem(7, document.getElementById("mint556mmAmountInput").value)}
                  id="mint556mmButton"
                  alt="image"
                  src="/playground_assets/mint_button-500h.png"
                  className="home-image29 mint-button"
                />
              }
            </div>
            <div className="home-item8 item-container-big">
              <h1 className="home-item-name17 top10-text">
                <span>7.62 mm</span>
                <br></br>
              </h1>
              <img
                alt="image"
                src="/playground_assets/Web_762mm.png"
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
              {mintApproved && 
                <img
                  onClick={()=> MintItem(8, document.getElementById("mint762mmAmountInput").value)}
                  id="mint762mmButton"
                  alt="image"
                  src="/playground_assets/mint_button-500h.png"
                  className="home-image30 mint-button"
                />
              }
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
                <button
                  onClick={() => MenuButton("Main")}
                  id="homePageButton"
                  className="home-link5 button-clean button"
                >
                  Home
                </button>
                {userlogin && (                     
                  <button
                    onClick={() => MenuButton("Profile")}
                    id="profilePageButton"
                    className="home-link5 button-clean button"
                  >
                    Profile
                  </button>
                )}
                <button
                  onClick={() => MenuButton("Mint")}
                  id="mintPageButton"
                  className="home-link5 button-clean button"
                >
                  Item Mint
                </button>
                <button
                  id="whitepaperButton"
                  className="home-link5 button-clean button"
                >
                  Whitepaper
                </button>
              </div>
            </div>
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
