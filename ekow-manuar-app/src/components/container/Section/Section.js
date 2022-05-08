import BookCard from "../../block/BookCard/BookCard";
import beansWithoutKorkor from '../../../images/b119967911024_1.jpg';
import theMenFromStaywell from '../../../images/the-men-from-staywell.jpg';
import theDayTheWorldEnded from '../../../images/the-day-the-world-ended.jpg';
import cloud from '../../../images/clouds-tileable.png'
import {gsap} from "gsap";
import React, {useRef, useState, useEffect} from 'react'
import Logo from "../../block/Logo/Logo";

const Section = () => {
    const [bookCardIsOpen, setBookCardIsOpen] = useState(false);
    const timelineClouds = gsap.timeline({paused: false})
    const sectionRef = useRef();
    let width = 1171,
        speed = 5,
        duration = width / speed,
        endPosition = width - (speed / 60);

    useEffect(() => {
        timelineClouds.to([sectionRef.current], {css:{backgroundPosition:endPosition + "px 0"}, repeat:-1, duration: duration})
    }, [speed])



    const bookInfo = [
        {
            description: 'A collection of stories representing different genres and perspectives by youth across the African continent. The narratives reflect the lives of African people and how development relates to them. In these stories, the writers address poverty, climate change, gender, food security, natural resources, health, urbanization, employment and related existential concerns spanning a range of perspectives within their preferred genres.',
            imageInfo: {
                url: beansWithoutKorkor,
                alt: "Cover art"
            },
            isPurchasable: false,
            purchaseLinks: [],
            freeOnline: true,
            freeLink: 'https://repository.uneca.org/handle/10855/46429',
            thickness: 80,
            color: '#eee7e5'
        },
        {
            description: "Accra is at a boiling point. The 2032 elections do not hold any clear victor, with the incumbent government scrambling to keep their political machinery intact. A machinery that has been made vulnerable by corruption scandals, rising inequality and violent crime. A family, indirectly tied to the fortunes of the incumbency, are trying to remain afloat amidst the oncoming change...",
            imageInfo: {
                url: theMenFromStaywell,
                alt: "Cover art"
            },
            isPurchasable: true,
            purchaseLinks: ['https://www.amazon.com/MEN-STAYWELL-Ekow-Manuar/dp/B09HQ7K7T7', 'https://theshopaccra.com/products/the-men-from-staywell-by-ekow-manuar'],
            freeOnline: false,
            freeLink: '',
            thickness: 30,
            color: '#887d7e'
        },
        {
            description: "Emmanuel has returned to Ghana from Sweden after hearing of his father's ailment in his home village. The year is 2033, and much of what Emmanuel knew of Ghana has changed, but much still has stayed the same. Upon his return, he stays to tend to his family and other matters, until his life unravels and he begins to see life differently. Soon, Emmanuel crosses a point of no return, and begins to plan on regaining some control over his life in the Ghanaian countryside.",
            imageInfo: {
                url: theDayTheWorldEnded,
                alt: "Cover art"
            },
            isPurchasable: true,
            purchaseLinks: ['https://www.amazon.com/Day-World-Ended-Ekow-Manuar-ebook/dp/B08BCVL239/ref=sr_1_2?qid=1651400112&refinements=p_27%3AEkow+Manuar&s=digital-text&sr=1-2&text=Ekow+Manuar'],
            freeOnline: false,
            freeLink: '',
            thickness: 30,
            color: '#262127'
        },
    ]

    return (
            <div className={'section-container relative pt-[100px] pb-[400px]'}>
            <div
                ref={sectionRef} className={"section relative pt-8 pb-8 transition-colors duration-300 flex flex-col justify-evenly lg:grid lg:grid-cols-6 overflow-hidden"} style={{backgroundImage: `url("${cloud}")`}}>
                <p className={`hidden xl:block tracking-widest text-white z-0 text-center font-thin text-[2rem] fixed top-[25%] left-[5%] translate-y-[-25%] translate-x-[5%] transition-all duration-500 text-shadow-xl ${bookCardIsOpen ? 'opacity-0' : 'opacity-100'}`}>Pick
                    out a book</p>
                {/*<div className={'w-full h-full flex justify-center items-center absolute top-0 left-0'}>*/}
                {/*    <Logo />*/}
                {/*</div>*/}

                {bookInfo.map((bookInfo, i) => {
                    return (
                        <div className={"lg:col-start-3 lg:col-span-4 flex items-end justify-between"}>
                            <div className={'hidden lg:block'}></div>
                            <BookCard
                                key={i}
                                description={bookInfo.description}
                                imageInfo={bookInfo.imageInfo}
                                isPurchasable={bookInfo.isPurchasable}
                                purchaseLinks={bookInfo.purchaseLinks}
                                freeOnline={bookInfo.freeOnline}
                                freeLink={bookInfo.freeLink}
                                thickness={bookInfo.thickness}
                                color={bookInfo.color}
                                relayIsOpenToParent={setBookCardIsOpen}
                            />
                        </div>
                    )
                })}
            </div>
            </div>
    )
}

export default Section;

