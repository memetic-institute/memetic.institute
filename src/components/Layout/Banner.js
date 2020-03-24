import styled, { css } from 'styled-components';

const Banner = styled.section`
    width: 100%;
    display: flex;
    justify-content: center;
    position: relative;
    overflow: hidden;

    ${({ primary, theme }) =>
        primary
            ? css`
                  background: ${theme.colors.primary};
                  color: #FFF;
              `
            : css`
                  background: #FFF;
              `}
`;

export default Banner;
