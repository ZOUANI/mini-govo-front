import {Component, OnInit} from '@angular/core';
import {SuperCategoryProductVo} from '../../../controller/model/SuperCategoryProduct.model';
import {SuperCategoryProductService} from '../../../controller/service/SuperCategoryProduct.service';

@Component({
    selector: 'app-superCategoryProduct-list',
    templateUrl: './superCategoryProduct-list.component.html',
    styleUrls: ['./superCategoryProduct-list.component.css']
})
export class SuperCategoryProductlistComponent implements OnInit {

    constructor(private _superCategoryProductService: SuperCategoryProductService) {
    }


    ngOnInit(): void {
        this.findAll();
    }

    get superCategoryProductService(): SuperCategoryProductService {
        return this._superCategoryProductService;
    }

    set superCategoryProductService(value: SuperCategoryProductService) {
        this._superCategoryProductService = value;
    }

    get superCategoryProductListe(): Array<SuperCategoryProductVo> {
        return this.superCategoryProductService.superCategoryProductListe;
    }

    set superCategoryProductListe(value: Array<SuperCategoryProductVo>) {
        this.superCategoryProductService.superCategoryProductListe = value;
    }

    get superCategoryProductDetail(): SuperCategoryProductVo {
        return this.superCategoryProductService.superCategoryProductDetail;
    }

    set superCategoryProductDetail(value: SuperCategoryProductVo) {
        this.superCategoryProductService.superCategoryProductDetail = value;
    }

    get superCategoryProductSearch(): SuperCategoryProductVo {
        return this.superCategoryProductService.superCategoryProductSearch;
    }

    set superCategoryProductSearch(value: SuperCategoryProductVo) {
        this.superCategoryProductService.superCategoryProductSearch = value;
    }


    get superCategoryProductShowDetail(): boolean {
        return this.superCategoryProductService.superCategoryProductShowDetail;
    }

    set superCategoryProductShowDetail(value: boolean) {
        this.superCategoryProductService.superCategoryProductShowDetail = value;
    }

    get superCategoryProductShowCreate(): boolean {
        return this.superCategoryProductService.superCategoryProductShowCreate;
    }

    set superCategoryProductShowCreate(value: boolean) {
        this.superCategoryProductService.superCategoryProductShowCreate = value;
    }

    get superCategoryProductShowEdit(): boolean {
        return this.superCategoryProductService.superCategoryProductShowEdit;
    }

    set superCategoryProductShowEdit(value: boolean) {
        this.superCategoryProductService.superCategoryProductShowEdit = value;
    }

    editShow(pojo: SuperCategoryProductVo) {
        this.superCategoryProductService.editShow(pojo);

    }

    createShow() {
        this.superCategoryProductService.createShow();

    }

    delete(pojo: SuperCategoryProductVo) {
        this.superCategoryProductService.delete(pojo);
    }


    detailShow(pojo: SuperCategoryProductVo) {
        this.superCategoryProductService.detailShow(pojo);

    }

    findSuperCategoryProduct(pojo: SuperCategoryProductVo) {
        this.superCategoryProductService.findSuperCategoryProduct(pojo);

    }

    findAll() {
        this.superCategoryProductService.findAll();
    }


}
