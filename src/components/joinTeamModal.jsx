import React from 'react';
import Modal from 'react-modal';
import { TextField, RaisedButton } from 'material-ui';

const initialState = {
  teamName: '',
};

export default class JoinTeamModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = initialState;
  }
  
  render() {
    const style = {
      overlay: {
        backgroundColor: 'rgba(0, 0, 0, 0.75)',
      },
      content: {
        width: '300px',
        height: '100px',
      },
    };
    
    return (
      <Modal
        isOpen={this.props.isOpen}
        style={style}
        onRequestClose={this.props.close}
      >
        <form
          onSubmit={
            (e) => {
              e.preventDefault();
              this.props.joinTeam(this.state.teamName, 0);
              this.props.close();
              this.state = initialState;
            }
          }
        >
          <TextField
            hintText="Team name"
            placeholder="Team name"
            value={this.state.teamName}
            autoFocus
            onChange={
              (e) => {
                this.setState({ teamName: e.target.value });
              }
            }
          /><br />
          <RaisedButton primary label="JOIN" type="submit" />
        </form>
      </Modal>
    );
  }
}

JoinTeamModal.propTypes = {
  isOpen: React.PropTypes.bool.isRequired,
  joinTeam: React.PropTypes.func.isRequired,
  close: React.PropTypes.func.isRequired,
};
