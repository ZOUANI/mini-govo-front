import {Component, OnInit} from '@angular/core';
import {SuperOrderStatusVo} from '../../../controller/model/SuperOrderStatus.model';
import {SuperOrderStatusService} from '../../../controller/service/SuperOrderStatus.service';

@Component({
    selector: 'app-superOrderStatus-details',
    templateUrl: './superOrderStatus-details.component.html',
    styleUrls: ['./superOrderStatus-details.component.css']
})

export class SuperOrderStatusDetailsComponent implements OnInit {

    constructor(private _superOrderStatusService: SuperOrderStatusService) {
    }


    get superOrderStatusService(): SuperOrderStatusService {
        return this._superOrderStatusService;
    }

    set superOrderStatusService(value: SuperOrderStatusService) {
        this._superOrderStatusService = value;
    }

    get superOrderStatusDetail(): SuperOrderStatusVo {
        return this.superOrderStatusService.superOrderStatusDetail;
    }

    set superOrderStatusDetail(value: SuperOrderStatusVo) {
        this.superOrderStatusService.superOrderStatusDetail = value;
    }


    get superOrderStatusShowDetail(): boolean {
        return this.superOrderStatusService.superOrderStatusShowDetail;
    }

    set superOrderStatusShowDetail(value: boolean) {
        this.superOrderStatusService.superOrderStatusShowDetail = value;
    }

    ngOnInit(): void {

    }

    public detailHide() {
        this.superOrderStatusService.detailHide();
    }

}
