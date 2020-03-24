import { string, shape } from 'prop-types';
import styled from 'styled-components';
import Banner from './Banner';
import Tagline from './Tagline';

const Container = styled.section`
    width: 100%;
    max-width: 1000px;
    padding: 0 1em;
    display: flex;
    align-items: center;
`;

const FeatureTagline = styled(Tagline)`
    flex: 1;
`;

const Feature = styled.div`
    align-self: flex-end;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 300px;
    width: 200px;

    &::before {
        content: '';
        display: block;
        background: #fff;
        height: 100%;
        width: 150%;
        margin: 0;
        position: absolute;
        top: 0em;
        right: 27%;
        transform: skew(-20deg);
    }

    > * {
        position: relative;
        right: 53%;
        z-index: 2;
    }

    @media screen and (max-width: 800px) {
        order: -1;
        align-self: flex-start;
        justify-content: start;

        &::before {
            right: initial;
            left: -72.5%;
        }

        > * {
            position: static;
            right: initial;
            max-height: 150px;
        }
    }
`;

const FeatureBanner = ({ heading, image }) => (
    <Banner primary>
        <Container>
            <FeatureTagline>{heading}</FeatureTagline>
            <Feature>
                <img
                    src={image.src}
                    alt={image.alt}
                    height="200px"
                    {...image}
                />
            </Feature>
        </Container>
    </Banner>
);

FeatureBanner.propTypes = {
    heading: string.isRequired,
    image: shape({ src: string.isRequired, alt: string.isRequired }).isRequired
};

export default FeatureBanner;
