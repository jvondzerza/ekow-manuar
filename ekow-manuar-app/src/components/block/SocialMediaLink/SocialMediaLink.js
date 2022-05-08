import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

const SocialMediaLink = (props) => {

    return (
        <a className={`text-[2rem]`} key={props.key} href={props.href} target={"_blank"}><FontAwesomeIcon icon={props.icon} /></a>
    )
}

export default SocialMediaLink;