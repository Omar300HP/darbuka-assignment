import { ClipboardDocumentCheckIcon } from '@heroicons/react/24/solid';
import { Card, Typography } from 'antd';
import { NavbarContentTemplate } from 'components/layouts/NavbarContentTemplate';

function Home() {
  return (
    <NavbarContentTemplate>
      <div className="flex flex-col justify-start items-start w-full px-4 lg:px-16">
        <div className="flex flex-row items-center justify-start w-full">
          <ClipboardDocumentCheckIcon className="h-[38px] fill-white" />
          <Typography.Title className="m-0 px-2 text-white">
            Boards
          </Typography.Title>
        </div>

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
      </div>
    </NavbarContentTemplate>
  );
}

export default Home;
