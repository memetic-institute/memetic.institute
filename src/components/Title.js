import styled from 'styled-components';

const Title = styled.h1`
    margin: 0 0 0.5rem 0;
    line-height: 1.15;
    font-size: 6rem;
    text-align: left;
    -webkit-text-stroke: 1px #fff;

    @media only screen and (max-width: 1000px) and (max-height: 1000px) {
        font-size: 5rem;
    }

    @media only screen and (max-width: 800px) {
        font-size: 4rem;
        max-width: 350px;
    }
`;

export default Title;
