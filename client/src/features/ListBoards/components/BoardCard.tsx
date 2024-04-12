import { Card, Typography } from 'antd';
import { useNavigate } from 'react-router-dom';
import { routes } from 'routes/index';

const BoardCard: React.FC<{
  name: string;
  description: string;
  boardId: string;
}> = ({ name, description, boardId }) => {
  const navigate = useNavigate();
  return (
    <Card
      onClick={() => {
        navigate(routes.board.nav(boardId));
      }}
      title={name}
      className="w-full lg:w-[40%] max-w-sm flex-shrink-0 hover:opacity-70 cursor-pointer"
    >
      <Typography.Paragraph>{description}</Typography.Paragraph>
    </Card>
  );
};

export { BoardCard };
