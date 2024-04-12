import { BoardCreateInput } from '../../common/models/board';
import TaskDTO from './tasks.dto';

type BoardDTO = Omit<BoardCreateInput, 'tasks' | 'owner'> & {
  owner?: string;
  tasks?: TaskDTO[];
};

export default BoardDTO;
