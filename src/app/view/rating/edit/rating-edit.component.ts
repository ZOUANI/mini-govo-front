import {Component, OnInit} from '@angular/core';
import {RatingService} from '../../../controller/service/Rating.service';
import {RatingVo} from '../../../controller/model/rating.model';
import {UserVo} from '../../../controller/model/User.model';
import {OrderLineVo} from '../../../controller/model/OrderLine.model';

@Component({
    selector: 'app-rating-edit',
    templateUrl: './rating-edit.component.html',
    styleUrls: ['./rating-edit.component.css']
})
export class RatingEditComponent implements OnInit {
    constructor(private ratingService: RatingService) {
    }

    ngOnInit(): void {
        this.findAllclients();
        this.findAllorderLines();
        this.findAllcollaborators();
    }

    get rating(): RatingVo {
        return this.ratingService.rating;
    }

    get editableRatings(): Array<RatingVo> {
        return this.ratingService.editableRatings;
    }

    set editableRatings(value: Array<RatingVo>) {
        this.ratingService.editableRatings = value;
    }

    get clients(): Array<UserVo> {
        return this.ratingService.clients;
    }

    get orderLines(): Array<OrderLineVo> {
        return this.ratingService.orderLines;
    }

    get collaborators(): Array<UserVo> {
        return this.ratingService.collaborators;
    }

    editRating() {
        this.ratingService.editRating();
    }

    findAllclients() {
        this.ratingService.findAllclients();
    }

    findAllorderLines() {
        this.ratingService.findAllorderLines();
    }

    findAllcollaborators() {
        this.ratingService.findAllcollaborators();
    }

    findByid(identifier: string) {
        this.ratingService.findByid(identifier);
    }


}
