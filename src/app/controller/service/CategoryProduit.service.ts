import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {CategoryProduitVo} from '../model/CategoryProduit.model';
import {SuperCategoryProductVo} from '../model/SuperCategoryProduct.model';

@Injectable({
    providedIn: 'root'
})
export class CategoryProduitService {

    constructor(private http: HttpClient) {
    }

    private _categoryProduitDetail: CategoryProduitVo = new CategoryProduitVo();
    private _categoryProduitListe: Array<CategoryProduitVo> = new Array<CategoryProduitVo>();
    private _categoryProduitSearch: CategoryProduitVo = new CategoryProduitVo();
    private _categoryProduit: CategoryProduitVo = new CategoryProduitVo();
    private _searchedCategoryProduits: Array<CategoryProduitVo> = new Array<CategoryProduitVo>();
    private _editableCategoryProduits: Array<CategoryProduitVo> = new Array<CategoryProduitVo>();
    private _superCategoryProducts: Array<SuperCategoryProductVo> = new Array<SuperCategoryProductVo>();
    private _file ;

    get file() {
        return this._file;
    }

    set file(value) {
        this._file = value;
    }

    get superCategoryProducts(): Array<SuperCategoryProductVo> {
        return this._superCategoryProducts;
    }

    set superCategoryProducts(value: Array<SuperCategoryProductVo>) {
        this._superCategoryProducts = value;
    }

    get categoryProduit(): CategoryProduitVo {
        if (this._categoryProduit == null) {
            this._categoryProduit = new CategoryProduitVo();
        }
        return this._categoryProduit;
    }

    set categoryProduit(value: CategoryProduitVo) {
        this._categoryProduit = value;
    }

    get categoryProduitListe(): Array<CategoryProduitVo> {
        return this._categoryProduitListe;
    }

    set categoryProduitListe(value: Array<CategoryProduitVo>) {
        this._categoryProduitListe = value;
    }

    get categoryProduitDetail(): CategoryProduitVo {
        return this._categoryProduitDetail;
    }

    set categoryProduitDetail(value: CategoryProduitVo) {
        this._categoryProduitDetail = value;
    }

    get categoryProduitSearch(): CategoryProduitVo {
        return this._categoryProduitSearch;
    }

    set categoryProduitSearch(value: CategoryProduitVo) {
        this._categoryProduitSearch = value;
    }

    get categoryProduitShowDetail(): boolean {
        return this._categoryProduitShowDetail;
    }

    set categoryProduitShowDetail(value: boolean) {
        this._categoryProduitShowDetail = value;
    }

    get editableCategoryProduits(): Array<CategoryProduitVo> {
        return this._editableCategoryProduits;
    }

    set editableCategoryProduits(value: Array<CategoryProduitVo>) {
        this._editableCategoryProduits = value;
    }

    public findAll() {
        this.http.get<Array<CategoryProduitVo>>('http://localhost:8036/generated/categoryProduit/').subscribe(
            value => {
                if (value != null) {
                    this.categoryProduitListe = value;
                    this.editableCategoryProduits = value;

                }
            }
        );
    }

    public saveCategoryProduit() {
        this.http.post('http://localhost:8036/generated/categoryProduit/', this.categoryProduit).subscribe();
        this.findAll();
    }

    public editCategoryProduit() {
        this.http.put('http://localhost:8036/generated/categoryProduit/', this.categoryProduit).subscribe();
        this.findAll();
    }

    public findCategoryProduit(pojo: CategoryProduitVo) {
        this.http.post<Array<CategoryProduitVo>>('http://localhost:8036/generated/categoryProduit/search/', pojo).subscribe(
            value => {
                this.categoryProduitListe = value;
            });
    }

    public detailShow(pojo: CategoryProduitVo) {
        this.http.get<CategoryProduitVo>('http://localhost:8036/generated/categoryProduit/label/' + pojo.label).subscribe(
            value => {
                if (value != null) {
                    this.categoryProduitDetail = value;
                    this.categoryProduitShowDetail = true;
                }
            });
    }


    delete(pojo: CategoryProduitVo) {
        this.http.delete<CategoryProduitVo>('http://localhost:8036/generated/categoryProduit/id/' + pojo.id).subscribe(
            value => {
                var index = this.categoryProduitListe.indexOf(pojo);
                if (index > -1) {
                    this.categoryProduitListe.splice(index, 1);
                }
            }
        );


    }


    public findBylabel(ref: string) {
        this.http.get<CategoryProduitVo>('http://localhost:8036/generated/categoryProduit/label/' + ref).subscribe(
            value => {
                if (value != null) {
                    this.categoryProduit = value;
                }
            }
        );
    }

    public findAllsuperCategoryProducts() {
        this.http.get<Array<SuperCategoryProductVo>>('http://localhost:8036/generated/superCategoryProduct/').subscribe(
            value => {
                if (value != null) {
                    this.superCategoryProducts = value;
                }
            }
        );
    }


    /***********************************************************************************************/
    private _categoryProduitShowDetail: boolean;

    public detailHide() {

        this.categoryProduitShowDetail = false;
        this.categoryProduitDetail = null;
    }

    private _categoryProduitShowEdit: boolean;

    private _categoryProduitShowCreate: boolean;

    get categoryProduitShowEdit(): boolean {
        return this._categoryProduitShowEdit;
    }

    set categoryProduitShowEdit(value: boolean) {
        this._categoryProduitShowEdit = value;
    }

    get categoryProduitShowCreate(): boolean {
        return this._categoryProduitShowCreate;
    }

    set categoryProduitShowCreate(value: boolean) {
        this._categoryProduitShowCreate = value;
    }

    public editShow(pojo: CategoryProduitVo) {

        this.categoryProduitShowEdit = true;
        this.categoryProduit = pojo;
    }

    public editHide() {

        this.categoryProduitShowEdit = false;
        this.categoryProduit = new CategoryProduitVo();
    }

    public createShow() {

        this.categoryProduitShowCreate = true;
        this.categoryProduit = new CategoryProduitVo();
    }

    public createHide() {

        this.categoryProduitShowCreate = false;
        this.categoryProduit = new CategoryProduitVo();
    }
}
