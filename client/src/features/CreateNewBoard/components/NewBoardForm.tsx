import { Button, Form, FormInstance, Grid, Input } from 'antd';
import { descriptionField, nameField } from '../fieldRules';
import styles from './NewBoardForm.module.css';
import classNames from 'classnames';

const NewBoardForm = ({
  form,
  handleSubmit,
  isLoading
}: {
  form: FormInstance;
  handleSubmit: (values: { name: string; description: string }) => void;
  isLoading: boolean;
}) => {
  const { md, xl } = Grid.useBreakpoint();

  return (
    <Form
      className={classNames('w-full max-w-full xs:px-4', {
        [styles.form]: md || xl
      })}
      form={form}
      name="new-board-form"
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
      <Form.Item name="name" rules={nameField} label={'Board Name'}>
        <Input
          placeholder={'Board Name'}
          style={{ backgroundColor: '#141414' }}
        />
      </Form.Item>

      <Form.Item
        name="description"
        rules={descriptionField}
        label={'Board description'}
      >
        <Input
          placeholder={'Board description'}
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
          Create New Board
        </Button>
      </Form.Item>
    </Form>
  );
};

export { NewBoardForm };
