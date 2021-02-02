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

    get file() {
        return this.superCategoryProductService.file;
    }
    set file(value) {
        this.superCategoryProductService.file = value;
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

    changeListener($event): void {
        this.readThis($event.target);
    }

    readThis(inputValue: any): void {

        const file: File = inputValue.files[0];
        const myReader: FileReader = new FileReader();
        this.file = file;
        myReader.onloadend = (e) => {
            this.superCategoryProduct.imagePath = myReader.result.toString();
        };
        myReader.readAsDataURL(file);
    }
}
