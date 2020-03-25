import styled from 'styled-components';

const Tagline = styled.h1`
    font-size: 6em;
    line-height: 1em;
    font-weight: 600;
    font-style: italic;
    margin: 0;

    @media screen and (max-width: 1200px) {
        font-size: 4em;
    }

    @media screen and (max-width: 400px) {
        font-size: 3em;
    }
`;

export default Tagline;
