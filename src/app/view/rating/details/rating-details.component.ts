import {Component, OnInit} from '@angular/core';
import {RatingVo} from '../../../controller/model/rating.model';
import {RatingService} from '../../../controller/service/Rating.service';

@Component({
    selector: 'app-rating-details',
    templateUrl: './rating-details.component.html',
    styleUrls: ['./rating-details.component.css']
})

export class RatingDetailsComponent implements OnInit {

    constructor(private _ratingService: RatingService) {
    }


    get ratingService(): RatingService {
        return this._ratingService;
    }

    set ratingService(value: RatingService) {
        this._ratingService = value;
    }

    get ratingDetail(): RatingVo {
        return this.ratingService.ratingDetail;
    }

    set ratingDetail(value: RatingVo) {
        this.ratingService.ratingDetail = value;
    }


    get ratingShowDetail(): boolean {
        return this.ratingService.ratingShowDetail;
    }

    set ratingShowDetail(value: boolean) {
        this.ratingService.ratingShowDetail = value;
    }

    ngOnInit(): void {

    }

    public detailHide() {
        this.ratingService.detailHide();
    }

}
