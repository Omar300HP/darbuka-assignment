import { BoardCreateInput } from '../../common/models/board';
import TaskDTO from './tasks.dto';

type BoardDTO = Omit<BoardCreateInput, 'tasks'> & { tasks?: TaskDTO[] };

export default BoardDTO;
