import { ClipboardDocumentCheckIcon } from '@heroicons/react/24/solid';
import { Typography } from 'antd';
import { NavbarContentTemplate } from 'components/layouts/NavbarContentTemplate';
import {
  CreateNewBoardBtn,
  CreateNewBoardFloatingBtn
} from 'features/CreateNewBoard';
import { BoardsList } from 'features/ListBoards';
import { GlobalModals } from 'providers/GlobalModals';

function Home() {
  return (
    <NavbarContentTemplate>
      <GlobalModals />
      <div className="flex flex-col justify-start items-start w-full px-4 lg:px-16">
        <div className="flex flex-row items-center justify-start w-full">
          <ClipboardDocumentCheckIcon className="h-[38px] fill-white" />
          <Typography.Title className="m-0 px-2 text-white">
            Boards
          </Typography.Title>

          <CreateNewBoardBtn />
        </div>

        <BoardsList />
        <CreateNewBoardFloatingBtn />
      </div>
    </NavbarContentTemplate>
  );
}

export default Home;
