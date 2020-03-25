import { string, shape } from 'prop-types';
import styled from 'styled-components';
import Banner from './Banner';
import Tagline from './Tagline';

const Container = styled.section`
    width: 100%;
    padding: 0 2em;
    display: flex;
    align-items: center;
`;

const FeatureTagline = styled(Tagline)`
    flex: 1;
`;

const Feature = styled.div`
    align-self: flex-end;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    height: 300px;
    width: 400px;
    clip-path: polygon(20% 0%, 100% 0%, 80% 100%, 0% 100%);
    background: #FFF;

    > * {
        margin-left: -5%;
    }

    @media screen and (max-width: 1000px) {
        order: -1;
        width: 250px;
        clip-path: polygon(0% 0%, 100% 0%, 80% 100%, 0% 100%);
        right: initial;
        left: -2em;

        > * {
            max-height: 150px;
            margin-left: -10%;
        }
    }

    @media screen and (max-width: 600px) {
        width: 175px;

        > * {
            max-height: 100px;
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
