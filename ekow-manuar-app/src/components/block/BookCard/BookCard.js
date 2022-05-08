import { BookCover } from "book-cover-3d";
import { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAmazon } from "@fortawesome/free-brands-svg-icons";
import { faBookOpenReader } from "@fortawesome/free-solid-svg-icons";


const BookCard = (props) => {

    const imageInfo = props.imageInfo;
    const [isOpen, setIsOpen] = useState(false);
    const [isHovered, setIsHovered] = useState(false);

    const handleClick = () => {
            setIsOpen(!isOpen);
            props.relayIsOpenToParent(!isOpen);
    }

    const handleMouseEnter = () => {
        setIsHovered(true);
    }

    const handleMouseLeave = () => {
        setIsHovered(false);
    }

    return (
        <div onClick={handleClick} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} className={`h-[450px] md:h-[350px] bg-white bg-opacity-10 z-[1] flex flex-col md:flex-row mt-8 mb-8 items-center text-left lg:rounded-tl-[15px] lg:rounded-bl-[15px] transition-all duration-500 shadow-lg ${isOpen ? 'w-full justify-evenly lg:justify-around backdrop-blur' : 'backdrop-blur lg:backdrop-blur-none w-full lg:w-1/3 justify-evenly lg:justify-center'}`}>
            <div className={`h-[300px] md:h-auto scale-75 md:scale-90 transition-transform duration-[700ms]`}>
                <BookCover bgColor={props.color} thickness={props.thickness} pagesOffset={1} shadowColor={'transparent'} rotate={isOpen || isHovered ? 0 : 25} transitionDuration={0.7} rotateHover={0}>
                    <img
                        src={imageInfo.url}
                        alt={imageInfo.alt}
                        className={"image"}
                    />
                </BookCover>
            </div>
            <div className={`h-auto md:h-[90%] transition-all duration-500 ${isOpen ? 'w-full md:w-[55%] lg:w-[60%]' : 'w-full md:w-[55%] lg:w-0'}`}>
            <div className={`h-full w-full transition-opacity duration-300 delay-[400ms] ${isOpen ? 'opacity-100' : 'opacity-100 lg:opacity-0'}`}>
                <div className={`${isOpen ? 'flex' : 'flex lg:hidden'} h-full flex-col justify-center md:justify-evenly items-center`}>
                    <p className={`hidden md:block w-full text-base font-normal text-[#273E47] leading-6 `}>{props.description}</p>
                    {(props.isPurchasable || props.freeOnline) && <div className={`w-full h-full md:h-auto flex items-center md:items-start`}>
                        <div className={'w-full md:w-[60%] mb-[35px] md:mb-0 md:h-auto flex flex-col md:flex-row justify-evenly md:justify-between items-center md:items-start'}>
                        {props.isPurchasable &&
                            <a href={props.purchaseLinks[0]} target={"_blank"}><button className={'w-[105px] h-[50px] transition-colors hover:bg-[#7CCFCC] hover:text-[#273E47] rounded-[15px] text-base font-medium text-white bg-[#273E47] md:mr-4'}>Buy on <FontAwesomeIcon icon={faAmazon}/></button></a>
                        }
                        {props.isPurchasable && (props.purchaseLinks.length > 1) &&
                            <a href={props.purchaseLinks[1]} target={"_blank"}><button className={'w-[215px] h-[50px] transition-colors hover:bg-[#7CCFCC] hover:text-[#273E47] rounded-[15px] text-sm text-white bg-[#273E47] mt-4 md:mt-0 tracking-[0.3em]'}>THE SHOP ACCRA</button></a>
                        }
                        {props.freeOnline &&
                            <a href={props.freeLink} target={"_blank"}><button className={'w-[135px] h-[50px] transition-colors hover:bg-[#7CCFCC] hover:text-[#273E47] rounded-[15px] text-base font-medium text-white bg-[#273E47]'}><FontAwesomeIcon icon={faBookOpenReader}/> Free online</button></a>
                        }
                        </div>
                    </div>}
                </div>
            </div>
            </div>
        </div>
    )
}

export default BookCard;