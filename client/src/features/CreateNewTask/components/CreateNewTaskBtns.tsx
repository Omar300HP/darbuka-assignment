import { PlusCircleOutlined, PlusOutlined } from '@ant-design/icons';
import { Button, FloatButton, Grid } from 'antd';
import { toggleModal } from 'features/GlobalModals';
import { useAppDispatch } from 'hooks/reduxHooks';
import { GlobalModals } from 'types/enums';

const CreateNewTaskFloatingBtn: React.FC<{ boardId: string }> = ({
  boardId
}) => {
  const dispatch = useAppDispatch();

  const handleClick = () => {
    dispatch(
      toggleModal({ modalName: GlobalModals.NEW_TASK, extra: { boardId } })
    );
  };

  return <FloatButton icon={<PlusCircleOutlined />} onClick={handleClick} />;
};

const CreateNewTaskBtn: React.FC<{ boardId: string }> = ({ boardId }) => {
  const { lg } = Grid.useBreakpoint();
  const dispatch = useAppDispatch();

  const handleClick = () => {
    dispatch(
      toggleModal({ modalName: GlobalModals.NEW_TASK, extra: { boardId } })
    );
  };
  return lg ? (
    <Button
      icon={<PlusOutlined className="text-white " />}
      type="text"
      className="text-white"
      onClick={handleClick}
    >
      Create new Task
    </Button>
  ) : null;
};

export { CreateNewTaskFloatingBtn, CreateNewTaskBtn };
