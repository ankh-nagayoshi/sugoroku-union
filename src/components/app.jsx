import React from 'react';
import injectTapEventPlugin from 'react-tap-event-plugin';

import GameBoard from '../containers/gameBoard';

injectTapEventPlugin();

export default function App() {
  return (
    <div>
      <GameBoard />
    </div>
  );
}
