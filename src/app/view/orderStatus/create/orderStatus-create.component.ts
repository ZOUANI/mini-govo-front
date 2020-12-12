import {Component, OnInit} from '@angular/core';
import {OrderStatusService} from '../../../controller/service/OrderStatus.service';
import {OrderStatusVo} from '../../../controller/model/OrderStatus.model';
import {SuperOrderStatusVo} from '../../../controller/model/SuperOrderStatus.model';

@Component({
    selector: 'app-orderStatus-create',
    templateUrl: './orderStatus-create.component.html',
    styleUrls: ['./orderStatus-create.component.css']
})
export class OrderStatusCreateComponent implements OnInit {
    constructor(private orderStatusService: OrderStatusService) {
    }

    ngOnInit(): void {
        this.findAllsuperOrderStatuss();
    }

    get orderStatus(): OrderStatusVo {
        return this.orderStatusService.orderStatus;
    }

    get superOrderStatuss(): Array<SuperOrderStatusVo> {
        return this.orderStatusService.superOrderStatuss;
    }

    saveOrderStatus() {
        this.orderStatusService.saveOrderStatus();
    }

    findAllsuperOrderStatuss() {
        this.orderStatusService.findAllsuperOrderStatuss();
    }

    get orderStatusShowCreate(): boolean {
        return this.orderStatusService.orderStatusShowCreate;
    }

    set orderStatusShowCreate(value: boolean) {
        this.orderStatusService.orderStatusShowCreate = value;
    }

    public createHide() {
        this.orderStatusService.createHide();
    }
}
