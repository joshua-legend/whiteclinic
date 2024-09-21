import {
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from '@mui/material';

export type CCardAtomProps = {
  engineerName: string;
  imgURL?: string;
  cardContent: string;
  btnContent?: String;
  onBtnClick?: () => void;
  selectDate: string;
};

const CCardAtom = ({
  engineerName,
  imgURL,
  cardContent,
  btnContent = '상세 보기',
  onBtnClick,
}: CCardAtomProps) => {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia component="img" height="140" image={imgURL} />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {engineerName}
          </Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            {cardContent}
          </Typography>
        </CardContent>
      </CardActionArea>
      {btnContent && (
        <CardActions>
          <Button size="small" color="primary" onClick={onBtnClick}>
            {btnContent}
          </Button>
        </CardActions>
      )}
    </Card>
  );
};

export default CCardAtom;
