import {UserVo} from './User.model';
import {OrderLineVo} from './OrderLine.model';

export class RatingVo {
    public comment: string;
    public mark: string;
    public id: string;
    public markMax: string;
    public markMin: string;
    public clientVo: UserVo = new UserVo();
    public orderLineVo: OrderLineVo = new OrderLineVo();
    public collaboratorVo: UserVo = new UserVo();


}
