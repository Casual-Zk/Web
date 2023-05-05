import React from 'react'

import DangerousHTML from 'dangerous-html/react'
import { Helmet } from 'react-helmet'

import Navbar from '../components/navbar'
import Footer from '../components/footer'
import './profile.css'

const Profile = (props) => {
  return (
    <div className="profile-container">
      <Helmet>
        <title>Profile - Zk Chickens</title>
        <meta property="og:title" content="Profile - Zk Chickens" />
      </Helmet>
      <Navbar rootClassName="navbar-root-class-name2"></Navbar>
      <div className="profile-profile-page">
        <div className="profile-profile-info">
          <div className="profile-pp">
            <img
              id="profilePhoto"
              alt="image"
              src="/playground_assets/profile_photo-200h.png"
              className="profile-image"
            />
          </div>
          <div className="profile-container01">
            <div className="profile-info-space">
              <div className="profile-text-space">
                <span className="profile-text">Username:</span>
                <span id="profileUsernameText" className="profile-text001">
                  Bozen
                </span>
              </div>
              <div className="profile-text-space1">
                <span className="profile-text002">Wallet Address:</span>
                <span id="profileAddressText" className="profile-text003">
                  0x0000....0000
                </span>
              </div>
              <div className="profile-text-space2">
                <span className="profile-text004">Token Balance:</span>
                <span id="profileTokenBalanceText" className="profile-text005">
                  0
                </span>
              </div>
            </div>
            <div className="profile-info-space1">
              <div className="profile-text-space3">
                <span className="profile-text006">Current Week:</span>
                <span id="profileCurrentWeekText" className="profile-text007">
                  0
                </span>
              </div>
              <div className="profile-text-space4">
                <span className="profile-text008">My Eggs:</span>
                <span id="profileMyEggsText" className="profile-text009">
                  0
                </span>
              </div>
              <div className="profile-text-space5">
                <span className="profile-text010">Total Eggs:</span>
                <span id="profileTotalEggsText" className="profile-text011">
                  0
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="profile-buttons">
          <div className="profile-container02">
            <span id="inventoryButton" className="profile-text012">
              Inventory
            </span>
          </div>
          <div className="profile-container03">
            <span id="lotteryButton" className="profile-text013">
              <span>Lottery</span>
              <br></br>
            </span>
          </div>
        </div>
        <div className="profile-lottery-panel">
          <div className="profile-week-counter">
            <span className="profile-text016">
              <span>Week</span>
              <br></br>
            </span>
            <div className="profile-container04">
              <img
                id="weekLeftNavButton"
                alt="image"
                src="/playground_assets/left_button-200w.png"
                className="profile-image1"
              />
              <input
                type="text"
                id="lotteryWeekInput"
                value="1"
                className="profile-textinput input"
              />
              <img
                id="weekRightNavButton"
                alt="image"
                src="/playground_assets/right_button-200w.png"
                className="profile-image2"
              />
            </div>
          </div>
          <div className="profile-week-info">
            <div className="profile-text-space6">
              <span className="profile-text019">My Eggs:</span>
              <span id="lotteryMyEggsText" className="profile-text020">
                0
              </span>
            </div>
            <div className="profile-text-space7">
              <span className="profile-text021">Total Eggs:</span>
              <span id="lotteryTotalEggsText" className="profile-text022">
                0
              </span>
            </div>
            <div className="profile-text-space8">
              <span className="profile-text023">Result:</span>
              <span id="lotteryResultText" className="profile-text024">
                No luck for this week...
              </span>
            </div>
            <img
              id="claimRewardButton"
              alt="image"
              src="/playground_assets/claimrewardbutton-200h.png"
              className="profile-image3"
            />
          </div>
          <div className="profile-top10">
            <span className="profile-text025">
              <span>Top 10</span>
              <br></br>
            </span>
            <div className="profile-list-container">
              <div className="profile-title">
                <span className="profile-text028">
                  <span>Address</span>
                  <br></br>
                </span>
                <span className="profile-text031">
                  <span>Eggs</span>
                  <br></br>
                </span>
              </div>
              <div className="profile-record">
                <span id="top10_0_address" className="profile-text034">
                  0x85be25d0Ef53959dB27D42df1f7da57549154D5f
                </span>
                <span className="profile-text035">
                  <span>10</span>
                  <br></br>
                </span>
              </div>
              <div className="profile-record01">
                <span id="top10_1_address" className="profile-text038">
                  0x85be25d0Ef53959dB27D42df1f7da57549154D5f
                </span>
                <span id="top10_1_eggs" className="profile-text039">
                  <span>9</span>
                  <br></br>
                </span>
              </div>
              <div className="profile-record02">
                <span id="top10_2_address" className="profile-text042">
                  0x85be25d0Ef53959dB27D42df1f7da57549154D5f
                </span>
                <span id="top10_2_eggs" className="profile-text043">
                  <span>8</span>
                  <br></br>
                </span>
              </div>
              <div className="profile-record03">
                <span id="top10_3_address" className="profile-text046">
                  0x85be25d0Ef53959dB27D42df1f7da57549154D5f
                </span>
                <span id="top10_3_eggs" className="profile-text047">
                  <span>7</span>
                  <br></br>
                </span>
              </div>
              <div className="profile-record04">
                <span id="top10_4_address" className="profile-text050">
                  0x85be25d0Ef53959dB27D42df1f7da57549154D5f
                </span>
                <span id="top10_4_eggs" className="profile-text051">
                  <span>6</span>
                  <br></br>
                </span>
              </div>
              <div className="profile-record05">
                <span id="top10_5_address" className="profile-text054">
                  0x85be25d0Ef53959dB27D42df1f7da57549154D5f
                </span>
                <span id="top10_5_eggs" className="profile-text055">
                  <span>5</span>
                  <br></br>
                </span>
              </div>
              <div className="profile-record06">
                <span id="top10_6_address" className="profile-text058">
                  0x85be25d0Ef53959dB27D42df1f7da57549154D5f
                </span>
                <span id="top10_6_eggs" className="profile-text059">
                  <span>4</span>
                  <br></br>
                </span>
              </div>
              <div className="profile-record07">
                <span id="top10_7_address" className="profile-text062">
                  0x85be25d0Ef53959dB27D42df1f7da57549154D5f
                </span>
                <span id="top10_7_eggs" className="profile-text063">
                  <span>3</span>
                  <br></br>
                </span>
              </div>
              <div className="profile-record08">
                <span id="top10_8_address" className="profile-text066">
                  0x85be25d0Ef53959dB27D42df1f7da57549154D5f
                </span>
                <span id="top10_8_eggs" className="profile-text067">
                  <span>2</span>
                  <br></br>
                </span>
              </div>
              <div className="profile-record09">
                <span id="top10_9_address" className="profile-text070">
                  0x85be25d0Ef53959dB27D42df1f7da57549154D5f
                </span>
                <span id="top10_9_eggs" className="profile-text071">
                  <span>1</span>
                  <br></br>
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="profile-inventory-panel">
          <div className="profile-knife">
            <h1 className="profile-item-name">Knife</h1>
            <img
              alt="image"
              src="/playground_assets/knife_inv-200h.png"
              className="profile-item-image"
            />
            <div className="profile-container05">
              <span className="profile-text074">
                <span>In Wallet:</span>
                <br></br>
              </span>
              <span id="invKnifeText" className="profile-text077">
                <span>0</span>
                <br></br>
              </span>
            </div>
          </div>
          <div className="profile-glock">
            <h1 className="profile-item-name1">
              <span>Glock</span>
              <br></br>
            </h1>
            <img
              alt="image"
              src="/playground_assets/glock_inv-200h.png"
              className="profile-item-image1"
            />
            <div className="profile-container06">
              <span className="profile-text082">
                <span>In Wallet:</span>
                <br></br>
              </span>
              <span id="invWalletGlockText" className="profile-text085">
                <span>0</span>
                <br></br>
              </span>
            </div>
          </div>
          <div className="profile-shotgun">
            <h1 className="profile-item-name2">Shotgun</h1>
            <img
              alt="image"
              src="/playground_assets/shoutgun_inv-200h.png"
              className="profile-item-image2"
            />
            <div className="profile-container07">
              <span className="profile-text088">
                <span>In Wallet:</span>
                <br></br>
              </span>
              <span id="invWalletShotgunText" className="profile-text091">
                <span>0</span>
                <br></br>
              </span>
            </div>
          </div>
          <div className="profile-m4">
            <h1 className="profile-item-name3">M4</h1>
            <img
              alt="image"
              src="/playground_assets/m4_inv-200h.png"
              className="profile-item-image3"
            />
            <div className="profile-container08">
              <span className="profile-text094">
                <span>In Wallet:</span>
                <br></br>
              </span>
              <span id="invWalletM4Text" className="profile-text097">
                <span>0</span>
                <br></br>
              </span>
            </div>
          </div>
          <div className="profile-awp">
            <h1 className="profile-item-name4">AWP</h1>
            <img
              alt="image"
              src="/playground_assets/awp_inv-200h.png"
              className="profile-item-image4"
            />
            <div className="profile-container09">
              <span className="profile-text100">
                <span>In Wallet:</span>
                <br></br>
              </span>
              <span id="invWalletAWPText" className="profile-text103">
                <span>0</span>
                <br></br>
              </span>
            </div>
          </div>
          <div className="profile-ammo-12-gauge">
            <h1 className="profile-item-name5">12-Gauge</h1>
            <img
              alt="image"
              src="/playground_assets/12gauge_inv-200h.png"
              className="profile-item-image5"
            />
            <div className="profile-container10">
              <span className="profile-text106">
                <span>In Wallet:</span>
                <br></br>
              </span>
              <span id="invWalletGaugeText" className="profile-text109">
                <span>0</span>
                <br></br>
              </span>
            </div>
            <div className="profile-container11">
              <span className="profile-text112">
                <span>In Game:</span>
                <br></br>
              </span>
              <span id="invGameGaugeText" className="profile-text115">
                <span>0</span>
                <br></br>
              </span>
            </div>
            <input
              type="text"
              id="invGaugeInput"
              placeholder="Enter Amount"
              className="profile-textinput1 input"
            />
            <img
              id="invGaugeConsumeButton"
              alt="image"
              src="/playground_assets/consume%20button-500h.png"
              className="profile-image4"
            />
          </div>
          <div className="profile-ammo-9-mm">
            <h1 className="profile-item-name6">9 mm</h1>
            <img
              alt="image"
              src="/playground_assets/9mm_inv-200h.png"
              className="profile-item-image6"
            />
            <div className="profile-container12">
              <span className="profile-text118">
                <span>In Wallet:</span>
                <br></br>
              </span>
              <span id="invWallet9mmText" className="profile-text121">
                <span>0</span>
                <br></br>
              </span>
            </div>
            <div className="profile-container13">
              <span className="profile-text124">
                <span>In Game:</span>
                <br></br>
              </span>
              <span id="invGame9mmText" className="profile-text127">
                <span>0</span>
                <br></br>
              </span>
            </div>
            <input
              type="text"
              id="inv9mmInput"
              placeholder="Enter Amount"
              className="profile-textinput2 input"
            />
            <img
              id="inv9mmConsumeButton"
              alt="image"
              src="/playground_assets/consume%20button-500h.png"
              className="profile-image5"
            />
          </div>
          <div className="profile-ammo-556-mm">
            <h1 className="profile-item-name7">5.56 mm</h1>
            <img
              alt="image"
              src="/playground_assets/5_56_inv-200h.png"
              className="profile-item-image7"
            />
            <div className="profile-container14">
              <span className="profile-text130">
                <span>In Wallet:</span>
                <br></br>
              </span>
              <span id="invWallet556mmText" className="profile-text133">
                <span>0</span>
                <br></br>
              </span>
            </div>
            <div className="profile-container15">
              <span className="profile-text136">
                <span>In Game:</span>
                <br></br>
              </span>
              <span id="invGame556mmText" className="profile-text139">
                <span>0</span>
                <br></br>
              </span>
            </div>
            <input
              type="text"
              id="inv556mmInput"
              placeholder="Enter Amount"
              className="profile-textinput3 input"
            />
            <img
              id="inv556mmConsumeButton"
              alt="image"
              src="/playground_assets/consume%20button-500h.png"
              className="profile-image6"
            />
          </div>
          <div className="profile-ammo-762-mm">
            <h1 className="profile-item-name8">7.62 mm</h1>
            <img
              alt="image"
              src="/playground_assets/7_62_inv-200h.png"
              className="profile-item-image8"
            />
            <div className="profile-container16">
              <span className="profile-text142">
                <span>In Wallet:</span>
                <br></br>
              </span>
              <span id="invWallet762mmText" className="profile-text145">
                <span>0</span>
                <br></br>
              </span>
            </div>
            <div className="profile-container17">
              <span className="profile-text148">
                <span>In Game:</span>
                <br></br>
              </span>
              <span id="invGame762mmText" className="profile-text151">
                <span>0</span>
                <br></br>
              </span>
            </div>
            <input
              type="text"
              id="inv762mmInput"
              placeholder="Enter Amount"
              className="profile-textinput4 input"
            />
            <img
              id="inv762mmConsumeButton"
              alt="image"
              src="/playground_assets/consume%20button-500h.png"
              className="profile-image7"
            />
          </div>
        </div>
      </div>
      <Footer rootClassName="footer-root-class-name"></Footer>
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

export default Profile
