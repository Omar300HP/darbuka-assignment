interface Task {
  id: string;
  title: string;
  description: string;
  status: string;
  createdAt: Date;
  updatedAt: Date;
  assigneeId?: string;
  assigneeName?: string;
  order: number;
}

interface Board {
  id: string;
  name: string;
  description: string;
  owner: string;
  createdAt: string;
  updatedAt: string;
  sharedWith?: string[];
  tasks?: Task[];
}

type BoardCreateInput = Omit<Board, 'id' | 'createdAt' | 'updatedAt'>;

type TaskCreateInput = Omit<Task, 'id' | 'createdAt' | 'updatedAt'>;
