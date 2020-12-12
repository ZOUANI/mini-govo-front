import {Component, OnInit} from '@angular/core';
import {ProductService} from '../../../controller/service/Product.service';
import {ProductVo} from '../../../controller/model/Product.model';
import {MesureUnitVo} from '../../../controller/model/MesureUnit.model';
import {CategoryProduitVo} from '../../../controller/model/CategoryProduit.model';

@Component({
    selector: 'app-product-create',
    templateUrl: './product-create.component.html',
    styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent implements OnInit {
    constructor(private productService: ProductService) {
    }

    ngOnInit(): void {
        this.findAllcategoryProduits();
        this.findAllmesureUnits();
    }

    get product(): ProductVo {
        return this.productService.product;
    }

    get categoryProduits(): Array<CategoryProduitVo> {
        return this.productService.categoryProduits;
    }

    get mesureUnits(): Array<MesureUnitVo> {
        return this.productService.mesureUnits;
    }

    saveProduct() {
        this.productService.saveProduct();
    }

    findAllcategoryProduits() {
        this.productService.findAllcategoryProduits();
    }

    findAllmesureUnits() {
        this.productService.findAllmesureUnits();
    }

}
