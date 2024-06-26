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
  color: var(--main);
  margin-bottom: 8px;
`;

export const Text = styled.p`
  font-weight: 400;
  font-size: 16px;
  line-height: 1.5;
  color: var(--text);
  margin-bottom: 24px;
`;

export const Input = styled.input`
  border-radius: 10px;
  border: none;
  padding: 18px;
  width: 400px;
  background: var(--inputs);
  font-weight: 400;
  font-size: 16px;
  line-height: 1.25;
  color: var(--main);

  &::placeholder {
    font-weight: 400;
    font-size: 16px;
    line-height: 1.25;
    color: rgba(16, 24, 40, 0.6);
  }
`;

export const Textarea = styled.textarea`
  border-radius: 10px;
  border: none;
  padding: 18px;
  width: 400px;
  height: 114px;
  background: var(--inputs);
  font-weight: 400;
  font-size: 16px;
  line-height: 1.25;
  color: var(--main);
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
  background: var(--button);
  font-weight: 500;
  font-size: 16px;
  line-height: 1.5;
  letter-spacing: -0.01em;
  color: #fff;

  &:hover {
    background: var(--button-hover);
  }
`;

export const ErrorMessage = styled.div`
  font-weight: 400;
  font-size: 12px;
  line-height: 1.5;
  color: var(--button);
`;

export const CalendarWrapper = styled.div`
  position: relative;
  width: 100%;
`;

export const CalendarIcon = styled.div`
  position: absolute;
  top: 50%;
  right: 18px;
  transform: translateY(-50%);
  pointer-events: none;
`;
