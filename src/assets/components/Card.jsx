import Image from "./Image"
import PrimaryText from "./PrimaryText"
import SecondaryText from "./SecondaryText"

function Card() {
    return (
        <div className='card'>
            <Image />
            <PrimaryText />
            <SecondaryText />
        </div>
    )
}

export default Card;