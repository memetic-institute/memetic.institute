import { func, shape } from 'prop-types';
import NextApp from 'next/app';
import Head from 'next/head';
import { withRouter } from 'next/router';
import { DefaultSeo, LogoJsonLd } from 'next-seo';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import 'focus-visible';
import '../font.css';
import '@fortawesome/fontawesome-svg-core/styles.css';
import Layout from '../components/Layout';

const title = 'Institute for Memetic Research & Development';
const description = 'Better memes for a brighter tomorrow';
const baseUrl = 'https://memetic.institute';
const brandColor = '#498200';

const theme = {
    colors: {
        primary: brandColor,
        text: '#222'
    }
};

const GlobalStyle = createGlobalStyle`
    html,
    body {
        padding: 0;
        margin: 0;
        font: normal 400 18px / 1.5 'D-DIN', Roboto, -apple-system, BlinkMacSystemFont, 'Segoe UI',
            Oxygen, Ubuntu, Cantarell, 'Fira Sans', 'Droid Sans',
            'Helvetica Neue', sans-serif;
        color: ${theme.colors.text};
    }

    * {
        box-sizing: border-box;

        &:focus:not([data-focus-visible-added]) {
            outline: none;
        }
    }

    ::-moz-selection {
        background: ${theme.colors.primary};
        color: #FFF;
    }

    ::selection {
        background: ${theme.colors.primary};
        color: #FFF;
    }

    a {
        color: ${theme.colors.primary};
        text-decoration: none;
        
        &:hover {
            text-decoration: underline;

            &::before {
                content: '>';
                background: #FFF;
                font-weight: bold;
                display: inline-block;
                position: absolute;
                margin-left: -0.6em;
            }
        }
    }

    p {
        margin-top: 0;

        &:last-child {
            margin-bottom: 0;
        }
    }

    h1, h2, h3, h4, h5, h6 {
        margin: 0;
        text-transform: uppercase;
    }

    button {
        font-size: 1em;
    }
`;

class App extends NextApp {
    render() {
        const { Component, pageProps, router } = this.props;
        const url = `${baseUrl}${router.pathname}`;
        return (
            <>
                <DefaultSeo
                    title={title}
                    titleTemplate={router.pathname !== '/' && `%s | ${title}`}
                    description={description}
                    canonical={url}
                    openGraph={{
                        title,
                        site_name: title,
                        description,
                        url,
                        type: 'website',
                        images: [
                            {
                                url: `${baseUrl}/open-graph.png`,
                                width: 1200,
                                height: 1200,
                                alt: title
                            }
                        ]
                    }}
                    twitter={{
                        site: '@memetic_insti2t',
                        cardType: 'summary_large_image'
                    }}
                />
                <Head>
                    {/* Favicons */}
                    {[16, 32].map((size) => {
                        const dimensions = `${size}x${size}`;
                        return (
                            <link
                                key={size}
                                rel="icon"
                                type="image/png"
                                sizes={dimensions}
                                href={`/icons/favicon-${dimensions}.png`}
                            />
                        );
                    })}
                    {/* Platform-specific metadata */}
                    <link
                        rel="apple-touch-icon"
                        sizes="300x300"
                        href="/icons/apple-touch-icon.png"
                    />
                    <link
                        rel="mask-icon"
                        href="/icons/safari-pinned-tab.svg"
                        color={brandColor}
                    />
                    <meta
                        name="msapplication-config"
                        content="/browserconfig.xml"
                    />
                    <meta name="apple-mobile-web-app-title" content="IMRD" />
                    {/* PWA manifest */}
                    <link rel="manifest" href="/site.webmanifest" />
                </Head>
                <LogoJsonLd logo={`${baseUrl}/logo.png`} url={baseUrl} />
                <ThemeProvider theme={theme}>
                    <GlobalStyle />
                    <Layout>
                        <Component {...pageProps} />
                    </Layout>
                </ThemeProvider>
            </>
        );
    }
}

App.propTypes = {
    Component: func.isRequired,
    pageProps: shape({}).isRequired,
    router: shape({}).isRequired
};

export default withRouter(App);
