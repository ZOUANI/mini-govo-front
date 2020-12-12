import {Component, OnInit} from '@angular/core';
import {CategoryProduitVo} from '../../../controller/model/CategoryProduit.model';
import {CategoryProduitService} from '../../../controller/service/CategoryProduit.service';

@Component({
    selector: 'app-categoryProduit-details',
    templateUrl: './categoryProduit-details.component.html',
    styleUrls: ['./categoryProduit-details.component.css']
})

export class CategoryProduitDetailsComponent implements OnInit {

    constructor(private _categoryProduitService: CategoryProduitService) {
    }


    get categoryProduitService(): CategoryProduitService {
        return this._categoryProduitService;
    }

    set categoryProduitService(value: CategoryProduitService) {
        this._categoryProduitService = value;
    }

    get categoryProduitDetail(): CategoryProduitVo {
        return this.categoryProduitService.categoryProduitDetail;
    }

    set categoryProduitDetail(value: CategoryProduitVo) {
        this.categoryProduitService.categoryProduitDetail = value;
    }


    get categoryProduitShowDetail(): boolean {
        return this.categoryProduitService.categoryProduitShowDetail;
    }

    set categoryProduitShowDetail(value: boolean) {
        this.categoryProduitService.categoryProduitShowDetail = value;
    }

    ngOnInit(): void {

    }

    public detailHide() {
        this.categoryProduitService.detailHide();
    }

}
