import { useCallback, useEffect } from 'react';

import { useCreateBoardMutation } from 'services/api';

import { Form } from 'antd';

const useCreateBoard = ({ onSuccess }: { onSuccess?: () => void }) => {
  const [form] = Form.useForm();

  const [createBoard, { isSuccess, isLoading }] = useCreateBoardMutation();

  const handleSubmit = useCallback(
    (values: { name: string; description: string }): void => {
      createBoard({
        description: values.description,
        name: values.name,
        owner: ''
      });
    },
    [createBoard]
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
export { useCreateBoard };
