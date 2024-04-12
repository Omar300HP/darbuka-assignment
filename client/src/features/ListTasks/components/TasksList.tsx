import SkeletonAvatar from 'antd/es/skeleton/Avatar';
import { useGetBoardById } from '../hooks/useGetBoardById';
import styles from './TaskList.module.css';
import { TaskCard } from './TaskCard';
import { CreateNewTaskFloatingBtn } from 'features/CreateNewTask';

const TasksList: React.FC = () => {
  const { data, isLoading, isError } = useGetBoardById();

  return (
    <div className="flex flex-row  flex-wrap justify-start items-start p-5 w-full gap-4">
      {isLoading ? (
        Array(5)
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
        data?.tasks?.map((task: Task) => (
          <TaskCard
            key={task.id}
            description={task.description}
            name={task.title}
            boardId={data.id}
            taskId={task.id}
            status={task.status}
          />
        ))
      )}
      <CreateNewTaskFloatingBtn boardId={data?.id ?? ''} />
    </div>
  );
};

export { TasksList };
