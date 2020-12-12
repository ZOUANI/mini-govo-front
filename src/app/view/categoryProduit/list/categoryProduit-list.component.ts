import {Component, OnInit} from '@angular/core';
import {CategoryProduitVo} from '../../../controller/model/CategoryProduit.model';
import {CategoryProduitService} from '../../../controller/service/CategoryProduit.service';
import {SuperCategoryProductVo} from '../../../controller/model/SuperCategoryProduct.model';

@Component({
    selector: 'app-categoryProduit-list',
    templateUrl: './categoryProduit-list.component.html',
    styleUrls: ['./categoryProduit-list.component.css']
})
export class CategoryProduitlistComponent implements OnInit {

    constructor(private _categoryProduitService: CategoryProduitService) {
    }

    get superCategoryProducts(): Array<SuperCategoryProductVo> {
        return this.categoryProduitService.superCategoryProducts;
    }

    ngOnInit(): void {
        this.findAll();
        this.findAllsuperCategoryProducts();
    }

    get categoryProduitService(): CategoryProduitService {
        return this._categoryProduitService;
    }

    set categoryProduitService(value: CategoryProduitService) {
        this._categoryProduitService = value;
    }

    get categoryProduitListe(): Array<CategoryProduitVo> {
        return this.categoryProduitService.categoryProduitListe;
    }

    set categoryProduitListe(value: Array<CategoryProduitVo>) {
        this.categoryProduitService.categoryProduitListe = value;
    }

    get categoryProduitDetail(): CategoryProduitVo {
        return this.categoryProduitService.categoryProduitDetail;
    }

    set categoryProduitDetail(value: CategoryProduitVo) {
        this.categoryProduitService.categoryProduitDetail = value;
    }

    get categoryProduitSearch(): CategoryProduitVo {
        return this.categoryProduitService.categoryProduitSearch;
    }

    set categoryProduitSearch(value: CategoryProduitVo) {
        this.categoryProduitService.categoryProduitSearch = value;
    }


    get categoryProduitShowDetail(): boolean {
        return this.categoryProduitService.categoryProduitShowDetail;
    }

    set categoryProduitShowDetail(value: boolean) {
        this.categoryProduitService.categoryProduitShowDetail = value;
    }

    get categoryProduitShowCreate(): boolean {
        return this.categoryProduitService.categoryProduitShowCreate;
    }

    set categoryProduitShowCreate(value: boolean) {
        this.categoryProduitService.categoryProduitShowCreate = value;
    }

    get categoryProduitShowEdit(): boolean {
        return this.categoryProduitService.categoryProduitShowEdit;
    }

    set categoryProduitShowEdit(value: boolean) {
        this.categoryProduitService.categoryProduitShowEdit = value;
    }

    editShow(pojo: CategoryProduitVo) {
        this.categoryProduitService.editShow(pojo);

    }

    createShow() {
        this.categoryProduitService.createShow();

    }

    delete(pojo: CategoryProduitVo) {
        this.categoryProduitService.delete(pojo);
    }


    detailShow(pojo: CategoryProduitVo) {
        this.categoryProduitService.detailShow(pojo);

    }

    findCategoryProduit(pojo: CategoryProduitVo) {
        this.categoryProduitService.findCategoryProduit(pojo);

    }

    findAll() {
        this.categoryProduitService.findAll();
    }

    findAllsuperCategoryProducts() {
        this.categoryProduitService.findAllsuperCategoryProducts();
    }

}
