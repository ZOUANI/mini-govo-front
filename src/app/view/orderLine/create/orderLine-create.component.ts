import {Component, OnInit} from '@angular/core';
import {OrderLineService} from '../../../controller/service/OrderLine.service';
import {OrderLineVo} from '../../../controller/model/OrderLine.model';
import {UserVo} from '../../../controller/model/User.model';
import {CommandVo} from '../../../controller/model/Command.model';
import {ProductVo} from '../../../controller/model/Product.model';
import {OrderStatusVo} from '../../../controller/model/OrderStatus.model';

@Component({
    selector: 'app-orderLine-create',
    templateUrl: './orderLine-create.component.html',
    styleUrls: ['./orderLine-create.component.css']
})
export class OrderLineCreateComponent implements OnInit {
    constructor(private orderLineService: OrderLineService) {
    }

    ngOnInit(): void {
        this.findAllorderStatuss();
        this.findAlldeliveryMans();
        this.findAllcollaborators();
        this.findAllcommands();
        this.findAllproducts();
    }

    get orderLine(): OrderLineVo {
        return this.orderLineService.orderLine;
    }

    get orderStatuss(): Array<OrderStatusVo> {
        return this.orderLineService.orderStatuss;
    }

    get deliveryMans(): Array<UserVo> {
        return this.orderLineService.deliveryMans;
    }

    get collaborators(): Array<UserVo> {
        return this.orderLineService.collaborators;
    }

    get commands(): Array<CommandVo> {
        return this.orderLineService.commands;
    }

    get products(): Array<ProductVo> {
        return this.orderLineService.products;
    }

    saveOrderLine() {
        this.orderLineService.saveOrderLine();
    }

    findAllorderStatuss() {
        this.orderLineService.findAllorderStatuss();
    }

    findAlldeliveryMans() {
        this.orderLineService.findAlldeliveryMans();
    }

    findAllcollaborators() {
        this.orderLineService.findAllcollaborators();
    }

    findAllcommands() {
        this.orderLineService.findAllcommands();
    }

    findAllproducts() {
        this.orderLineService.findAllproducts();
    }

}
