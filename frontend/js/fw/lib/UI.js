const UI = {};

UI.BREAK_POINT = 850;

UI.windowWidth = () => {
    const element = document.documentElement;
    const body = document.getElementsByTagName('body')[0];
    const width = window.innerWidth || element.clientWidth || body.clientWidth;
    return width;
};

export default UI;
