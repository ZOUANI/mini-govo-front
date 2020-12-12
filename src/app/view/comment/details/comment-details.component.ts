import {Component, OnInit} from '@angular/core';
import {CommentVo} from '../../../controller/model/Comment.model';
import {CommentService} from '../../../controller/service/Comment.service';

@Component({
    selector: 'app-comment-details',
    templateUrl: './comment-details.component.html',
    styleUrls: ['./comment-details.component.css']
})

export class CommentDetailsComponent implements OnInit {

    constructor(private _commentService: CommentService) {
    }


    get commentService(): CommentService {
        return this._commentService;
    }

    set commentService(value: CommentService) {
        this._commentService = value;
    }

    get commentDetail(): CommentVo {
        return this.commentService.commentDetail;
    }

    set commentDetail(value: CommentVo) {
        this.commentService.commentDetail = value;
    }


    get commentShowDetail(): boolean {
        return this.commentService.commentShowDetail;
    }

    set commentShowDetail(value: boolean) {
        this.commentService.commentShowDetail = value;
    }

    ngOnInit(): void {

    }

    public detailHide() {
        this.commentService.detailHide();
    }

}
