import React, {useState} from 'react';
import Navbar from '../Navbar';
import Sidebar from '../Sidebar';
import { HeroContainer } from './HeroElement';
import { HeroContent, HeroItems, HeroH1, HeroP, HeroBtn } from './HeroElement';

export const Hero = () => {
    const [isOpen, setIsOpen ] = useState(false)

    const toggle = () => {
        setIsOpen(!isOpen)
    }

    return (
        <HeroContainer>
            <Navbar toggle={toggle}/>
            <Sidebar isOpen={isOpen} toggle={toggle}/>
            <HeroContent>
                <HeroItems>
                    <HeroH1>My Name Is Ralph Anate</HeroH1>
                    <HeroP>I'm A Digital Artist</HeroP>
                    <HeroBtn>Contact Me</HeroBtn>
                </HeroItems>
            </HeroContent>
        </HeroContainer>
    )
}

