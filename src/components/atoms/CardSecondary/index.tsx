import {
    Card,
    CardHeader,
    CardBody,
    Typography,
} from "@material-tailwind/react";
import { FC } from "react";
import Button from "../Button";

interface BackgroundBlogCardPropType {
    src: string
    name: string
    caption: string
    link: string
}
   
const BackgroundBlogCard: FC<BackgroundBlogCardPropType> = (props) => {
    const {src,name,caption,link} = props
    return (
      <Card
        shadow={false}
        className="w-96 mt-4 mx-2 relative grid h-[423px] rounded-xl items-end justify-center overflow-hidden text-center"
      >
        <CardHeader
          floated={false}
          shadow={false}
          color="transparent"
          className="absolute inset-0 m-0 h-full w-full rounded-none bg-[url('/img4.png')] bg-cover bg-center"
        >
          <div className="bg-black opacity-70 absolute inset-0 h-full w-full" />
        </CardHeader>
        <CardBody className="relative md:px-2 h-[400px] flex flex-col justify-between p-2 ms-2">
          <Typography
            variant="h2"
            color="white"
            className="font-medium leading-[1.5] text-4xl"
          >
            {name}
            <p className="font-light text-base">{caption}</p>
          </Typography>
          <Button text='Selengkapnya' className='w-[203px] ms-3 mb-5' type='primary' onClick={() => window.location.href = link} />
        </CardBody>
      </Card>
    );
}

export default BackgroundBlogCard