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
import { faPatreon } from '@fortawesome/free-brands-svg-icons';
import {
    Banner,
    Container,
    FeatureBanner,
    Lead
} from '../../components/Layout';
import { patreonUrl } from '../../lib/socialProfiles';

const title = 'Gibs Money';
const description = 'Your generous gift of shitcoins fuels our mission.';
const cryptoSize = 200;

const CryptoRow = styled(Banner)`
    flex-wrap: wrap;
    text-align: center;
    margin: -2em 0;
`;

const CryptoBox = styled.div`
    width: ${cryptoSize}px;
    margin: 2em;
`;

const CryptoHeading = styled.h2`
    user-select: none;
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
    background: 0;
    padding: 0;
    font-size: 0.75em;
    cursor: pointer;

    ${({ isCopied, theme }) =>
        isCopied &&
        css`
            color: ${theme.colors.primary};
        `}
`;

const CryptoAnchor = styled.a`
    display: block;

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

const Address = styled.code`
    display: block;
    color: ${({ color }) => color};
    font-size: 0.75em;
    word-break: break-all;
    text-align: left;
`;

const CryptoQR = ({
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
        <CryptoBox>
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
            <CryptoAnchor color={color} href={uri} title={`Donate ${asset}`}>
                <QRCode
                    renderAs="svg"
                    size={cryptoSize}
                    level="M" // M Q H
                    value={uri}
                    fgColor={color}
                    imageSettings={{
                        src: icon,
                        height: cryptoSize / 4,
                        width: cryptoSize / 4,
                        excavate: true,
                        ...imageSettings
                    }}
                    {...props}
                />
                <Address color={color}>{address}</Address>
            </CryptoAnchor>
        </CryptoBox>
    );
};

CryptoQR.propTypes = {
    asset: string.isRequired,
    address: string.isRequired,
    color: string.isRequired,
    icon: string.isRequired,
    imageSettings: shape({}),
    copied: string.isRequired,
    setCopied: func.isRequired
};

CryptoQR.defaultProps = {
    imageSettings: undefined
};

const Button = styled.a`
    margin: 0.5em auto;
    padding: 0.5em 1em;
    width: fit-content;
    border-radius: 999px;
    color: #fff;
    border: 0;
    display: flex;
    align-items: center;
    text-align: center;
    font-weight: bold;
    cursor: pointer;
    transition: background 0.2s ease;

    &:hover {
        text-decoration: none;

        &::before {
            content: '';
            background: 0;
        }
    }
`;

const PatreonButton = styled(Button)`
    background: #f96854;

    &:hover {
        background: #f74b33;
    }
`;

const BraveButton = styled(Button)`
    background: #fb542b;

    &:hover {
        background: #fa3c0e;
    }
`;

const Icon = styled(FontAwesomeIcon)`
    margin-right: 0.5em;
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
                heading={title}
                image={{ src: require('./wojak.png'), alt: 'Pink Wojak' }}
            />
            <Container>
                <Lead>
                    <b>{description}</b>
                    &nbsp; All tendies we receive enable us to continue and
                    expand our cutting-edge research programs and memetic
                    operations, driving new and exciting meme innovations. ERC20
                    tokens gladly accepted.
                </Lead>
            </Container>
            <CryptoRow>
                <CryptoQR
                    asset="Bitcoin"
                    address="3ASWubQJjdFqL84YRyFs31z5c2CsM9CFR4"
                    icon={require('./bitcoin.svg')}
                    color="#F90"
                    copied={copied}
                    setCopied={setCopied}
                />
                <CryptoQR
                    asset="Ethereum"
                    address="0x5798eF66524312730903d673A9Ac6F7ea993A4d4"
                    icon={require('./ethereum.svg')}
                    color="#58E"
                    imageSettings={{ width: 31 }}
                    copied={copied}
                    setCopied={setCopied}
                />
            </CryptoRow>
            <Container>
                <section>
                    <Lead>
                        <b>{description}</b>
                        &nbsp; In the coming weeks we will be launching Patreon
                        membership with access to early releases, exclusive
                        content, and commissioned memes.
                        <PatreonButton
                            href={patreonUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <Icon icon={faPatreon} />
                            Become a Patron
                        </PatreonButton>
                    </Lead>
                    <Lead>
                        You can also support us by trying Brave Browser:
                        <BraveButton
                            href="https://brave.com/mem703"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <Icon icon={faArrowCircleDown} />
                            Get Brave
                        </BraveButton>
                    </Lead>
                </section>
            </Container>
        </>
    );
};

export default Gib;
