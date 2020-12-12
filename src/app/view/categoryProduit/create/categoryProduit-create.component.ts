import {Component, OnInit} from '@angular/core';
import {CategoryProduitService} from '../../../controller/service/CategoryProduit.service';
import {CategoryProduitVo} from '../../../controller/model/CategoryProduit.model';
import {SuperCategoryProductVo} from '../../../controller/model/SuperCategoryProduct.model';

@Component({
    selector: 'app-categoryProduit-create',
    templateUrl: './categoryProduit-create.component.html',
    styleUrls: ['./categoryProduit-create.component.css']
})
export class CategoryProduitCreateComponent implements OnInit {
    constructor(private categoryProduitService: CategoryProduitService) {
    }

    ngOnInit(): void {
        this.findAllsuperCategoryProducts();
    }

    get categoryProduit(): CategoryProduitVo {
        return this.categoryProduitService.categoryProduit;
    }

    get superCategoryProducts(): Array<SuperCategoryProductVo> {
        return this.categoryProduitService.superCategoryProducts;
    }

    saveCategoryProduit() {
        this.categoryProduitService.saveCategoryProduit();
    }

    findAllsuperCategoryProducts() {
        this.categoryProduitService.findAllsuperCategoryProducts();
    }

    get categoryProduitShowCreate(): boolean {
        return this.categoryProduitService.categoryProduitShowCreate;
    }

    set categoryProduitShowCreate(value: boolean) {
        this.categoryProduitService.categoryProduitShowCreate = value;
    }

    public createHide() {
        this.categoryProduitService.createHide();
    }
}
