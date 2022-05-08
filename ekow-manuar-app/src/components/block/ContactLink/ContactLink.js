const ContactLink = (props) => {

    return (
        <a key={props.key} className={`font-medium transition-all duration-300 ${props.isHovered ? 'text-[#273E47]' : 'text-[#273E47] lg:text-white'}`} href={props.href}>{props.elementText}</a>
    )
}

export default ContactLink;