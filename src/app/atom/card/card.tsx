import * as React from 'react';
import MuiCard from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { sizes } from '@/styles/sizes';

type CardProps = {
  cardSize: 'small' | 'medium' | 'large' | 'xxlarge' | 'xxxlarge'; //카드의 크기
  imgSize: 'small' | 'medium' | 'large' | 'xxlarge' | 'xxxlarge'; // 카드안의 이미지의 크기
  contentSize: 'small' | 'medium' | 'large' | 'xxlarge' | 'xxxlarge'; //내용 글자 크기
  img: string; //카드의 이미지
  content: string; //카드의 내용
};

export const Card = ({
  cardSize = 'xxxlarge',
  imgSize = 'xxlarge',
  contentSize = 'large',
  img,
  content,
}: CardProps) => {
  const CardSize = sizes.fontSize[cardSize];
  const fontSize = sizes.fontSize[contentSize];
  const ImageSize = sizes.fontSize[imgSize];
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
          <Typography sx={{ fontSize }}>{content}</Typography>
        </CardContent>
      </CardActionArea>
    </MuiCard>
  );
};
export default Card;
