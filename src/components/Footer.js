import React from 'react';

const Footer = () => (
  <footer>
    <div id="contact" className="contact-me">
      <h1>Slide into my DMs.</h1>
      <ul className="social-icons">
        <li>
          <a href="https://twitter.com/_ryanefendy">
            <i className="fa fa-twitter fa-2x" />
          </a>
        </li>
        <li>
          <a href="https://github.com/Ryan-Efendy">
            <i className="fa fa-github fa-2x" />
          </a>
        </li>
        <li>
          <a href="https://medium.com/@ryanefendy95">
            <i className="fa fa-medium fa-2x" />
          </a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/ryanefendy">
            <i className="fa fa-linkedin fa-2x" />
          </a>
        </li>
      </ul>
      <div className="copyright">
        <p>
          Copyright &copy; 2017 Ryan Efendy. Built with{' '}
          <i className="fa fa-heart fa-1" /> in Phoenix, Arizona.
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
