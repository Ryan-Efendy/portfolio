import React from 'react';
import { Card, Container, Header, Divider, Grid } from 'semantic-ui-react';

const description = [
  'Amy is a violinist with 2 years experience in the wedding industry.',
  'She enjoys the outdoors and currently resides in upstate New York.'
].join(' ');

const Experience = () => (
  <div
    style={{
      backgroundImage: `url('https://subtlepatterns.com/patterns/crossword.png')`,
      padding: 40
    }}
  >
    <Container textAlign="center">
      <Header as="h2" textAlign="center" content="Experience" />
      <Divider section />
      <Grid relaxed columns={4}>
        <Grid.Column>
          <Card>
            <Card.Content header="About Amy" />
            <Card.Content description={description} />
            <Card.Content extra />
          </Card>
        </Grid.Column>
        <Grid.Column>
          <Card>
            <Card.Content header="About Amy" />
            <Card.Content description={description} />
            <Card.Content extra />
          </Card>
        </Grid.Column>
        <Grid.Column>
          <Card>
            <Card.Content header="About Amy" />
            <Card.Content description={description} />
            <Card.Content extra />
          </Card>
        </Grid.Column>
        <Grid.Column>
          <Card>
            <Card.Content header="About Amy" />
            <Card.Content description={description} />
            <Card.Content extra />
          </Card>
        </Grid.Column>
      </Grid>
    </Container>
  </div>
);

export default Experience;
