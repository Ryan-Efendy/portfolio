import React, { Component } from 'react';
import Footer from './Footer';
import Header from './Header';
import Experience from './Experiece';
import Activity from './Activity';

const GITHUBURL = 'https://api.github.com/users/';
const USERNAME = 'Ryan-Efendy';

class App extends Component {
  state = { repos: [] };

  componentDidMount() {
    this.getProfile();
  }

  getProfile() {
    window
      .fetch(`${GITHUBURL}${USERNAME}`)
      .then(response => response.json())
      .then(data => {
        this.getRepos(data.repos_url);
      });
  }

  getRepos(url) {
    window
      .fetch(url)
      .then(response => response.json())
      .then(data => {
        this.setState({
          repos: data
        });
      });
  }

  render() {
    const { repos, location } = this.state;
    return (
      <div>
        <header>
          <Header />
        </header>
        <Experience />
        {/* <Skills /> */}
        {/* <Project /> */}
        <Activity
          repos={repos
            .sort((a, b) => new Date(b.pushed_at) - new Date(a.pushed_at))
            .slice(0, 7)}
        />
        <Footer location={location} />
      </div>
    );
  }
}

export default App;
