import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {PricingCollaboratorVo} from '../model/pricingCollaborator.model';

@Injectable({
    providedIn: 'root'
})
export class PricingCollaboratorService {

    constructor(private http: HttpClient) {
    }

    private _pricingCollaboratorDetail: PricingCollaboratorVo = new PricingCollaboratorVo();
    private _pricingCollaboratorListe: Array<PricingCollaboratorVo> = new Array<PricingCollaboratorVo>();

    private _pricingCollaboratorSearch: PricingCollaboratorVo = new PricingCollaboratorVo();
    private _pricingCollaborator: PricingCollaboratorVo = new PricingCollaboratorVo();
    private _searchedPricingCollaborators: Array<PricingCollaboratorVo> = new Array<PricingCollaboratorVo>();
    private _editablePricingCollaborators: Array<PricingCollaboratorVo> = new Array<PricingCollaboratorVo>();

    get pricingCollaborator(): PricingCollaboratorVo {
        if (this._pricingCollaborator == null) {
            this._pricingCollaborator = new PricingCollaboratorVo();
        }
        return this._pricingCollaborator;
    }

    set pricingCollaborator(value: PricingCollaboratorVo) {
        this._pricingCollaborator = value;
    }

    get pricingCollaboratorListe(): Array<PricingCollaboratorVo> {
        return this._pricingCollaboratorListe;
    }

    set pricingCollaboratorListe(value: Array<PricingCollaboratorVo>) {
        this._pricingCollaboratorListe = value;
    }

    get pricingCollaboratorDetail(): PricingCollaboratorVo {
        return this._pricingCollaboratorDetail;
    }

    set pricingCollaboratorDetail(value: PricingCollaboratorVo) {
        this._pricingCollaboratorDetail = value;
    }

    get pricingCollaboratorSearch(): PricingCollaboratorVo {
        return this._pricingCollaboratorSearch;
    }

    set pricingCollaboratorSearch(value: PricingCollaboratorVo) {
        this._pricingCollaboratorSearch = value;
    }

    get pricingCollaboratorShowDetail(): boolean {
        return this._pricingCollaboratorShowDetail;
    }

    set pricingCollaboratorShowDetail(value: boolean) {
        this._pricingCollaboratorShowDetail = value;
    }

    get editablePricingCollaborators(): Array<PricingCollaboratorVo> {
        return this._editablePricingCollaborators;
    }

    set editablePricingCollaborators(value: Array<PricingCollaboratorVo>) {
        this._editablePricingCollaborators = value;
    }

    public findAll() {
        this.http.get<Array<PricingCollaboratorVo>>('http://localhost:8036/generated/pricingCollaborator/').subscribe(
            value => {
                if (value != null) {
                    this.pricingCollaboratorListe = value;
                    this.editablePricingCollaborators = value;

                }
            }
        );
    }

    public savePricingCollaborator() {
        this.http.post('http://localhost:8036/generated/pricingCollaborator/', this.pricingCollaborator).subscribe();
        this.findAll();
    }

    public editPricingCollaborator() {
        this.http.put('http://localhost:8036/generated/pricingCollaborator/', this.pricingCollaborator).subscribe();
        this.findAll();
    }

    public findPricingCollaborator(pojo: PricingCollaboratorVo) {
        this.http.post<Array<PricingCollaboratorVo>>('http://localhost:8036/generated/pricingCollaborator/search/', pojo).subscribe(
            value => {
                this.pricingCollaboratorListe = value;
            });
    }

    public detailShow(pojo: PricingCollaboratorVo) {
        this.http.get<PricingCollaboratorVo>('http://localhost:8036/generated/pricingCollaborator/id/' + pojo.id).subscribe(
            value => {
                if (value != null) {
                    this.pricingCollaboratorDetail = value;
                    this.pricingCollaboratorShowDetail = true;
                }
            });
    }


    delete(pojo: PricingCollaboratorVo) {
        this.http.delete<PricingCollaboratorVo>('http://localhost:8036/generated/pricingCollaborator/id/' + pojo.id).subscribe(
            value => {
                var index = this.pricingCollaboratorListe.indexOf(pojo);
                if (index > -1) {
                    this.pricingCollaboratorListe.splice(index, 1);
                }
            }
        );


    }


    public findByid(identifier: string) {
        this.http.get<PricingCollaboratorVo>('http://localhost:8036/generated/pricingCollaborator/id/' + identifier).subscribe(
            value => {
                if (value != null) {
                    this.pricingCollaborator = value;
                }
            }
        );
    }


    /***********************************************************************************************/
    private _pricingCollaboratorShowDetail: boolean;

    public detailHide() {

        this.pricingCollaboratorShowDetail = false;
        this.pricingCollaboratorDetail = null;
    }

    private _pricingCollaboratorShowEdit: boolean;

    private _pricingCollaboratorShowCreate: boolean;

    get pricingCollaboratorShowEdit(): boolean {
        return this._pricingCollaboratorShowEdit;
    }

    set pricingCollaboratorShowEdit(value: boolean) {
        this._pricingCollaboratorShowEdit = value;
    }

    get pricingCollaboratorShowCreate(): boolean {
        return this._pricingCollaboratorShowCreate;
    }

    set pricingCollaboratorShowCreate(value: boolean) {
        this._pricingCollaboratorShowCreate = value;
    }

    public editShow(pojo: PricingCollaboratorVo) {

        this.pricingCollaboratorShowEdit = true;
        this.pricingCollaborator = pojo;
    }

    public editHide() {

        this.pricingCollaboratorShowEdit = false;
        this.pricingCollaborator = new PricingCollaboratorVo();
    }

    public createShow() {

        this.pricingCollaboratorShowCreate = true;
        this.pricingCollaborator = new PricingCollaboratorVo();
    }

    public createHide() {

        this.pricingCollaboratorShowCreate = false;
        this.pricingCollaborator = new PricingCollaboratorVo();
    }
}
