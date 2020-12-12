import {Component, OnInit} from '@angular/core';
import {SuperOrderStatusVo} from '../../../controller/model/SuperOrderStatus.model';
import {SuperOrderStatusService} from '../../../controller/service/SuperOrderStatus.service';

@Component({
    selector: 'app-superOrderStatus-list',
    templateUrl: './superOrderStatus-list.component.html',
    styleUrls: ['./superOrderStatus-list.component.css']
})
export class SuperOrderStatuslistComponent implements OnInit {

    constructor(private _superOrderStatusService: SuperOrderStatusService) {
    }


    ngOnInit(): void {
        this.findAll();
    }

    get superOrderStatusService(): SuperOrderStatusService {
        return this._superOrderStatusService;
    }

    set superOrderStatusService(value: SuperOrderStatusService) {
        this._superOrderStatusService = value;
    }

    get superOrderStatusListe(): Array<SuperOrderStatusVo> {
        return this.superOrderStatusService.superOrderStatusListe;
    }

    set superOrderStatusListe(value: Array<SuperOrderStatusVo>) {
        this.superOrderStatusService.superOrderStatusListe = value;
    }

    get superOrderStatusDetail(): SuperOrderStatusVo {
        return this.superOrderStatusService.superOrderStatusDetail;
    }

    set superOrderStatusDetail(value: SuperOrderStatusVo) {
        this.superOrderStatusService.superOrderStatusDetail = value;
    }

    get superOrderStatusSearch(): SuperOrderStatusVo {
        return this.superOrderStatusService.superOrderStatusSearch;
    }

    set superOrderStatusSearch(value: SuperOrderStatusVo) {
        this.superOrderStatusService.superOrderStatusSearch = value;
    }


    get superOrderStatusShowDetail(): boolean {
        return this.superOrderStatusService.superOrderStatusShowDetail;
    }

    set superOrderStatusShowDetail(value: boolean) {
        this.superOrderStatusService.superOrderStatusShowDetail = value;
    }

    get superOrderStatusShowCreate(): boolean {
        return this.superOrderStatusService.superOrderStatusShowCreate;
    }

    set superOrderStatusShowCreate(value: boolean) {
        this.superOrderStatusService.superOrderStatusShowCreate = value;
    }

    get superOrderStatusShowEdit(): boolean {
        return this.superOrderStatusService.superOrderStatusShowEdit;
    }

    set superOrderStatusShowEdit(value: boolean) {
        this.superOrderStatusService.superOrderStatusShowEdit = value;
    }

    editShow(pojo: SuperOrderStatusVo) {
        this.superOrderStatusService.editShow(pojo);

    }

    createShow() {
        this.superOrderStatusService.createShow();

    }

    delete(pojo: SuperOrderStatusVo) {
        this.superOrderStatusService.delete(pojo);
    }


    detailShow(pojo: SuperOrderStatusVo) {
        this.superOrderStatusService.detailShow(pojo);

    }

    findSuperOrderStatus(pojo: SuperOrderStatusVo) {
        this.superOrderStatusService.findSuperOrderStatus(pojo);

    }

    findAll() {
        this.superOrderStatusService.findAll();
    }


}
