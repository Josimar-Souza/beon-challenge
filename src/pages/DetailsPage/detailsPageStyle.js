import styled from 'styled-components';

export const DetailsMainSection = styled.section`
  align-items: center;
  background-color: #d1d1d1;
  display: flex;
  height: 100vh;
  justify-content: center;
  width: 100%;
`;

export const InfoContainer = styled.div`
  align-items: center;
  background-color: white;
  border-radius: 5px;
  box-shadow: 5px 5px 6px rgba(0, 0, 0, 0.5);
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  max-width: 80%;
  padding: 10px;
  width: 100%;
`;

export const BookTitle = styled.h1`
  font-size: 2.5vw;
  margin-bottom: 3rem;
  text-decoration: underline;
`;

export const BookInfo = styled.p`
  font-size: 1.5vw;
  font-weight: 600;
  margin: 15px 0;
`;
