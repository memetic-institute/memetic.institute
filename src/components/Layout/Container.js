import styled from 'styled-components';

const Container = styled.section`
    width: 100%;
    max-width: 1000px;
    padding: 3em 1em;
    display: flex;
    flex-direction: row;

    @media screen and (max-width: 800px) {
        padding: 2em 1em;
        flex-wrap: wrap;
    }
`;

export default Container;
