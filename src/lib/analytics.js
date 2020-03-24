import ReactGA from 'react-ga';

const isProduction = process.env.NODE_ENV === 'production';

export const initGA = () => {
    if (isProduction) ReactGA.initialize('UA-161714934-1');
};

export const logPageView = () => {
    if (isProduction) {
        ReactGA.set({ page: window.location.pathname });
        ReactGA.pageview(window.location.pathname);
    }
};
