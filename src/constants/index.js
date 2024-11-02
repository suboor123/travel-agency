export const HOST = 'https://www.suboorkhan.com';
export const APP_TITLE = 'Suboor Khan';

export const DEFAULT_BG_STYLE = {
    background: 'black',
};

export const DEFAULT_IMAGE = '/assets/logo.avif';

function generateRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

export const randomNumber = generateRandomNumber(999, 999999);
