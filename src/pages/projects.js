import { arrayOf, shape } from 'prop-types';
import { NextSeo } from 'next-seo';
import styled from 'styled-components';
import ogs from 'open-graph-scraper';
import { Container, Lead } from '../components/Layout';
import ProjectGrid from '../components/ProjectGrid';

const title = 'Projects';
const description = 'The latest memes from our memetic specialists.';

const MainContainer = styled(Container)`
    flex-direction: column;
`;

const Heading = styled.h1`
    font-size: 2.5em;
    margin-bottom: 1em;
`;

const Projects = ({ projects }) => (
    <MainContainer>
        <NextSeo
            title={title}
            description={description}
            openGraph={{
                title,
                description
            }}
        />
        <Heading>{title}</Heading>
        <Lead>{description}</Lead>
        <ProjectGrid projects={projects} />
    </MainContainer>
);

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

Projects.propTypes = {
    projects: arrayOf(shape({}))
};

Projects.defaultProps = {
    projects: []
};

export default Projects;
