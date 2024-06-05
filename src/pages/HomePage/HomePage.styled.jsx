import styled from 'styled-components';
import campervan from '../../assets/img/campervan.jpg';

export const HomeWrap = styled.div`
  padding: 0;
  margin: 0;
  background-image: url(${campervan});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  object-fit: cover;
  object-position: center;
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
`;

export const Title = styled.h1`
  font-weight: 600;
  font-size: 36px;
  line-height: 1.25;
  color: #fff;
  margin-bottom: 20px;
`;

export const Section = styled.section`
  background: rgba(0, 0, 0, 0.6);
  padding: 20px;
  border-radius: 10px;
  color: #fff;
  max-width: 800px;
`;

export const SubTitle = styled.h2`
  font-size: 28px;
  margin-bottom: 20px;
`;

export const Paragraph = styled.p`
  font-size: 18px;
  line-height: 1.5;
  margin-bottom: 20px;
`;

export const Services = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Service = styled.div`
  background: rgba(255, 255, 255, 0.1);
  border-radius: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  margin: 10px;
  padding: 20px;
  width: 100%;
  max-width: 400px;
  color: #fff;
`;
