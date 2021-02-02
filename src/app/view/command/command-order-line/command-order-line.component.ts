import {Component, OnInit} from '@angular/core';
import {CommandVo} from '../../../controller/model/Command.model';
import {OrderLineVo} from '../../../controller/model/OrderLine.model';
import {CommandService} from '../../../controller/service/Command.service';
import {OrderLineService} from '../../../controller/service/OrderLine.service';
import {OrderStatusVo} from '../../../controller/model/OrderStatus.model';

@Component({
    selector: 'app-command-order-line',
    templateUrl: './command-order-line.component.html',
    styleUrls: ['./command-order-line.component.css']
})
export class CommandOrderLineComponent implements OnInit {

    constructor(private _commandService: CommandService, private _orderLineService: OrderLineService) {
    }

    ngOnInit(): void {
    }

    get commandToAffect(): CommandVo {
        return this.commandService.commandToAffect;
    }

    affectShow(orderLineVo: OrderLineVo) {
        this.orderLineService.affectShow(orderLineVo);
    }

    get orderLineShowAffect(): boolean {
        return this.orderLineService.orderLineShowAffect;
    }

    get commandService(): CommandService {
        return this._commandService;
    }

    set commandService(value: CommandService) {
        this._commandService = value;
    }


    get orderLineService(): OrderLineService {
        return this._orderLineService;
    }

    set orderLineService(value: OrderLineService) {
        this._orderLineService = value;
    }

    orderLineToChangeStatus = new OrderLineVo();

    setOrderLineToChangeStatus(c: OrderLineVo) {
        console.log(c);
        this.orderLineToChangeStatus = c;
    }

    newStatus = new OrderStatusVo();

    changeOrderStatus(orderLine: OrderLineVo) {
        orderLine.orderStatusVo = this.newStatus;
        this.orderLineToChangeStatus = new OrderLineVo();
        //this.commandService.changeCommandStatus(command.reference , this.newStatus.label);
    }

    get orderStatusList(): Array<OrderStatusVo> {
        return this.orderLineService.orderStatuss;
    }

}
