import {Component, OnInit} from '@angular/core';
import {CommandVo} from '../../../controller/model/Command.model';
import {CommandService} from '../../../controller/service/Command.service';
import {CommentVo} from '../../../controller/model/Comment.model';
import {UserVo} from '../../../controller/model/User.model';
import {OrderLineVo} from '../../../controller/model/OrderLine.model';
import {CityVo} from '../../../controller/model/City.model';
import {OrderStatusVo} from '../../../controller/model/OrderStatus.model';

@Component({
    selector: 'app-command-list',
    templateUrl: './command-list.component.html',
    styleUrls: ['./command-list.component.css']
})
export class CommandlistComponent implements OnInit {

    constructor(private _commandService: CommandService) {
    }

    get admins(): Array<UserVo> {
        return this.commandService.admins;
    }

    get deliveryMans(): Array<UserVo> {
        return this.commandService.deliveryMans;
    }

    get clients(): Array<UserVo> {
        return this.commandService.clients;
    }

    get citys(): Array<CityVo> {
        return this.commandService.citys;
    }

    get orderStatuss(): Array<OrderStatusVo> {
        return this.commandService.orderStatuss;
    }

    ngOnInit(): void {
        this.findAll();
        this.findAlladmins();
        this.findAlldeliveryMans();
        this.findAllclients();
        this.findAllcitys();
        this.findAllorderStatuss();
    }

    get commandService(): CommandService {
        return this._commandService;
    }

    set commandService(value: CommandService) {
        this._commandService = value;
    }

    get commandListe(): Array<CommandVo> {
        return this.commandService.commandListe;
    }

    set commandListe(value: Array<CommandVo>) {
        this.commandService.commandListe = value;
    }

    get commandDetail(): CommandVo {
        return this.commandService.commandDetail;
    }

    set commandDetail(value: CommandVo) {
        this.commandService.commandDetail = value;
    }

    get commandSearch(): CommandVo {
        return this.commandService.commandSearch;
    }

    set commandSearch(value: CommandVo) {
        this.commandService.commandSearch = value;
    }


    get commandShowDetail(): boolean {
        return this.commandService.commandShowDetail;
    }

    set commandShowDetail(value: boolean) {
        this.commandService.commandShowDetail = value;
    }


    delete(pojo: CommandVo) {
        this.commandService.delete(pojo);
    }


    detailShow(pojo: CommandVo) {
        this.commandService.detailShow(pojo);

    }

    findCommand(pojo: CommandVo) {
        this.commandService.findCommand(pojo);

    }

    findAll() {
        this.commandService.findAll();
    }

    findAlladmins() {
        this.commandService.findAlladmins();
    }

    findAlldeliveryMans() {
        this.commandService.findAlldeliveryMans();
    }

    findAllclients() {
        this.commandService.findAllclients();
    }

    findAllcitys() {
        this.commandService.findAllcitys();
    }

    findAllorderStatuss() {
        this.commandService.findAllorderStatuss();
    }

}
