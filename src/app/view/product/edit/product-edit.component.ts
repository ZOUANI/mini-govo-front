import {Component, OnInit} from '@angular/core';
import {ProductService} from '../../../controller/service/Product.service';
import {ProductVo} from '../../../controller/model/Product.model';
import {MesureUnitVo} from '../../../controller/model/MesureUnit.model';
import {CategoryProduitVo} from '../../../controller/model/CategoryProduit.model';

@Component({
    selector: 'app-product-edit',
    templateUrl: './product-edit.component.html',
    styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent implements OnInit {
    constructor(private productService: ProductService) {
    }

    ngOnInit(): void {
        this.findAllcategoryProduits();
        this.findAllmesureUnits();
    }

    get product(): ProductVo {
        return this.productService.product;
    }

    get editableProducts(): Array<ProductVo> {
        return this.productService.editableProducts;
    }

    set editableProducts(value: Array<ProductVo>) {
        this.productService.editableProducts = value;
    }

    get categoryProduits(): Array<CategoryProduitVo> {
        return this.productService.categoryProduits;
    }

    get mesureUnits(): Array<MesureUnitVo> {
        return this.productService.mesureUnits;
    }

    editProduct() {
        this.productService.editProduct();
    }

    findAllcategoryProduits() {
        this.productService.findAllcategoryProduits();
    }

    findAllmesureUnits() {
        this.productService.findAllmesureUnits();
    }

    findByreference(ref: string) {
        this.productService.findByreference(ref);
    }


}
