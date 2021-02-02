import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {OrderLineVo} from '../model/OrderLine.model';
import {UserVo} from '../model/User.model';
import {CommandVo} from '../model/Command.model';
import {ProductVo} from '../model/Product.model';
import {OrderStatusVo} from '../model/OrderStatus.model';

@Injectable({
    providedIn: 'root'
})
export class OrderLineService {

    constructor(private http: HttpClient) {
    }

    private _orderLineDetail: OrderLineVo = new OrderLineVo();
    private _orderLineListe: Array<OrderLineVo> = new Array<OrderLineVo>();

    private _orderLineSearch: OrderLineVo = new OrderLineVo();
    private _orderLine: OrderLineVo = new OrderLineVo();
    private _searchedOrderLines: Array<OrderLineVo> = new Array<OrderLineVo>();
    private _editableOrderLines: Array<OrderLineVo> = new Array<OrderLineVo>();
    private _orderStatuss: Array<OrderStatusVo> = new Array<OrderStatusVo>();
    private _deliveryMans: Array<UserVo> = new Array<UserVo>();
    private _collaborators: Array<UserVo> = new Array<UserVo>();
    private _commands: Array<CommandVo> = new Array<CommandVo>();
    private _products: Array<ProductVo> = new Array<ProductVo>();


    get orderStatuss(): Array<OrderStatusVo> {
        return this._orderStatuss;
    }

    set orderStatuss(value: Array<OrderStatusVo>) {
        this._orderStatuss = value;
    }

    get deliveryMans(): Array<UserVo> {
        return this._deliveryMans;
    }

    set deliveryMans(value: Array<UserVo>) {
        this._deliveryMans = value;
    }

    get collaborators(): Array<UserVo> {
        return this._collaborators;
    }

    set collaborators(value: Array<UserVo>) {
        this._collaborators = value;
    }

    get commands(): Array<CommandVo> {
        return this._commands;
    }

    set commands(value: Array<CommandVo>) {
        this._commands = value;
    }

    get products(): Array<ProductVo> {
        return this._products;
    }

    set products(value: Array<ProductVo>) {
        this._products = value;
    }

    get orderLine(): OrderLineVo {
        if (this._orderLine == null) {
            this._orderLine = new OrderLineVo();
        }
        return this._orderLine;
    }

    set orderLine(value: OrderLineVo) {
        this._orderLine = value;
    }

    get orderLineListe(): Array<OrderLineVo> {
        return this._orderLineListe;
    }

    set orderLineListe(value: Array<OrderLineVo>) {
        this._orderLineListe = value;
    }

    get orderLineDetail(): OrderLineVo {
        return this._orderLineDetail;
    }

    set orderLineDetail(value: OrderLineVo) {
        this._orderLineDetail = value;
    }

    get orderLineSearch(): OrderLineVo {
        return this._orderLineSearch;
    }

    set orderLineSearch(value: OrderLineVo) {
        this._orderLineSearch = value;
    }

    get orderLineShowDetail(): boolean {
        return this._orderLineShowDetail;
    }

    set orderLineShowDetail(value: boolean) {
        this._orderLineShowDetail = value;
    }

    get editableOrderLines(): Array<OrderLineVo> {
        return this._editableOrderLines;
    }

    set editableOrderLines(value: Array<OrderLineVo>) {
        this._editableOrderLines = value;
    }

    public findAll() {
        this.http.get<Array<OrderLineVo>>('http://localhost:8036/generated/orderLine/').subscribe(
            value => {
                if (value != null) {
                    this.orderLineListe = value;
                    this.editableOrderLines = value;

                }
            }
        );
    }

    public saveOrderLine() {
        this.http.post('http://localhost:8036/generated/orderLine/', this.orderLine).subscribe();
    }

    public editOrderLine() {
        this.http.put('http://localhost:8036/generated/orderLine/', this.orderLine).subscribe();
    }

    public findOrderLine(pojo: OrderLineVo) {
        this.http.post<Array<OrderLineVo>>('http://localhost:8036/generated/orderLine/search/', pojo).subscribe(
            value => {
                this.orderLineListe = value;
            });
    }

    public detailShow(pojo: OrderLineVo) {
        this.http.get<OrderLineVo>('http://localhost:8036/generated/orderLine/id/' + pojo.id).subscribe(
            value => {
                if (value != null) {
                    this.orderLineDetail = value;
                    this.orderLineShowDetail = true;
                }
            });
    }


    delete(pojo: OrderLineVo) {
        this.http.delete<OrderLineVo>('http://localhost:8036/generated/orderLine/id/' + pojo.id).subscribe(
            value => {
                var index = this.orderLineListe.indexOf(pojo);
                if (index > -1) {
                    this.orderLineListe.splice(index, 1);
                }
            }
        );


    }


    public findByid(identifier: string) {
        this.http.get<OrderLineVo>('http://localhost:8036/generated/orderLine/id/' + identifier).subscribe(
            value => {
                if (value != null) {
                    this.orderLine = value;
                }
            }
        );
    }

    public findAllorderStatuss() {
        this.http.get<Array<OrderStatusVo>>('http://localhost:8036/generated/orderStatus/').subscribe(
            value => {
                if (value != null) {
                    this.orderStatuss = value;
                }
            }
        );
    }

    public findAlldeliveryMans() {
        this.http.get<Array<UserVo>>('http://localhost:8036/generated/user/').subscribe(
            value => {
                if (value != null) {
                    this.deliveryMans = value;
                }
            }
        );
    }

    public findAllcollaborators() {
        this.http.get<Array<UserVo>>('http://localhost:8036/generated/user/').subscribe(
            value => {
                if (value != null) {
                    this.collaborators = value;
                }
            }
        );
    }

    public findAllcommands() {
        this.http.get<Array<CommandVo>>('http://localhost:8036/generated/command/').subscribe(
            value => {
                if (value != null) {
                    this.commands = value;
                }
            }
        );
    }

    public findAllproducts() {
        this.http.get<Array<ProductVo>>('http://localhost:8036/generated/product/').subscribe(
            value => {
                if (value != null) {
                    this.products = value;
                }
            }
        );
    }


    /***********************************************************************************************/
    private _orderLineShowDetail: boolean;

    public detailHide() {

        this.orderLineShowDetail = false;
        this.orderLineDetail = null;
    }


    private _orderLineShowAffect: boolean;
    private _orderLineToAffect: OrderLineVo;

    affectShow(orderLineVo: OrderLineVo) {
        this._orderLineShowAffect = true;
        let c = new UserVo();
        c.id = '3';
        c.firstName = 'prenomCol';
        c.lastName = 'nomCol';
        let c1 = new UserVo();
        c1.id = '3';
        c1.firstName = 'prenomCol1';
        c1.lastName = 'nomCol1';
        this._collaborators = [c, c1];
        this.orderLineToAffect = orderLineVo;
    }

    public findCollaboratorsByProductCategoryId(productCategoryId: number) {
        this.http.get<Array<UserVo>>('http://localhost:8090/collaborator/speciality/' + productCategoryId).subscribe(
            value => {
                if (value != null) {
                    this._collaborators = value;
                }
            }
        );
    }


    get orderLineShowAffect(): boolean {
        return this._orderLineShowAffect;
    }

    set orderLineShowAffect(value: boolean) {
        this._orderLineShowAffect = value;
    }



    get orderLineToAffect(): OrderLineVo {
        return this._orderLineToAffect;
    }

    set orderLineToAffect(value: OrderLineVo) {
        this._orderLineToAffect = value;
    }
}
