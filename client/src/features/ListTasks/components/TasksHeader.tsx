import { ClipboardDocumentCheckIcon } from '@heroicons/react/24/solid';
import { Skeleton, Typography } from 'antd';
import { useNavigate } from 'react-router-dom';
import { routes } from 'routes/index';
import { useGetBoardById } from '../hooks/useGetBoardById';
import { CreateNewTaskBtn } from 'features/CreateNewTask';

const TasksHeader = () => {
  const { data, isLoading } = useGetBoardById();

  const navigate = useNavigate();
  return isLoading ? (
    <Skeleton.Button active shape="square" className="w-96" />
  ) : (
    <div className="flex flex-row items-center justify-start w-full">
      <ClipboardDocumentCheckIcon className="h-[38px] fill-white" />
      <Typography.Title
        className="m-0 px-2 text-white cursor-pointer hover:text-[#18d0fe]"
        onClick={() => {
          navigate(routes.home.nav());
        }}
      >
        Boards
      </Typography.Title>
      <Typography.Title className="m-0 px-2 text-white">
        {'>'} {data?.name}
      </Typography.Title>

      {data?.id ? <CreateNewTaskBtn boardId={data?.id} /> : null}
    </div>
  );
};

export { TasksHeader };
