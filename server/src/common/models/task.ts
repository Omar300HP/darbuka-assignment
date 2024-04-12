import { Schema, Model, model } from 'mongoose';
import { baseTransform } from './helper';

export const taskModelName = 'Task';

enum Status {
  pending = 'pending',
  completed = 'completed'
}

export interface Task {
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

export type TaskModelType = Model<Task>;

export const taskSchema = new Schema<Task, TaskModelType>(
  {
    title: { type: String, required: true },
    description: { type: String, required: false, default: '' },
    status: { type: String, required: true },
    order: { type: Number, required: true },
    assigneeId: { type: String, required: false, default: '' },
    assigneeName: { type: String, required: false, default: '' }
  },
  {
    collection: taskModelName,
    timestamps: true,
    toJSON: {
      transform: baseTransform
    }
  }
);

export const TaskModel = model<Task, TaskModelType>(taskModelName, taskSchema);

export type TaskCreateInput = Omit<Task, 'id' | 'createdAt' | 'updatedAt'>;
