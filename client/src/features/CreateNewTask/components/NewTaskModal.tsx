import {
  selectModalExtra,
  selectOpenedModal,
  toggleModal
} from 'features/GlobalModals';
import { useAppDispatch, useAppSelector } from 'hooks/reduxHooks';
import { GlobalModals } from 'types/enums';
import { CloseSquareOutlined } from '@ant-design/icons';
import { Grid, Modal, Typography } from 'antd';
import { NewTaskForm } from './NewTaskForm';
import styles from './NewTaskModal.module.css';
import { useCreateTask } from '../hooks/useCreateTask';

const NewTask = () => {
  return (
    <Typography.Title className="m-0 text-center text-[22px] leading-[21px] xl:text-[32px]">
      New Task
    </Typography.Title>
  );
};

const Title = ({ handleCancel }: { handleCancel: () => void }) => (
  <div className="relative flex h-full w-full flex-row items-center justify-center md:justify-between">
    <NewTask />

    <CloseSquareOutlined
      data-testid={'close-btn'}
      onClick={handleCancel}
      className="absolute right-[-25px] top-[-15px] mr-6 cursor-pointer text-[22px] text-prim/800 transition-colors hover:text-prim/500 md:static md:text-4xl"
    />
  </div>
);

const NewTaskModal = () => {
  const dispatch = useAppDispatch();
  const modalOpened = useAppSelector(selectOpenedModal);
  const isModalOpened = modalOpened === GlobalModals.NEW_TASK;

  const handleCloseModal = () => dispatch(toggleModal(GlobalModals.NEW_TASK));

  const { md, xl } = Grid.useBreakpoint();

  const extra = useAppSelector(selectModalExtra);

  const board =
    extra && (extra as { boardId: string }).boardId
      ? (extra as { boardId: string })
      : { boardId: '' };

  const { form, handleSubmit, isLoading } = useCreateTask({
    onSuccess: handleCloseModal,
    boardId: board.boardId || ''
  });

  return (
    <Modal
      className={styles.modal}
      title={<Title handleCancel={handleCloseModal} />}
      open={isModalOpened}
      onCancel={handleCloseModal}
      footer={null}
      width={xl ? '50vw' : md ? '90vw' : undefined}
      data-testid="new-task-modal"
    >
      <NewTaskForm
        form={form}
        handleSubmit={handleSubmit}
        isLoading={isLoading}
      />
    </Modal>
  );
};

export { NewTaskModal };
