import * as React from 'react';
import MuiCard from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { sizes } from '@/styles/sizes';

//기사별 스킬에따라 분류
type WallMounted = {
  name: '김철수' | '이영희' | '박민수'; // 벽걸이
};

type OneWay = {
  name: '최지우' | '김하나' | '이준호'; // 원웨이
};

type FourWay = {
  name: '장민호' | '유미래' | '송중기'; // 포웨이
};

type Circular = {
  name: '박세리' | '윤호준' | '김혜수'; // 원형
};

type Stand = {
  name: '이수민' | '오지혜' | '강동원'; // 스탠드
};

type OutdoorUnit = {
  name: '한가람' | '최서현' | '류지석'; // 실외기
};

type Duct = {
  name: '백은정' | '신승민' | '조현우'; // 덕트
};

type WindowType = {
  name: '전지현' | '김우빈' | '한예슬'; // 창문형
};

type TopLoading = {
  name: '이경호' | '박지민' | '서지수'; // 통돌이
};

type FrontLoading = {
  name: '김나영' | '정우성' | '배수지'; // 드럼
};

type BuiltIn = {
  name: '송혜교' | '유아인' | '이하늘'; // 빌트인
};

type Dryer = {
  name: '박해진' | '정해인' | '김소연'; // 건조기
};

type CardProps = {
  cardSize: 'small' | 'medium' | 'large' | 'xxlarge' | 'xxxlarge'; //카드의 크기
  imgSize: 'small' | 'medium' | 'large' | 'xxlarge' | 'xxxlarge'; // 카드안의 이미지의 크기
  contentSize: 'small' | 'medium' | 'large' | 'xxlarge' | 'xxxlarge'; //내용 글자 크기
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
          <Typography sx={{ fontSize }}>{content.name}</Typography>
        </CardContent>
      </CardActionArea>
    </MuiCard>
  );
};
export default Card;
