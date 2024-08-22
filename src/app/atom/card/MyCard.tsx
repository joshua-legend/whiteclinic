import * as React from 'react';
import MuiCard from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { card, sizes } from '@/styles/sizes';
import {
  BuiltIn,
  Circular,
  Dryer,
  Duct,
  FourWay,
  FrontLoading,
  OneWay,
  OutdoorUnit,
  Stand,
  TopLoading,
  WallMounted,
  WindowType,
} from './card';

type CardProps = {
  cardSize: 'small' | 'medium' | 'large'; //카드의 크기
  imgSize: 'small' | 'medium' | 'large'; // 카드안의 이미지의 크기
  contentSize: 'small' | 'medium' | 'large'; //내용 글자 크기
  img: string; //카드의 이미지
  content:
    | WallMounted
    | OneWay
    | FourWay
    | Circular
    | Stand
    | OutdoorUnit
    | Duct
    | WindowType
    | TopLoading
    | FrontLoading
    | BuiltIn
    | Dryer;
};

export const MyCard = ({
  cardSize = 'medium',
  imgSize = 'medium',
  contentSize = 'large',
  img,
  content,
}: CardProps) => {
  const CardSize = card.cardSize[cardSize];
  const ImageSize = card.imgSize[imgSize];
  const fontSize = card.fontSize[contentSize];
  return (
    <MuiCard
      sx={{
        width: CardSize,
        height: CardSize,
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <CardActionArea sx={{ display: 'flex', flexDirection: 'column' }}>
        <CardMedia
          component="img" //이미지 타입이라는것을 명시
          sx={{ width: ImageSize, height: ImageSize }} //이미지의 크기 지정
          image={img}
        />
        <CardContent>
          <Typography sx={{ fontSize }}>{content.name}</Typography>
        </CardContent>
      </CardActionArea>
    </MuiCard>
  );
};
export default MyCard;
