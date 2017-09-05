import React from 'react';
import { Container, Header, Grid, Image, Divider } from 'semantic-ui-react';

const imageStyle = {
  width: 72,
  height: 72
};

const imagStyle2 = {
  width: 125,
  marginTop: 20
};

const ContainerExampleText = () => (
  <div
    style={{
      backgroundImage: `url('https://subtlepatterns.com/patterns/crossword.png')`,
      padding: 40
    }}
  >
    <Container textAlign="center" text>
      <Header as="h2" content="Front-End" />
      <Divider section />
      <Grid divided="vertically">
        <Grid.Row columns={3}>
          <Grid.Column>
            <Image
              style={imageStyle}
              src="https://cdn.worldvectorlogo.com/logos/react.svg"
              verticalAlign="middle"
            />
          </Grid.Column>
          <Grid.Column>
            <Image
              style={imageStyle}
              src="https://cdn.worldvectorlogo.com/logos/redux.svg"
              verticalAlign="middle"
            />
          </Grid.Column>
          <Grid.Column>
            <Image
              src="https://cdn.worldvectorlogo.com/logos/angular-icon.svg"
              style={imageStyle}
              verticalAlign="middle"
            />
          </Grid.Column>
        </Grid.Row>
      </Grid>

      <Header as="h2" content="Back-End" />
      <Divider section />
      <Grid divided="vertically">
        <Grid.Row columns={5}>
          <Grid.Column>
            <Image
              src="https://cdn.worldvectorlogo.com/logos/javascript.svg"
              style={imageStyle}
              verticalAlign="middle"
            />
          </Grid.Column>
          <Grid.Column>
            <Image
              src="https://cdn.worldvectorlogo.com/logos/nodejs.svg"
              style={imagStyle2}
              verticalAlign="middle"
            />
          </Grid.Column>
          <Grid.Column>
            <Image
              src="https://cdn.worldvectorlogo.com/logos/express-109.svg"
              style={imagStyle2}
              verticalAlign="middle"
            />
          </Grid.Column>
          <Grid.Column>
            <Image
              src="https://cdn.worldvectorlogo.com/logos/python-5.svg"
              style={imageStyle}
              verticalAlign="middle"
            />
          </Grid.Column>
          <Grid.Column>
            <Image
              src="https://cdn.worldvectorlogo.com/logos/django-community.svg"
              style={imagStyle2}
              verticalAlign="middle"
            />
          </Grid.Column>
        </Grid.Row>
      </Grid>

      <Header as="h2" content="DevOps and Tools" />
      <Divider section />
      <Grid divided="vertically">
        <Grid.Row columns={6}>
          <Grid.Column>
            <Image
              src="https://cdn.worldvectorlogo.com/logos/amazon-web-services.svg"
              style={imagStyle2}
              verticalAlign="middle"
            />
          </Grid.Column>
          <Grid.Column>
            <Image
              src="https://cdn.worldvectorlogo.com/logos/docker.svg"
              style={imageStyle}
              verticalAlign="middle"
            />
          </Grid.Column>
          <Grid.Column>
            <Image
              src="https://cdn.worldvectorlogo.com/logos/webpack.svg"
              style={imageStyle}
              verticalAlign="middle"
            />
          </Grid.Column>
          <Grid.Column>
            <Image
              src="https://cdn.worldvectorlogo.com/logos/gulp.svg"
              style={imageStyle}
              verticalAlign="middle"
            />
          </Grid.Column>

          <Grid.Column>
            <Image
              src="https://cdn.worldvectorlogo.com/logos/npm.svg"
              style={imagStyle2}
              verticalAlign="middle"
            />
          </Grid.Column>
          <Grid.Column>
            <Image
              src="https://cdn.worldvectorlogo.com/logos/babel-10.svg"
              style={imagStyle2}
              verticalAlign="middle"
            />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Container>
  </div>
);

export default ContainerExampleText;
