import {Component, OnInit} from '@angular/core';
import {ProductVo} from '../../../controller/model/Product.model';
import {ProductService} from '../../../controller/service/Product.service';
import {MesureUnitVo} from '../../../controller/model/MesureUnit.model';
import {CategoryProduitVo} from '../../../controller/model/CategoryProduit.model';

@Component({
    selector: 'app-product-list',
    templateUrl: './product-list.component.html',
    styleUrls: ['./product-list.component.css']
})
export class ProductlistComponent implements OnInit {

    constructor(private _productService: ProductService) {
    }

    get categoryProduits(): Array<CategoryProduitVo> {
        return this.productService.categoryProduits;
    }

    get mesureUnits(): Array<MesureUnitVo> {
        return this.productService.mesureUnits;
    }

    ngOnInit(): void {
        this.findAll();
        this.findAllcategoryProduits();
        this.findAllmesureUnits();
    }

    get productService(): ProductService {
        return this._productService;
    }

    set productService(value: ProductService) {
        this._productService = value;
    }

    get productListe(): Array<ProductVo> {
        return this.productService.productListe;
    }

    set productListe(value: Array<ProductVo>) {
        this.productService.productListe = value;
    }

    get productDetail(): ProductVo {
        return this.productService.productDetail;
    }

    set productDetail(value: ProductVo) {
        this.productService.productDetail = value;
    }

    get productSearch(): ProductVo {
        return this.productService.productSearch;
    }

    set productSearch(value: ProductVo) {
        this.productService.productSearch = value;
    }


    get productShowDetail(): boolean {
        return this.productService.productShowDetail;
    }

    set productShowDetail(value: boolean) {
        this.productService.productShowDetail = value;
    }


    delete(pojo: ProductVo) {
        this.productService.delete(pojo);
    }


    detailShow(pojo: ProductVo) {
        this.productService.detailShow(pojo);

    }

    findProduct(pojo: ProductVo) {
        this.productService.findProduct(pojo);

    }

    findAll() {
        this.productService.findAll();
    }

    findAllcategoryProduits() {
        this.productService.findAllcategoryProduits();
    }

    findAllmesureUnits() {
        this.productService.findAllmesureUnits();
    }

}
