import {Component, OnInit} from '@angular/core';
import {CategoryProduitService} from '../../../controller/service/CategoryProduit.service';
import {CategoryProduitVo} from '../../../controller/model/CategoryProduit.model';
import {SuperCategoryProductVo} from '../../../controller/model/SuperCategoryProduct.model';

@Component({
    selector: 'app-categoryProduit-edit',
    templateUrl: './categoryProduit-edit.component.html',
    styleUrls: ['./categoryProduit-edit.component.css']
})
export class CategoryProduitEditComponent implements OnInit {
    constructor(private categoryProduitService: CategoryProduitService) {
    }

    ngOnInit(): void {
        this.findAllsuperCategoryProducts();
    }

    get categoryProduit(): CategoryProduitVo {
        return this.categoryProduitService.categoryProduit;
    }

    get editableCategoryProduits(): Array<CategoryProduitVo> {
        return this.categoryProduitService.editableCategoryProduits;
    }

    set editableCategoryProduits(value: Array<CategoryProduitVo>) {
        this.categoryProduitService.editableCategoryProduits = value;
    }

    get superCategoryProducts(): Array<SuperCategoryProductVo> {
        return this.categoryProduitService.superCategoryProducts;
    }

    editCategoryProduit() {
        this.categoryProduitService.editCategoryProduit();
    }

    findAllsuperCategoryProducts() {
        this.categoryProduitService.findAllsuperCategoryProducts();
    }

    findBylabel(ref: string) {
        this.categoryProduitService.findBylabel(ref);
    }

    editHide() {
        this.categoryProduitService.editHide();
    }


}
