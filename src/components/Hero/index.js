import React, { useState } from 'react'
import Navbar from "../navbar"
import Sidebar from "../sidebar"
import {HeroCOntainer, HeroContent, HeroItems, HeroH1, HeroP, HeroBtn} from "./heroElements"

const Hero = () => {
    const [isOpen, setisOpen] = useState(() => false)

    const toggle = () => {
        setisOpen((prevState) => !prevState)
    }

    return (
        <HeroCOntainer>
            <Navbar toggle={toggle} />
            <Sidebar isOpen={isOpen} toggle={toggle} />
            <HeroContent>
                <HeroItems>
                    <HeroH1> Greatest Pizza Ever </HeroH1>
                    <HeroP> Ready in 60 </HeroP>
                    <HeroBtn> Place Order </HeroBtn>
                </HeroItems>
            </HeroContent>
        </HeroCOntainer>
    )
}

export default Hero
