import SkeletonAvatar from 'antd/es/skeleton/Avatar';
import useGetBoardsList from '../hooks/useGetBoardsList';
import styles from './BoardsList.module.css';
import { BoardCard } from './BoardCard';

const BoardsList: React.FC = () => {
  const { data, isLoading, isError } = useGetBoardsList();
  return (
    <div className="flex flex-row  flex-wrap justify-start items-start p-5 w-full gap-4">
      {isLoading ? (
        Array(3)
          .fill(0)
          .map((_, index) => (
            <SkeletonAvatar
              key={index}
              active
              shape="square"
              size={'large'}
              className={styles.skeleton}
            />
          ))
      ) : isError ? (
        <div>Something went wrong</div>
      ) : (
        data?.map((board) => (
          <BoardCard
            key={board.id}
            description={board.description}
            name={board.name}
            boardId={board.id}
          />
        ))
      )}
    </div>
  );
};

export { BoardsList };
