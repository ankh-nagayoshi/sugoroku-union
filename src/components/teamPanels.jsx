import React from 'react';
import TeamPanel from '../components/teamPanel';

export default function TeamPanels({ teams, selectTeam }) {
  return (
    <div>
      {
        teams.map((team, index) => {
          return (
            <TeamPanel
              key={index}
              team={team}
              top={`${768 - 120 - 20}px`}
              left={`${30 + ((225 + 20) * index)}px`}
              padding={'0'}
              width={'230px'}
              height={'120px'}
              image={`./dist/img/team0${index + 1}.png`}
              selectTeam={() => selectTeam(index)}
              delay={200 * index}
            />
          );
        })
      }
    </div>
  );
}

TeamPanels.propTypes = {
  teams: React.PropTypes.arrayOf(React.PropTypes.shape({})).isRequired,
  selectTeam: React.PropTypes.func.isRequired,
};
