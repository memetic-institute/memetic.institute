import { arrayOf, shape } from 'prop-types';
import styled from 'styled-components';
import ogs from 'open-graph-scraper';
import { Banner, Container, Tagline } from '../../components/Layout';

const HaroldBlur = styled.div`
    background: ${require('./harold.jpg?lqip-colors')[0]}
        url(${require('./harold.jpg')}) 10% 15% / 110% no-repeat;
    filter: blur(15px);
    width: 110%;
    height: 110%;
    position: absolute;
    z-index: 1;
`;

const HaroldContainer = styled(Container)`
    background: url(${require('./harold.jpg')}) 10% 5% / 110% no-repeat;
    padding: 5em 1em;
    position: relative;
    z-index: 2;

    @media screen and (max-width: 800px) {
        padding: 4em 1em;
    }

    @media screen and (max-width: 700px) {
        padding: 2em 1em;
    }

    @media screen and (max-width: 450px) {
        padding: 2em 1em;
    }
`;

const RSpace = styled.span`
    @media screen and (max-width: 700px) {
        display: none;
    }
`;

const HaroldTagline = styled(Tagline)`
    background: ${({ theme }) => theme.colors.primary};
    color: #fff;
    font-size: 3em;
    margin: 10px 0;
    width: fit-content;

    br {
        display: none;

        &::after {
            content: ' ';
        }
    }

    @media screen and (max-width: 1000px) {
        font-size: 2.75em;
    }

    @media screen and (max-width: 800px) {
        font-size: 2em;
    }

    @media screen and (max-width: 700px) {
        br {
            display: block;
        }
    }

    @media screen and (max-width: 450px) {
        font-size: 1.75em;
    }

    @media screen and (max-width: 385px) {
        font-size: 1.5em;
    }
`;

const MainContainer = styled(Container)`
    flex-direction: column;
`;

const Subheading = styled.h2`
    font-size: 2em;
    margin-bottom: 0.5em;
`;

const Projects = styled.section`
    display: flex;

    @media screen and (max-width: 600px) {
        flex-wrap: wrap;
    }
`;

const Project = styled.a`
    width: 100%;
    margin-bottom: 1em;

    &:hover {
        &::before {
            content: '';
        }

        img {
            transform: scale(1.05);
            box-shadow: 0 5px 10px rgba(0, 0, 0, 0.25);
            z-index: 1000;
        }

        h3::before {
            content: '>';
            font-weight: bold;
            display: inline-block;
            position: absolute;
            margin-left: -0.6em;
        }
    }
`;

const ProjectTitle = styled.h3`
    font-size: 1.5em;
`;

const ProjectImageWrapper = styled.div`
    position: relative;
    padding-top: 50%;
    margin-bottom: 0.5em;
`;

const ProjectImage = styled.img`
    margin: 0;
    position: absolute;
    top: 0;
    height: 100%;
    width: 100%;
    background: ${({ theme }) => theme.colors.primary};
    transition: all 0.15s ease;
`;

const Home = ({ projects }) => (
    <>
        <Banner>
            <HaroldContainer>
                <HaroldTagline>
                    <div>
                        Better memes
                        <br />
                        <RSpace>&nbsp;</RSpace>
                        for a
                    </div>
                    <div>
                        brighter
                        <br />
                        <RSpace>&nbsp;</RSpace>
                        tomorrow
                    </div>
                </HaroldTagline>
            </HaroldContainer>
            <HaroldBlur />
        </Banner>
        <MainContainer>
            <Subheading>Latest Projects</Subheading>
            <Projects>
                {projects.map(({ ogUrl, ogTitle, ogDescription, ogImage }) => (
                    <Project
                        key={ogUrl}
                        href={ogUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <ProjectImageWrapper>
                            <ProjectImage src={ogImage.url} />
                        </ProjectImageWrapper>
                        <ProjectTitle>{ogTitle}</ProjectTitle>
                        <span>{ogDescription}</span>
                    </Project>
                ))}
            </Projects>
        </MainContainer>
    </>
);

Home.propTypes = {
    projects: arrayOf(shape({}))
};

Home.defaultProps = {
    projects: []
};

export const getStaticProps = async () => {
    const projectURLs = ['https://brrr.money', 'https://thefed.app'];
    const projects = await Promise.all(
        projectURLs.map(async url => {
            try {
                const openGraph = await ogs({ url });
                return openGraph.data;
            } catch (error) {
                console.error(
                    `Failed to fetch Open Graph metadata for ${url}:`,
                    error
                );
                return {};
            }
        })
    );
    return { props: { projects } };
};

export default Home;
