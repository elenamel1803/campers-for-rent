import styled from 'styled-components';

export const AdvertsWrap = styled.div`
  /* display: flex;
  gap: 50px; */
`;

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 32px;
  width: 100%;
`;

export const Item = styled.li`
  display: flex;
  /* gap: 24px; */
  border: 1px solid rgba(16, 24, 40, 0.2);
  border-radius: 20px;
  padding: 24px;
  width: 888px;
  height: 358px;
`;

export const Img = styled.img`
  border-radius: 10px;
  width: 290px;
  height: 310px;
  object-fit: cover;
  object-position: center;
  margin-right: 24px;
`;

export const CardWrap = styled.div`
  /* display: flex; */
  width: 100%;
`;

export const Title = styled.h3`
  font-weight: 600;
  font-size: 24px;
  line-height: 1.25;
  color: #101828;
`;

export const TitleWrap = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 8px;
`;

export const Box = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

// export const TitlePrice = styled(Title)`
//   margin-right: 10px;
// `;

export const RatingText = styled.p`
  display: flex;
  gap: 4px;
  align-items: center;
  font-weight: 400;
  font-size: 16px;
  line-height: 1.5;
  text-decoration: underline;
  text-decoration-skip-ink: none;
  color: #101828;
`;

export const LocationText = styled.p`
  display: flex;
  gap: 4px;
  align-items: center;
  font-weight: 400;
  font-size: 16px;
  line-height: 1.5;
  color: #101828;
`;

export const Wrap = styled.div`
  display: flex;
  gap: 16px;
  margin-bottom: 24px;
`;

export const DescriptionText = styled.p`
  font-weight: 400;
  font-size: 16px;
  line-height: 1.5;
  color: #475467;
  margin-bottom: 24px;
`;

export const Button = styled.button`
  border-radius: 200px;
  padding: 16px 40px;
  width: 166px;
  height: 56px;
  background: #e44848;
  font-weight: 500;
  font-size: 16px;
  line-height: 1.5;
  letter-spacing: -0.01em;
  color: #fff;

  &:hover {
    background: #d84343;
  }
`;

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
  background: #f2f4f7;
  mix-blend-mode: multiply;
  font-weight: 500;
  font-size: 16px;
  line-height: 1.25;
  text-align: center;
  color: #101828;
`;
