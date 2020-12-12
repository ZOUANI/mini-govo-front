import {Component, OnInit} from '@angular/core';
import {PricingCollaboratorVo} from '../../../controller/model/pricingCollaborator.model';
import {PricingCollaboratorService} from '../../../controller/service/PricingCollaborator.service';

@Component({
    selector: 'app-pricingCollaborator-details',
    templateUrl: './pricingCollaborator-details.component.html',
    styleUrls: ['./pricingCollaborator-details.component.css']
})

export class PricingCollaboratorDetailsComponent implements OnInit {

    constructor(private _pricingCollaboratorService: PricingCollaboratorService) {
    }


    get pricingCollaboratorService(): PricingCollaboratorService {
        return this._pricingCollaboratorService;
    }

    set pricingCollaboratorService(value: PricingCollaboratorService) {
        this._pricingCollaboratorService = value;
    }

    get pricingCollaboratorDetail(): PricingCollaboratorVo {
        return this.pricingCollaboratorService.pricingCollaboratorDetail;
    }

    set pricingCollaboratorDetail(value: PricingCollaboratorVo) {
        this.pricingCollaboratorService.pricingCollaboratorDetail = value;
    }


    get pricingCollaboratorShowDetail(): boolean {
        return this.pricingCollaboratorService.pricingCollaboratorShowDetail;
    }

    set pricingCollaboratorShowDetail(value: boolean) {
        this.pricingCollaboratorService.pricingCollaboratorShowDetail = value;
    }

    ngOnInit(): void {

    }

    public detailHide() {
        this.pricingCollaboratorService.detailHide();
    }

}
