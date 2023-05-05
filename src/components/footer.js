import React from 'react'
import { Link } from 'react-router-dom'

import PropTypes from 'prop-types'

import './footer.css'

const Footer = (props) => {
  return (
    <footer className={`footer-footer ${props.rootClassName} `}>
      <div className="footer-main">
        <div className="footer-branding">
          <div className="footer-heading">
            <h2 className="footer-logo">
              <span className="footer-text">Zk Chickens</span>
              <br className=""></br>
            </h2>
            <p className="footer-caption">{props.Caption}</p>
          </div>
          <div className="footer-socials">
            <a
              href={props.link_Twitter1}
              target="_blank"
              rel="noreferrer noopener"
              className="footer-twitter social button"
            >
              <img
                alt={props.image_alt2}
                src={props.image_src2}
                className="footer-image"
              />
            </a>
            <a
              href={props.link_Discord1}
              target="_blank"
              rel="noreferrer noopener"
              className="footer-discord social button"
            >
              <img
                alt={props.image_alt3}
                src={props.image_src3}
                className="footer-image1"
              />
            </a>
          </div>
        </div>
        <div className="footer-links">
          <div className="footer-list">
            <h3 className="footer-heading1">{props.Heading}</h3>
            <div className="footer-items">
              <Link to="/" className="footer-link button-clean button">
                {props.Link}
              </Link>
              <Link to="/profile" className="footer-link1 button-clean button">
                {props.Link1}
              </Link>
              <Link to="/mint" className="footer-link2 button-clean button">
                {props.Link2}
              </Link>
              <button className="footer-link3 button-clean button">
                {props.Link3}
              </button>
            </div>
          </div>
        </div>
        <div className="footer-socials1">
          <a
            href={props.link_Twitter}
            target="_blank"
            rel="noreferrer noopener"
            className="footer-twitter1 social button"
          >
            <img
              alt={props.image_alt}
              src={props.image_src}
              className="footer-image2"
            />
          </a>
          <a
            href={props.link_Discord}
            target="_blank"
            rel="noreferrer noopener"
            className="footer-discord1 social button"
          >
            <img
              alt={props.image_alt1}
              src={props.image_src1}
              className="footer-image3"
            />
          </a>
        </div>
      </div>
      <span className="footer-copyright">{props.Copyright}</span>
    </footer>
  )
}

Footer.defaultProps = {
  link_Twitter: 'https://twitter.com',
  Link6: 'Terms',
  image_alt: 'image',
  Link5: 'Press',
  image_src: '/playground_assets/twitter.svg',
  Caption: 'Casual steps of the Web3 Gaming!',
  image_src2: '/playground_assets/twitter.svg',
  Heading1: 'Company',
  Link: 'Home',
  Link2: 'Item Mint',
  image_alt2: 'image',
  Link8: 'Licenses',
  image_alt3: 'image',
  image_alt1: 'image',
  Copyright: '© 2023 Zk Chickens. All Rights Reserved.',
  link_Twitter1: 'https://twitter.com',
  rootClassName: '',
  link_Discord1: 'https://discord.com',
  image_src1: '/playground_assets/discord.svg',
  Link4: 'Team',
  image_src3: '/playground_assets/discord.svg',
  Link7: 'Limitations',
  Link3: 'Whitepaper',
  Link1: 'Profile',
  link_Discord: 'https://discord.com',
  Heading: 'Site',
}

Footer.propTypes = {
  link_Twitter: PropTypes.string,
  Link6: PropTypes.string,
  image_alt: PropTypes.string,
  Link5: PropTypes.string,
  image_src: PropTypes.string,
  Caption: PropTypes.string,
  image_src2: PropTypes.string,
  Heading1: PropTypes.string,
  Link: PropTypes.string,
  Link2: PropTypes.string,
  image_alt2: PropTypes.string,
  Link8: PropTypes.string,
  image_alt3: PropTypes.string,
  image_alt1: PropTypes.string,
  Copyright: PropTypes.string,
  link_Twitter1: PropTypes.string,
  rootClassName: PropTypes.string,
  link_Discord1: PropTypes.string,
  image_src1: PropTypes.string,
  Link4: PropTypes.string,
  image_src3: PropTypes.string,
  Link7: PropTypes.string,
  Link3: PropTypes.string,
  Link1: PropTypes.string,
  link_Discord: PropTypes.string,
  Heading: PropTypes.string,
}

export default Footer
