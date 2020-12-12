import {Component, OnInit} from '@angular/core';
import {OrderLineVo} from '../../../controller/model/OrderLine.model';
import {OrderLineService} from '../../../controller/service/OrderLine.service';
import {UserVo} from '../../../controller/model/User.model';
import {CommandVo} from '../../../controller/model/Command.model';
import {ProductVo} from '../../../controller/model/Product.model';
import {OrderStatusVo} from '../../../controller/model/OrderStatus.model';

@Component({
    selector: 'app-orderLine-list',
    templateUrl: './orderLine-list.component.html',
    styleUrls: ['./orderLine-list.component.css']
})
export class OrderLinelistComponent implements OnInit {

    constructor(private _orderLineService: OrderLineService) {
    }

    get orderStatuss():Array<OrderStatusVo> {
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

    ngOnInit(): void {
        this.findAll();
        this.findAllorderStatuss();
        this.findAlldeliveryMans();
        this.findAllcollaborators();
        this.findAllcommands();
        this.findAllproducts();
    }

    get orderLineService(): OrderLineService {
        return this._orderLineService;
    }

    set orderLineService(value: OrderLineService) {
        this._orderLineService = value;
    }

    get orderLineListe(): Array<OrderLineVo> {
        return this.orderLineService.orderLineListe;
    }

    set orderLineListe(value: Array<OrderLineVo>) {
        this.orderLineService.orderLineListe = value;
    }

    get orderLineDetail(): OrderLineVo {
        return this.orderLineService.orderLineDetail;
    }

    set orderLineDetail(value: OrderLineVo) {
        this.orderLineService.orderLineDetail = value;
    }

    get orderLineSearch(): OrderLineVo {
        return this.orderLineService.orderLineSearch;
    }

    set orderLineSearch(value: OrderLineVo) {
        this.orderLineService.orderLineSearch = value;
    }


    get orderLineShowDetail(): boolean {
        return this.orderLineService.orderLineShowDetail;
    }

    set orderLineShowDetail(value: boolean) {
        this.orderLineService.orderLineShowDetail = value;
    }


    delete(pojo: OrderLineVo) {
        this.orderLineService.delete(pojo);
    }


    detailShow(pojo: OrderLineVo) {
        this.orderLineService.detailShow(pojo);

    }

    findOrderLine(pojo: OrderLineVo) {
        this.orderLineService.findOrderLine(pojo);

    }

    findAll() {
        this.orderLineService.findAll();
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
