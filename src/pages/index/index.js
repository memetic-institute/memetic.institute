import { arrayOf, shape } from 'prop-types';
import Link from 'next/link';
import styled from 'styled-components';
import ogs from 'open-graph-scraper';
import { Banner, Container, Lead, Tagline } from '../../components/Layout';
import ProjectGrid from '../../components/ProjectGrid';
import fetchProjects from '../../lib/fetchProjects';

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
    width: calc(100% - 2em);
    clip-path: polygon(8.25% 0%, 100% 0%, 91.75% 100%, 0% 100%);
    position: absolute;
    top: 0;
    left: 1em;
    z-index: 1;

    @media screen and (max-width: 600px) {
        width: 100%;
        clip-path: initial;
        left: 0;
    }
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
        font-size: 2.5em;
    }

    @media screen and (max-width: 700px) {
        font-size: 2em;
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
                <b>We are IMRD</b>, the leading experts in memeology and applied
                memetics.{' '}
                <Link href="/projects">
                    <a>Our memes</a>
                </Link>{' '}
                make the world turn. See our latest developments, or{' '}
                <Link href="/who">
                    <a>follow us</a>
                </Link>
                .
            </Lead>
            <Subheading>Projects</Subheading>
            <ProjectGrid projects={projects} />
        </MainContainer>
    </>
);

export const getStaticProps = fetchProjects(ogs);

Home.propTypes = {
    projects: arrayOf(shape({}))
};

Home.defaultProps = {
    projects: []
};

export default Home;
