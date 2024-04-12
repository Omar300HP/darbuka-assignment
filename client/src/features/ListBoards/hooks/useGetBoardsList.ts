import { useGetBoardListQuery } from 'services/api';

const useGetBoardsList = () => {
  const { data, isLoading, isError } = useGetBoardListQuery(undefined);
  return { data, isLoading, isError };
};

export default useGetBoardsList;
