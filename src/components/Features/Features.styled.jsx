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

export const Title = styled.h3`
  font-weight: 600;
  font-size: 20px;
  line-height: 1.2;
  color: var(--main);
  margin-bottom: 24px;
`;

export const DetailsListWrap = styled.ul`
  margin-top: 24px;
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
  margin-top: 44px;
  display: flex;
  gap: 24px;
`;
