import {Component, OnInit} from '@angular/core';
import {OrderStatusService} from '../../../controller/service/OrderStatus.service';
import {OrderStatusVo} from '../../../controller/model/OrderStatus.model';
import {SuperOrderStatusVo} from '../../../controller/model/SuperOrderStatus.model';

@Component({
    selector: 'app-orderStatus-edit',
    templateUrl: './orderStatus-edit.component.html',
    styleUrls: ['./orderStatus-edit.component.css']
})
export class OrderStatusEditComponent implements OnInit {
    constructor(private orderStatusService: OrderStatusService) {
    }

    ngOnInit(): void {
        this.findAllsuperOrderStatuss();
    }

    get orderStatus(): OrderStatusVo {
        return this.orderStatusService.orderStatus;
    }

    get editableOrderStatuss(): Array<OrderStatusVo> {
        return this.orderStatusService.editableOrderStatuss;
    }

    set editableOrderStatuss(value: Array<OrderStatusVo>) {
        this.orderStatusService.editableOrderStatuss = value;
    }

    get superOrderStatuss(): Array<SuperOrderStatusVo> {
        return this.orderStatusService.superOrderStatuss;
    }

    editOrderStatus() {
        this.orderStatusService.editOrderStatus();
    }

    findAllsuperOrderStatuss() {
        this.orderStatusService.findAllsuperOrderStatuss();
    }

    findBycode(ref: string) {
        this.orderStatusService.findBycode(ref);
    }

    editHide() {
        this.orderStatusService.editHide();
    }


}
