import React from 'react';
import {Card} from 'react-native-paper';

const TournamentCard = ({tournament}) => (
  <Card>
    <Card.Cover source={{uri: tournament.image}} />
    <Card.Title
      title={tournament.title}
      subtitle={`Winning: ${tournament.winning}`}
    />
  </Card>
);

export default TournamentCard;
