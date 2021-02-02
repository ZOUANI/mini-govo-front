import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {CommandVo} from '../model/Command.model';
import {CommentVo} from '../model/Comment.model';
import {UserVo} from '../model/User.model';
import {OrderLineVo} from '../model/OrderLine.model';
import {CityVo} from '../model/City.model';
import {OrderStatusVo} from '../model/OrderStatus.model';

@Injectable({
    providedIn: 'root'
})
export class CommandService {

    constructor(private http: HttpClient) {
    }

    private _commandDetail: CommandVo = new CommandVo();
    private _commandListe: Array<CommandVo> = new Array<CommandVo>();
    private _commandSearch: CommandVo = new CommandVo();
    private _command: CommandVo = new CommandVo();
    private _searchedCommands: Array<CommandVo> = new Array<CommandVo>();
    private _editableCommands: Array<CommandVo> = new Array<CommandVo>();
    private _admins: Array<UserVo> = new Array<UserVo>();
    private _deliveryMans: Array<UserVo> = new Array<UserVo>();
    private _clients: Array<UserVo> = new Array<UserVo>();
    private _citys: Array<CityVo> = new Array<CityVo>();
    private _orderStatuss: Array<OrderStatusVo> = new Array<OrderStatusVo>();
    private _orderLine: OrderLineVo;

    get orderLine(): OrderLineVo {
        if (this._orderLine == null) {
            this._orderLine = new OrderLineVo();
        }
        return this._orderLine;
    }

    set orderLine(value: OrderLineVo) {
        this._orderLine = value;
    }

    private _comment: CommentVo;

    get comment(): CommentVo {
        if (this._comment == null) {
            this._comment = new CommentVo();
        }
        return this._comment;
    }

    set comment(value: CommentVo) {
        this._comment = value;
    }

    get admins(): Array<UserVo> {
        return this._admins;
    }

    set admins(value: Array<UserVo>) {
        this._admins = value;
    }

    get deliveryMans(): Array<UserVo> {
        return this._deliveryMans;
    }

    set deliveryMans(value: Array<UserVo>) {
        this._deliveryMans = value;
    }

    get clients(): Array<UserVo> {
        return this._clients;
    }

    set clients(value: Array<UserVo>) {
        this._clients = value;
    }

    get citys(): Array<CityVo> {
        return this._citys;
    }

    set citys(value: Array<CityVo>) {
        this._citys = value;
    }

    get orderStatuss(): Array<OrderStatusVo> {
        return this._orderStatuss;
    }

    set orderStatuss(value: Array<OrderStatusVo>) {
        this._orderStatuss = value;
    }

    get command(): CommandVo {
        if (this._command == null) {
            this._command = new CommandVo();
        }
        return this._command;
    }

    set command(value: CommandVo) {
        this._command = value;
    }

    get commandListe(): Array<CommandVo> {
        return this._commandListe;
    }

    set commandListe(value: Array<CommandVo>) {
        this._commandListe = value;
    }

    get commandDetail(): CommandVo {
        return this._commandDetail;
    }

    set commandDetail(value: CommandVo) {
        this._commandDetail = value;
    }

    get commandSearch(): CommandVo {
        return this._commandSearch;
    }

    set commandSearch(value: CommandVo) {
        this._commandSearch = value;
    }

    get commandShowDetail(): boolean {
        return this._commandShowDetail;
    }

    set commandShowDetail(value: boolean) {
        this._commandShowDetail = value;
    }

    get editableCommands(): Array<CommandVo> {
        return this._editableCommands;
    }

    set editableCommands(value: Array<CommandVo>) {
        this._editableCommands = value;
    }

    public findAll() {
        this.http.get<Array<CommandVo>>('http://localhost:8036/generated/command/').subscribe(
            value => {
                if (value != null) {
                    this.commandListe = value;
                    this.editableCommands = value;
                }
            }
        );
    }

    public saveCommand() {
        this.http.post('http://localhost:8036/generated/command/', this.command).subscribe();
        this.command.orderLinesVo.length = 0;
        this.command.commentsVo.length = 0;
    }

    public editCommand() {
        this.http.put('http://localhost:8036/generated/command/', this.command).subscribe();
        this.command.orderLinesVo.length = 0;
        this.command.commentsVo.length = 0;
    }

    public addOrderLine() {
        this.command.orderLinesVo.push(this.cloneOrderLine(this.orderLine));
    }

