import React from 'react'

import PropTypes from 'prop-types'

import './navbar.css'

const Navbar = (props) => {
  return (
    <div className={`navbar-container ${props.rootClassName} `}>
      <header data-thq="thq-navbar" className="navbar-navbar">
        <div className="navbar-container1">
          <div className="navbar-container2">
            <img
              alt={props.image_alt4}
              src={props.image_src4}
              className="navbar-image"
            />
          </div>
          <span className="navbar-logo">{props.Logo}</span>
        </div>
        <div
          data-thq="thq-navbar-nav"
          data-role="Nav"
          className="navbar-desktop-menu"
        >
          <nav
            data-thq="thq-navbar-nav-links"
            data-role="Nav"
            className="navbar-nav"
          >
            <button
              id="homePageButton"
              className="navbar-button button-clean button"
            >
              {props.button}
            </button>
            <button
              id="profilePageButton"
              className="navbar-button1 button-clean button"
            >
              {props.button1}
            </button>
            <button
              id="mintPageButton"
              className="navbar-button2 button-clean button"
            >
              {props.button2}
            </button>
            <button
              id="whitepaperButton"
              className="navbar-button3 button-clean button"
            >
              {props.button3}
            </button>
          </nav>
        </div>
        <div data-thq="thq-navbar-btn-group" className="navbar-btn-group">
          <div className="navbar-socials">
            <button className="social button">
              <a
                href="https://twitter.com/bora_ozenbirkan"
                target="_blank"
                rel="noreferrer noopener"
                className=""
              >
                <img
                  id="twitterButton"
                  alt={props.image_alt2}
                  src={props.image_src2}
                  className="navbar-image1"
                />
              </a>
            </button>
            <button className="social button">
              <img
                id="discordButton"
                alt={props.image_alt3}
                src={props.image_src3}
                className="navbar-image2"
              />
            </button>
          </div>
          <button id="loginButton" className="navbar-view button">
            <span className="">{props.text}</span>
            <img
              alt={props.image_alt1}
              src={props.image_src1}
              className="navbar-image3"
            />
          </button>
        </div>
        <div data-thq="thq-burger-menu" className="navbar-burger-menu">
          <button className="button navbar-button4">
            <svg viewBox="0 0 1024 1024" className="navbar-icon">
              <path
                d="M128 554.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 298.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 810.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"
                className=""
              ></path>
            </svg>
          </button>
        </div>
        <div data-thq="thq-mobile-menu" className="navbar-mobile-menu">
          <div
            data-thq="thq-mobile-menu-nav"
            data-role="Nav"
            className="navbar-nav1"
          >
            <div className="navbar-container3">
              <span className="navbar-logo1">{props.Logo1}</span>
              <div data-thq="thq-close-menu" className="navbar-menu-close">
                <svg viewBox="0 0 1024 1024" className="navbar-icon02">
                  <path
                    d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"
                    className=""
                  ></path>
                </svg>
              </div>
            </div>
            <nav
              data-thq="thq-mobile-menu-nav-links"
              data-role="Nav"
              className="navbar-nav2"
            >
              <span className="navbar-text1">{props.text1}</span>
              <span className="navbar-text2">{props.text2}</span>
              <span className="navbar-text3">{props.text3}</span>
              <span className="navbar-text4">{props.text4}</span>
              <span className="navbar-text5">{props.text5}</span>
            </nav>
            <div className="navbar-container4">
              <button className="navbar-login button">{props.Login}</button>
              <button className="button">{props.Register}</button>
            </div>
          </div>
          <div className="navbar-icon-group">
            <svg viewBox="0 0 950.8571428571428 1024" className="navbar-icon04">
              <path
                d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"
                className=""
              ></path>
            </svg>
            <svg viewBox="0 0 877.7142857142857 1024" className="navbar-icon06">
              <path
                d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"
                className=""
              ></path>
            </svg>
            <svg viewBox="0 0 602.2582857142856 1024" className="navbar-icon08">
              <path
                d="M548 6.857v150.857h-89.714c-70.286 0-83.429 33.714-83.429 82.286v108h167.429l-22.286 169.143h-145.143v433.714h-174.857v-433.714h-145.714v-169.143h145.714v-124.571c0-144.571 88.571-223.429 217.714-223.429 61.714 0 114.857 4.571 130.286 6.857z"
                className=""
              ></path>
            </svg>
          </div>
        </div>
      </header>
    </div>
  )
}

Navbar.defaultProps = {
  image_src4: '/playground_assets/logo-200w.png',
  button3: 'Whitepaper',
  text1: 'About',
  image_alt3: 'image',
  text2: 'Features',
  image_src2: '/playground_assets/twitter.svg',
  image_src3: '/playground_assets/discord.svg',
  button1: 'Profile',
  text: 'Login',
  Logo1: 'Character',
  Register: 'Register',
  button2: 'Item Mint',
  text4: 'Team',
  Logo: 'Zk Chickens',
  rootClassName: '',
  image_alt2: 'image',
  text3: 'Pricing',
  image_alt1: 'image',
  text5: 'Blog',
  image_alt4: 'image',
  image_src: 'fa85ccb2-4ca3-4280-b564-359491b861ec',
  image_src1: '/playground_assets/google_logo-200h.png',
  Login: 'Login',
  image_alt: 'image',
  button: 'Home',
}

Navbar.propTypes = {
  image_src4: PropTypes.string,
  button3: PropTypes.string,
  text1: PropTypes.string,
  image_alt3: PropTypes.string,
  text2: PropTypes.string,
  image_src2: PropTypes.string,
  image_src3: PropTypes.string,
  button1: PropTypes.string,
  text: PropTypes.string,
  Logo1: PropTypes.string,
  Register: PropTypes.string,
  button2: PropTypes.string,
  text4: PropTypes.string,
  Logo: PropTypes.string,
  rootClassName: PropTypes.string,
  image_alt2: PropTypes.string,
  text3: PropTypes.string,
  image_alt1: PropTypes.string,
  text5: PropTypes.string,
  image_alt4: PropTypes.string,
  image_src: PropTypes.string,
  image_src1: PropTypes.string,
  Login: PropTypes.string,
  image_alt: PropTypes.string,
  button: PropTypes.string,
}

export default Navbar
