import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ProductVo} from '../model/Product.model';
import {MesureUnitVo} from '../model/MesureUnit.model';
import {CategoryProduitVo} from '../model/CategoryProduit.model';

@Injectable({
    providedIn: 'root'
})
export class ProductService {

    constructor(private http: HttpClient) {
    }

    private _productDetail: ProductVo = new ProductVo();
    private _productListe: Array<ProductVo> = new Array<ProductVo>();

    private _productSearch: ProductVo = new ProductVo();
    private _product: ProductVo = new ProductVo();
    private _searchedProducts: Array<ProductVo> = new Array<ProductVo>();
    private _editableProducts: Array<ProductVo> = new Array<ProductVo>();
    private _categoryProduits: Array<CategoryProduitVo> = new Array<CategoryProduitVo>();
    private _mesureUnits: Array<MesureUnitVo> = new Array<MesureUnitVo>();

    get categoryProduits(): Array<CategoryProduitVo> {
        return this._categoryProduits;
    }

    set categoryProduits(value: Array<CategoryProduitVo>) {
        this._categoryProduits = value;
    }

    get mesureUnits(): Array<MesureUnitVo> {
        return this._mesureUnits;
    }

    set mesureUnits(value: Array<MesureUnitVo>) {
        this._mesureUnits = value;
    }

    get product(): ProductVo {
        if (this._product == null) {
            this._product = new ProductVo();
        }
        return this._product;
    }

    set product(value: ProductVo) {
        this._product = value;
    }

    get productListe(): Array<ProductVo> {
        return this._productListe;
    }

    set productListe(value: Array<ProductVo>) {
        this._productListe = value;
    }

    get productDetail(): ProductVo {
        return this._productDetail;
    }

    set productDetail(value: ProductVo) {
        this._productDetail = value;
    }

    get productSearch(): ProductVo {
        return this._productSearch;
    }

    set productSearch(value: ProductVo) {
        this._productSearch = value;
    }

    get productShowDetail(): boolean {
        return this._productShowDetail;
    }

    set productShowDetail(value: boolean) {
        this._productShowDetail = value;
    }

    get editableProducts(): Array<ProductVo> {
        return this._editableProducts;
    }

    set editableProducts(value: Array<ProductVo>) {
        this._editableProducts = value;
    }

    public findAll() {
        this.http.get<Array<ProductVo>>('http://localhost:8036/generated/product/').subscribe(
            value => {
                if (value != null) {
                    this.productListe = value;
                    this.editableProducts = value;

                }
            }
        );
    }

    public saveProduct() {
        this.http.post('http://localhost:8036/generated/product/', this.product).subscribe();
    }

    public editProduct() {
        this.http.put('http://localhost:8036/generated/product/', this.product).subscribe();
    }

    public findProduct(pojo: ProductVo) {
        this.http.post<Array<ProductVo>>('http://localhost:8036/generated/product/search/', pojo).subscribe(
            value => {
                this.productListe = value;
            });
    }

    public detailShow(pojo: ProductVo) {
        this.http.get<ProductVo>('http://localhost:8036/generated/product/reference/' + pojo.reference).subscribe(
            value => {
                if (value != null) {
                    this.productDetail = value;
                    this.productShowDetail = true;
                }
            });
    }


    delete(pojo: ProductVo) {
        this.http.delete<ProductVo>('http://localhost:8036/generated/product/id/' + pojo.id).subscribe(
            value => {
                var index = this.productListe.indexOf(pojo);
                if (index > -1) {
                    this.productListe.splice(index, 1);
                }
            }
        );


    }


    public findByreference(ref: string) {
        this.http.get<ProductVo>('http://localhost:8036/generated/product/reference/' + ref).subscribe(
            value => {
                if (value != null) {
                    this.product = value;
                }
            }
        );
    }

    public findAllcategoryProduits() {
        this.http.get<Array<CategoryProduitVo>>('http://localhost:8036/generated/categoryProduit/').subscribe(
            value => {
                if (value != null) {
                    this.categoryProduits = value;
                }
            }
        );
    }

    public findAllmesureUnits() {
        this.http.get<Array<MesureUnitVo>>('http://localhost:8036/generated/mesureUnit/').subscribe(
            value => {
                if (value != null) {
                    this.mesureUnits = value;
                }
            }
        );
    }


    /***********************************************************************************************/
    private _productShowDetail: boolean;

    public detailHide() {

        this.productShowDetail = false;
        this.productDetail = null;
    }
}
