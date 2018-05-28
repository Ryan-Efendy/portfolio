import React, { Component } from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Skills from '../components/Skills';
import Project from '../components//Project';
import Experience from '../components/Experiece';
import Activity from '../components/Activity';

const GITHUBURL = 'https://api.github.com/users/';
const USERNAME = 'ryanefendy95';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      repos: []
    };
  }

  componentDidMount() {
    this.getProfile();
  }

  getProfile() {
    window
      .fetch(`${GITHUBURL}${USERNAME}`)
      .then(response => {
        return response.json();
      })
      .then(data => {
        this.getRepos(data.repos_url);
      });
  }

  getRepos(url) {
    window
      .fetch(url)
      .then(response => {
        return response.json();
      })
      .then(data => {
        this.setState({
          repos: data
        });
      });
  }

  render() {
    return (
      <div>
        <header>
          <Header />
        </header>
        <Experience />
        {/* <Skills /> */}
        {/* <Project /> */}
        <Activity repos={this.state.repos.sort((a, b) => new Date(b.pushed_at) - new Date(a.pushed_at)).slice(0, 7)} />
        <Footer location={this.state.location} />
      </div>
    );
  }
}

export default App;
