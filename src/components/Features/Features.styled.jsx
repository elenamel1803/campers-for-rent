import styled from 'styled-components';

export const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  justify-content: flex-start;
  max-width: 430px;
  margin-bottom: 44px;
`;

export const Item = styled.li`
  border-radius: 100px;
  padding: 12px 18px;
  /* width: 143px; */
  height: 44px;
  background: #f2f4f7;
  mix-blend-mode: multiply;
`;

export const Title = styled.h3`
  font-weight: 600;
  font-size: 20px;
  line-height: 1.2;
  color: #101828;
  margin-bottom: 24px;
`;

export const DetailsList = styled.ul`
  display: grid;
  gap: 14px;
  max-width: 430px;
`;

export const DetailsItem = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const FeaturesWrap = styled.div`
  display: flex;
  gap: 24px;
`;
