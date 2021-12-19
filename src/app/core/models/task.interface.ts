import { UserInterface } from './user.interface';
export interface TaskInterface{
    id:string | number;//TODO: '1' , 1
    title:string;
    tags:string[];
    user: UserInterface;
    status: 'in-progress' | 'completed' | 'wait';
}