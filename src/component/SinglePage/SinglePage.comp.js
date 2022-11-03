import styled from '@emotion/styled';
import {
  Close,
  PhoneAndroid,
  StarBorderOutlined,
  StarBorderRounded,
} from '@mui/icons-material';
import { Chip, Tooltip, Typography } from '@mui/material';
import React from 'react';

const SinglePage = ({ data, onClose }) => {
  return (
    <Container>
      <ImageContainer>
        <img src={data.image_url} loading='lazy' alt={data.name} />
      </ImageContainer>
      <ContentContainer>
        <CloseButton onClick={onClose}>
          <Tooltip title='Close'>
            <Close fontSize='10rem' />
          </Tooltip>
        </CloseButton>
        <Title>
          <Typography variant='h4'>{data.name}</Typography>
          <Typography variant='p'>{data.location.display_address}</Typography>
        </Title>
        <Price>{data.price}</Price>
        <Rating>
          <StarBorderRounded fontSize='1rem' />
          {data.rating}
        </Rating>
        <TransactionContainer>
          {data.transactions.map((transactions, index) => (
            <Chip key={index} label={transactions} />
          ))}
        </TransactionContainer>
        <CategoriesContainer>
          <h4>Categories</h4>
          <div>
            {data.categories.map((transactions, index) => (
              <Chip key={index} label={transactions.title} />
            ))}
          </div>
        </CategoriesContainer>
        <Contact>
          <ContactItem>
            <PhoneAndroid />
            <a href={`tel:${data.display_phone}`}>{data.display_phone}</a>
          </ContactItem>
        </Contact>
      </ContentContainer>
    </Container>
  );
};

const ContactItem = styled.div`
  display: flex;
  flex-wrap: wrap;
  font-size: 2rem;
  align-items: center;
  & > a {
    text-decoration: none;
    color: #2b2b2b;
  }
`;

const Contact = styled.div`
  margin: 5rem 0rem;
`;

const CategoriesContainer = styled.div`
  & > div {
    display: flex;
    gap: 1rem;
    flex-wrap: wrap;
  }
`;

const TransactionContainer = styled.div`
  display: flex;
  gap: 1rem;
`;
const Rating = styled.h1`
  display: flex;
  font-weight: bold;
  align-items: center;
`;

const Price = styled.h2`
  color: 'green';
`;
const Title = styled.div`
  display: flex;
  justify-content: center;
  align-items: left;
  flex-direction: column;
`;

const CloseButton = styled.div`
  position: absolute;
  top: 10px;
  right: 10px;
  cursor: pointer;
  font-size: 3rem;
`;

const Container = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #fafafa;
  display: flex;
  flex-wrap: wrap;
  border-radius: 5px;
  gap: 2rem;
  width: 80%;
  align-items: center;
  border-radius: 5px;
  & > div {
    min-width: 400px;
  }
`;
const ContentContainer = styled.div``;
const ImageContainer = styled.div``;

export default SinglePage;
