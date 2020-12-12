import {SuperOrderStatusVo} from './SuperOrderStatus.model';

export class OrderStatusVo {
    public label: string;
    public color: string;
    public id: string;
    public code: string;
    public superOrderStatusVo: SuperOrderStatusVo = new SuperOrderStatusVo();


}
