import { arrayOf, shape } from 'prop-types';
import styled from 'styled-components';
import ogs from 'open-graph-scraper';
import { Banner, Container, Lead, Tagline } from '../../components/Layout';

const MainBanner = styled(Banner)`
    background: ${({ theme }) => theme.colors.primary};
    position: relative;

    height: 300px;

    @media screen and (max-width: 800px) {
        height: 250px;
    }

    @media screen and (max-width: 700px) {
        height: 200px;
    }
`;

const MainBannerContainer = styled(Container)`
    align-items: center;
`;

const Harold = styled.div`
    background: url(${require('./harold.jpg')}) 10% 5% / 110% no-repeat;
    height: 100%;
    width: 100%;
    clip-path: polygon(15% 0%, 100% 0%, 85% 100%, 0% 100%);
    position: absolute;
    top: 0;
    left: 0;
    z-index: 1;
`;

const RSpace = styled.span`
    @media screen and (max-width: 700px) {
        display: none;
    }
`;

const MainTagline = styled(Tagline)`
    background: ${({ theme }) => theme.colors.primary};
    color: #fff;
    font-size: 3em;
    height: fit-content;
    width: fit-content;
    z-index: 2;

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
        <MainBanner>
            <MainBannerContainer>
                <Harold />
                <MainTagline>
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
                </MainTagline>
            </MainBannerContainer>
        </MainBanner>
        <MainContainer>
            <Lead>
                We are IMRD, the leading experts in memeology and applied
                memetics.
            </Lead>
            <Subheading>Projects</Subheading>
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
        projectURLs.map(async (url) => {
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
