export default {
  toggleVisible: () => {
    return { type: 'TOGGLE_CONTROL_PANEL_VISIBLE' };
  },
  windowClosed: () => {
    return { type: 'WINDOW_CLOSED' };
  },
};
