import {Component, OnInit} from '@angular/core';
import {CommentService} from '../../../controller/service/Comment.service';
import {CommentVo} from '../../../controller/model/Comment.model';
import {UserVo} from '../../../controller/model/User.model';
import {CommandVo} from '../../../controller/model/Command.model';

@Component({
    selector: 'app-comment-create',
    templateUrl: './comment-create.component.html',
    styleUrls: ['./comment-create.component.css']
})
export class CommentCreateComponent implements OnInit {
    constructor(private commentService: CommentService) {
    }

    ngOnInit(): void {
        this.findAllusers();
        this.findAllcommands();
    }

    get comment(): CommentVo {
        return this.commentService.comment;
    }

    get users(): Array<UserVo> {
        return this.commentService.users;
    }

    get commands(): Array<CommandVo> {
        return this.commentService.commands;
    }

    saveComment() {
        this.commentService.saveComment();
    }

    findAllusers() {
        this.commentService.findAllusers();
    }

    findAllcommands() {
        this.commentService.findAllcommands();
    }

    get commentShowCreate(): boolean {
        return this.commentService.commentShowCreate;
    }

    set commentShowCreate(value: boolean) {
        this.commentService.commentShowCreate = value;
    }

    public createHide() {
        this.commentService.createHide();
    }
}
