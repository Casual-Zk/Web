import React from 'react'

import DangerousHTML from 'dangerous-html/react'
import { Helmet } from 'react-helmet'

import Navbar from '../components/navbar'
import Footer from '../components/footer'
import './archive-home-single.css'

const ArchiveHomeSingle = (props) => {
  return (
    <div className="archive-home-single-container">
      <Helmet>
        <title>ArchiveHomeSingle - Zk Chickens</title>
        <meta property="og:title" content="ArchiveHomeSingle - Zk Chickens" />
      </Helmet>
      <Navbar rootClassName="navbar-root-class-name4"></Navbar>
      <img
        alt="image"
        src="/playground_assets/cover_0_1.png"
        className="archive-home-single-image"
      />
      <div className="archive-home-single-entry">
        <div className="archive-home-single-container1">
          <h1 className="archive-home-single-text">Zk Chickens</h1>
          <span className="archive-home-single-text01">
            <span>
              Zk Chickens is a casual game on ZkSync Era. You can play while you
              sit on toilet or commuting! In this game everyone has a chance to
              win big, for just the top players!
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
            src="/playground_assets/download%20button-200h.png"
            className="archive-home-single-download-button"
          />
        </div>
        <img
          alt="image"
          src="/playground_assets/in-game-image-sample-300h.png"
          className="archive-home-single-image1"
        />
      </div>
      <div className="archive-home-single-egg">
        <img
          alt="image"
          src="/playground_assets/Egg_Ribbon.png"
          className="archive-home-single-image2"
        />
        <div className="archive-home-single-container2">
          <h1 className="archive-home-single-text04">
            <span className="archive-home-single-text05">
              Everyone Can Win BIG!
            </span>
            <br></br>
          </h1>
          <span className="archive-home-single-text07">
            <span>
              Current Play-To-Earn systems are not sustainable. If everyone can
              earn, that means people will lose big in the end. If the only top
              players earns, that would kill the excitement of the game for the
              most players. 
            </span>
            <br></br>
            <br></br>
            <span>
              Here we have a lottery system to distribute rewards! After every
              win in a match, players earn an egg. With that egg players join
              the weekly lottery and have chance to win one of the prize pools!
              Better skills, more egg, higher chance to win big!
            </span>
            <br></br>
          </span>
        </div>
      </div>
      <div className="archive-home-single-token-distribution">
        <div className="archive-home-single-container3">
          <h1 className="archive-home-single-text13">
            <span className="archive-home-single-text14">
              Token For Gamers!
            </span>
            <br></br>
          </h1>
          <span className="archive-home-single-text16">
            <span>
              90% of tokens are testers who participate our testnet! 5% for
              liquidity pool for gamers to trade on DEX, 5% for the team who
              built Zk Chickens.
            </span>
            <br></br>
            <br></br>
            <span>
              No Play-To-Earn allocation! Distribution of the game rewards are
              not on our hands! WILL EXPLAIN IT LATER...
            </span>
            <br></br>
          </span>
        </div>
        <img
          alt="image"
          src="/playground_assets/token%20allocation-500w.png"
          className="archive-home-single-image3"
        />
      </div>
      <div className="archive-home-single-minter-cards">
        <img
          alt="image"
          src="/playground_assets/minter%20cards-500w.png"
          className="archive-home-single-image4"
        />
        <div className="archive-home-single-container4">
          <h1 className="archive-home-single-text22">
            <span className="archive-home-single-text23">
              No One Left Behind!
            </span>
            <br></br>
          </h1>
          <span className="archive-home-single-text25">
            <span>
              90% of token are allocated for our testnet player the tokens
              actually linked with Minter Cards that allow you to mint tokens
              over time!
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
      <div className="archive-home-single-lp-heroes">
        <div className="archive-home-single-container5">
          <h1 className="archive-home-single-text30">
            <span className="archive-home-single-text31">
              Become a LP Hero, Earn 10%!
            </span>
            <br></br>
          </h1>
          <span className="archive-home-single-text33">
            <span>
              Our LP Heroes who provided liquidity for gamers on DEX will get
              the 10% of the treasury!
            </span>
            <br></br>
            <br></br>
            <span>
              If you missed the oppourtunity to provide liquidity on Genesis,
              don&apos;t worry! You can buy a LP Hero from the market and start
              to earn 10% now!
            </span>
            <br></br>
          </span>
        </div>
        <img
          alt="image"
          src="/playground_assets/lp%20hero-400w.png"
          className="archive-home-single-image5"
        />
      </div>
      <div className="archive-home-single-treasury">
        <h1 className="archive-home-single-text39">Treasury</h1>
        <img
          alt="image"
          src="https://play.teleporthq.io/static/svg/placeholders/no-image.svg"
          className="archive-home-single-image6"
        />
      </div>
      <Footer></Footer>
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

export default ArchiveHomeSingle
