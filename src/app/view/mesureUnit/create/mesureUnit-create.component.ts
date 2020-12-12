import {Component, OnInit} from '@angular/core';
import {MesureUnitService} from '../../../controller/service/MesureUnit.service';
import {MesureUnitVo} from '../../../controller/model/MesureUnit.model';

@Component({
    selector: 'app-mesureUnit-create',
    templateUrl: './mesureUnit-create.component.html',
    styleUrls: ['./mesureUnit-create.component.css']
})
export class MesureUnitCreateComponent implements OnInit {
    constructor(private mesureUnitService: MesureUnitService) {
    }

    ngOnInit(): void {
    }

    get mesureUnit(): MesureUnitVo {
        return this.mesureUnitService.mesureUnit;
    }


    saveMesureUnit() {
        this.mesureUnitService.saveMesureUnit();
    }


    get mesureUnitShowCreate(): boolean {
        return this.mesureUnitService.mesureUnitShowCreate;
    }

    set mesureUnitShowCreate(value: boolean) {
        this.mesureUnitService.mesureUnitShowCreate = value;
    }

    public createHide() {
        this.mesureUnitService.createHide();
    }
}
