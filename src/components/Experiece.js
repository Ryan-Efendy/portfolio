import React from 'react';
import {
  Card,
  Container,
  Header,
  Divider,
  Grid,
  Feed
} from 'semantic-ui-react';

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
            <Card.Content>
              <Card.Header>Site Reliability Engineer At PayPal</Card.Header>
              <Card.Meta>Jun 2017 – Present</Card.Meta>
            </Card.Content>
            <Card.Content>
              <Feed>
                <Feed.Event>
                  <Feed.Content>
                    <Feed.Summary>
                      ★ Implemented form components to collect user input to be
                      passed to a Node.js, Express and MongoDB back end to
                      triage tickets based on priority level and make
                      appropriate decisions
                    </Feed.Summary>
                  </Feed.Content>
                </Feed.Event>

                <Feed.Event>
                  <Feed.Content>
                    <Feed.Summary>
                      ★ Developed new features using React and Redux and built
                      reusable components and front-end libraries for future use
                      such as input components that are shared in more than 10
                      pages of the applications
                    </Feed.Summary>
                  </Feed.Content>
                </Feed.Event>

                <Feed.Event>
                  <Feed.Content>
                    <Feed.Summary>
                      ★ Refactored Grunt build tasks to decrease build times
                      from 30 seconds to less than 5 seconds in a React, Node
                      project by separating the tasks and enabled live reloading
                      of updated files to the browser
                    </Feed.Summary>
                  </Feed.Content>
                </Feed.Event>
              </Feed>
            </Card.Content>
          </Card>
        </Grid.Column>

        <Grid.Column>
          <Card>
            <Card.Content>
              <Card.Header>Site Reliability Engineer At PayPal</Card.Header>
              <Card.Meta>Jun 2017 – Present</Card.Meta>
            </Card.Content>
            <Card.Content>
              <Feed>
                <Feed.Event>
                  <Feed.Content>
                    <Feed.Summary>
                      ★ Implemented form components to collect user input to be
                      passed to a Node.js, Express and MongoDB backend to triage
                      tickets based on priority level and make appropriate
                      decisions
                    </Feed.Summary>
                  </Feed.Content>
                </Feed.Event>

                <Feed.Event>
                  <Feed.Content>
                    <Feed.Summary>
                      ★ Developed new features using React and Redux and built
                      reusable components and front-end libraries for future use
                      such as input components that are shared in more than 10
                      pages of the applications
                    </Feed.Summary>
                  </Feed.Content>
                </Feed.Event>

                <Feed.Event>
                  <Feed.Content>
                    <Feed.Summary>
                      ★ Refactored Grunt build tasks to decrease build times
                      from 30 seconds to less than 5 seconds in a React, Node
                      project by separating the tasks and enabled live reloading
                      of updated files to the browser
                    </Feed.Summary>
                  </Feed.Content>
                </Feed.Event>
              </Feed>
            </Card.Content>
          </Card>
        </Grid.Column>

        <Grid.Column>
          <Card>
            <Card.Content>
              <Card.Header>Site Reliability Engineer At PayPal</Card.Header>
              <Card.Meta>Jun 2017 – Present</Card.Meta>
            </Card.Content>
            <Card.Content>
              <Feed>
                <Feed.Event>
                  <Feed.Content>
                    <Feed.Summary>
                      ★ Implemented form components to collect user input to be
                      passed to a Node.js, Express and MongoDB backend to triage
                      tickets based on priority level and make appropriate
                      decisions
                    </Feed.Summary>
                  </Feed.Content>
                </Feed.Event>

                <Feed.Event>
                  <Feed.Content>
                    <Feed.Summary>
                      ★ Developed new features using React and Redux and built
                      reusable components and front-end libraries for future use
                      such as input components that are shared in more than 10
                      pages of the applications
                    </Feed.Summary>
                  </Feed.Content>
                </Feed.Event>

                <Feed.Event>
                  <Feed.Content>
                    <Feed.Summary>
                      ★ Refactored Grunt build tasks to decrease build times
                      from 30 seconds to less than 5 seconds in a React, Node
                      project by separating the tasks and enabled live reloading
                      of updated files to the browser
                    </Feed.Summary>
                  </Feed.Content>
                </Feed.Event>
              </Feed>
            </Card.Content>
          </Card>
        </Grid.Column>

        <Grid.Column>
          <Card>
            <Card.Content>
              <Card.Header>Site Reliability Engineer At PayPal</Card.Header>
              <Card.Meta>Jun 2017 – Present</Card.Meta>
            </Card.Content>
            <Card.Content>
              <Feed>
                <Feed.Event>
                  <Feed.Content>
                    <Feed.Summary>
                      ★ Implemented form components to collect user input to be
                      passed to a Node.js, Express and MongoDB backend to triage
                      tickets based on priority level and make appropriate
                      decisions
                    </Feed.Summary>
                  </Feed.Content>
                </Feed.Event>

                <Feed.Event>
                  <Feed.Content>
                    <Feed.Summary>
                      ★ Developed new features using React and Redux and built
                      reusable components and front-end libraries for future use
                      such as input components that are shared in more than 10
                      pages of the applications
                    </Feed.Summary>
                  </Feed.Content>
                </Feed.Event>

                <Feed.Event>
                  <Feed.Content>
                    <Feed.Summary>
                      ★ Refactored Grunt build tasks to decrease build times
                      from 30 seconds to less than 5 seconds in a React, Node
                      project by separating the tasks and enabled live reloading
                      of updated files to the browser
                    </Feed.Summary>
                  </Feed.Content>
                </Feed.Event>
              </Feed>
            </Card.Content>
          </Card>
        </Grid.Column>
      </Grid>
    </Container>
  </div>
);

export default Experience;
