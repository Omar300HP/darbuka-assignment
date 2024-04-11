import { Schema, Model, model } from 'mongoose';
import { baseTransform } from './helper';
import { Task, taskSchema } from './task';

export const boardModelName = 'Board';

export interface Board {
  id: string;
  name: string;
  description: string;
  owner: string;
  createdAt: Date;
  updatedAt: Date;
  sharedWith?: string[];
  tasks?: Task[];
}

export type BoardModelType = Model<Board>;

export const boardSchema = new Schema<Board, BoardModelType>(
  {
    name: { type: String, required: true },
    description: { type: String, required: false, default: '' },
    owner: { type: String, required: false, index: true, default: '' },
    sharedWith: { type: [String], default: [] },
    tasks: { type: [taskSchema], default: [] }
  },
  {
    collection: boardModelName,
    timestamps: true,
    toJSON: {
      transform: baseTransform
    }
  }
);

export const BoardModel = model<Board, BoardModelType>(
  boardModelName,
  boardSchema
);

export type BoardCreateInput = Omit<Board, 'id' | 'createdAt' | 'updatedAt'>;
