import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {CommentVo} from '../model/Comment.model';
import {UserVo} from '../model/User.model';
import {CommandVo} from '../model/Command.model';

@Injectable({
    providedIn: 'root'
})
export class CommentService {

    constructor(private http: HttpClient) {
    }

    private _commentDetail: CommentVo = new CommentVo();
    private _commentListe: Array<CommentVo> = new Array<CommentVo>();

    private _commentSearch: CommentVo = new CommentVo();
    private _comment: CommentVo = new CommentVo();
    private _searchedComments: Array<CommentVo> = new Array<CommentVo>();
    private _editableComments: Array<CommentVo> = new Array<CommentVo>();
    private _users: Array<UserVo> = new Array<UserVo>();
    private _commands: Array<CommandVo> = new Array<CommandVo>();

    get users(): Array<UserVo> {
        return this._users;
    }

    set users(value: Array<UserVo>) {
        this._users = value;
    }

    get commands(): Array<CommandVo> {
        return this._commands;
    }

    set commands(value: Array<CommandVo>) {
        this._commands = value;
    }

    get comment(): CommentVo {
        if (this._comment == null) {
            this._comment = new CommentVo();
        }
        return this._comment;
    }

    set comment(value: CommentVo) {
        this._comment = value;
    }

    get commentListe(): Array<CommentVo> {
        return this._commentListe;
    }

    set commentListe(value: Array<CommentVo>) {
        this._commentListe = value;
    }

    get commentDetail(): CommentVo {
        return this._commentDetail;
    }

    set commentDetail(value: CommentVo) {
        this._commentDetail = value;
    }

    get commentSearch(): CommentVo {
        return this._commentSearch;
    }

    set commentSearch(value: CommentVo) {
        this._commentSearch = value;
    }

    get commentShowDetail(): boolean {
        return this._commentShowDetail;
    }

    set commentShowDetail(value: boolean) {
        this._commentShowDetail = value;
    }

    get editableComments(): Array<CommentVo> {
        return this._editableComments;
    }

    set editableComments(value: Array<CommentVo>) {
        this._editableComments = value;
    }

    public findAll() {
        this.http.get<Array<CommentVo>>('http://localhost:8036/generated/comment/').subscribe(
            value => {
                if (value != null) {
                    this.commentListe = value;
                    this.editableComments = value;

                }
            }
        );
    }

    public saveComment() {
        this.http.post('http://localhost:8036/generated/comment/', this.comment).subscribe();
        this.findAll();
    }

    public editComment() {
        this.http.put('http://localhost:8036/generated/comment/', this.comment).subscribe();
        this.findAll();
    }

    public findComment(pojo: CommentVo) {
        this.http.post<Array<CommentVo>>('http://localhost:8036/generated/comment/search/', pojo).subscribe(
            value => {
                this.commentListe = value;
            });
    }

    public detailShow(pojo: CommentVo) {
        this.http.get<CommentVo>('http://localhost:8036/generated/comment/id/' + pojo.id).subscribe(
            value => {
                if (value != null) {
                    this.commentDetail = value;
                    this.commentShowDetail = true;
                }
            });
    }


    delete(pojo: CommentVo) {
        this.http.delete<CommentVo>('http://localhost:8036/generated/comment/id/' + pojo.id).subscribe(
            value => {
                var index = this.commentListe.indexOf(pojo);
                if (index > -1) {
                    this.commentListe.splice(index, 1);
                }
            }
        );


    }


    public findByid(identifier: string) {
        this.http.get<CommentVo>('http://localhost:8036/generated/comment/id/' + identifier).subscribe(
            value => {
                if (value != null) {
                    this.comment = value;
                }
            }
        );
    }

    public findAllusers() {
        this.http.get<Array<UserVo>>('http://localhost:8036/generated/user/').subscribe(
            value => {
                if (value != null) {
                    this.users = value;
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


    /***********************************************************************************************/
    private _commentShowDetail: boolean;

    public detailHide() {

        this.commentShowDetail = false;
        this.commentDetail = null;
    }

    private _commentShowEdit: boolean;

    private _commentShowCreate: boolean;

    get commentShowEdit(): boolean {
        return this._commentShowEdit;
    }

    set commentShowEdit(value: boolean) {
        this._commentShowEdit = value;
    }

    get commentShowCreate(): boolean {
        return this._commentShowCreate;
    }

    set commentShowCreate(value: boolean) {
        this._commentShowCreate = value;
    }

    public editShow(pojo: CommentVo) {

        this.commentShowEdit = true;
        this.comment = pojo;
    }

    public editHide() {

        this.commentShowEdit = false;
        this.comment = new CommentVo();
    }

    public createShow() {

        this.commentShowCreate = true;
        this.comment = new CommentVo();
    }

    public createHide() {

        this.commentShowCreate = false;
        this.comment = new CommentVo();
    }
}
