import { FC, MouseEventHandler } from "react";
import Image from "next/image";

interface CategoryPropType {
    imgUrl: string,
    imgAlt: string,
    text: string,
    onClick: MouseEventHandler<HTMLElement>
}

const Category: FC<CategoryPropType> = (props) => {
    const {imgUrl, imgAlt, text, onClick} = props
    return (
        <button className='flex flex-col gap-4'
            onClick={onClick}>
            <Image height={101} width={105} src={imgUrl} alt={imgAlt}/>
            <p>{text}</p>
        </button>
    )
}

export default Category