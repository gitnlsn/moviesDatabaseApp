import styled from "styled-components";

import HomeImg1 from '../../images/home-image-1.jpg';
import HomeImg2 from '../../images/home-image-2.jpg';
import HomeImg3 from '../../images/home-image-3.jpg';
import HomeImg4 from '../../images/home-image-4.jpg';
import HomeImg5 from '../../images/home-image-5.jpg';

const HomeImg = [
    HomeImg1,
    HomeImg2,
    HomeImg3,
    HomeImg4,
    HomeImg5,
][Math.floor(Math.random() * 5)];

export const Main = styled.main`
    padding: 24px 64px;
    position: relative;
    background-color: bisque;
    
    ::before {
        content: '';
        background-image: url(${HomeImg});
        background-size: cover;
        opacity: 0.75;
        
        position: absolute;
        top: 0px;
        right: 0px;
        bottom: 0px;
        left: 0px;
    }

    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
`;

export const InputWrapper = styled.div`
    width: 800px;
    z-index: 10;
`
