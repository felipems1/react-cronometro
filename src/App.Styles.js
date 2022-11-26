import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Clock = styled.img`
  padding-top: 100px;
  width: 300px;
  height: 300px;
`;

export const Time = styled.p`
  margin-top: -160px;
  margin-bottom: 130px;
  font-size: 45px;
  font-weight: bold;
  color: #fff;
`;

export const Buttons = styled.div`
  display: flex;
  justify-content: center;
`;

export const Button = styled.button`
  margin: 0 10px;
  border: none;
  border-radius: 5px;
  width: 150px;
  height: 30px;
  color: #0000dd;
  cursor: pointer;
`;

export const LastTime = styled.i`
  margin-top: 20px;
  font-size: 20px;
  color: #fff;
`;
