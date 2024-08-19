// React와 필요한 MUI 컴포넌트들을 가져옴
import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import Image from 'next/image';
import styled from 'styled-components';

// 컴포넌트의 props 타입을 정의
type ActionAreaCardProps = {
  name: string;
};

// Card 컴포넌트에 스타일을 적용
const StyledCard = styled(Card)`
  width: 200px;
  height: 250px;
  display: flex;
  flex-direction: column;
`;

// CardContent 컴포넌트에 스타일을 적용하여 내용을 중앙에 배치
const StyledCardContent = styled(CardContent)`
  flex-grow: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`;

// Typography 컴포넌트에 스타일을 적용하여 텍스트를 중앙 정렬
const StyledTypography = styled(Typography)`
  text-align: center;
`;

// ActionAreaCard 컴포넌트를 정의하고 내보냄
export default function ActionAreaCard({ name }: ActionAreaCardProps) {
  return (
    <StyledCard>
      <CardActionArea>
        <Image
          src="/user.png" // 이미지 소스 경로
          alt={`${name}의 사진`} // 이미지 대체 텍스트
          width={250} // 이미지 너비
          height={140} // 이미지 높이
          layout="responsive" // 반응형 레이아웃 설정
        />
        <StyledCardContent>
          <StyledTypography gutterBottom variant="h6">
            {name}
          </StyledTypography>
        </StyledCardContent>
      </CardActionArea>
    </StyledCard>
  );
}
