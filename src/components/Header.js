import React, { Component } from 'react';
import { Menu, Segment, Container, Image } from 'semantic-ui-react';
import Logo from '../images/logo.svg';

export default class Header extends Component {
  state = { activeItem: 'home' };

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  render() {
    const { activeItem } = this.state;

    return (
      <div>
        <Menu pointing inverted>
          <Container>
            <Menu.Item as="a" header>
              <Image size="mini" src={Logo} style={{ marginRight: '1.5em' }} />
              Project Name
            </Menu.Item>
            <Menu.Menu position="right">
              <Menu.Item
                name="home"
                active={activeItem === 'home'}
                onClick={this.handleItemClick}
              />
              <Menu.Item
                name="resume"
                active={activeItem === 'resume'}
                onClick={this.handleItemClick}
              />
              <Menu.Item
                name="Contact"
                active={activeItem === 'Contact'}
                onClick={this.handleItemClick}
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
            Hello, my name is Ryan <i className="em em-panda_face" />
            <p>
              I'm a <i className="em em-octocat" /> passionate programmer,
              <i className="em em-basketball" /> basketball enthusiast and
              <i className="em em-rice" /> food lover!
            </p>
            <p>
              Site Reliability Engineer at{' '}
              <img
                src="https://image.flaticon.com/icons/svg/174/174861.svg"
                alt="PayPal"
                style={{ height: 24, width: 24 }}
              />
            </p>
          </h1>
        </Segment>
      </div>
    );
  }
}
