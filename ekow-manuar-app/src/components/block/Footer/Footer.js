import Abdallah from '../../../images/1.png'
import cloud from '../../../images/clouds-tileable.png';
import React, {useEffect, useRef, useState} from "react";
import { faInstagram, faMedium, faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import ContactLink from '../ContactLink/ContactLink'
import SocialMediaLink from "../SocialMediaLink/SocialMediaLink";
import {gsap} from "gsap";
import cloud1 from "../../../images/clouds-tileable.png";

const Footer = () => {

    const [isHovered, setIsHovered] = useState(false)
    const timelineClouds = gsap.timeline({paused: false})
    const footerRef = useRef();
    let width = 1171,
        speed = 5,
        duration = width / speed,
        endPosition = width - (speed / 60);

    useEffect(() => {
        timelineClouds.to([footerRef.current], {css:{backgroundPosition:endPosition + "px 0"}, repeat:-1, duration: duration})
    }, [speed])

    const contactLinks = [
        {
            href: 'tel:+233243567610',
            elementText: 'Via phone call'
        },
        {
            href: 'sms:+233243567610',
            elementText: 'Via SMS'
        },
        {
            href: 'mailto:abdallahsmith06@gmail.com',
            elementText: 'Via email'
        },
    ]

    const socialMediaLinks = [
        {
            href: 'https://abdallahsmith06.medium.com/',
            icon: faMedium
        },
        {
            href: 'https://www.instagram.com/ekowmanuar_africanfuturist/?hl=en',
            icon: faInstagram
        },
        {
            href: 'whatsapp://send?phone=233243567610',
            icon: faWhatsapp
        },
    ]

    return (
        <footer className={`absolute bottom-0 left-0 w-full h-[400px]`}>
            <div onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => {setIsHovered(false)}} className={`w-full relative z-[1] h-full flex justify-around items-center transition-colors duration-300 ${isHovered ? 'bg-white bg-opacity-30' : 'bg-white bg-opacity-30 lg:bg-[#273E47]'}`}>
            <div id={"contact"} className={'w-full md:w-1/2 lg:w-1/3 h-[80%] flex justify-evenly items-center'}>
                <div className={'w-1/2 h-[65%] pl-16 flex flex-col justify-between items-start text-left'}>
                    <h1 className={`w-full text-left text-2xl font-thin transition-colors duration-300 ${isHovered ? 'text-[#273E47]' : 'text-[#273E47] lg:text-white'}`}>Contact Me</h1>
                    {contactLinks.map((link, i) => {
                        return (
                            <ContactLink key={i} isHovered={isHovered} href={link.href} elementText={link.elementText}/>
                        )
                    })}
                </div>
                <div id={"social-media-links"} className={`w-1/2 h-[65%] lg:pr-16 flex flex-col justify-between items-center text-[2rem] transition-colors duration-300 ${isHovered ? 'text-[#273E47]' : 'text-[#273E47] lg:text-white'}`}>
                    {socialMediaLinks.map((link, i) => {
                        return (
                            <SocialMediaLink key={i} href={link.href} icon={link.icon} />
                        )
                    })}
                </div>
            </div>
            <div className={'hidden md:flex md:w-1/2 lg:w-3/5 h-full  items-center justify-center lg:justify-evenly'}>
                <div className={`w-[70%] md:w-[80%] h-[80%] flex flex-col justify-evenly items-start lg:w-1/2 transition-colors text-sm duration-300 ${isHovered ? 'text-[#273E47]' : 'text-[#273E47] lg:text-white'}`}>
                    <p>Ekow Manuar is an award-winning Ghanaian author and Sustainability Scientist. He has published several of his works in anthologies across the world including, The Dark Mountain publication (UK), Kalahari Review, African Writers Project, Lund UPF Magazine, and many more.</p>
                </div>
                <div className={'hidden lg:block'}>
                    <img className={`w-[250px] h-[250px] rounded-[50%] transition-all duration-300 ${isHovered ? 'shadow-xl' : 'shadow-sm'}`} src={Abdallah} alt={'Author'} />
                </div>
            </div>
            </div>
            <div ref={footerRef} className={'w-full h-full absolute top-0 left-0 z-0 bg-center bg-[#7CCFCC]'} style={{backgroundImage: `url("${cloud}")`}} ></div>
        </footer>
    )
}
export default Footer;