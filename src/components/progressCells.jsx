import React from 'react';
import ProgressCell from '../components/progressCell';

export default function ProgressCells({ progressCells, moveToCell }) {
  return (
    <div>
      {
        progressCells.map((progressCell, index) => {
          return (
            <ProgressCell
              key={index}
              progressCell={progressCell}
              moveToCell={() => moveToCell(index)}
            />
          );
        })
      }
    </div>
  );
}

ProgressCells.propTypes = {
  progressCells: React.PropTypes.arrayOf(React.PropTypes.shape({})).isRequired,
  moveToCell: React.PropTypes.func.isRequired,
};
