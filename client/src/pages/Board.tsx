import { NavbarContentTemplate } from 'components/layouts/NavbarContentTemplate';

import { TasksList, TasksHeader } from 'features/ListTasks';
import { GlobalModals } from 'providers/GlobalModals';

function Board() {
  return (
    <NavbarContentTemplate>
      <GlobalModals />
      <div className="flex flex-col justify-start items-start w-full px-4 lg:px-16">
        <TasksHeader />
        <TasksList />
      </div>
    </NavbarContentTemplate>
  );
}

export default Board;
