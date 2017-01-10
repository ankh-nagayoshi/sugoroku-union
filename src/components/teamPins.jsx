import React from 'react';
import TeamPin from '../components/teamPin';

export default function TeamPins({ teams, selectTeam }) {
  return (
    <div>
      {
        teams.map((team, index) => {
          return (
            <TeamPin
              key={index}
              team={team}
              image={`./dist/img/icon${`00${index + 1}`.slice(-2)}.png`}
              selectTeam={() => selectTeam(index)}
              delay={200 * index}
            />
          );
        })
      }
    </div>
  );
}

TeamPins.propTypes = {
  teams: React.PropTypes.arrayOf(React.PropTypes.shape({})).isRequired,
  selectTeam: React.PropTypes.func.isRequired,
};
