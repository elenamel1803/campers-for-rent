import styled from 'styled-components';

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(17, 18, 19, 0.4);
  z-index: 1200;
`;

export const ModalWrap = styled.div`
  position: fixed;
  background-color: #fff;
  border-radius: 20px;
  padding: 40px;
  width: 982px;
  pointer-events: auto;
  overflow-y: auto;
  max-height: 80vh;
`;

export const Title = styled.h2`
  font-weight: 600;
  font-size: 24px;
  line-height: 1.25;
  color: #101828;
  margin-bottom: 10px;
`;

export const PriceText = styled(Title)`
  margin-bottom: 24px;
`;

export const GaleryWrap = styled.div`
  display: flex;
  gap: 16px;
  margin-bottom: 24px;
`;

export const Img = styled.img`
  border-radius: 10px;
  width: 290px;
  height: 310px;
  object-fit: cover;
  object-position: center;
`;

export const DescriptionText = styled.p`
  font-weight: 400;
  font-size: 16px;
  line-height: 1.5;
  color: #475467;
  margin-bottom: 44px;
`;

export const ButtonText = styled.button`
  font-weight: 600;
  font-size: 20px;
  line-height: 1.2;
  color: #101828;
  position: relative;

  &.active::after {
    content: '';
    position: absolute;
    display: block;
    width: 100%;
    height: 5px;
    background-color: #e44848;
    margin-top: 30px;
  }
`;

export const NavWrap = styled.nav`
  display: flex;
  gap: 40px;
  margin-bottom: 18px;
`;

export const ButtonClose = styled.button`
  position: absolute;
  top: 40px;
  right: 40px;
  background-color: transparent;
  padding: 0;
`;
