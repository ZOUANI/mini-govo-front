import {Component, OnInit} from '@angular/core';
import {MesureUnitVo} from '../../../controller/model/MesureUnit.model';
import {MesureUnitService} from '../../../controller/service/MesureUnit.service';

@Component({
    selector: 'app-mesureUnit-details',
    templateUrl: './mesureUnit-details.component.html',
    styleUrls: ['./mesureUnit-details.component.css']
})

export class MesureUnitDetailsComponent implements OnInit {

    constructor(private _mesureUnitService: MesureUnitService) {
    }


    get mesureUnitService(): MesureUnitService {
        return this._mesureUnitService;
    }

    set mesureUnitService(value: MesureUnitService) {
        this._mesureUnitService = value;
    }

    get mesureUnitDetail(): MesureUnitVo {
        return this.mesureUnitService.mesureUnitDetail;
    }

    set mesureUnitDetail(value: MesureUnitVo) {
        this.mesureUnitService.mesureUnitDetail = value;
    }


    get mesureUnitShowDetail(): boolean {
        return this.mesureUnitService.mesureUnitShowDetail;
    }

    set mesureUnitShowDetail(value: boolean) {
        this.mesureUnitService.mesureUnitShowDetail = value;
    }

    ngOnInit(): void {

    }

    public detailHide() {
        this.mesureUnitService.detailHide();
    }

}
