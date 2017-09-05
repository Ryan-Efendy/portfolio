import React, { Component } from 'react';
import moment from 'moment';

class Time extends Component {
  relativeTime() {
    return moment(this.props.stamp).fromNow();
  }

  formattedTime() {
    return moment(this.props.stamp).format('MMMM Do, YYYY');
  }

  render() {
    return (
      <time dateTime={this.props.stamp} title={this.formattedTime()}>
        {this.props.label}
        &nbsp;
        {this.relativeTime()}
      </time>
    );
  }
}

export default Time;
