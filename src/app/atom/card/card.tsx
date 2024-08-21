import * as React from 'react';
import MuiCard from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

type CardProps = {
  cardWidth: 'small' | 'medium' | 'large'; //카드의 넓이
  cardHeight: 'small' | 'medium' | 'large'; //카드의 높이
  img?: string; //카드의 이미지
  imgWidth?: 'small' | 'medium' | 'large'; // 카드안의 이미지의 넓이
  imgHeight?: 'small' | 'medium' | 'large'; // 카드안의 이미지의 높이
  content: string; //카드의 내용
  contentSize: 'small' | 'medium' | 'large'; //내용 글자 크기
};

export const Card = ({
  cardWidth,
  cardHeight,
  img,
  imgWidth,
  imgHeight,
  content,
  contentSize,
}: CardProps) => {
  return (
    <MuiCard sx={{ cardWidth, cardHeight }}>
      <CardActionArea>
        <CardMedia
          component="img" //이미지가 들어간다는것을 명시해줌
          sx={{ width: imgWidth, height: imgHeight }} //이미지의 넓이와 높이 지정
          image={img} //들어갈 이미지 매칭 
        />
        <CardContent>
          <Typography sx={{ fontSize: contentSize }}>{content}</Typography>
        </CardContent>
      </CardActionArea>
    </MuiCard>
  );
};
