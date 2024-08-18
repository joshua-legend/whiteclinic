import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import Image from 'next/image';
import { styled } from '@mui/system';

interface ActionAreaCardProps {
  name: string;
  info: string;
}

const StyledCard = styled(Card)({
  width: '250px',
  height: '300px',
  display: 'flex',
  flexDirection: 'column',
});

const StyledCardContent = styled(CardContent)({
  flexGrow: 1,
  overflow: 'auto', // 내용이 넘칠 경우 스크롤 표시
});

const StyledTypography = styled(Typography)({
  display: '-webkit-box',
  WebkitLineClamp: 3,
  WebkitBoxOrient: 'vertical',
  overflow: 'hidden',
  textOverflow: 'ellipsis',
});

export default function ActionAreaCard({ name, info }: ActionAreaCardProps) {
  return (
    <StyledCard>
      <CardActionArea>
        <Image
          src="/user.png"
          alt={`${name}의 사진`}
          width={250}
          height={140}
          layout="responsive"
        />
        <StyledCardContent>
          <Typography gutterBottom variant="h6" component="div">
            {name}
          </Typography>
          <StyledTypography variant="body2" color="text.secondary">
            {info}
          </StyledTypography>
        </StyledCardContent>
      </CardActionArea>
    </StyledCard>
  );
}
