import {Component, OnInit} from '@angular/core';
import {PricingCollaboratorService} from '../../../controller/service/PricingCollaborator.service';
import {PricingCollaboratorVo} from '../../../controller/model/pricingCollaborator.model';

@Component({
    selector: 'app-pricingCollaborator-create',
    templateUrl: './pricingCollaborator-create.component.html',
    styleUrls: ['./pricingCollaborator-create.component.css']
})
export class PricingCollaboratorCreateComponent implements OnInit {
    constructor(private pricingCollaboratorService: PricingCollaboratorService) {
    }

    ngOnInit(): void {
    }

    get pricingCollaborator(): PricingCollaboratorVo {
        return this.pricingCollaboratorService.pricingCollaborator;
    }


    savePricingCollaborator() {
        this.pricingCollaboratorService.savePricingCollaborator();
    }


    get pricingCollaboratorShowCreate(): boolean {
        return this.pricingCollaboratorService.pricingCollaboratorShowCreate;
    }

    set pricingCollaboratorShowCreate(value: boolean) {
        this.pricingCollaboratorService.pricingCollaboratorShowCreate = value;
    }

    public createHide() {
        this.pricingCollaboratorService.createHide();
    }
}
