import React from 'react';
import {Card, Title, Paragraph} from 'react-native-paper';

const Match = ({match}) => (
  <Card>
    <Card.Content>
      <Title>{match.title}</Title>
      <Paragraph>{match.time}</Paragraph>
    </Card.Content>
  </Card>
);

export default Match;
