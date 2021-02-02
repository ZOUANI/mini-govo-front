import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {SuperCategoryProductVo} from '../model/SuperCategoryProduct.model';

@Injectable({
    providedIn: 'root'
})
export class SuperCategoryProductService {
    get file() {
        return this._file;
    }

    set file(value) {
        this._file = value;
    }

    constructor(private http: HttpClient) {
    }

    get superCategoryProduct(): SuperCategoryProductVo {
        if (this._superCategoryProduct == null) {
            this._superCategoryProduct = new SuperCategoryProductVo();
        }
        return this._superCategoryProduct;
    }

    set superCategoryProduct(value: SuperCategoryProductVo) {
        this._superCategoryProduct = value;
    }

    get superCategoryProductListe(): Array<SuperCategoryProductVo> {
        return this._superCategoryProductListe;
    }

    set superCategoryProductListe(value: Array<SuperCategoryProductVo>) {
        this._superCategoryProductListe = value;
    }

    get superCategoryProductDetail(): SuperCategoryProductVo {
        return this._superCategoryProductDetail;
    }

    set superCategoryProductDetail(value: SuperCategoryProductVo) {
        this._superCategoryProductDetail = value;
    }

    get superCategoryProductSearch(): SuperCategoryProductVo {
        return this._superCategoryProductSearch;
    }

    set superCategoryProductSearch(value: SuperCategoryProductVo) {
        this._superCategoryProductSearch = value;
    }

    get superCategoryProductShowDetail(): boolean {
        return this._superCategoryProductShowDetail;
    }

    set superCategoryProductShowDetail(value: boolean) {
        this._superCategoryProductShowDetail = value;
    }

    get editableSuperCategoryProducts(): Array<SuperCategoryProductVo> {
        return this._editableSuperCategoryProducts;
    }

    set editableSuperCategoryProducts(value: Array<SuperCategoryProductVo>) {
        this._editableSuperCategoryProducts = value;
    }

    get superCategoryProductShowEdit(): boolean {
        return this._superCategoryProductShowEdit;
    }

    set superCategoryProductShowEdit(value: boolean) {
        this._superCategoryProductShowEdit = value;
    }

    get superCategoryProductShowCreate(): boolean {
        return this._superCategoryProductShowCreate;
    }

    set superCategoryProductShowCreate(value: boolean) {
        this._superCategoryProductShowCreate = value;
    }

    private _superCategoryProductDetail: SuperCategoryProductVo = new SuperCategoryProductVo();
    private _superCategoryProductListe: Array<SuperCategoryProductVo> = new Array<SuperCategoryProductVo>();

    private _superCategoryProductSearch: SuperCategoryProductVo = new SuperCategoryProductVo();
    private _superCategoryProduct: SuperCategoryProductVo = new SuperCategoryProductVo();
    private _file ;
    private _searchedSuperCategoryProducts: Array<SuperCategoryProductVo> = new Array<SuperCategoryProductVo>();
    private _editableSuperCategoryProducts: Array<SuperCategoryProductVo> = new Array<SuperCategoryProductVo>();


    /***********************************************************************************************/
    private _superCategoryProductShowDetail: boolean;

    private _superCategoryProductShowEdit: boolean;

    private _superCategoryProductShowCreate: boolean;

    public findAll() {
        this.http.get<Array<SuperCategoryProductVo>>('http://localhost:8036/generated/superCategoryProduct/').subscribe(
            value => {
                if (value != null) {
                    this.superCategoryProductListe = value;
                    this.editableSuperCategoryProducts = value;

                }
            }
        );
    }

    public saveSuperCategoryProduct() {
        this.http.post('http://localhost:8036/generated/superCategoryProduct/', this.superCategoryProduct).subscribe();
        this.findAll();
    }

    public editSuperCategoryProduct() {
        this.http.put('http://localhost:8036/generated/superCategoryProduct/', this.superCategoryProduct).subscribe();
        this.findAll();
    }

    public findSuperCategoryProduct(pojo: SuperCategoryProductVo) {
        this.http.post<Array<SuperCategoryProductVo>>('http://localhost:8036/generated/superCategoryProduct/search/', pojo).subscribe(
            value => {
                this.superCategoryProductListe = value;
            });
    }

    public detailShow(pojo: SuperCategoryProductVo) {
        this.http.get<SuperCategoryProductVo>('http://localhost:8036/generated/superCategoryProduct/label/' + pojo.label).subscribe(
            value => {
                if (value != null) {
                    this.superCategoryProductDetail = value;
                    this.superCategoryProductShowDetail = true;
                }
            });
    }


    delete(pojo: SuperCategoryProductVo) {
        this.http.delete<SuperCategoryProductVo>('http://localhost:8036/generated/superCategoryProduct/id/' + pojo.id).subscribe(
            value => {
                const index = this.superCategoryProductListe.indexOf(pojo);
                if (index > -1) {
                    this.superCategoryProductListe.splice(index, 1);
                }
            }
        );


    }


    public findBylabel(ref: string) {
        this.http.get<SuperCategoryProductVo>('http://localhost:8036/generated/superCategoryProduct/label/' + ref).subscribe(
            value => {
                if (value != null) {
                    this.superCategoryProduct = value;
                }
            }
        );
    }

    public detailHide() {

        this.superCategoryProductShowDetail = false;
        this.superCategoryProductDetail = null;
    }

    public editShow(pojo: SuperCategoryProductVo) {

        this.superCategoryProductShowEdit = true;
        this.superCategoryProduct = pojo;
    }

    public editHide() {

        this.superCategoryProductShowEdit = false;
        this.superCategoryProduct = new SuperCategoryProductVo();
    }

    public createShow() {

        this.superCategoryProductShowCreate = true;
        this.superCategoryProduct = new SuperCategoryProductVo();
    }

    public createHide() {

        this.superCategoryProductShowCreate = false;
        this.superCategoryProduct = new SuperCategoryProductVo();
    }
}
