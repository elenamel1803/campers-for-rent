import styled from 'styled-components';

export const DetailsList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  justify-content: flex-start;
  margin-bottom: 24px;
`;

export const DetailsItem = styled.li`
  border-radius: 100px;
  padding: 12px 18px;
  display: flex;
  gap: 6px;
  height: 44px;
  background: var(--block-features);
  mix-blend-mode: multiply;
  font-weight: 500;
  font-size: 16px;
  line-height: 1.25;
  text-align: center;
  color: var(--main);
`;
