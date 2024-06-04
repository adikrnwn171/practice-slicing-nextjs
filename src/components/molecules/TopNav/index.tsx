import { FC } from "react";
import Image from "next/image";
import Button from "@/components/atoms/Button";
import { url } from "inspector";

interface TopNavPropType {}

const TopNav: FC<TopNavPropType> = (props) => {
    const topNavData = [
        {
            name: 'Layanan Publik',
            url: 'https://google.com'
        },
        {
            name: 'Data Statistik',
            url: 'https://google.com'
        },
        {
            name: 'Galeri',
            url: 'https://google.com'
        },
        {
            name: 'Sekilas Info',
            url: 'https://google.com'
        },
        {
            name: 'Pemerintah',
            url: 'https://google.com'
        },
    ]

    return (
        <nav className='h-[87px] w-screen bg-white flex flex-row justify-between py-4 px-20 fixed z-50'>
            <div className="flex flex-row gap-1 items-center w-[200px]">
                <Image src='/logo.png' height={63} width={51} alt="logo"/>
                <div className='font-medium text-base'>
                    PEMERINTAH LOMBOK BARAT
                </div>
            </div>
            <div className="flex flex-row gap-10">
                {
                    topNavData && topNavData.length > 0 ? topNavData.map((item, index) => {
                        return (
                            <button key={index} onClick={() => window.location.href= item.url}>
                                {item.name}
                            </button>
                        )
                    }) : ''
                }
            </div>
            <Button type='secondary' className='w-[145px]' text="Pengaduan" onClick={() => console.log("onClick pengaduan")}/>
        </nav>
    )
}

export default TopNav