import React from 'react';
import { Container, Header, Label, Divider } from 'semantic-ui-react';
import { Timeline, TimelineEvent } from 'react-event-timeline';

const Experience = () => (
  <div
    style={{
      backgroundImage: `url('https://subtlepatterns.com/patterns/crossword.png')`,
      padding: 40
    }}
  >
    <Container textAlign="center">
      <Header as="h2" content="Experience" textAlign="center" />
      <Divider section />
      <Timeline>
        <TimelineEvent
          title="Sept 2017 – Dec 2017"
          createdAt="Software Development Engineer @ Amazon AWS Machine Learning"
          iconColor="#757575"
          container="card"
          style={{
            boxShadow: '0 0 6px 1px #BD3B36',
            border: '1px solid #777',
            borderRadius: 3
          }}
          cardHeaderStyle={{ backgroundColor: 'lightgreen', color: '#000000' }}
        >
          <Label.Group color="green">
            <Label as="a">Python</Label>
            <Label as="a">AWS</Label>
            <Label as="a">TensorFlow</Label>
            <Label as="a">PyTorch</Label>
            <Label as="a">Docker </Label>
          </Label.Group>
        </TimelineEvent>

        <TimelineEvent
          title="Jun 2017 – Sept 2017"
          createdAt="Site Reliability Engineer @ PayPal"
          iconColor="#757575"
          container="card"
          style={{
            boxShadow: '0 0 6px 1px #BD3B36',
            border: '1px solid #777',
            borderRadius: 3
          }}
          cardHeaderStyle={{ backgroundColor: '#5789de', color: '#000000' }}
        >
          <Label.Group color="blue">
            <Label as="a">React</Label>
            <Label as="a">Redux</Label>
            <Label as="a">Node.js</Label>
            <Label as="a">Express </Label>
            <Label as="a">krakenjs </Label>
            <Label as="a">MongoDB </Label>
            <Label as="a">Redux Form</Label>
            <Label as="a">Solr</Label>
            <Label as="a">Elasticsearch</Label>
          </Label.Group>
        </TimelineEvent>

        <TimelineEvent
          title="Jun 2016 – Jun 2017"
          createdAt="Applications Engineer @ Oracle"
          icon={<i />}
          iconColor="#757575"
          container="card"
          cardHeaderStyle={{ backgroundColor: '#f8013b', color: '#000000' }}
          style={{
            boxShadow: '0 0 6px 1px #BD3B36',
            border: '1px solid #777',
            borderRadius: 3
          }}
        >
          <Label.Group color="red">
            <Label as="a">Java</Label>
            <Label as="a">Spring</Label>
            <Label as="a">JavaScript</Label>
            <Label as="a">WebLogic</Label>
          </Label.Group>
        </TimelineEvent>

        <TimelineEvent
          title="Mar 2016 – May 2016"
          createdAt="Software Engineer @ JPMorgan Chase"
          icon={<i />}
          iconColor="#757575"
          container="card"
          cardHeaderStyle={{ backgroundColor: '#b8e2ee', color: '#000000' }}
          style={{
            boxShadow: '0 0 6px 1px #BD3B36',
            border: '1px solid #777',
            borderRadius: 3
          }}
        >
          <Label.Group color="teal">
            <Label as="a">Python</Label>
            <Label as="a">VBA</Label>
            <Label as="a">MySQL</Label>
          </Label.Group>
        </TimelineEvent>

        <TimelineEvent
          title="Mar 2015 – Sept 2015"
          createdAt="Software Engineer @ Comcast"
          icon={<i />}
          iconColor="#757575"
          container="card"
          cardHeaderStyle={{ backgroundColor: '#e6edf7', color: '#000000' }}
          style={{
            boxShadow: '0 0 6px 1px #BD3B36',
            border: '1px solid #777',
            borderRadius: 3
          }}
        >
          <Label.Group color="grey">
            <Label as="a">Python</Label>
            <Label as="a">Django</Label>
            <Label as="a">MySQL</Label>
            <Label as="a">PHP</Label>
          </Label.Group>
        </TimelineEvent>
      </Timeline>
    </Container>
  </div>
);

export default Experience;
