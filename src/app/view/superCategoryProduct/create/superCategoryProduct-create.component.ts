import {Component, OnInit} from '@angular/core';
import {SuperCategoryProductService} from '../../../controller/service/SuperCategoryProduct.service';
import {SuperCategoryProductVo} from '../../../controller/model/SuperCategoryProduct.model';

@Component({
    selector: 'app-superCategoryProduct-create',
    templateUrl: './superCategoryProduct-create.component.html',
    styleUrls: ['./superCategoryProduct-create.component.css']
})
export class SuperCategoryProductCreateComponent implements OnInit {
    constructor(private superCategoryProductService: SuperCategoryProductService) {
    }

    ngOnInit(): void {
    }

    get superCategoryProduct(): SuperCategoryProductVo {
        return this.superCategoryProductService.superCategoryProduct;
    }


    saveSuperCategoryProduct() {
        this.superCategoryProductService.saveSuperCategoryProduct();
    }


    get superCategoryProductShowCreate(): boolean {
        return this.superCategoryProductService.superCategoryProductShowCreate;
    }

    set superCategoryProductShowCreate(value: boolean) {
        this.superCategoryProductService.superCategoryProductShowCreate = value;
    }

    public createHide() {
        this.superCategoryProductService.createHide();
    }
}
