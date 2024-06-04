import { FC } from "react";
import Image from "next/image";
import Button from "@/components/atoms/Button";


interface BannerPropType {
    text : string
}

const Banner: FC<BannerPropType> = (props) => {
    const {text} = props
    return (
        <div className='h-[735px] flex flex-col items-center gap-8 justify-center w-screen relative'>
            <Image src='/banner.png' alt='banner-image' fill className='z-[-1]' />
            <p className='text-[64px] font-bold text-white text-center max-w-[888px]'>{text}</p>
            <div className='flex flex-row gap-4'>
                <Button text='Jelajah' className='w-[203px]' type='primary' onClick={() => console.log('yuhu on click button jelajah')} />
                <Button type='transparent' className='w-[203px]' text='Informasi & Layanan' onClick={() => console.log('yuhu on click button informasi layanan')} />
            </div>
        </div>
    )
}

export default Banner