import styled from 'styled-components';

export const Form = styled.form`
  border: 1px solid rgba(16, 24, 40, 0.2);
  border-radius: 10px;
  padding: 24px;
  width: 448px;
`;

export const Title = styled.h3`
  font-weight: 600;
  font-size: 20px;
  line-height: 1.2;
  color: #101828;
  margin-bottom: 8px;
`;

export const Text = styled.p`
  font-weight: 400;
  font-size: 16px;
  line-height: 1.5;
  color: #475467;
  margin-bottom: 24px;
`;

export const Input = styled.input`
  border-radius: 10px;
  border: none;
  padding: 18px;
  width: 400px;
  background: #f7f7f7;
  font-weight: 400;
  font-size: 16px;
  line-height: 1.25;
  color: #101828;
`;

export const Textarea = styled.textarea`
  border-radius: 10px;
  border: none;
  padding: 18px;
  width: 400px;
  height: 114px;
  background: #f7f7f7;
  font-weight: 400;
  font-size: 16px;
  line-height: 1.25;
  color: #101828;
`;

export const InputsWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 14px;
  margin-bottom: 24px;
`;

export const SendButton = styled.button`
  border-radius: 200px;
  padding: 16px 60px;
  width: 160px;
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
