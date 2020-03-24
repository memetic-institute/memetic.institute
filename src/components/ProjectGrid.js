import { arrayOf, shape } from 'prop-types';
import styled from 'styled-components';

const Grid = styled.section`
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

const ProjectGrid = ({ projects }) => (
    <Grid>
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
    </Grid>
);

ProjectGrid.propTypes = {
    projects: arrayOf(shape({}))
};

ProjectGrid.defaultProps = {
    projects: []
};

export default ProjectGrid;
