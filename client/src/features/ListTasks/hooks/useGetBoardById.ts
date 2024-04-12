import { useParams } from 'react-router-dom';
import { useGetBoardByIdQuery } from 'services/api';

const useGetBoardById = () => {
  const { boardId } = useParams();

  const { data, isLoading, isError } = useGetBoardByIdQuery(boardId ?? '');

  return {
    data,
    isLoading,
    isError
  };
};

export { useGetBoardById };
