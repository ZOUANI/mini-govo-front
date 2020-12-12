import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {RatingVo} from '../model/rating.model';
import {UserVo} from '../model/User.model';
import {OrderLineVo} from '../model/OrderLine.model';

@Injectable({
    providedIn: 'root'
})
export class RatingService {

    constructor(private http: HttpClient) {
    }

    private _ratingDetail: RatingVo = new RatingVo();
    private _ratingListe: Array<RatingVo> = new Array<RatingVo>();

    private _ratingSearch: RatingVo = new RatingVo();
    private _rating: RatingVo = new RatingVo();
    private _searchedRatings: Array<RatingVo> = new Array<RatingVo>();
    private _editableRatings: Array<RatingVo> = new Array<RatingVo>();
    private _clients: Array<UserVo> = new Array<UserVo>();
    private _orderLines: Array<OrderLineVo> = new Array<OrderLineVo>();
    private _collaborators: Array<UserVo> = new Array<UserVo>();

    get clients(): Array<UserVo> {
        return this._clients;
    }

    set clients(value: Array<UserVo>) {
        this._clients = value;
    }

    get orderLines(): Array<OrderLineVo> {
        return this._orderLines;
    }

    set orderLines(value: Array<OrderLineVo>) {
        this._orderLines = value;
    }

    get collaborators(): Array<UserVo> {
        return this._collaborators;
    }

    set collaborators(value: Array<UserVo>) {
        this._collaborators = value;
    }

    get rating(): RatingVo {
        if (this._rating == null) {
            this._rating = new RatingVo();
        }
        return this._rating;
    }

    set rating(value: RatingVo) {
        this._rating = value;
    }

    get ratingListe(): Array<RatingVo> {
        return this._ratingListe;
    }

    set ratingListe(value: Array<RatingVo>) {
        this._ratingListe = value;
    }

    get ratingDetail(): RatingVo {
        return this._ratingDetail;
    }

    set ratingDetail(value: RatingVo) {
        this._ratingDetail = value;
    }

    get ratingSearch(): RatingVo {
        return this._ratingSearch;
    }

    set ratingSearch(value: RatingVo) {
        this._ratingSearch = value;
    }

    get ratingShowDetail(): boolean {
        return this._ratingShowDetail;
    }

    set ratingShowDetail(value: boolean) {
        this._ratingShowDetail = value;
    }

    get editableRatings(): Array<RatingVo> {
        return this._editableRatings;
    }

    set editableRatings(value: Array<RatingVo>) {
        this._editableRatings = value;
    }

    public findAll() {
        this.http.get<Array<RatingVo>>('http://localhost:8036/generated/rating/').subscribe(
            value => {
                if (value != null) {
                    this.ratingListe = value;
                    this.editableRatings = value;

                }
            }
        );
    }

    public saveRating() {
        this.http.post('http://localhost:8036/generated/rating/', this.rating).subscribe();
    }

    public editRating() {
        this.http.put('http://localhost:8036/generated/rating/', this.rating).subscribe();
    }

    public findRating(pojo: RatingVo) {
        this.http.post<Array<RatingVo>>('http://localhost:8036/generated/rating/search/', pojo).subscribe(
            value => {
                this.ratingListe = value;
            });
    }

    public detailShow(pojo: RatingVo) {
        this.http.get<RatingVo>('http://localhost:8036/generated/rating/id/' + pojo.id).subscribe(
            value => {
                if (value != null) {
                    this.ratingDetail = value;
                    this.ratingShowDetail = true;
                }
            });
    }


    delete(pojo: RatingVo) {
        this.http.delete<RatingVo>('http://localhost:8036/generated/rating/id/' + pojo.id).subscribe(
            value => {
                var index = this.ratingListe.indexOf(pojo);
                if (index > -1) {
                    this.ratingListe.splice(index, 1);
                }
            }
        );


    }


    public findByid(identifier: string) {
        this.http.get<RatingVo>('http://localhost:8036/generated/rating/id/' + identifier).subscribe(
            value => {
                if (value != null) {
                    this.rating = value;
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

    public findAllorderLines() {
        this.http.get<Array<OrderLineVo>>('http://localhost:8036/generated/orderLine/').subscribe(
            value => {
                if (value != null) {
                    this.orderLines = value;
                }
            }
        );
    }

    public findAllcollaborators() {
        this.http.get<Array<UserVo>>('http://localhost:8036/generated/user/').subscribe(
            value => {
                if (value != null) {
                    this.collaborators = value;
                }
            }
        );
    }


    /***********************************************************************************************/
    private _ratingShowDetail: boolean;

    public detailHide() {

        this.ratingShowDetail = false;
        this.ratingDetail = null;
    }
}
