import { string, shape } from 'prop-types';
import styled from 'styled-components';
import QRCode from 'qrcode.react';
import {
    Banner,
    Container,
    FeatureBanner,
    Lead
} from '../../components/Layout';

const CryptoRow = styled(Banner)`
    flex-wrap: wrap;
    text-align: center;
`;

const Address = styled.code`
    font-size: 0.75em;
    display: block;
    color: ${({ color }) => color};
`;

const CryptoAnchor = styled.a`
    margin: 1em;
    color: ${({ theme }) => theme.colors.text};

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

    h2 {
        user-select: none;
    }
`;

const CryptoQR = ({ asset, address, color, icon, imageSettings, ...props }) => {
    const uri = `${asset.toLowerCase()}:${address}`;
    return (
        <CryptoAnchor color={color} href={uri} title={`Donate ${asset}`}>
            <h2>{asset}</h2>
            <QRCode
                renderAs="svg"
                size="200"
                level="M" // M Q H
                value={uri}
                fgColor={color}
                imageSettings={{
                    src: icon,
                    height: 50,
                    width: 50,
                    excavate: true,
                    ...imageSettings
                }}
                {...props}
            />
            <Address color={color}>{address}</Address>
        </CryptoAnchor>
    );
};

CryptoQR.propTypes = {
    asset: string.isRequired,
    address: string.isRequired,
    color: string.isRequired,
    icon: string.isRequired,
    imageSettings: shape({})
};

CryptoQR.defaultProps = {
    imageSettings: undefined
};

const Gib = () => (
    <>
        <FeatureBanner
            heading="Gibs Money"
            image={{ src: require('./wojak.png'), alt: 'Pink Wojak' }}
        />
        <Container>
            <Lead>
                <b>Your generous gift of shitcoins fuels our mission.</b>
                &nbsp; All tendies we receive enable us to continue and expand
                our cutting-edge research programs and memetic operations,
                driving new and exciting meme innovations. ERC20 tokens gladly
                accepted.
            </Lead>
        </Container>
        <CryptoRow>
            <CryptoQR
                asset="Bitcoin"
                address="3ASWubQJjdFqL84YRyFs31z5c2CsM9CFR4"
                icon={require('./bitcoin.svg')}
                color="#F90"
            />
            <CryptoQR
                asset="Ethereum"
                address="0x5798eF66524312730903d673A9Ac6F7ea993A4d4"
                icon={require('./ethereum.svg')}
                color="#58E"
                imageSettings={{ width: 31 }}
            />
        </CryptoRow>
        <Container>
            <Lead>
                You can also support us without sending crypto by trying Brave
                Browser:
                <br />
                <a
                    href="https://brave.com/mem703"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Get Brave
                </a>
            </Lead>
        </Container>
    </>
);

export default Gib;
