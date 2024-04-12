import { Button, Card, Typography } from 'antd';
import { useDeleteTaskMutation, useUpdateTaskMutation } from 'services/api';

const TaskCard: React.FC<{
  name: string;
  description: string;
  boardId: string;
  taskId: string;
  status: string;
}> = ({ name, description, boardId, taskId, status }) => {
  const [mutateTask] = useUpdateTaskMutation();
  const [deleteTask] = useDeleteTaskMutation();
  return (
    <Card
      title={
        <div className="flex flex-row justify-between items-center">
          <Typography.Text>{name}</Typography.Text>
          <Typography.Text
            className="p-1 rounded-md"
            style={{
              backgroundColor:
                status === 'completed'
                  ? '#10B981'
                  : status === 'pending'
                  ? '#F59E0B'
                  : '#EF4444'
            }}
          >
            {status}
          </Typography.Text>
        </div>
      }
      className="w-full lg:w-[40%] max-w-[400px] flex-shrink-0"
    >
      <Typography.Paragraph>{description}</Typography.Paragraph>
      <Button
        type="primary"
        onClick={(e) => {
          e.stopPropagation();
          deleteTask({ taskId, boardId });
        }}
      >
        delete Task
      </Button>
      <Button
        type="primary"
        onClick={(e) => {
          e.stopPropagation();
          mutateTask({
            boardId,
            taskId,
            body: {
              status: status === 'completed' ? 'pending' : 'completed'
            }
          });
        }}
      >
        mark as {status === 'completed' ? 'pending' : 'completed'}
      </Button>
    </Card>
  );
};

export { TaskCard };
