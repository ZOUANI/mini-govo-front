import {Component, OnInit} from '@angular/core';
import {CommandService} from '../../../controller/service/Command.service';
import {CommandVo} from '../../../controller/model/Command.model';
import {CommentVo} from '../../../controller/model/Comment.model';
import {UserVo} from '../../../controller/model/User.model';
import {OrderLineVo} from '../../../controller/model/OrderLine.model';
import {CityVo} from '../../../controller/model/City.model';
import {OrderStatusVo} from '../../../controller/model/OrderStatus.model';

@Component({
    selector: 'app-command-create',
    templateUrl: './command-create.component.html',
    styleUrls: ['./command-create.component.css']
})
export class CommandCreateComponent implements OnInit {
    constructor(private commandService: CommandService) {
    }

    ngOnInit(): void {
        this.findAlladmins();
        this.findAlldeliveryMans();
        this.findAllclients();
        this.findAllcitys();
        this.findAllorderStatuss();
    }

    get command(): CommandVo {
        return this.commandService.command;
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

    get orderLine(): OrderLineVo {
        return this.commandService.orderLine;
    }

    addOrderLine() {
        return this.commandService.addOrderLine();
    }

    removeOrderLine(i: number) {
        this.commandService.removeOrderLine(i);
    }

    get comment(): CommentVo {
        return this.commandService.comment;
    }

    addComment() {
        return this.commandService.addComment();
    }

    removeComment(i: number) {
        this.commandService.removeComment(i);
    }

    saveCommand() {
        this.commandService.saveCommand();
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
