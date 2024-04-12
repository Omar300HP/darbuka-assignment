import { useCallback, useEffect } from 'react';

import { useCreateTaskMutation } from 'services/api';

import { Form } from 'antd';

const useCreateTask = ({
  onSuccess,
  boardId
}: {
  onSuccess?: () => void;
  boardId: string;
}) => {
  const [form] = Form.useForm();

  const [createTask, { isSuccess, isLoading }] = useCreateTaskMutation();

  const handleSubmit = useCallback(
    (values: { boardId: string; description: string; title: string }): void => {
      createTask({
        boardId: boardId,
        body: {
          description: values.description,
          order: 0,
          status: 'pending',
          title: values.title,
          assigneeId: '',
          assigneeName: ''
        }
      });
    },
    [createTask, boardId]
  );

  useEffect(() => {
    if (isSuccess) {
      onSuccess?.();
    }
  }, [isSuccess, onSuccess]);

  return {
    handleSubmit,
    form,
    isSuccess,
    isLoading
  };
};
export { useCreateTask };
