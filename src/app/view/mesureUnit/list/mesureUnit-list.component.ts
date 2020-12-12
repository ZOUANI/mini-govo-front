import {Component, OnInit} from '@angular/core';
import {MesureUnitVo} from '../../../controller/model/MesureUnit.model';
import {MesureUnitService} from '../../../controller/service/MesureUnit.service';

@Component({
    selector: 'app-mesureUnit-list',
    templateUrl: './mesureUnit-list.component.html',
    styleUrls: ['./mesureUnit-list.component.css']
})
export class MesureUnitlistComponent implements OnInit {

    constructor(private _mesureUnitService: MesureUnitService) {
    }


    ngOnInit(): void {
        this.findAll();
    }

    get mesureUnitService(): MesureUnitService {
        return this._mesureUnitService;
    }

    set mesureUnitService(value: MesureUnitService) {
        this._mesureUnitService = value;
    }

    get mesureUnitListe(): Array<MesureUnitVo> {
        return this.mesureUnitService.mesureUnitListe;
    }

    set mesureUnitListe(value: Array<MesureUnitVo>) {
        this.mesureUnitService.mesureUnitListe = value;
    }

    get mesureUnitDetail(): MesureUnitVo {
        return this.mesureUnitService.mesureUnitDetail;
    }

    set mesureUnitDetail(value: MesureUnitVo) {
        this.mesureUnitService.mesureUnitDetail = value;
    }

    get mesureUnitSearch(): MesureUnitVo {
        return this.mesureUnitService.mesureUnitSearch;
    }

    set mesureUnitSearch(value: MesureUnitVo) {
        this.mesureUnitService.mesureUnitSearch = value;
    }


    get mesureUnitShowDetail(): boolean {
        return this.mesureUnitService.mesureUnitShowDetail;
    }

    set mesureUnitShowDetail(value: boolean) {
        this.mesureUnitService.mesureUnitShowDetail = value;
    }

    get mesureUnitShowCreate(): boolean {
        return this.mesureUnitService.mesureUnitShowCreate;
    }

    set mesureUnitShowCreate(value: boolean) {
        this.mesureUnitService.mesureUnitShowCreate = value;
    }

    get mesureUnitShowEdit(): boolean {
        return this.mesureUnitService.mesureUnitShowEdit;
    }

    set mesureUnitShowEdit(value: boolean) {
        this.mesureUnitService.mesureUnitShowEdit = value;
    }

    editShow(pojo: MesureUnitVo) {
        this.mesureUnitService.editShow(pojo);

    }

    createShow() {
        this.mesureUnitService.createShow();

    }

    delete(pojo: MesureUnitVo) {
        this.mesureUnitService.delete(pojo);
    }


    detailShow(pojo: MesureUnitVo) {
        this.mesureUnitService.detailShow(pojo);

    }

    findMesureUnit(pojo: MesureUnitVo) {
        this.mesureUnitService.findMesureUnit(pojo);

    }

    findAll() {
        this.mesureUnitService.findAll();
    }


}
