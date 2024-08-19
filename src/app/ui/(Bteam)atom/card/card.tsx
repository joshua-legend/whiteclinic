import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import Image from 'next/image';
import styled from 'styled-components';

type ActionAreaCardProps = {
  name: string;
};

const StyledCard = styled(Card)`
  width: 200px;
  height: 250px;
  display: flex;
  flex-direction: column;
`;

const StyledCardContent = styled(CardContent)`
  flex-grow: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledTypography = styled(Typography)`
  text-align: center;
`;

export default function ActionAreaCard({ name }: ActionAreaCardProps) {
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
          <StyledTypography gutterBottom variant="h6">
            {name}
          </StyledTypography>
        </StyledCardContent>
      </CardActionArea>
    </StyledCard>
  );
}
