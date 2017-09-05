import React from 'react';
import { Grid, Container, Header, Divider, Card } from 'semantic-ui-react';

const GridExampleCelled = () => (
  <div
    style={{
      backgroundImage: `url('https://subtlepatterns.com/patterns/crossword.png')`
    }}
  >
    <Container>
      <Header as="h2" textAlign="center" content="Portfolio" />
      <Divider section />
      <Grid relaxed columns={4}>
        <Grid.Column>
          <Card raised image="http://via.placeholder.com/350x150" />
        </Grid.Column>
        <Grid.Column>
          <Card raised image="http://via.placeholder.com/350x150" />
        </Grid.Column>
        <Grid.Column>
          <Card raised image="http://via.placeholder.com/350x150" />
        </Grid.Column>
        <Grid.Column>
          <Card raised image="http://via.placeholder.com/350x150" />
        </Grid.Column>
      </Grid>
    </Container>
  </div>
);

export default GridExampleCelled;

// import React from 'react';
// import { Header } from 'semantic-ui-react';

// const Portfolio = () => (
//   <div id="portfolio" className="portfolio">
//     <ul>
//       <li>
//         <a href="https://github.com/m1g/moana-memory" target="_blank">
//           <img src="http://i.imgur.com/yxQ1zxr.png" />
//         </a>
//       </li>
//       <li>
//         <a href="https://github.com/m1g/bomb-sweeper" target="_blank">
//           <img src="http://i.imgur.com/JA8m4zI.png" />
//         </a>
//       </li>
//       <li>
//         <a href="https://github.com/m1g/simple-list" target="_blank">
//           <img src="http://i.imgur.com/4HTyZFP.png" />
//         </a>
//       </li>
//       <li>
//         <a href="https://github.com/m1g/hsla-color-picker" target="_blank">
//           <img src="http://i.imgur.com/YsllnwR.png" />
//         </a>
//       </li>
//     </ul>
//   </div>
// );

// export default Portfolio;
