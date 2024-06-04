import styled from 'styled-components';

export const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-bottom: 32px;
`;

export const Label = styled.label`
  font-weight: 500;
  font-size: 16px;
  line-height: 1.5;
  color: rgba(16, 24, 40, 0.6);
`;

export const InputWrapper = styled.div`
  position: relative;
  width: 360px;
  height: 56px;
  border-radius: 10px;
  background: #f7f7f7;
`;

export const IconWrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 18px;
  transform: translateY(-50%);
  display: flex;
  align-items: center;
`;

export const Input = styled.input`
  border-radius: 10px;
  border: none;
  padding: 18px 18px 18px 46px;
  width: 360px;
  height: 56px;
  background: #f7f7f7;
  font-weight: 400;
  font-size: 16px;
  line-height: 1.25;
  color: #101828;
  border: 2px solid transparent;
  outline: none;

  &::placeholder {
    font-weight: 400;
    font-size: 16px;
    line-height: 1.25;
    color: rgba(16, 24, 40, 0.6);
    position: relative;
    margin-left: 28px;
  }

  &:focus {
    border: 2px solid transparent;
  }
`;
