import React from 'react';
import {
  Grid,
  Container,
  Header,
  Divider,
  Card,
  Image,
  Label
} from 'semantic-ui-react';

const Project = () => (
  <div
    style={{
      backgroundImage: `url('https://subtlepatterns.com/patterns/crossword.png')`,
      padding: 40
    }}
  >
    <Container>
      <Header as="h2" textAlign="center" content="Featured Projects" />
      <Divider section />
      <Grid centered textAlign="center" verticalAlign="middle">
        <Grid.Column computer={4} mobile={16} tablet={4}>
          <Card
            href="https://github.com/ryanefendy95/reactnd-project-myreads"
            target="_blank"
          >
            <Image
              src="https://user-images.githubusercontent.com/12979345/30095389-18fe2192-9287-11e7-9450-2b7e60e54c8e.png"
              height={270}
            />
            <Card.Content>
              <Card.Header>My Reads</Card.Header>
              <Card.Description>
                Web app manages your books. Books that you are reading, want to
                read and have read.
              </Card.Description>
            </Card.Content>
            <Card.Content extra>
              <Label.Group color="black">
                <Label as="a">React</Label>
                <Label as="a">Node.js</Label>
              </Label.Group>
            </Card.Content>
          </Card>
        </Grid.Column>

        <Grid.Column computer={4} mobile={16} tablet={4}>
          <Card href="https://github.com/ryanefendy95/Readable" target="_blank">
            <Image
              src="https://user-images.githubusercontent.com/12979345/30095755-69ed0bd4-9289-11e7-960f-aa4c68eee2a6.png"
              height={300}
            />
            <Card.Content>
              <Card.Header>Readable</Card.Header>
              <Card.Description>Blog Post web app</Card.Description>
            </Card.Content>
            <Card.Content extra>
              <Label.Group color="black">
                <Label as="a">React</Label>
                <Label as="a">Redux</Label>
                <Label as="a">Node.js</Label>
                <Label as="a">Semantic UI</Label>
              </Label.Group>
            </Card.Content>
          </Card>
        </Grid.Column>

        <Grid.Column computer={4} mobile={16} tablet={4}>
          <Card
            href="https://github.com/ryanefendy95/Reduxstagram"
            target="_blank"
          >
            <Image
              src="https://user-images.githubusercontent.com/12979345/30095671-e294e4a4-9288-11e7-9502-25c73815ff40.png"
              height={300}
            />
            <Card.Content>
              <Card.Header>Reduxstagram</Card.Header>
              <Card.Description>Instagram clone</Card.Description>
            </Card.Content>
            <Card.Content extra>
              <Label.Group color="black">
                <Label as="a">React</Label>
                <Label as="a">Redux</Label>
                <Label as="a">Node.js</Label>
              </Label.Group>
            </Card.Content>
          </Card>
        </Grid.Column>

        <Grid.Column computer={4} mobile={16} tablet={4}>
          <Card href="https://github.com/ryanefendy95/Swipeify" target="_blank">
            <Image
              src="https://cloud.githubusercontent.com/assets/12979345/20901042/b93b4f74-bafe-11e6-9b6a-9b88638d3d15.png"
              height={300}
            />
            <Card.Content>
              <Card.Header>Swipeify</Card.Header>
              <Card.Description>Music discovery, tinder-style</Card.Description>
            </Card.Content>
            <Card.Content extra>
              <Label.Group color="black">
                <Label as="a">Ionic </Label>
                <Label as="a">AngularJS</Label>
                <Label as="a">Node.js</Label>
              </Label.Group>
            </Card.Content>
          </Card>
        </Grid.Column>
      </Grid>
    </Container>
  </div>
);

export default Project;
