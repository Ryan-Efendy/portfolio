import React, { Component } from 'react';
import Time from '../components/Time';

class Body extends Component {
  render() {
    const repos = this.props.repos.map((repo, i) => {
      return (
        <li key={i}>
          <a href={repo.html_url}>{repo.name}</a>
          <Time stamp={repo.pushed_at} />
        </li>
      );
    });

    return (
      <div id="blog">
        <article>
          <div className="boxes">
            <header />
            <div className="content">
              <div className="title">
                <h3>What I'm Working On</h3>
                {/* Import latest time via some logic */}
                {this.props.repos.length > 0 ? (
                  <Time stamp={this.props.repos[0].pushed_at} label="updated" />
                ) : (
                  ''
                )}
              </div>
              <ul>{repos}</ul>
            </div>
            <a
              className="keep-reading-btn"
              href="https://github.com/m1g?tab=repositories"
            >
              FULL LIST
            </a>
          </div>
          <div className="boxes">
            <header className="blog-post" />
            <div className="content">
              <div className="title">
                <h3>Blog Posts</h3>
                <time>updated December 20, 2016 at 12:00pm</time>
              </div>
              <p>
                <h3>The Halfway Mark in Learning Javascript</h3> 6 weeks in and
                this Immersive Front End course is delivering in full, pushing
                me to the limit, and challenging how much I can learn and put
                into practice within these few months...
              </p>
            </div>
            <a
              className="keep-reading-btn"
              href="https://medium.com/@miguelmalcolm/the-halfway-mark-in-learning-javascript-27f331deec53#.j0lfljh0e"
            >
              KEEP READING
            </a>
          </div>
        </article>
      </div>
    );
  }
}

export default Body;
