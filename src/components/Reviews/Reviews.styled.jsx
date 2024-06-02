import styled from 'styled-components';

export const ReviewsWrap = styled.div`
  display: flex;
  gap: 24px;
`;

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  width: 430px;
  gap: 24px;
`;

export const Item = styled.li`
  display: flex;
  flex-direction: column;
`;

export const Box = styled.div`
  display: flex;
  gap: 16px;
  align-items: center;
  margin-bottom: 16px;
`;

export const FirstLetter = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 60px;
  width: 60px;
  height: 60px;
  background: #f2f4f7;
  font-weight: 600;
  font-size: 24px;
  line-height: 1.25;
  color: #e44848;
`;

export const Wrap = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Name = styled.span`
  font-weight: 600;
  font-size: 18px;
  line-height: 1.33333;
  color: #101828;
  margin-bottom: 4px;
`;

export const Text = styled.p`
  font-weight: 400;
  font-size: 16px;
  line-height: 1.5;
  color: #475467;
`;