    public cloneOrderLine(orderLine: OrderLineVo) {
        const myOrderLineClone = new OrderLineVo();
        myOrderLineClone.dateAcceptationCollaborator = orderLine.dateAcceptationCollaborator;
        myOrderLineClone.datePreparationCollaborator = orderLine.datePreparationCollaborator;
        myOrderLineClone.dateRecuperationDelivery = orderLine.dateRecuperationDelivery;
        myOrderLineClone.rejectionReason = orderLine.rejectionReason;
        myOrderLineClone.description = orderLine.description;
        myOrderLineClone.dateSubmissionToCollaborator = orderLine.dateSubmissionToCollaborator;
        myOrderLineClone.longitudeCollaborator = orderLine.longitudeCollaborator;
        myOrderLineClone.latitudeCollaborator = orderLine.latitudeCollaborator;
        myOrderLineClone.dateRejectionCllaborator = orderLine.dateRejectionCllaborator;
        myOrderLineClone.dateRejectionDelivery = orderLine.dateRejectionDelivery;
        myOrderLineClone.dateSubmissionDelivery = orderLine.dateSubmissionDelivery;
        myOrderLineClone.dateAcceptationDelivery = orderLine.dateAcceptationDelivery;
        myOrderLineClone.dateDelivery = orderLine.dateDelivery;
        myOrderLineClone.preparedQte = orderLine.preparedQte;
        myOrderLineClone.sentQte = orderLine.sentQte;
        myOrderLineClone.price = orderLine.price;
        myOrderLineClone.id = orderLine.id;
        myOrderLineClone.orderedQte = orderLine.orderedQte;
        myOrderLineClone.orderStatusVo.code = orderLine.orderStatusVo.code;
        myOrderLineClone.deliveryManVo.id = orderLine.deliveryManVo.id;
        myOrderLineClone.collaboratorVo.id = orderLine.collaboratorVo.id;
        myOrderLineClone.commandVo.reference = orderLine.commandVo.reference;
        myOrderLineClone.productVo.reference = orderLine.productVo.reference;
        return myOrderLineClone;
    }

    public removeOrderLine(i: number) {
        this.command.orderLinesVo.splice(i, 1);
    }

    public addComment() {
        this.command.commentsVo.push(this.cloneComment(this.comment));
    }

    public cloneComment(comment: CommentVo) {
        const myCommentClone = new CommentVo();
        myCommentClone.commentDate = comment.commentDate;
        myCommentClone.message = comment.message;
        myCommentClone.id = comment.id;
        myCommentClone.userVo.id = comment.userVo.id;
        myCommentClone.commandVo.reference = comment.commandVo.reference;
        7;
        return myCommentClone;
    }

    public removeComment(i: number) {
        this.command.commentsVo.splice(i, 1);
    }

    public findCommand(pojo: CommandVo) {
        this.http.post<Array<CommandVo>>('http://localhost:8036/generated/command/search/', pojo).subscribe(
            value => {
                this.commandListe = value;
            });
    }

    public detailShow(pojo: CommandVo) {
        this.http.get<CommandVo>('http://localhost:8036/generated/command/reference/' + pojo.reference).subscribe(
            value => {
                if (value != null) {
                    this.commandDetail = value;
                    this.commandShowDetail = true;
                }
            });
    }


    delete(pojo: CommandVo) {
        this.http.delete<CommandVo>('http://localhost:8036/generated/command/id/' + pojo.id).subscribe(
            value => {
                var index = this.commandListe.indexOf(pojo);
                if (index > -1) {
                    this.commandListe.splice(index, 1);
                }
            }
        );


    }


    public findByreference(ref: string) {
        this.http.get<CommandVo>('http://localhost:8036/generated/command/reference/' + ref).subscribe(
            value => {
                if (value != null) {
                    this.command = value;
                }
            }
        );
    }

    public findAlladmins() {
        this.http.get<Array<UserVo>>('http://localhost:8036/generated/user/').subscribe(
            value => {
                if (value != null) {
                    this.admins = value;
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

    public findAllclients() {
        this.http.get<Array<UserVo>>('http://localhost:8036/generated/user/').subscribe(
            value => {
                if (value != null) {
                    this.clients = value;
                }
            }
        );
    }

    public findAllcitys() {
        this.http.get<Array<CityVo>>('http://localhost:8036/generated/city/').subscribe(
            value => {
                if (value != null) {
                    this.citys = value;
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


    /***********************************************************************************************/
    private _commandShowDetail: boolean;

    public detailHide() {
        this.commandShowDetail = false;
        this.commandDetail = null;
    }

    changeCommandStatus(reference: string, label: string) {

    }


    private _commandToAffect: CommandVo;
    get commandToAffect(): CommandVo {
        return this._commandToAffect;
    }

    set commandToAffect(value: CommandVo) {
        this._commandToAffect = value;
    }
}
