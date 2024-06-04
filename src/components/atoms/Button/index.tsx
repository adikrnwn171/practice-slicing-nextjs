import { FC, MouseEventHandler } from 'react'
import clsx from 'clsx'

interface ButtonPropType {
    type: 'primary' | 'secondary' | 'transparent',
    className?: string,
    onClick: MouseEventHandler<HTMLButtonElement>,
    text: string
}

const Button: FC<ButtonPropType> = (props) => {
    const { type, className, onClick, text } = props
    return (
        <button
            className={clsx([
                'py-4 font-medium text-base',
                type === 'primary' && 'bg-white text-black',
                type === 'secondary' && 'bg-[#0055A6] text-white',
                type === 'transparent' && 'bg-transparent text-white border-[1px] border-white border-solid',
                className
            ])}
            onClick={onClick}
        >
            {text}
        </button>
    )
}

export default Button