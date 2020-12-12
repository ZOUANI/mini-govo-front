import {Component, OnInit} from '@angular/core';
import {SuperCategoryProductService} from '../../../controller/service/SuperCategoryProduct.service';
import {SuperCategoryProductVo} from '../../../controller/model/SuperCategoryProduct.model';

@Component({
    selector: 'app-superCategoryProduct-edit',
    templateUrl: './superCategoryProduct-edit.component.html',
    styleUrls: ['./superCategoryProduct-edit.component.css']
})
export class SuperCategoryProductEditComponent implements OnInit {
    constructor(private superCategoryProductService: SuperCategoryProductService) {
    }

    ngOnInit(): void {
    }

    get superCategoryProduct(): SuperCategoryProductVo {
        return this.superCategoryProductService.superCategoryProduct;
    }

    get editableSuperCategoryProducts(): Array<SuperCategoryProductVo> {
        return this.superCategoryProductService.editableSuperCategoryProducts;
    }

    set editableSuperCategoryProducts(value: Array<SuperCategoryProductVo>) {
        this.superCategoryProductService.editableSuperCategoryProducts = value;
    }


    editSuperCategoryProduct() {
        this.superCategoryProductService.editSuperCategoryProduct();
    }

    findBylabel(ref: string) {
        this.superCategoryProductService.findBylabel(ref);
    }

    editHide() {
        this.superCategoryProductService.editHide();
    }


}
