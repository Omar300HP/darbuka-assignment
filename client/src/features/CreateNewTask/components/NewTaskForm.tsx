import { Button, Form, FormInstance, Grid, Input } from 'antd';
import { descriptionField, nameField } from '../fieldRules';
import styles from './NewTaskForm.module.css';
import classNames from 'classnames';

const NewTaskForm = ({
  form,
  handleSubmit,
  isLoading
}: {
  form: FormInstance;
  handleSubmit: (values: {
    boardId: string;
    description: string;
    title: string;
  }) => void;
  isLoading: boolean;
}) => {
  const { md, xl } = Grid.useBreakpoint();

  return (
    <Form
      className={classNames('w-full max-w-full xs:px-4', {
        [styles.form]: md || xl
      })}
      form={form}
      name="new-task-form"
      requiredMark={false}
      labelCol={{ span: 24 }}
      wrapperCol={{ span: 24 }}
      initialValues={{
        name: '',
        description: ''
      }}
      onFinish={handleSubmit}
      autoComplete="off"
      validateTrigger="onSubmit"
    >
      <Form.Item name="name" rules={nameField} label={'Task Name'}>
        <Input
          placeholder={'Task Name'}
          style={{ backgroundColor: '#141414' }}
        />
      </Form.Item>

      <Form.Item
        name="description"
        rules={descriptionField}
        label={'Task description'}
      >
        <Input
          placeholder={'Task description'}
          style={{ backgroundColor: '#141414' }}
        />
      </Form.Item>

      <Form.Item className="mt-11 flex w-full justify-center">
        <Button
          htmlType="submit"
          className="btn-linear-gradient h-[42px] px-11 py-3 text-sm font-bold text-base/100"
          loading={isLoading}
          data-testid="submit-btn"
        >
          Create New Task
        </Button>
      </Form.Item>
    </Form>
  );
};

export { NewTaskForm };
