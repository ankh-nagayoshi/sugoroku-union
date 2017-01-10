// 初期ステート設定
const initialState = {
  visible: false,
};

export default function controlPanel(state = initialState, action) {
  switch (action.type) {
    case 'TOGGLE_CONTROL_PANEL_VISIBLE': {
      return { visible: !state.visible };
    }
    case 'WINDOW_CLOSED': {
      // if (state.visible) {
      //   console.log("Control panel closed!\n  ...with window cross button.");
      // } else {
      //   console.log("Control panel closed!\n  ...with popout button.");
      // }
      return { visible: false };
    }
    default:
      return state;
  }
}
