import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {SuperOrderStatusVo} from '../model/SuperOrderStatus.model';

@Injectable({
    providedIn: 'root'
})
export class SuperOrderStatusService {

    constructor(private http: HttpClient) {
    }

    private _superOrderStatusDetail: SuperOrderStatusVo = new SuperOrderStatusVo();
    private _superOrderStatusListe: Array<SuperOrderStatusVo> = new Array<SuperOrderStatusVo>();

    private _superOrderStatusSearch: SuperOrderStatusVo = new SuperOrderStatusVo();
    private _superOrderStatus: SuperOrderStatusVo = new SuperOrderStatusVo();
    private _searchedSuperOrderStatuss: Array<SuperOrderStatusVo> = new Array<SuperOrderStatusVo>();
    private _editableSuperOrderStatuss: Array<SuperOrderStatusVo> = new Array<SuperOrderStatusVo>();

    get superOrderStatus(): SuperOrderStatusVo {
        if (this._superOrderStatus == null) {
            this._superOrderStatus = new SuperOrderStatusVo();
        }
        return this._superOrderStatus;
    }

    set superOrderStatus(value: SuperOrderStatusVo) {
        this._superOrderStatus = value;
    }

    get superOrderStatusListe(): Array<SuperOrderStatusVo> {
        return this._superOrderStatusListe;
    }

    set superOrderStatusListe(value: Array<SuperOrderStatusVo>) {
        this._superOrderStatusListe = value;
    }

    get superOrderStatusDetail(): SuperOrderStatusVo {
        return this._superOrderStatusDetail;
    }

    set superOrderStatusDetail(value: SuperOrderStatusVo) {
        this._superOrderStatusDetail = value;
    }

    get superOrderStatusSearch(): SuperOrderStatusVo {
        return this._superOrderStatusSearch;
    }

    set superOrderStatusSearch(value: SuperOrderStatusVo) {
        this._superOrderStatusSearch = value;
    }

    get superOrderStatusShowDetail(): boolean {
        return this._superOrderStatusShowDetail;
    }

    set superOrderStatusShowDetail(value: boolean) {
        this._superOrderStatusShowDetail = value;
    }

    get editableSuperOrderStatuss(): Array<SuperOrderStatusVo> {
        return this._editableSuperOrderStatuss;
    }

    set editableSuperOrderStatuss(value: Array<SuperOrderStatusVo>) {
        this._editableSuperOrderStatuss = value;
    }

    public findAll() {
        this.http.get<Array<SuperOrderStatusVo>>('http://localhost:8036/generated/superOrderStatus/').subscribe(
            value => {
                if (value != null) {
                    this.superOrderStatusListe = value;
                    this.editableSuperOrderStatuss = value;

                }
            }
        );
    }

    public saveSuperOrderStatus() {
        this.http.post('http://localhost:8036/generated/superOrderStatus/', this.superOrderStatus).subscribe();
        this.findAll();
    }

    public editSuperOrderStatus() {
        this.http.put('http://localhost:8036/generated/superOrderStatus/', this.superOrderStatus).subscribe();
        this.findAll();
    }

    public findSuperOrderStatus(pojo: SuperOrderStatusVo) {
        this.http.post<Array<SuperOrderStatusVo>>('http://localhost:8036/generated/superOrderStatus/search/', pojo).subscribe(
            value => {
                this.superOrderStatusListe = value;
            });
    }

    public detailShow(pojo: SuperOrderStatusVo) {
        this.http.get<SuperOrderStatusVo>('http://localhost:8036/generated/superOrderStatus/code/' + pojo.code).subscribe(
            value => {
                if (value != null) {
                    this.superOrderStatusDetail = value;
                    this.superOrderStatusShowDetail = true;
                }
            });
    }


    delete(pojo: SuperOrderStatusVo) {
        this.http.delete<SuperOrderStatusVo>('http://localhost:8036/generated/superOrderStatus/id/' + pojo.id).subscribe(
            value => {
                var index = this.superOrderStatusListe.indexOf(pojo);
                if (index > -1) {
                    this.superOrderStatusListe.splice(index, 1);
                }
            }
        );


    }


    public findBycode(ref: string) {
        this.http.get<SuperOrderStatusVo>('http://localhost:8036/generated/superOrderStatus/code/' + ref).subscribe(
            value => {
                if (value != null) {
                    this.superOrderStatus = value;
                }
            }
        );
    }


    /***********************************************************************************************/
    private _superOrderStatusShowDetail: boolean;

    public detailHide() {

        this.superOrderStatusShowDetail = false;
        this.superOrderStatusDetail = null;
    }

    private _superOrderStatusShowEdit: boolean;

    private _superOrderStatusShowCreate: boolean;

    get superOrderStatusShowEdit(): boolean {
        return this._superOrderStatusShowEdit;
    }

    set superOrderStatusShowEdit(value: boolean) {
        this._superOrderStatusShowEdit = value;
    }

    get superOrderStatusShowCreate(): boolean {
        return this._superOrderStatusShowCreate;
    }

    set superOrderStatusShowCreate(value: boolean) {
        this._superOrderStatusShowCreate = value;
    }

    public editShow(pojo: SuperOrderStatusVo) {

        this.superOrderStatusShowEdit = true;
        this.superOrderStatus = pojo;
    }

    public editHide() {

        this.superOrderStatusShowEdit = false;
        this.superOrderStatus = new SuperOrderStatusVo();
    }

    public createShow() {

        this.superOrderStatusShowCreate = true;
        this.superOrderStatus = new SuperOrderStatusVo();
    }

    public createHide() {

        this.superOrderStatusShowCreate = false;
        this.superOrderStatus = new SuperOrderStatusVo();
    }
}
