import React from 'react';

const Footer = () => (
  <footer className="p-footer clearfix">
    <span>
      Some footer text :)
    </span>
    <ul className='float-right footer-socials'>
      <li className="footer-social-item">
        <a rel="noopener noreferrer" target="_blank" href="https://github.com/mishapateyuk">
          GitHub
        </a>
      </li>
      <li className="footer-social-item">
        <a rel="noopener noreferrer" target="_blank" href="https://twitter.com">
          Twitter
        </a>
      </li>
      <li className="footer-social-item">
        <a rel="noopener noreferrer" target="_blank" href="https://facebook.com">
          Facebook
        </a>
      </li>
    </ul>
  </footer>
);

export default Footer;
