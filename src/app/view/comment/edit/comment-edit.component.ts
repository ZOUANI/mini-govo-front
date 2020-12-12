import {Component, OnInit} from '@angular/core';
import {CommentService} from '../../../controller/service/Comment.service';
import {CommentVo} from '../../../controller/model/Comment.model';
import {UserVo} from '../../../controller/model/User.model';
import {CommandVo} from '../../../controller/model/Command.model';

@Component({
    selector: 'app-comment-edit',
    templateUrl: './comment-edit.component.html',
    styleUrls: ['./comment-edit.component.css']
})
export class CommentEditComponent implements OnInit {
    constructor(private commentService: CommentService) {
    }

    ngOnInit(): void {
        this.findAllusers();
        this.findAllcommands();
    }

    get comment(): CommentVo {
        return this.commentService.comment;
    }

    get editableComments(): Array<CommentVo> {
        return this.commentService.editableComments;
    }

    set editableComments(value: Array<CommentVo>) {
        this.commentService.editableComments = value;
    }

    get users(): Array<UserVo> {
        return this.commentService.users;
    }

    get commands(): Array<CommandVo> {
        return this.commentService.commands;
    }

    editComment() {
        this.commentService.editComment();
    }

    findAllusers() {
        this.commentService.findAllusers();
    }

    findAllcommands() {
        this.commentService.findAllcommands();
    }

    findByid(identifier: string) {
        this.commentService.findByid(identifier);
    }

    editHide() {
        this.commentService.editHide();
    }


}
