import {ILesson} from "./ILesson";

export interface ILessonParams  extends ILesson{
    order: number;
    onChangeStartTime: any;
    onChangeEndTime: any;
}