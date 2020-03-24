import styled from 'styled-components';

const Tagline = styled.h1`
    font-size: 5em;
    font-weight: 600;
    font-style: italic;
    margin: 0;
    line-height: 1em;

    @media screen and (max-width: 800px) {
        font-size: 3.5em;
    }
`;

export default Tagline;
