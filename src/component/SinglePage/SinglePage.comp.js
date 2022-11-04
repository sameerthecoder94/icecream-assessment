import styled from '@emotion/styled';
import {
  Close,
  PhoneAndroid,
  StarBorderOutlined,
  StarBorderRounded,
} from '@mui/icons-material';
import { Avatar, Chip, Tooltip, Typography } from '@mui/material';
import React, { useState, useEffect } from 'react';
import axiosBase from '../../axiosBase';
import dummyData from '../../Data/reviewData.json';

const SinglePage = ({ data, onClose }) => {
  const [review, setReview] = useState(null);

  const fetchReview = async () => {
    try {
      const res = await axiosBase.get(`businesses/${data.id}/reviews`);
      setReview([...res.data.reviews]);
    } catch (e) {
      setReview([...dummyData.reviews]);
    }
  };

  useEffect(() => fetchReview, []);

  const reviewNumberStars = (number) => {
    let stars;
    for (let i = 1; i <= 5; i++) {
      stars += <StarBorderRounded fontSize='1rem' />;
    }
    return stars;
  };
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
        <h4>Reviews</h4>
        <ReviewContainer>
          {review?.map((r, index) => (
            <Review key={index}>
              <Avatar src={r.user.image_url} />
              <ContentReview>
                <h5>{r.rating} Rating</h5>
                <p>{r.text}</p>
              </ContentReview>
            </Review>
          ))}
        </ReviewContainer>
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

const ReviewContainer = styled.div`
  max-height: 500px;
  overflow-y: auto;
`;

const Review = styled.div`
  overflow-x: hidden;
  display: flex;
  align-items: center;
  gap: 2rem;
`;

const ContentReview = styled.div`
  width: 300px;
`;
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
  width: 90vw;
  align-items: center;
  border-radius: 5px;
  & > div {
    min-width: 300px;
  }
`;
const ContentContainer = styled.div``;
const ImageContainer = styled.div``;

export default SinglePage;
