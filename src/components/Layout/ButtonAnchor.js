import styled, { css } from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { string, shape, node } from 'prop-types';

const StyledButtonAnchor = styled.a`
    margin: 0.5em 0;
    padding: 0.5em 1em;
    width: 100%;
    max-width: 450px;
    background: ${({ theme }) => theme.colors.primary};
    border-radius: 999px;
    color: #fff;
    border: 0;
    display: flex;
    align-items: center;
    text-align: center;
    cursor: pointer;
    transition: opacity 0.2s ease, transform 0.2s ease;

    ${({ large }) =>
        large &&
        css`
            font-size: 1.25em;
        `}

    &:hover,
    &:focus {
        opacity: 0.75;
        text-decoration: none;

        &::before {
            content: '';
            background: 0;
        }
    }

    &:active {
        opacity: 0.5;
    }
`;

const Icon = styled(FontAwesomeIcon)`
    margin-right: 0.25em;
`;

const ButtonAnchor = ({ icon, children, ...props }) => (
    <StyledButtonAnchor target="_blank" rel="noopener noreferrer" {...props}>
        {icon && <Icon icon={icon} fixedWidth />}
        {children}
    </StyledButtonAnchor>
);

ButtonAnchor.propTypes = {
    href: string.isRequired,
    icon: shape({}),
    children: node.isRequired
};

ButtonAnchor.defaultProps = {
    icon: undefined
};

export default ButtonAnchor;
