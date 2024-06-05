import { FC } from "react";
import Image from "next/image";
import Button from "@/components/atoms/Button";
import CardDefault from "@/components/atoms/Card";
import { newsData } from "@/utils/newsData";
import BackgroundBlogCard from "@/components/atoms/CardSecondary";
import { tripData } from "@/utils/tripData";


interface NewsPropType {
    section : string
    title : string
    showButton: boolean
    className?: string
}

const News: FC<NewsPropType> = (props) => {
    const {section,title,showButton,className} = props
    return (
        <div className={className}>
            <p className='underline'>{section}</p>
            <div className="flex flex-row justify-between">
                <h1 className="text-[36px] font-bold">{title}</h1>
                {showButton && <Button className="w-[145px]" text="Lihat Semua" type="secondary" onClick={() => console.log("console log news")}/>}
            </div>
            <div className="flex flex-row">
                {showButton ? newsData.map((item, index) => {
                    return (
                        <div key={index}>
                            <CardDefault src={item.src} date={item.date} titleArticle={item.title} sub={item.sub}/>
                        </div>
                    )
                })
                :
                tripData.map((item, index) => {
                    return (
                        <div key={index}>
                            <BackgroundBlogCard src={item.src} name={item.name} caption={item.caption} link={item.link}/>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default News