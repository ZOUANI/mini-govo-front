import {Component, OnInit} from '@angular/core';
import {MesureUnitService} from '../../../controller/service/MesureUnit.service';
import {MesureUnitVo} from '../../../controller/model/MesureUnit.model';

@Component({
    selector: 'app-mesureUnit-edit',
    templateUrl: './mesureUnit-edit.component.html',
    styleUrls: ['./mesureUnit-edit.component.css']
})
export class MesureUnitEditComponent implements OnInit {
    constructor(private mesureUnitService: MesureUnitService) {
    }

    ngOnInit(): void {
    }

    get mesureUnit(): MesureUnitVo {
        return this.mesureUnitService.mesureUnit;
    }

    get editableMesureUnits(): Array<MesureUnitVo> {
        return this.mesureUnitService.editableMesureUnits;
    }

    set editableMesureUnits(value: Array<MesureUnitVo>) {
        this.mesureUnitService.editableMesureUnits = value;
    }


    editMesureUnit() {
        this.mesureUnitService.editMesureUnit();
    }

    findBylabel(ref: string) {
        this.mesureUnitService.findBylabel(ref);
    }

    editHide() {
        this.mesureUnitService.editHide();
    }


}
