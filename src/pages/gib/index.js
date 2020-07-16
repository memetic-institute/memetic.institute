import { useState } from 'react';
import { string, shape, func } from 'prop-types';
import { NextSeo } from 'next-seo';
import styled, { css } from 'styled-components';
import QRCode from 'qrcode.react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faClipboard,
    faClipboardCheck,
    faArrowCircleDown
} from '@fortawesome/free-solid-svg-icons';
import {
    Article,
    Aside,
    Banner,
    ButtonAnchor,
    Container,
    FeatureBanner,
    Lead
} from '../../components/Layout';

const title = 'Support Us';
const description = 'Your generous gift of shitcoins fuels our mission.';

const CryptoRow = styled(Banner)`
    justify-content: flex-start;
`;

const CryptoWrapper = styled.div`
    flex: 1;
    max-width: 300px;

    &:first-of-type {
        margin: 0em 2em 0 0;
    }
`;

const CryptoHeading = styled.h2`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    ${({ green, theme }) =>
        green &&
        css`
            color: ${theme.colors.primary};
        `}
`;

const CopyButton = styled.button`
    border: 0;
    padding: 0;
    font-size: 0.75em;
    line-height: 0.75;
    cursor: pointer;
    transition: opacity 0.2s ease;

    ${({ isCopied, theme }) =>
        isCopied &&
        css`
            color: ${theme.colors.primary};
        `}

    &:hover {
        opacity: 0.75;
    }

    &:active {
        opacity: 0.5;
    }
`;

const CryptoAnchor = styled.a`
    display: block;
    position: relative;
    padding-top: 100%;

    &:hover {
        text-decoration: none;

        &::before {
            display: none;
        }

        code {
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
`;

const CryptoQRCode = styled(QRCode)`
    position: absolute;
    top: 0;
    left: 0;
`;

const Address = styled.code`
    display: block;
    color: ${({ color }) => color};
    font-size: 0.75em;
    word-break: break-all;
    text-align: left;
    margin-bottom: 0.5em;
    min-height: 3em;
`;

const Crypto = ({
    asset,
    address,
    color,
    icon,
    imageSettings,
    copied,
    setCopied,
    ...props
}) => {
    const [heading, setHeading] = useState(asset);
    const isCopied = copied === address;
    const uri = `${asset.toLowerCase()}:${address}`;
    const handleCopy = () => {
        setCopied(address);
        setHeading('Copied!');
        setTimeout(() => setHeading(asset), 1000);
    };
    return (
        <CryptoWrapper>
            <CryptoHeading green={heading !== asset}>
                {heading}
                <CopyToClipboard text={address} onCopy={handleCopy}>
                    <CopyButton
                        type="button"
                        aria-label={isCopied ? 'Copied' : 'Copy to clipboard'}
                        isCopied={isCopied}
                    >
                        <FontAwesomeIcon
                            icon={isCopied ? faClipboardCheck : faClipboard}
                        />
                    </CopyButton>
                </CopyToClipboard>
            </CryptoHeading>
            <Address color={color}>{address}</Address>
            <CryptoAnchor color={color} href={uri} title={`Donate ${asset}`}>
                <CryptoQRCode
                    renderAs="svg"
                    level="M" // M Q H
                    size={100}
                    height="100%"
                    width="100%"
                    value={uri}
                    fgColor={color}
                    imageSettings={{
                        src: icon,
                        height: 30,
                        width: 30,
                        excavate: true,
                        ...imageSettings
                    }}
                    {...props}
                />
            </CryptoAnchor>
        </CryptoWrapper>
    );
};

Crypto.propTypes = {
    asset: string.isRequired,
    address: string.isRequired,
    color: string.isRequired,
    icon: string.isRequired,
    imageSettings: shape({}),
    copied: string.isRequired,
    setCopied: func.isRequired
};

Crypto.defaultProps = {
    imageSettings: undefined
};

const StyledBraveButton = styled(ButtonAnchor)`
    background: ${({ theme }) => theme.colors.brave} !important;
`;

const Gib = () => {
    const [copied, setCopied] = useState('');
    return (
        <>
            <NextSeo
                title={title}
                description={description}
                openGraph={{
                    title,
                    description
                }}
            />
            <FeatureBanner
                heading="Gibs Money"
                image={{ src: require('./wojak.png'), alt: 'Pink Wojak' }}
            />
            <Container>
                <Article>
                    <Lead>
                        <b>{description}</b>
                        &nbsp; All tendies we receive enable us to continue and
                        expand our cutting-edge research programs and memetic
                        operations, driving new and exciting meme innovations.
                        ERC20 tokens gratefully accepted as long as they&apos;re
                        Chainlink.
                    </Lead>
                    <CryptoRow>
                        <Crypto
                            asset="Bitcoin"
                            address="3ASWubQJjdFqL84YRyFs31z5c2CsM9CFR4"
                            icon={require('./bitcoin.svg')}
                            color="#F90"
                            copied={copied}
                            setCopied={setCopied}
                        />
                        <Crypto
                            asset="Ethereum"
                            address="0x5798eF66524312730903d673A9Ac6F7ea993A4d4"
                            icon={require('./ethereum.svg')}
                            color="#58E"
                            imageSettings={{ width: 18 }}
                            copied={copied}
                            setCopied={setCopied}
                        />
                    </CryptoRow>
                </Article>
                <Aside>
                    <h2>Brave</h2>
                    <p>
                        You can also support us by trying Brave Browser and
                        tipping some BAT.
                    </p>
                    <StyledBraveButton
                        href="https://brave.com/mem703"
                        icon={faArrowCircleDown}
                        large
                    >
                        Get Brave
                    </StyledBraveButton>
                </Aside>
            </Container>
        </>
    );
};

export default Gib;
