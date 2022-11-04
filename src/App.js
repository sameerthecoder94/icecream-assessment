import React, { useEffect, useState } from 'react';
import axiosBase from './axiosBase';
import SingleItemComponent from './component/SingleItem/SingleItem.comp';
import config from './config';
import dummy from './data/dummyData.json';
import styled from '@emotion/styled';
import { Modal } from '@mui/material';
import SinglePage from './component/SinglePage/SinglePage.comp';

const App = () => {
  const [data, setData] = useState(null);
  const [modalData, setModalData] = useState(null);

  const handleOnClick = (data) => {
    setModalData(data);
  };

  const closeModalData = () => setModalData(null);

  const fetchAPI = async () => {
    try {
      const { data } = await axiosBase.get('/businesses/search', {
        params: config.defaultParams,
      });
      setData([...data.businesses]);
    } catch (e) {
      setData([...dummy.businesses]);
    }
  };

  useEffect(() => fetchAPI, []);

  return (
    <div>
      <a href={config.cors + '/corsdemo'}>Allow Cors</a>
      {data ? (
        <>
          <PlaceContainer>
            {data.map((item, index) => (
              <SingleItemComponent
                key={index}
                {...item}
                handleOnClick={() => handleOnClick(item)}
              />
            ))}
          </PlaceContainer>
          <Modal open={modalData !== null} onClose={closeModalData}>
            <SinglePage data={modalData} onClose={closeModalData} />
          </Modal>
        </>
      ) : (
        <h1>Loading...</h1>
      )}
    </div>
  );
};

const PlaceContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 2rem 1rem;
  transition: all 0.3s ease-in-out;
  margin: 10rem 5rem;
  & > div {
    flex: 1;
    min-width: 400px;
    opacity: 0.8;
    cursor: pointer;
    &:hover {
      opacity: 1;
    }
    & > img {
      height: 20vw;
    }
  }
`;

export default App;
