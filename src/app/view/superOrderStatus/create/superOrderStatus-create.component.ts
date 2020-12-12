import {Component, OnInit} from '@angular/core';
import {SuperOrderStatusService} from '../../../controller/service/SuperOrderStatus.service';
import {SuperOrderStatusVo} from '../../../controller/model/SuperOrderStatus.model';

@Component({
    selector: 'app-superOrderStatus-create',
    templateUrl: './superOrderStatus-create.component.html',
    styleUrls: ['./superOrderStatus-create.component.css']
})
export class SuperOrderStatusCreateComponent implements OnInit {
    constructor(private superOrderStatusService: SuperOrderStatusService) {
    }

    ngOnInit(): void {
    }

    get superOrderStatus(): SuperOrderStatusVo {
        return this.superOrderStatusService.superOrderStatus;
    }


    saveSuperOrderStatus() {
        this.superOrderStatusService.saveSuperOrderStatus();
    }


    get superOrderStatusShowCreate(): boolean {
        return this.superOrderStatusService.superOrderStatusShowCreate;
    }

    set superOrderStatusShowCreate(value: boolean) {
        this.superOrderStatusService.superOrderStatusShowCreate = value;
    }

    public createHide() {
        this.superOrderStatusService.createHide();
    }
}
