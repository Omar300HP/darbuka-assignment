import { Card } from 'antd';

const BoardsList: React.FC = () => {
  return (
    <div className="flex flex-row flex-wrap justify-start items-start">
      <Card
        className="m-2 w-[calc(50%-16px)]"
        title="Card title"
        extra={<a href="#">More</a>}
        style={{ width: 300 }}
      >
        <p>Card content</p>
        <p>Card content</p>
        <p>Card content</p>
      </Card>

      <Card
        className="m-2 w-[calc(50%-16px)]"
        title="Card title"
        extra={<a href="#">More</a>}
        style={{ width: 300 }}
      >
        <p>Card content</p>
        <p>Card content</p>
        <p>Card content</p>
      </Card>
    </div>
  );
};

export { BoardsList };
