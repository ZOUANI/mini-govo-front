import {Component, OnInit} from '@angular/core';
import {RatingVo} from '../../../controller/model/rating.model';
import {RatingService} from '../../../controller/service/Rating.service';
import {UserVo} from '../../../controller/model/User.model';
import {OrderLineVo} from '../../../controller/model/OrderLine.model';

@Component({
    selector: 'app-rating-list',
    templateUrl: './rating-list.component.html',
    styleUrls: ['./rating-list.component.css']
})
export class RatinglistComponent implements OnInit {

    constructor(private _ratingService: RatingService) {
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

    ngOnInit(): void {
        this.findAll();
        this.findAllclients();
        this.findAllorderLines();
        this.findAllcollaborators();
    }

    get ratingService(): RatingService {
        return this._ratingService;
    }

    set ratingService(value: RatingService) {
        this._ratingService = value;
    }

    get ratingListe(): Array<RatingVo> {
        return this.ratingService.ratingListe;
    }

    set ratingListe(value: Array<RatingVo>) {
        this.ratingService.ratingListe = value;
    }

    get ratingDetail(): RatingVo {
        return this.ratingService.ratingDetail;
    }

    set ratingDetail(value: RatingVo) {
        this.ratingService.ratingDetail = value;
    }

    get ratingSearch(): RatingVo {
        return this.ratingService.ratingSearch;
    }

    set ratingSearch(value: RatingVo) {
        this.ratingService.ratingSearch = value;
    }


    get ratingShowDetail(): boolean {
        return this.ratingService.ratingShowDetail;
    }

    set ratingShowDetail(value: boolean) {
        this.ratingService.ratingShowDetail = value;
    }


    delete(pojo: RatingVo) {
        this.ratingService.delete(pojo);
    }


    detailShow(pojo: RatingVo) {
        this.ratingService.detailShow(pojo);

    }

    findRating(pojo: RatingVo) {
        this.ratingService.findRating(pojo);

    }

    findAll() {
        this.ratingService.findAll();
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
