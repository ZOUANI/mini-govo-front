import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {MesureUnitVo} from '../model/MesureUnit.model';

@Injectable({
    providedIn: 'root'
})
export class MesureUnitService {

    constructor(private http: HttpClient) {
    }

    private _mesureUnitDetail: MesureUnitVo = new MesureUnitVo();
    private _mesureUnitListe: Array<MesureUnitVo> = new Array<MesureUnitVo>();

    private _mesureUnitSearch: MesureUnitVo = new MesureUnitVo();
    private _mesureUnit: MesureUnitVo = new MesureUnitVo();
    private _searchedMesureUnits: Array<MesureUnitVo> = new Array<MesureUnitVo>();
    private _editableMesureUnits: Array<MesureUnitVo> = new Array<MesureUnitVo>();

    get mesureUnit(): MesureUnitVo {
        if (this._mesureUnit == null) {
            this._mesureUnit = new MesureUnitVo();
        }
        return this._mesureUnit;
    }

    set mesureUnit(value: MesureUnitVo) {
        this._mesureUnit = value;
    }

    get mesureUnitListe(): Array<MesureUnitVo> {
        return this._mesureUnitListe;
    }

    set mesureUnitListe(value: Array<MesureUnitVo>) {
        this._mesureUnitListe = value;
    }

    get mesureUnitDetail(): MesureUnitVo {
        return this._mesureUnitDetail;
    }

    set mesureUnitDetail(value: MesureUnitVo) {
        this._mesureUnitDetail = value;
    }

    get mesureUnitSearch(): MesureUnitVo {
        return this._mesureUnitSearch;
    }

    set mesureUnitSearch(value: MesureUnitVo) {
        this._mesureUnitSearch = value;
    }

    get mesureUnitShowDetail(): boolean {
        return this._mesureUnitShowDetail;
    }

    set mesureUnitShowDetail(value: boolean) {
        this._mesureUnitShowDetail = value;
    }

    get editableMesureUnits(): Array<MesureUnitVo> {
        return this._editableMesureUnits;
    }

    set editableMesureUnits(value: Array<MesureUnitVo>) {
        this._editableMesureUnits = value;
    }

    public findAll() {
        this.http.get<Array<MesureUnitVo>>('http://localhost:8036/generated/mesureUnit/').subscribe(
            value => {
                if (value != null) {
                    this.mesureUnitListe = value;
                    this.editableMesureUnits = value;

                }
            }
        );
    }

    public saveMesureUnit() {
        this.http.post('http://localhost:8036/generated/mesureUnit/', this.mesureUnit).subscribe();
        this.findAll();
    }

    public editMesureUnit() {
        this.http.put('http://localhost:8036/generated/mesureUnit/', this.mesureUnit).subscribe();
        this.findAll();
    }

    public findMesureUnit(pojo: MesureUnitVo) {
        this.http.post<Array<MesureUnitVo>>('http://localhost:8036/generated/mesureUnit/search/', pojo).subscribe(
            value => {
                this.mesureUnitListe = value;
            });
    }

    public detailShow(pojo: MesureUnitVo) {
        this.http.get<MesureUnitVo>('http://localhost:8036/generated/mesureUnit/label/' + pojo.label).subscribe(
            value => {
                if (value != null) {
                    this.mesureUnitDetail = value;
                    this.mesureUnitShowDetail = true;
                }
            });
    }


    delete(pojo: MesureUnitVo) {
        this.http.delete<MesureUnitVo>('http://localhost:8036/generated/mesureUnit/id/' + pojo.id).subscribe(
            value => {
                var index = this.mesureUnitListe.indexOf(pojo);
                if (index > -1) {
                    this.mesureUnitListe.splice(index, 1);
                }
            }
        );


    }


    public findBylabel(ref: string) {
        this.http.get<MesureUnitVo>('http://localhost:8036/generated/mesureUnit/label/' + ref).subscribe(
            value => {
                if (value != null) {
                    this.mesureUnit = value;
                }
            }
        );
    }


    /***********************************************************************************************/
    private _mesureUnitShowDetail: boolean;

    public detailHide() {

        this.mesureUnitShowDetail = false;
        this.mesureUnitDetail = null;
    }

    private _mesureUnitShowEdit: boolean;

    private _mesureUnitShowCreate: boolean;

    get mesureUnitShowEdit(): boolean {
        return this._mesureUnitShowEdit;
    }

    set mesureUnitShowEdit(value: boolean) {
        this._mesureUnitShowEdit = value;
    }

    get mesureUnitShowCreate(): boolean {
        return this._mesureUnitShowCreate;
    }

    set mesureUnitShowCreate(value: boolean) {
        this._mesureUnitShowCreate = value;
    }

    public editShow(pojo: MesureUnitVo) {

        this.mesureUnitShowEdit = true;
        this.mesureUnit = pojo;
    }

    public editHide() {

        this.mesureUnitShowEdit = false;
        this.mesureUnit = new MesureUnitVo();
    }

    public createShow() {

        this.mesureUnitShowCreate = true;
        this.mesureUnit = new MesureUnitVo();
    }

    public createHide() {

        this.mesureUnitShowCreate = false;
        this.mesureUnit = new MesureUnitVo();
    }
}
