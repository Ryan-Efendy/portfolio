import React, { Component } from 'react';
import Footer from '../components/Footer';
import Body from '../components/Body';
import Header from '../components/Header';
import Skills from '../components/Skills';
import Portfolio from '../components/Portfolio';
import Experience from '../components/Experiece';

const GITHUBURL = 'https://api.github.com/users/';
const USERNAME = 'ryanefendy95';

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      bio: '',
      location: '',
      avatar_url: '',
      repos: []
    };
  }

  // componentDidMount() {
  //   this.getProfile();
  // }

  // getProfile() {
  //   window
  //     .fetch(`${GITHUBURL}${USERNAME}`)
  //     .then(response => {
  //       return response.json();
  //     })
  //     .then(data => {
  //       this.getRepos(data.repos_url);
  //       this.setState({
  //         name: data.name,
  //         bio: data.bio,
  //         location: data.location,
  //         avatar_url: data.avatar_url
  //       });
  //     });
  // }

  // getRepos(url) {
  //   window
  //     .fetch(url)
  //     .then(response => {
  //       return response.json();
  //     })
  //     .then(data => {
  //       this.setState({
  //         repos: data
  //       });
  //     });
  // }

  render() {
    return (
      <div>
        <header>
          <Header />
        </header>
        <Experience />
        <Skills />
        <Portfolio />
        <Body
          repos={this.state.repos
            .sort((a, b) => new Date(b.pushed_at) - new Date(a.pushed_at))
            .slice(0, 5)}
        />
        <Footer location={this.state.location} />
      </div>
    );
  }
}

export default App;
