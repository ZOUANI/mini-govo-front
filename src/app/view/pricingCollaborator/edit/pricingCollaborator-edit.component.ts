import {Component, OnInit} from '@angular/core';
import {PricingCollaboratorService} from '../../../controller/service/PricingCollaborator.service';
import {PricingCollaboratorVo} from '../../../controller/model/pricingCollaborator.model';

@Component({
    selector: 'app-pricingCollaborator-edit',
    templateUrl: './pricingCollaborator-edit.component.html',
    styleUrls: ['./pricingCollaborator-edit.component.css']
})
export class PricingCollaboratorEditComponent implements OnInit {
    constructor(private pricingCollaboratorService: PricingCollaboratorService) {
    }

    ngOnInit(): void {
    }

    get pricingCollaborator(): PricingCollaboratorVo {
        return this.pricingCollaboratorService.pricingCollaborator;
    }

    get editablePricingCollaborators(): Array<PricingCollaboratorVo> {
        return this.pricingCollaboratorService.editablePricingCollaborators;
    }

    set editablePricingCollaborators(value: Array<PricingCollaboratorVo>) {
        this.pricingCollaboratorService.editablePricingCollaborators = value;
    }


    editPricingCollaborator() {
        this.pricingCollaboratorService.editPricingCollaborator();
    }

    findByid(identifier: string) {
        this.pricingCollaboratorService.findByid(identifier);
    }

    editHide() {
        this.pricingCollaboratorService.editHide();
    }


}
