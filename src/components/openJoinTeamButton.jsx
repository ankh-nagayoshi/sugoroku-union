import React from 'react';
import { FloatingActionButton } from 'material-ui';
import ContentAdd from 'material-ui/svg-icons/content/add';

export default function OpenJoinTeamButton({ openJoinTeam }) {
  const style = {
    position: 'absolute',
    top: '90%',
    left: '90%',
  };
  
  return (
    <div style={style}>
      <FloatingActionButton mini onClick={() => { openJoinTeam(); }}>
        <ContentAdd />
      </FloatingActionButton>
    </div>
  );
}

OpenJoinTeamButton.propTypes = {
  openJoinTeam: React.PropTypes.func.isRequired,
};
