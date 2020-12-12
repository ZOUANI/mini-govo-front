import {Component, OnInit} from '@angular/core';
import {RatingService} from '../../../controller/service/Rating.service';
import {RatingVo} from '../../../controller/model/rating.model';
import {UserVo} from '../../../controller/model/User.model';
import {OrderLineVo} from '../../../controller/model/OrderLine.model';

@Component({
    selector: 'app-rating-create',
    templateUrl: './rating-create.component.html',
    styleUrls: ['./rating-create.component.css']
})
export class RatingCreateComponent implements OnInit {
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

    get clients(): Array<UserVo> {
        return this.ratingService.clients;
    }

    get orderLines(): Array<OrderLineVo> {
        return this.ratingService.orderLines;
    }

    get collaborators(): Array<UserVo> {
        return this.ratingService.collaborators;
    }

    saveRating() {
        this.ratingService.saveRating();
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

}
