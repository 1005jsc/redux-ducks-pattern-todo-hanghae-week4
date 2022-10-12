import React, { useEffect, useState } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
type TodoPageProps = {};

const TodoPage = ({}: TodoPageProps) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [id, setId] = useState<string | null>(null);

  const navigate = useNavigate();

  useEffect(() => {
    // 작품들 다가져옴 두가지 (작품들, 작품아이디)
    const param_id = searchParams.get('id');
    // 작품 아이디

    setId(param_id);
  }, []);

  const handleClick: React.MouseEventHandler<HTMLButtonElement> = (e) => {
    e.preventDefault();
    navigate(`/`);
  };

  return (
    <DetailSection>
      <DetailBorder>
        <BeforeButton onClick={handleClick}>이전으로</BeforeButton>

        <DetailPId>ID : {id}</DetailPId>
        <DetailH1>리액트</DetailH1>
        <DetailH3>리엑트를 배워봅시다</DetailH3>
      </DetailBorder>
    </DetailSection>
  );
};
export default TodoPage;

const DetailSection = styled.section`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const DetailBorder = styled.div`
  width: 35rem;
  height: 20rem;
  border: 1px solid grey;
  padding: 1rem 2rem;

  position: relative;
`;

const DetailPId = styled.p`
  font-size: 1.2rem;
`;

const DetailH1 = styled.h1`
  font-size: 2.2rem;
  padding: 1rem 0;
`;
const DetailH3 = styled.p`
  font-size: 1.2rem;
`;

const BeforeButton = styled.button`
  position: absolute;
  top: 2rem;
  right: 2.5rem;
  background-color: transparent;
  width: 8rem;
  height: 3rem;
  border: 1px solid #c5c5c5;
  border-radius: 1rem;
`;
