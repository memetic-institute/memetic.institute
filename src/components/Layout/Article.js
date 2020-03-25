import styled from 'styled-components';

const Article = styled.article`
    padding-right: 2em;
    margin-bottom: 2em;
    flex: 1;
    flex-basis: 100%;

    @media screen and (max-width: 800px) {
        max-width: initial;
        padding-right: 0;
    }
`;

export default Article;
