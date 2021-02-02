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

    get file() {
        return this.categoryProduitService.file;
    }
    set file(value) {
        this.categoryProduitService.file = value;
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

    changeListener($event): void {
        this.readThis($event.target);
    }

    readThis(inputValue: any): void {

        const file: File = inputValue.files[0];
        const myReader: FileReader = new FileReader();
        this.file = file;
        myReader.onloadend = (e) => {
            this.categoryProduit.imagePath = myReader.result.toString();
        };
        myReader.readAsDataURL(file);
    }

    clog() {
        console.log(this.categoryProduit.superCategoryProductVo.label);
    }
}
