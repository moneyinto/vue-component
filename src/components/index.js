import Toaster from './toaster';
import Loading from './loading';
import Alert from './alert';

const AllCmponents = {
    Toaster,
    Loading,
    Alert
};

const install = (Vue, opts = {}) => {
    Object.keys(AllCmponents).forEach(key => {
        AllCmponents[key](Vue);
    });
};

const API = {
    install
};

export default API;
