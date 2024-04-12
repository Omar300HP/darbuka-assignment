import { selectOpenedModal, toggleModal } from 'features/GlobalModals';
import { useAppDispatch, useAppSelector } from 'hooks/reduxHooks';
import { GlobalModals } from 'types/enums';
import { CloseSquareOutlined } from '@ant-design/icons';
import { Grid, Modal, Typography } from 'antd';
import { NewBoardForm } from './NewBoardForm';
import styles from './NewBoardModal.module.css';
import { useCreateBoard } from '../hooks/useCreateBoard';

const NewBoard = () => {
  return (
    <Typography.Title className="m-0 text-center text-[22px] leading-[21px] xl:text-[32px]">
      New Board
    </Typography.Title>
  );
};

const Title = ({ handleCancel }: { handleCancel: () => void }) => (
  <div className="relative flex h-full w-full flex-row items-center justify-center md:justify-between">
    <NewBoard />

    <CloseSquareOutlined
      data-testid={'close-btn'}
      onClick={handleCancel}
      className="absolute right-[-25px] top-[-15px] mr-6 cursor-pointer text-[22px] text-prim/800 transition-colors hover:text-prim/500 md:static md:text-4xl"
    />
  </div>
);

const NewBoardModal = () => {
  const dispatch = useAppDispatch();
  const modalOpened = useAppSelector(selectOpenedModal);
  const isModalOpened = modalOpened === GlobalModals.NEW_BOARD;

  const handleCloseModal = () => dispatch(toggleModal(GlobalModals.NEW_BOARD));

  const { md, xl } = Grid.useBreakpoint();

  const { form, handleSubmit, isLoading } = useCreateBoard({
    onSuccess: handleCloseModal
  });

  return (
    <Modal
      className={styles.modal}
      title={<Title handleCancel={handleCloseModal} />}
      open={isModalOpened}
      onCancel={handleCloseModal}
      footer={null}
      width={xl ? '50vw' : md ? '90vw' : undefined}
      data-testid="new-board-modal"
    >
      <NewBoardForm
        form={form}
        handleSubmit={handleSubmit}
        isLoading={isLoading}
      />
    </Modal>
  );
};

export { NewBoardModal };
