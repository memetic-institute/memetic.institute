import styled from 'styled-components';

const Article = styled.article`
    max-width: 550px;
    padding-right: 1em;
    margin-bottom: 2em;

    @media screen and (max-width: 800px) {
        max-width: initial;
        padding-right: 0;
    }
`;

export default Article;
