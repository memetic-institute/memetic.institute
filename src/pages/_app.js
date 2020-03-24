import NextApp from 'next/app';
import Head from 'next/head';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import 'focus-visible';
import 'typeface-d-din';
import '@fortawesome/fontawesome-svg-core/styles.css';
import Layout from '../components/Layout';

const title = 'Institute for Memetic Research & Development';
const description = 'Better memes for a brighter tomorrow';
const url = 'https://memetic.institute';
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
`;

class App extends NextApp {
    render() {
        const { Component, pageProps } = this.props;
        return (
            <>
                <Head>
                    <title>{title}</title>
                    <meta charSet="utf-8" />
                    <meta name="application-name" content={title} />
                    <meta name="description" content={description} />
                    <link rel="canonical" href={url} />
                    <meta
                        name="viewport"
                        content="width=device-width, initial-scale=1"
                    />
                    {/* Open Graph */}
                    <meta property="og:type" content="website" />
                    <meta property="og:title" content={title} />
                    <meta property="og:site_name" content={title} />
                    <meta property="og:description" content={description} />
                    <meta property="og:url" content={url} />
                    <meta property="og:image:width" content="1200" />
                    <meta property="og:image:height" content="630" />
                    <meta
                        property="og:image"
                        content={`${url}/open-graph.png`}
                    />
                    <meta property="og:image:alt" content={title} />
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
                    {/* Safari */}
                    <meta name="apple-mobile-web-app-title" content="IMRD" />
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
                    {/* Windows */}
                    <meta
                        name="msapplication-config"
                        content="/browserconfig..xml"
                    />
                    {/* PWA manifest */}
                    <link rel="manifest" href="/site.webmanifest" />
                    <meta name="theme-color" content={brandColor} />
                </Head>
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

export default App;
