import * as React from 'react';
import MuiCard from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { CardDataProps } from './CardData';
import { cardStyle } from '@/styles/sizes';

export type EngineerScheduleCardProps = {
  cardSize: keyof typeof cardStyle.cardSize; //카드의 크기
  imgSize: keyof typeof cardStyle.imgSize; // 카드안의 이미지의 크기
  nameSize: keyof typeof cardStyle.fontSize; //내용 글자 크기
  img?: string; //카드의 이미지
  CardDataProps: CardDataProps;
};

export const EngineerScheduleCard = ({
  cardSize = 'medium',
  imgSize = 'medium',
  nameSize = 'large',
  img = 'https://cdn.pixabay.com/photo/2021/07/02/04/48/user-6380868_1280.png',
  CardDataProps,
}: EngineerScheduleCardProps) => {
  return (
    <MuiCard
      sx={{
        width: cardStyle.cardSize[cardSize],
        height: cardStyle.cardSize[cardSize],
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <CardActionArea sx={{ display: 'flex', flexDirection: 'column' }}>
        <CardMedia
          component="img" //이미지 타입이라는것을 명시
          sx={{ width: cardStyle.imgSize[imgSize], height: cardStyle.imgSize[imgSize] }} //이미지의 크기 지정
          image={img}
        />
        <CardContent>
          <Typography sx={{ fontSize: nameSize }}>{CardDataProps.engineersName}</Typography>
        </CardContent>
      </CardActionArea>
    </MuiCard>
  );
};
export default EngineerScheduleCard;
