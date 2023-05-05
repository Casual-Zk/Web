import React from 'react'

import DangerousHTML from 'dangerous-html/react'
import { Helmet } from 'react-helmet'

import Navbar from '../components/navbar'
import Footer from '../components/footer'
import './mint.css'

const Mint = (props) => {
  return (
    <div className="mint-container">
      <Helmet>
        <title>Mint - Zk Chickens</title>
        <meta property="og:title" content="Mint - Zk Chickens" />
      </Helmet>
      <Navbar rootClassName="navbar-root-class-name1"></Navbar>
      <div className="mint-items">
        <div className="mint-item">
          <h1 className="mint-item-name">Knife</h1>
          <img
            alt="image"
            src="/playground_assets/knife_inv-200h.png"
            className="mint-item-image"
          />
          <span className="mint-price-text">Price: 1 ZCH</span>
          <div className="mint-price-input-container">
            <span className="mint-text">Amount:</span>
            <input
              type="text"
              id="mintKnifeAmountInput"
              placeholder="Enter amount..."
              className="mint-textinput input"
            />
          </div>
          <img
            id="mintKnifeButton"
            alt="image"
            src="/playground_assets/mint_button-500h.png"
            className="mint-image"
          />
        </div>
        <div className="mint-item1">
          <h1 className="mint-item-name1">Glock</h1>
          <img
            alt="image"
            src="/playground_assets/glock_inv-200h.png"
            className="mint-item-image1"
          />
          <span className="mint-price-text1">Price: 10 ZCH</span>
          <div className="mint-price-input-container1">
            <span className="mint-text01">Amount:</span>
            <input
              type="text"
              id="mintGlockAmountInput"
              placeholder="Enter amount..."
              className="mint-textinput1 input"
            />
          </div>
          <img
            id="mintGlockButton"
            alt="image"
            src="/playground_assets/mint_button-500h.png"
            className="mint-image1"
          />
        </div>
        <div className="mint-item2">
          <h1 className="mint-item-name2">Shotgun</h1>
          <img
            alt="image"
            src="/playground_assets/shoutgun_inv-200h.png"
            className="mint-item-image2"
          />
          <span className="mint-price-text2">Price: 30 ZCH</span>
          <div className="mint-price-input-container2">
            <span className="mint-text02">Amount:</span>
            <input
              type="text"
              id="mintShotgunAmountInput"
              placeholder="Enter amount..."
              className="mint-textinput2 input"
            />
          </div>
          <img
            id="mintShotgunButton"
            alt="image"
            src="/playground_assets/mint_button-500h.png"
            className="mint-image2"
          />
        </div>
        <div className="mint-item3">
          <h1 className="mint-item-name3">M4</h1>
          <img
            alt="image"
            src="/playground_assets/m4_inv-200h.png"
            className="mint-item-image3"
          />
          <span className="mint-price-text3">Price: 100 ZCH</span>
          <div className="mint-price-input-container3">
            <span className="mint-text03">Amount:</span>
            <input
              type="text"
              id="mintM4AmountInput"
              placeholder="Enter amount..."
              className="mint-textinput3 input"
            />
          </div>
          <img
            id="mintM4Button"
            alt="image"
            src="/playground_assets/mint_button-500h.png"
            className="mint-image3"
          />
        </div>
        <div className="mint-item4">
          <h1 className="mint-item-name4">
            <span>AWP</span>
            <br></br>
          </h1>
          <img
            alt="image"
            src="/playground_assets/awp_inv-200h.png"
            className="mint-item-image4"
          />
          <span className="mint-price-text4">Price: 200 ZCH</span>
          <div className="mint-price-input-container4">
            <span className="mint-text06">Amount:</span>
            <input
              type="text"
              id="mintAWPAmountInput"
              placeholder="Enter amount..."
              className="mint-textinput4 input"
            />
          </div>
          <img
            id="mintAWPButton"
            alt="image"
            src="/playground_assets/mint_button-500h.png"
            className="mint-image4"
          />
        </div>
        <div className="mint-item5">
          <h1 className="mint-item-name5">
            <span>12-Gaguge</span>
            <br></br>
          </h1>
          <img
            alt="image"
            src="/playground_assets/12gauge_inv-200h.png"
            className="mint-item-image5"
          />
          <span className="mint-price-text5">Price: 0.0001 ZCH</span>
          <div className="mint-price-input-container5">
            <span className="mint-text09">Amount:</span>
            <input
              type="text"
              id="mintGaugeAmountInput"
              placeholder="Enter amount..."
              className="mint-textinput5 input"
            />
          </div>
          <img
            id="mintGaugeButton"
            alt="image"
            src="/playground_assets/mint_button-500h.png"
            className="mint-image5"
          />
        </div>
        <div className="mint-item6">
          <h1 className="mint-item-name6">
            <span>9 mm</span>
            <br></br>
          </h1>
          <img
            alt="image"
            src="/playground_assets/9mm_inv-200h.png"
            className="mint-item-image6"
          />
          <span className="mint-price-text6">Price: 0.0002 ZCH</span>
          <div className="mint-price-input-container6">
            <span className="mint-text12">Amount:</span>
            <input
              type="text"
              id="mint9mmAmountInput"
              placeholder="Enter amount..."
              className="mint-textinput6 input"
            />
          </div>
          <img
            id="mint9mmButton"
            alt="image"
            src="/playground_assets/mint_button-500h.png"
            className="mint-image6"
          />
        </div>
        <div className="mint-item7">
          <h1 className="mint-item-name7">
            <span>5.56 mm</span>
            <br></br>
          </h1>
          <img
            alt="image"
            src="/playground_assets/5_56_inv-200h.png"
            className="mint-item-image7"
          />
          <span className="mint-price-text7">Price: 0.0003 ZCH</span>
          <div className="mint-price-input-container7">
            <span className="mint-text15">Amount:</span>
            <input
              type="text"
              id="mint556mmAmountInput"
              placeholder="Enter amount..."
              className="mint-textinput7 input"
            />
          </div>
          <img
            id="mint556mmButton"
            alt="image"
            src="/playground_assets/mint_button-500h.png"
            className="mint-image7"
          />
        </div>
        <div className="mint-item8">
          <h1 className="mint-item-name8">
            <span>7.62 mm</span>
            <br></br>
          </h1>
          <img
            alt="image"
            src="/playground_assets/7_62_inv-200h.png"
            className="mint-item-image8"
          />
          <span className="mint-price-text8">Price: 0.0005 ZCH</span>
          <div className="mint-price-input-container8">
            <span className="mint-text18">Amount:</span>
            <input
              type="text"
              id="mint762mmAmountInput"
              placeholder="Enter amount..."
              className="mint-textinput8 input"
            />
          </div>
          <img
            id="mint762mmButton"
            alt="image"
            src="/playground_assets/mint_button-500h.png"
            className="mint-image8"
          />
        </div>
      </div>
      <Footer rootClassName="footer-root-class-name1"></Footer>
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

export default Mint
