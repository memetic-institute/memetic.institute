import styled from 'styled-components';

const Aside = styled.aside`
    flex: 1;
    min-width: 600px;

    @media screen and (max-width: 1800px) {
        min-width: 500px;
    }

    @media screen and (max-width: 1300px) {
        min-width: 400px;
    }

    @media screen and (max-width: 1000px) {
        min-width: 275px;
    }
`;

export default Aside;
