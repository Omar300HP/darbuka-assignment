import { PlusOutlined } from '@ant-design/icons';
import { Button, FloatButton, Grid } from 'antd';
import { toggleModal } from 'features/GlobalModals';
import { useAppDispatch } from 'hooks/reduxHooks';
import { GlobalModals } from 'types/enums';

const CreateNewBoardFloatingBtn: React.FC = () => {
  const dispatch = useAppDispatch();

  const handleClick = () => {
    dispatch(toggleModal(GlobalModals.NEW_BOARD));
  };

  return <FloatButton onClick={handleClick} />;
};

const CreateNewBoardBtn: React.FC = () => {
  const { lg } = Grid.useBreakpoint();
  const dispatch = useAppDispatch();

  const handleClick = () => {
    dispatch(toggleModal(GlobalModals.NEW_BOARD));
  };
  return lg ? (
    <Button
      icon={<PlusOutlined className="text-white " />}
      type="text"
      className="text-white"
      onClick={handleClick}
    >
      Create new Board
    </Button>
  ) : null;
};

export { CreateNewBoardFloatingBtn, CreateNewBoardBtn };
