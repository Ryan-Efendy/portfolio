import React from 'react';
import {
  Menu,
  Segment,
  Container,
  Image,
  Icon,
  Popup
} from 'semantic-ui-react';
import Logo from '../images/logo.svg';

const Header = () => (
  <div>
    <Menu pointing inverted>
      <Container>
        <Menu.Item as="a" header>
          Made in
          <Image size="mini" src={Logo} />
          With &nbsp; <Icon color="red" name="heart" />
        </Menu.Item>
        <Menu.Menu position="right">
          <Menu.Item name="home" href="https://ryanefendy.com/" />
          <Menu.Item
            name="resume"
            href="https://drive.google.com/file/d/1AMnPgQsw1eIsT5jonpJ5jd0Q8tTGiuOw/view?usp=sharing"
            target="_blank"
          />
          <Popup
            trigger={<Menu.Item name="Contact" />}
            content={
              <div>
                Send me an email at &nbsp;
                <a
                  href="mailto:ryanefendy95@gmail.com?Subject=Hello"
                  target="_top"
                >
                  ryanefendy95@gmail.com
                </a>
                <Icon disabled name="smile" size="large" />
              </div>
            }
            on="click"
          />
        </Menu.Menu>
      </Container>
    </Menu>

    <Segment
      style={{
        backgroundImage: `url('https://subtlepatterns.com/patterns/footer_lodyas.png')`
      }}
      className="intro"
    >
      <img
        src="https://avatars3.githubusercontent.com/u/12979345?v=4&s=400"
        alt="profile_pic"
      />
      <h1>
        Hello, my name is Ryan <i className="em em-monkey_face" />
        <p>
          <i className="em em-computer" /> Software Engineer @{' '}
          <a
            href="https://www.microsoft.com/en-us"
            style={{ color: 'cornflowerblue' }}
          >
            Microsoft
          </a>
        </p>
        <p>
          <i className="em em-basketball" /> Basketball enthusiast
        </p>
        <p>
          <i className="em em-coffee" /> Coffee lover
        </p>
        <p>
          <i className="em em-bulb" /> Ask me about Effective Altruism
        </p>
      </h1>
    </Segment>
  </div>
);

export default Header;
