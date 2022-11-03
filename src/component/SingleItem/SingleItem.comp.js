import { MoreVert } from '@mui/icons-material';
import {
  Card,
  CardContent,
  CardHeader,
  CardMedia,
  IconButton,
  Tooltip,
} from '@mui/material';
import React from 'react';

const SingleItemComponent = ({
  id,
  name,
  image_url,
  location,
  handleOnClick,
}) => {
  return (
    <Card>
      <CardHeader
        sx={{ textAlign: 'left' }}
        action={
          <Tooltip title='More Options'>
            <IconButton>
              <MoreVert />
            </IconButton>
          </Tooltip>
        }
        title={name}
        subheader={location.address1}
      />
      <CardMedia
        component={'img'}
        image={image_url}
        alt={name}
        onClick={() => handleOnClick()}
      />
    </Card>
  );
};

export default SingleItemComponent;
