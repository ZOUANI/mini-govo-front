import {Component, OnInit} from '@angular/core';
import {CommentVo} from '../../../controller/model/Comment.model';
import {CommentService} from '../../../controller/service/Comment.service';
import {UserVo} from '../../../controller/model/User.model';
import {CommandVo} from '../../../controller/model/Command.model';

@Component({
    selector: 'app-comment-list',
    templateUrl: './comment-list.component.html',
    styleUrls: ['./comment-list.component.css']
})
export class CommentlistComponent implements OnInit {

    constructor(private _commentService: CommentService) {
    }

    get users(): Array<UserVo> {
        return this.commentService.users;
    }

    get commands(): Array<CommandVo> {
        return this.commentService.commands;
    }

    ngOnInit(): void {
        this.findAll();
        this.findAllusers();
        this.findAllcommands();
    }

    get commentService(): CommentService {
        return this._commentService;
    }

    set commentService(value: CommentService) {
        this._commentService = value;
    }

    get commentListe(): Array<CommentVo> {
        return this.commentService.commentListe;
    }

    set commentListe(value: Array<CommentVo>) {
        this.commentService.commentListe = value;
    }

    get commentDetail(): CommentVo {
        return this.commentService.commentDetail;
    }

    set commentDetail(value: CommentVo) {
        this.commentService.commentDetail = value;
    }

    get commentSearch(): CommentVo {
        return this.commentService.commentSearch;
    }

    set commentSearch(value: CommentVo) {
        this.commentService.commentSearch = value;
    }


    get commentShowDetail(): boolean {
        return this.commentService.commentShowDetail;
    }

    set commentShowDetail(value: boolean) {
        this.commentService.commentShowDetail = value;
    }

    get commentShowCreate(): boolean {
        return this.commentService.commentShowCreate;
    }

    set commentShowCreate(value: boolean) {
        this.commentService.commentShowCreate = value;
    }

    get commentShowEdit(): boolean {
        return this.commentService.commentShowEdit;
    }

    set commentShowEdit(value: boolean) {
        this.commentService.commentShowEdit = value;
    }

    editShow(pojo: CommentVo) {
        this.commentService.editShow(pojo);

    }

    createShow() {
        this.commentService.createShow();

    }

    delete(pojo: CommentVo) {
        this.commentService.delete(pojo);
    }


    detailShow(pojo: CommentVo) {
        this.commentService.detailShow(pojo);

    }

    findComment(pojo: CommentVo) {
        this.commentService.findComment(pojo);

    }

    findAll() {
        this.commentService.findAll();
    }

    findAllusers() {
        this.commentService.findAllusers();
    }

    findAllcommands() {
        this.commentService.findAllcommands();
    }

}
