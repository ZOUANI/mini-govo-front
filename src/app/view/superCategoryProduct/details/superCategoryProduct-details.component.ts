import {Component, OnInit} from '@angular/core';
import {SuperCategoryProductVo} from '../../../controller/model/SuperCategoryProduct.model';
import {SuperCategoryProductService} from '../../../controller/service/SuperCategoryProduct.service';

@Component({
    selector: 'app-superCategoryProduct-details',
    templateUrl: './superCategoryProduct-details.component.html',
    styleUrls: ['./superCategoryProduct-details.component.css']
})

export class SuperCategoryProductDetailsComponent implements OnInit {

    constructor(private _superCategoryProductService: SuperCategoryProductService) {
    }


    get superCategoryProductService(): SuperCategoryProductService {
        return this._superCategoryProductService;
    }

    set superCategoryProductService(value: SuperCategoryProductService) {
        this._superCategoryProductService = value;
    }

    get superCategoryProductDetail(): SuperCategoryProductVo {
        return this.superCategoryProductService.superCategoryProductDetail;
    }

    set superCategoryProductDetail(value: SuperCategoryProductVo) {
        this.superCategoryProductService.superCategoryProductDetail = value;
    }


    get superCategoryProductShowDetail(): boolean {
        return this.superCategoryProductService.superCategoryProductShowDetail;
    }

    set superCategoryProductShowDetail(value: boolean) {
        this.superCategoryProductService.superCategoryProductShowDetail = value;
    }

    ngOnInit(): void {

    }

    public detailHide() {
        this.superCategoryProductService.detailHide();
    }

}
