import { Card, Typography } from 'antd';

const BoardCard: React.FC<{
  name: string;
  description: string;
}> = ({ name, description }) => {
  return (
    <Card
      title={name}
      className="w-full lg:w-[40%] max-w-sm flex-shrink-0 hover:opacity-70 cursor-pointer"
    >
      <Typography.Paragraph>{description}</Typography.Paragraph>
    </Card>
  );
};

export { BoardCard };
