import { loaderViewHtml } from './view';

export default class SpinnerLoader {
    static show() {
        document.querySelector('#loader-wrapper').innerHTML = loaderViewHtml;
    }

    static hide() {
        document.querySelector('#loader-wrapper').innerHTML = '';
    }
}
