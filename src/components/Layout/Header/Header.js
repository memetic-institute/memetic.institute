import { useState, useEffect } from 'react';
import { node, string } from 'prop-types';
import { useRouter } from 'next/router';
import Link from 'next/link';
import styled, { css } from 'styled-components';
import { Collapse } from 'react-collapse';
import collapseStyles from './collapse.module.css';

const Container = styled.header`
    width: 100%;
    display: flex;
    justify-content: center;
    z-index: 3;
`;

const Navbar = styled.nav`
    width: 100%;
    max-width: 1000px;
    padding: 1em;
    line-height: 1;
    display: flex;
    align-items: flex-start;

    @media screen and (min-width: 700px) {
        justify-content: space-between;
    }
`;

const LogoAnchor = styled.a`
    line-height: 0;

    &::before {
        margin-top: 25px;
    }
`;

const Links = styled.ul`
    list-style: none;
    margin: 0;
    padding: 0;
    display: flex;

    @media screen and (max-width: 700px) {
        flex-direction: column;
    }
`;

const Item = styled.li`
    padding-left: 1.5em;

    @media screen and (max-width: 700px) {
        padding-left: 0;

        &:not(:last-of-type) {
            padding-bottom: 0.5em;
        }
    }
`;

const Anchor = styled.a`
    font-size: 1.25em;
    font-weight: 600;
    text-transform: uppercase;
    ${({ active, theme }) =>
        active &&
        css`
            color: ${theme.colors.text};

            &:hover {
                text-decoration: none;
            }

            &::before {
                content: '>';
                font-weight: bold;
                display: inline-block;
                position: absolute;
                margin-left: -0.6em;
            }
        `}
`;

const Logo = styled.img`
    height: 50px;
    margin-right: 1em;
`;

const NavLink = ({ children, href, ...props }) => {
    const router = useRouter();
    return (
        <Link href={href} passHref>
            <Anchor active={router.pathname === href} {...props}>
                {children}
            </Anchor>
        </Link>
    );
};

NavLink.propTypes = {
    children: node.isRequired,
    href: string.isRequired
};

const navLinks = [
    { href: '/wut', label: 'What We Do' },
    { href: '/who', label: 'Who We Are' },
    { href: '/gib', label: 'Support' }
];

const browserWidth = () =>
    typeof window === 'undefined'
        ? 1200
        : Math.max(
              document.body.scrollWidth,
              document.documentElement.scrollWidth,
              document.body.offsetWidth,
              document.documentElement.offsetWidth,
              document.documentElement.clientWidth
          );

const isDesktop = () => Boolean(browserWidth() > 700);

/*!
 * btnCollapses
 * @description Tasty CSS-animated btnCollapses
 * @author Jonathan Suh @jonsuh
 * @site https://jonsuh.com/btnCollapses
 * @link https://github.com/jonsuh/btnCollapses
 */

const ToggleButton = styled.button`
    width: 30px;
    height: 24px;
    margin-left: auto;
    transition: filter 0.15s linear;
    background: transparent;
    border: 0;
    padding: 0;
    position: relative;
    top: 13px;
    transition: top 0.15s ease;
    cursor: pointer;

    ${({ open }) =>
        open &&
        css`
            top: 0px;
        `}

    @media screen and (min-width: 700px) {
        display: none;
    }
`;

const ToggleButtonBox = styled.span`
    width: 30px;
    height: 24px;
    display: inline-block;
    position: relative;
`;

const toggleButtonBar = css`
    width: 30px;
    height: 3px;
    background-color: ${({ theme }) => theme.colors.primary};
    position: absolute;
`;

const ToggleButtonInner = styled.span`
    display: block;
    top: 50%;
    margin-top: -2px;
    transition-duration: 0.22s;
    transition-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
    ${toggleButtonBar}

    &::before,
    &::after {
        content: '';
        display: block;
        transition: transform 0.15s ease;
        ${toggleButtonBar}
    }

    &::before {
        top: -10px;
        transition: top 0.1s 0.25s ease-in;
    }

    &::after {
        bottom: -10px;
        transition: bottom 0.1s 0.25s ease-in,
            transform 0.22s cubic-bezier(0.55, 0.055, 0.675, 0.19);
    }

    ${({ open }) =>
        open &&
        css`
            transform: rotate(225deg);
            transition-delay: 0.12s;
            transition-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);

            &::before {
                top: 0;
                transition: top 0.1s ease-out;
            }

            &::after {
                bottom: 0;
                transform: rotate(-90deg);
                transition: bottom 0.1s ease-out,
                    transform 0.22s 0.12s cubic-bezier(0.215, 0.61, 0.355, 1);
            }
        `}
`;

const Header = props => {
    const [navOpen, setNavOpen] = useState(isDesktop());

    const setNavByWidth = () => setNavOpen(isDesktop());
    const toggleNav = () => setNavOpen(prev => !prev);
    const collapseNavIfMobile = () => !isDesktop() && setNavOpen(false);

    useEffect(() => {
        window.addEventListener('resize', setNavByWidth);
        return () => window.removeEventListener('resize', setNavByWidth);
    }, []);

    return (
        <Container {...props}>
            <Navbar>
                <Link href="/" passHref>
                    <LogoAnchor onClick={collapseNavIfMobile}>
                        <Logo
                            src={require('./wordmark.svg')}
                            alt="Institute for Memetic Research & Development"
                        />
                    </LogoAnchor>
                </Link>
                <Collapse
                    isOpened={navOpen}
                    theme={{ collapse: collapseStyles.collapseContainer }}
                >
                    {navOpen && (
                        <Links>
                            {navLinks.map(({ href, label }) => (
                                <Item key={href}>
                                    <NavLink
                                        href={href}
                                        onClick={collapseNavIfMobile}
                                    >
                                        {label}
                                    </NavLink>
                                </Item>
                            ))}
                        </Links>
                    )}
                </Collapse>
                <ToggleButton type="button" onClick={toggleNav} open={navOpen}>
                    <ToggleButtonBox>
                        <ToggleButtonInner open={navOpen} />
                    </ToggleButtonBox>
                </ToggleButton>
            </Navbar>
        </Container>
    );
};

export default Header;
