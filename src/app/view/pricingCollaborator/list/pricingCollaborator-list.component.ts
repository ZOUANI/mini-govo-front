import {Component, OnInit} from '@angular/core';
import {PricingCollaboratorVo} from '../../../controller/model/pricingCollaborator.model';
import {PricingCollaboratorService} from '../../../controller/service/PricingCollaborator.service';

@Component({
    selector: 'app-pricingCollaborator-list',
    templateUrl: './pricingCollaborator-list.component.html',
    styleUrls: ['./pricingCollaborator-list.component.css']
})
export class PricingCollaboratorlistComponent implements OnInit {

    constructor(private _pricingCollaboratorService: PricingCollaboratorService) {
    }


    ngOnInit(): void {
        this.findAll();
    }

    get pricingCollaboratorService(): PricingCollaboratorService {
        return this._pricingCollaboratorService;
    }

    set pricingCollaboratorService(value: PricingCollaboratorService) {
        this._pricingCollaboratorService = value;
    }

    get pricingCollaboratorListe(): Array<PricingCollaboratorVo> {
        return this.pricingCollaboratorService.pricingCollaboratorListe;
    }

    set pricingCollaboratorListe(value: Array<PricingCollaboratorVo>) {
        this.pricingCollaboratorService.pricingCollaboratorListe = value;
    }

    get pricingCollaboratorDetail(): PricingCollaboratorVo {
        return this.pricingCollaboratorService.pricingCollaboratorDetail;
    }

    set pricingCollaboratorDetail(value: PricingCollaboratorVo) {
        this.pricingCollaboratorService.pricingCollaboratorDetail = value;
    }

    get pricingCollaboratorSearch(): PricingCollaboratorVo {
        return this.pricingCollaboratorService.pricingCollaboratorSearch;
    }

    set pricingCollaboratorSearch(value: PricingCollaboratorVo) {
        this.pricingCollaboratorService.pricingCollaboratorSearch = value;
    }


    get pricingCollaboratorShowDetail(): boolean {
        return this.pricingCollaboratorService.pricingCollaboratorShowDetail;
    }

    set pricingCollaboratorShowDetail(value: boolean) {
        this.pricingCollaboratorService.pricingCollaboratorShowDetail = value;
    }

    get pricingCollaboratorShowCreate(): boolean {
        return this.pricingCollaboratorService.pricingCollaboratorShowCreate;
    }

    set pricingCollaboratorShowCreate(value: boolean) {
        this.pricingCollaboratorService.pricingCollaboratorShowCreate = value;
    }

    get pricingCollaboratorShowEdit(): boolean {
        return this.pricingCollaboratorService.pricingCollaboratorShowEdit;
    }

    set pricingCollaboratorShowEdit(value: boolean) {
        this.pricingCollaboratorService.pricingCollaboratorShowEdit = value;
    }

    editShow(pojo: PricingCollaboratorVo) {
        this.pricingCollaboratorService.editShow(pojo);

    }

    createShow() {
        this.pricingCollaboratorService.createShow();

    }

    delete(pojo: PricingCollaboratorVo) {
        this.pricingCollaboratorService.delete(pojo);
    }


    detailShow(pojo: PricingCollaboratorVo) {
        this.pricingCollaboratorService.detailShow(pojo);

    }

    findPricingCollaborator(pojo: PricingCollaboratorVo) {
        this.pricingCollaboratorService.findPricingCollaborator(pojo);

    }

    findAll() {
        this.pricingCollaboratorService.findAll();
    }


}
