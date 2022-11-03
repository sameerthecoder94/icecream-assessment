import { DoorFront, MoreVert } from '@mui/icons-material';
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
  is_closed,
  handleOnClick,
}) => {
  return (
    <Card>
      <CardHeader
        sx={{ textAlign: 'left' }}
        action={
          <Tooltip title={is_closed ? 'Closed' : 'Open'}>
            <DoorFront sx={{ color: is_closed ? 'red' : 'green' }} />
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
