import React from 'react'

import DangerousHTML from 'dangerous-html/react'
import { Helmet } from 'react-helmet'

import Navbar from '../components/navbar'
import './archive.css'

const Archive = (props) => {
  return (
    <div className="archive-container">
      <Helmet>
        <title>Archive - Zk Chickens</title>
        <meta property="og:title" content="Archive - Zk Chickens" />
      </Helmet>
      <Navbar rootClassName="navbar-root-class-name3"></Navbar>
      <section className="archive-home-page">
        <img
          alt="image"
          src="/playground_assets/cover_0_1.png"
          className="archive-image"
        />
        <div className="archive-entry">
          <div className="archive-container1">
            <h1 className="archive-text">Zk Chickens</h1>
            <span className="archive-text01">
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
            <div className="archive-container2">
              <img
                id="downloadButton"
                alt="image"
                src="/playground_assets/download%20button-200h.png"
                className="archive-image01"
              />
            </div>
          </div>
          <img
            alt="image"
            src="/playground_assets/in-game-image-sample-300h.png"
            className="archive-image02"
          />
        </div>
        <div className="archive-egg">
          <img
            alt="image"
            src="/playground_assets/Egg_Ribbon.png"
            className="archive-image03"
          />
          <div className="archive-container3">
            <h1 className="archive-text04">
              <span className="archive-text05">Everyone Can Win BIG!</span>
              <br></br>
            </h1>
            <span className="archive-text07">
              <span>
                Current Play-To-Earn systems are not sustainable. If everyone
                can earn, that means people will lose big in the end. If the
                only top players earns, that would kill the excitement of the
                game for the most players. 
              </span>
              <br></br>
              <br></br>
              <span>
                Here we have a lottery system to distribute rewards! After every
                win in a match, players earn an egg. With that egg players join
                the weekly lottery and have chance to win one of the prize
                pools! Better skills, more egg, higher chance to win big!
              </span>
              <br></br>
            </span>
          </div>
        </div>
        <div className="archive-token-distribution">
          <div className="archive-container4">
            <h1 className="archive-text13">
              <span className="archive-text14">Token For Gamers!</span>
              <br></br>
            </h1>
            <span className="archive-text16">
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
            className="archive-image04"
          />
        </div>
        <div className="archive-minter-cards">
          <img
            alt="image"
            src="/playground_assets/minter%20cards-500w.png"
            className="archive-image05"
          />
          <div className="archive-container5">
            <h1 className="archive-text22">
              <span className="archive-text23">No One Left Behind!</span>
              <br></br>
            </h1>
            <span className="archive-text25">
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
        <div className="archive-lp-heroes">
          <div className="archive-container6">
            <h1 className="archive-text30">
              <span className="archive-text31">
                Become a LP Hero, Earn 10%!
              </span>
              <br></br>
            </h1>
            <span className="archive-text33">
              <span>
                Our LP Heroes who provided liquidity for gamers on DEX will get
                the 10% of the treasury!
              </span>
              <br></br>
              <br></br>
              <span>
                If you missed the oppourtunity to provide liquidity on Genesis,
                don&apos;t worry! You can buy a LP Hero from the market and
                start to earn 10% now!
              </span>
              <br></br>
            </span>
          </div>
          <img
            alt="image"
            src="/playground_assets/lp%20hero-400w.png"
            className="archive-image06"
          />
        </div>
        <div className="archive-lp-heroes1">
          <h1 className="archive-text39">Treasury</h1>
          <img
            alt="image"
            src="https://play.teleporthq.io/static/svg/placeholders/no-image.svg"
            className="archive-image07"
          />
        </div>
      </section>
      <section className="archive-profile">
        <div className="archive-heading">
          <h1 className="archive-header">
            Profile
            <span
              dangerouslySetInnerHTML={{
                __html: ' ',
              }}
            />
          </h1>
          <p className="archive-caption">
            A character custom collection is joining the NFT space on Opensea.
          </p>
        </div>
        <div className="archive-buttons">
          <button className="button">View on Opensea</button>
          <button className="archive-learn button-clean button">
            Learn more
          </button>
        </div>
      </section>
      <section className="archive-profile1">
        <div className="archive-heading01">
          <h1 className="archive-header01">Mint Page</h1>
          <p className="archive-caption01">
            A character custom collection is joining the NFT space on Opensea.
          </p>
        </div>
        <div className="archive-buttons1">
          <button className="button">View on Opensea</button>
          <button className="archive-learn1 button-clean button">
            Learn more
          </button>
        </div>
      </section>
      <section className="archive-description">
        <img
          alt="image"
          src="/playground_assets/hero-divider-1500w.png"
          className="archive-divider-image"
        />
        <div className="archive-container7">
          <div className="archive-description01">
            <div className="archive-content">
              <p className="archive-paragraph">
                We are a team of digital aute irure dolor in reprehenderit in
                voluptate velit esse cillum dolore eu fugiat.
              </p>
              <p className="archive-paragraph1">
                Excepteur sint occaecat cupidatat non proident, sunt in culpa
                qui officia deserunt mollit anim id est laborum. Nemo enim ipsam
                voluptatem quia voluptas sit aspernatur aut odit aut fugit.
              </p>
            </div>
            <div className="archive-links">
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noreferrer noopener"
                className="button-link button"
              >
                <span>Follow us on Twitter</span>
                <img
                  alt="image"
                  src="/playground_assets/arrow.svg"
                  className="archive-arrow"
                />
              </a>
              <a
                href="https://discord.com"
                target="_blank"
                rel="noreferrer noopener"
                className="archive-link01 button-link button"
              >
                <span>Join us on Discord</span>
                <img
                  alt="image"
                  src="/playground_assets/arrow.svg"
                  className="archive-arrow1"
                />
              </a>
            </div>
          </div>
        </div>
      </section>
      <section className="archive-cards">
        <div className="archive-row">
          <div className="archive-card">
            <div className="archive-avatar">
              <img
                alt="image"
                src="/playground_assets/avatar.svg"
                className="archive-avatar1"
              />
            </div>
            <div className="archive-main">
              <div className="archive-content01">
                <h2 className="archive-header02">10,000+ unique characters</h2>
                <p className="archive-description02">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliquat
                  enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi
                </p>
              </div>
              <button className="archive-learn2 button">
                <span className="archive-text42">Learn more</span>
                <img
                  alt="image"
                  src="/playground_assets/arrow.svg"
                  className="archive-image08"
                />
              </button>
            </div>
          </div>
        </div>
        <div className="archive-card01">
          <div className="archive-avatar2">
            <img
              alt="image"
              src="/playground_assets/light-avatar.svg"
              className="archive-avatar3"
            />
          </div>
          <div className="archive-row1">
            <div className="archive-main1">
              <div className="archive-content02">
                <h2 className="archive-header03">
                  Create yourself for the metaverse
                </h2>
                <p className="archive-description03">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliquat
                  enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi
                </p>
              </div>
              <button className="archive-learn3 button">
                <span className="archive-text43">Learn more</span>
                <img
                  alt="image"
                  src="/playground_assets/arrow-2.svg"
                  className="archive-image09"
                />
              </button>
            </div>
            <img
              alt="image"
              src="https://play.teleporthq.io/static/svg/placeholders/no-image.svg"
              className="archive-image10"
            />
          </div>
        </div>
      </section>
      <section className="archive-collection">
        <div className="archive-content03">
          <span className="archive-caption02">collection</span>
          <div className="archive-heading02">
            <h2 className="archive-header04">All time best collections</h2>
            <p className="archive-header05">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore.
            </p>
          </div>
        </div>
        <div className="archive-main2">
          <div className="archive-card02">
            <div className="archive-image11">
              <img
                alt="image"
                src="/playground_assets/character-1.svg"
                className="archive-image12"
              />
            </div>
            <div className="archive-content04">
              <span className="archive-caption03">Character #1</span>
              <h3 className="archive-title">0.05 ETH</h3>
            </div>
          </div>
          <div className="archive-card03">
            <div className="archive-image13">
              <img
                alt="image"
                src="/playground_assets/character-2.svg"
                className="archive-image14"
              />
            </div>
            <div className="archive-content05">
              <span className="archive-caption04">Character #2</span>
              <h3 className="archive-title1">0.05 ETH</h3>
            </div>
          </div>
          <div className="archive-card04">
            <div className="archive-image15">
              <img
                alt="image"
                src="/playground_assets/character-3.svg"
                className="archive-image16"
              />
            </div>
            <div className="archive-content06">
              <span className="archive-caption05">Character #3</span>
              <h3 className="archive-title2">0.05 ETH</h3>
            </div>
          </div>
          <div className="archive-card05">
            <div className="archive-image17">
              <img
                alt="image"
                src="/playground_assets/character-4.svg"
                className="archive-image18"
              />
            </div>
            <div className="archive-content07">
              <span className="archive-caption06">
                <span>Character #4</span>
                <br></br>
              </span>
              <h3 className="archive-title3">0.05 ETH</h3>
            </div>
          </div>
          <div className="archive-card06">
            <div className="archive-image19">
              <img
                alt="image"
                src="/playground_assets/character-5.svg"
                className="archive-image20"
              />
            </div>
            <div className="archive-content08">
              <span className="archive-caption07">Character #5</span>
              <h3 className="archive-title4">0.05 ETH</h3>
            </div>
          </div>
          <div className="archive-card07">
            <div className="archive-image21">
              <img
                alt="image"
                src="/playground_assets/character-6.svg"
                className="archive-image22"
              />
            </div>
            <div className="archive-content09">
              <span className="archive-caption08">Character #6</span>
              <h3 className="archive-title5">0.05 ETH</h3>
            </div>
          </div>
          <div className="archive-card08">
            <div className="archive-image23">
              <img
                alt="image"
                src="/playground_assets/character-7.svg"
                className="archive-image24"
              />
            </div>
            <div className="archive-content10">
              <span className="archive-caption09">Character #7</span>
              <h3 className="archive-title6">0.05 ETH</h3>
            </div>
          </div>
          <div className="archive-card09">
            <div className="archive-image25">
              <img
                alt="image"
                src="/playground_assets/character-8.svg"
                className="archive-image26"
              />
            </div>
            <div className="archive-content11">
              <span className="archive-caption10">Character #8</span>
              <h3 className="archive-title7">0.05 ETH</h3>
            </div>
          </div>
        </div>
        <button className="archive-view2 button-link button">View all</button>
      </section>
      <section className="archive-project">
        <div className="archive-understand">
          <div className="archive-content12">
            <span className="archive-caption11">Project</span>
            <div className="archive-heading03">
              <h2 className="archive-header06">Understand the project</h2>
              <p className="archive-header07">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
            </div>
            <button className="archive-view3 button-link button">
              <span>Learn More</span>
              <img
                alt="image"
                src="/playground_assets/arrow.svg"
                className="archive-image27"
              />
            </button>
          </div>
          <img
            alt="image"
            src="/playground_assets/group%202415.svg"
            className="archive-image28"
          />
        </div>
        <div className="archive-mining">
          <img
            alt="image"
            src="https://play.teleporthq.io/static/svg/placeholders/no-image.svg"
            className="archive-image29"
          />
          <div className="archive-content13">
            <span className="archive-caption12">Project</span>
            <div className="archive-heading04">
              <h2 className="archive-header08">How the minting works</h2>
              <p className="archive-header09">
                <span>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </span>
                <br></br>
                <br></br>
                <span>
                  Duis aute irure dolor in reprehenderit in voluptate velit esse
                  cillum dolore eu fugiat nulla pariatur.
                </span>
                <br></br>
              </p>
            </div>
            <button className="archive-view4 button-link button">
              <span>Learn More</span>
              <img
                alt="image"
                src="/playground_assets/arrow.svg"
                className="archive-image30"
              />
            </button>
          </div>
        </div>
      </section>
      <section className="archive-roadmap">
        <div className="archive-heading05">
          <h2 className="archive-header10">Roadmap</h2>
          <p className="archive-header11">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore
          </p>
        </div>
        <div className="archive-list">
          <div className="archive-step">
            <span className="archive-caption13">01</span>
            <div className="archive-heading06">
              <h2 className="archive-header12">Project Launch</h2>
              <p className="archive-header13">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
            </div>
            <button className="archive-button button">View on Opensea</button>
          </div>
          <div className="archive-step1">
            <span className="archive-caption14">02</span>
            <div className="archive-heading07">
              <h2 className="archive-header14">Metadata and Character</h2>
              <p className="archive-header15">
                <span>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <br></br>
                <br></br>
                <span>
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </span>
                <br></br>
              </p>
            </div>
          </div>
          <div className="archive-step2">
            <span className="archive-caption15">03</span>
            <div className="archive-heading08">
              <h2 className="archive-header16">Get Physical</h2>
              <p className="archive-header17">
                <span>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <br></br>
                <br></br>
                <span>
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </span>
                <br></br>
              </p>
            </div>
          </div>
          <div className="archive-step3">
            <span className="archive-caption16">04</span>
            <div className="archive-heading09">
              <h2 className="archive-header18">Private club community</h2>
              <p className="archive-header19">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </p>
              <div className="archive-benefits">
                <div className="archive-item">
                  <img
                    alt="image"
                    src="/playground_assets/people.svg"
                    className="archive-image31"
                  />
                  <p className="archive-header20">
                    Consectetur adipiscing elit
                  </p>
                </div>
                <div className="archive-item1">
                  <img
                    alt="image"
                    src="/playground_assets/paper.svg"
                    className="archive-image32"
                  />
                  <p className="archive-header21">
                    Consectetur adipiscing elit
                  </p>
                </div>
                <div className="archive-item2">
                  <img
                    alt="image"
                    src="/playground_assets/checklist.svg"
                    className="archive-image33"
                  />
                  <p className="archive-header22">
                    Consectetur adipiscing elit
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="archive-join-us">
        <div className="archive-content14">
          <div className="archive-main3">
            <div className="archive-heading10">
              <h2 className="archive-header23">Create your character now</h2>
              <p className="archive-caption17">
                A character custom collection is joining the NFT space on
                Opensea.
              </p>
            </div>
            <button className="archive-view5 button">View on Opensea</button>
          </div>
          <img
            alt="image"
            src="https://play.teleporthq.io/static/svg/placeholders/no-image.svg"
            className="archive-image34"
          />
        </div>
      </section>
      <section className="archive-faq">
        <h2 className="archive-header24">We have all the answers</h2>
        <div className="archive-accordion">
          <div
            data-role="accordion-container"
            className="archive-element accordion"
          >
            <div className="archive-content15">
              <span className="archive-header25">
                Lorem ipsum dolor sit ametetur elit?
              </span>
              <span
                data-role="accordion-content"
                className="archive-description04"
              >
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
                quae ab illo inventore veritatis et quasi architecto beatae
                vitae dicta sunt explicabo.
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
            </div>
            <div className="archive-icon-container">
              <svg
                viewBox="0 0 1024 1024"
                data-role="accordion-icon-closed"
                className="archive-icon"
              >
                <path d="M213.333 554.667h256v256c0 23.552 19.115 42.667 42.667 42.667s42.667-19.115 42.667-42.667v-256h256c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-256v-256c0-23.552-19.115-42.667-42.667-42.667s-42.667 19.115-42.667 42.667v256h-256c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
              </svg>
              <svg
                viewBox="0 0 1024 1024"
                data-role="accordion-icon-open"
                className="archive-icon02"
              >
                <path d="M213.333 554.667h597.333c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-597.333c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
              </svg>
            </div>
          </div>
          <div
            data-role="accordion-container"
            className="archive-element1 accordion"
          >
            <div className="archive-content16">
              <span className="archive-header26">
                Excepteur sint occaecat cupidatat non sunt in culpa qui officia
                deserunt mollit anim id est laborum?
              </span>
              <span
                data-role="accordion-content"
                className="archive-description05"
              >
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
                quae ab illo inventore veritatis et quasi architecto beatae
                vitae dicta sunt explicabo.
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
            </div>
            <div className="archive-icon-container1">
              <svg
                viewBox="0 0 1024 1024"
                data-role="accordion-icon-closed"
                className="archive-icon04"
              >
                <path d="M213.333 554.667h256v256c0 23.552 19.115 42.667 42.667 42.667s42.667-19.115 42.667-42.667v-256h256c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-256v-256c0-23.552-19.115-42.667-42.667-42.667s-42.667 19.115-42.667 42.667v256h-256c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
              </svg>
              <svg
                viewBox="0 0 1024 1024"
                data-role="accordion-icon-open"
                className="archive-icon06"
              >
                <path d="M213.333 554.667h597.333c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-597.333c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
              </svg>
            </div>
          </div>
          <div
            data-role="accordion-container"
            className="archive-element2 accordion"
          >
            <div className="archive-content17">
              <span className="archive-header27">
                Tempor incididunt ut labore et dolore magna aliquat enim ad
                minim?
              </span>
              <span
                data-role="accordion-content"
                className="archive-description06"
              >
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
                quae ab illo inventore veritatis et quasi architecto beatae
                vitae dicta sunt explicabo.
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
            </div>
            <div className="archive-icon-container2">
              <svg
                viewBox="0 0 1024 1024"
                data-role="accordion-icon-closed"
                className="archive-icon08"
              >
                <path d="M213.333 554.667h256v256c0 23.552 19.115 42.667 42.667 42.667s42.667-19.115 42.667-42.667v-256h256c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-256v-256c0-23.552-19.115-42.667-42.667-42.667s-42.667 19.115-42.667 42.667v256h-256c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
              </svg>
              <svg
                viewBox="0 0 1024 1024"
                data-role="accordion-icon-open"
                className="archive-icon10"
              >
                <path d="M213.333 554.667h597.333c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-597.333c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
              </svg>
            </div>
          </div>
          <div
            data-role="accordion-container"
            className="archive-element3 accordion"
          >
            <div className="archive-content18">
              <span className="archive-header28">
                Lorem ipsum dolor sit ametetur elit?
              </span>
              <span
                data-role="accordion-content"
                className="archive-description07"
              >
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
                quae ab illo inventore veritatis et quasi architecto beatae
                vitae dicta sunt explicabo.
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
            </div>
            <div className="archive-icon-container3">
              <svg
                viewBox="0 0 1024 1024"
                data-role="accordion-icon-closed"
                className="archive-icon12"
              >
                <path d="M213.333 554.667h256v256c0 23.552 19.115 42.667 42.667 42.667s42.667-19.115 42.667-42.667v-256h256c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-256v-256c0-23.552-19.115-42.667-42.667-42.667s-42.667 19.115-42.667 42.667v256h-256c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
              </svg>
              <svg
                viewBox="0 0 1024 1024"
                data-role="accordion-icon-open"
                className="archive-icon14"
              >
                <path d="M213.333 554.667h597.333c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-597.333c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
              </svg>
            </div>
          </div>
          <div
            data-role="accordion-container"
            className="archive-element4 accordion"
          >
            <div className="archive-content19">
              <span className="archive-header29">
                Incididunt ut labore et dolore?
              </span>
              <span
                data-role="accordion-content"
                className="archive-description08"
              >
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
                quae ab illo inventore veritatis et quasi architecto beatae
                vitae dicta sunt explicabo.
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
            </div>
            <div className="archive-icon-container4">
              <svg
                viewBox="0 0 1024 1024"
                data-role="accordion-icon-closed"
                className="archive-icon16"
              >
                <path d="M213.333 554.667h256v256c0 23.552 19.115 42.667 42.667 42.667s42.667-19.115 42.667-42.667v-256h256c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-256v-256c0-23.552-19.115-42.667-42.667-42.667s-42.667 19.115-42.667 42.667v256h-256c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
              </svg>
              <svg
                viewBox="0 0 1024 1024"
                data-role="accordion-icon-open"
                className="archive-icon18"
              >
                <path d="M213.333 554.667h597.333c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-597.333c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
              </svg>
            </div>
          </div>
        </div>
      </section>
      <section className="archive-get-yours">
        <div className="archive-row2">
          <div className="archive-column">
            <div className="archive-card10">
              <img
                alt="image"
                src="/playground_assets/character-9.svg"
                className="archive-image35"
              />
            </div>
          </div>
          <div className="archive-column1">
            <div className="archive-card11">
              <img
                alt="image"
                src="/playground_assets/character-10.svg"
                className="archive-image36"
              />
            </div>
          </div>
        </div>
        <div className="archive-column2">
          <div className="archive-card12">
            <div className="archive-content20">
              <h2 className="archive-header30">Get yours now</h2>
              <p className="archive-description09">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliquat enim
                ad minim veniam.
              </p>
            </div>
            <button className="archive-button1 button">View on Opensea</button>
          </div>
        </div>
      </section>
      <footer className="archive-footer">
        <div className="archive-main4">
          <div className="archive-branding">
            <div className="archive-heading11">
              <h2 className="archive-logo">
                <span className="archive-text63">Zk Chickens</span>
                <br></br>
              </h2>
              <p className="archive-caption18">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore.
              </p>
            </div>
            <div className="archive-socials">
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noreferrer noopener"
                className="archive-twitter social button"
              >
                <img
                  alt="image"
                  src="/playground_assets/twitter.svg"
                  className="archive-image37"
                />
              </a>
              <a
                href="https://discord.com"
                target="_blank"
                rel="noreferrer noopener"
                className="archive-discord social button"
              >
                <img
                  alt="image"
                  src="/playground_assets/discord.svg"
                  className="archive-image38"
                />
              </a>
            </div>
          </div>
          <div className="archive-links1">
            <div className="archive-list1">
              <h3 className="archive-heading12">Site</h3>
              <div className="archive-items">
                <button className="archive-link02 button-clean button">
                  About
                </button>
                <button className="archive-link03 button-clean button">
                  Collection
                </button>
                <button className="archive-link04 button-clean button">
                  Roadmap
                </button>
                <button className="archive-link05 button-clean button">
                  Features
                </button>
              </div>
            </div>
            <div className="archive-list2">
              <h3 className="archive-heading13">Company</h3>
              <div className="archive-items1">
                <button className="archive-link06 button-clean button">
                  Team
                </button>
                <button className="archive-link07 button-clean button">
                  Press
                </button>
                <button className="archive-link08 button-clean button">
                  Terms
                </button>
                <button className="archive-link09 button-clean button">
                  Limitations
                </button>
                <button className="archive-link10 button-clean button">
                  Licenses
                </button>
              </div>
            </div>
          </div>
          <div className="archive-socials1">
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noreferrer noopener"
              className="archive-twitter1 social button"
            >
              <img
                alt="image"
                src="/playground_assets/twitter.svg"
                className="archive-image39"
              />
            </a>
            <a
              href="https://discord.com"
              target="_blank"
              rel="noreferrer noopener"
              className="archive-discord1 social button"
            >
              <img
                alt="image"
                src="/playground_assets/discord.svg"
                className="archive-image40"
              />
            </a>
          </div>
        </div>
        <span className="archive-copyright">
          © 2023 Character. All Rights Reserved.
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

export default Archive
