import styled, { css } from 'styled-components';
import bg from '../../assets/bg.jpg'

const primary = '#ff5252';


export const LandingContainer = styled.div`  
    background: url(${bg});
    background-size: cover;
    background-position: center right;
    height: 100vh;
    font-family: 'Quicksand', sans-serif;
    font-weight: 400;
    display: flex;
    flex-flow: column;
    justify-content: space-around;
    align-items: center;
`;

export const Title = styled.h1`
    font-weight: 300;
    font-size: 2.3rem;
    color: #eceff1;
    text-transform: uppercase;
    padding: .75em 1.5em;
    border: 1px dashed ${ primary };
    box-shadow: 0px 0px 5px 1px black;
    text-shadow: 1px 1px 5px black;
    transition: all ease-in-out 1s;

    & strong {
        font-weight: 700;
        color: ${ primary };
        text-shadow: 1px 1px 5px black;
        transition: all ease-in-out 1s;
    }

    &:hover {
        transform: scale( 1 );
        box-shadow: 0px 0px 10px 5px ${ primary };
        color: ${ primary }; 
        text-shadow: 1px 1px 5px ${ primary };

        & strong {
            color: white;
        }
    }
`;

export const Subtitle = styled.span`
    color: white;
    font-size: 1rem;
`;

export const Navbar = styled.nav`
    position: fixed;
    width: 100%;
    top: 0;
    height: 50px;
`;

export const MenuToggle = styled.div`
    position: absolute;
    padding: 1em;
    top: .5em;
    right: .5em;
    cursor: pointer;
`;

export const Hamburger = styled.div`
    &,
    &::before,
    &::after {
        content: '';
        display: block;
        background: #EBEBD3;
        height: 3px;
        width: 1.5em;
        border-radius: 10px;
        transition: transform ease-in-out .5s;
    }

    &::before {
        transform: translateY( -7px );
    }

    &::after {
        transform: translateY( 4px );
    }

    &.interactable {
        &:hover,
        &:focus {
            & {
                transform: rotate( 45deg );
                background: ${ primary };
            }

            &::before {
                transform: rotate( -90deg );
                background: ${ primary };
            }
            &::after {
                display: none;
            }
        }
    }
`;

export const Arrow = styled.div`
    height: 30px;
    width: 30px;
    padding: .5em;
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    bottom: 2em;
    border-radius: 50px;
    border: 2px dashed white;
    transition: transform ease-in-out .5s;

    & i {
        color: ${ primary };
        font-size: 1.5rem;
        transition: transform ease-in-out .5s;
    }

    &:hover,
    &:focus {
        transform: translateY( 10px );
        
        & i {
            transform: rotate( 180deg );
        }
    }
`;