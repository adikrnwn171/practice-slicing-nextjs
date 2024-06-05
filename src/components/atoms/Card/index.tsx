import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
    Button,
} from "@material-tailwind/react";
import { FC } from "react";

interface CardDefaultPropType {
    src: string
    date: string
    titleArticle: string
    sub: string
}

const CardDefault: FC<CardDefaultPropType> = (props) => {
    const {src,date,titleArticle,sub} = props
    return (
      <Card className="mt-4 w-96 border-2 mx-2">
        <CardHeader color="blue-gray" className="relative h-56 h-[282px]">
          <img
            src={src}
            alt="card-image"
          />
        </CardHeader>
        <CardBody className="p-5">
            <p className="pb-5">{date}</p>
          <Typography variant="h5" color="blue-gray" className="mb-2 font-medium text-2xl">
            {titleArticle}
          </Typography>
          <Typography className="text-base pb-10">
            {sub}
          </Typography>
          <a href="www.google.com" className="text-sky-500">Baca selengkapnya...</a>
        </CardBody>
        
      </Card>
    );
}

export default CardDefault