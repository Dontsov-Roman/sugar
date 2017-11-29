import {
    BREAK_POINT_DEVICE_TABLET,
    BREAK_POINT_DEVICE_DESKTOP,
    DEVICE_MOBILE,
    DEVICE_TABLET,
    DEVICE_DESKTOP
} from '../constants';

export const constants = {
    change:"ADAPTIVE_CHANGE"
};
const width = window.innerWidth;
const height = window.innerHeight;
const device = getDeviceBySize(width);

const initState = {
    width,
    height,
    device
};

export default (state = initState, action) => {
    switch (action.type) {
        case constants.change:
            const {width, height} = action.payload;
            const device = getDeviceBySize(width);
            return {...state,width,height,device};
        default:
            return state;
    }
}

function getDeviceBySize(width) {
  return (width < BREAK_POINT_DEVICE_TABLET)
    ? DEVICE_MOBILE
    : ((width <= BREAK_POINT_DEVICE_DESKTOP)
    ? DEVICE_TABLET
    : DEVICE_DESKTOP);
}
