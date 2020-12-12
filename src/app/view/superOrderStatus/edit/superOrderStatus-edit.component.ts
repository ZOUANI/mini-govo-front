import {Component, OnInit} from '@angular/core';
import {SuperOrderStatusService} from '../../../controller/service/SuperOrderStatus.service';
import {SuperOrderStatusVo} from '../../../controller/model/SuperOrderStatus.model';

@Component({
    selector: 'app-superOrderStatus-edit',
    templateUrl: './superOrderStatus-edit.component.html',
    styleUrls: ['./superOrderStatus-edit.component.css']
})
export class SuperOrderStatusEditComponent implements OnInit {
    constructor(private superOrderStatusService: SuperOrderStatusService) {
    }

    ngOnInit(): void {
    }

    get superOrderStatus(): SuperOrderStatusVo {
        return this.superOrderStatusService.superOrderStatus;
    }

    get editableSuperOrderStatuss(): Array<SuperOrderStatusVo> {
        return this.superOrderStatusService.editableSuperOrderStatuss;
    }

    set editableSuperOrderStatuss(value: Array<SuperOrderStatusVo>) {
        this.superOrderStatusService.editableSuperOrderStatuss = value;
    }


    editSuperOrderStatus() {
        this.superOrderStatusService.editSuperOrderStatus();
    }

    findBycode(ref: string) {
        this.superOrderStatusService.findBycode(ref);
    }

    editHide() {
        this.superOrderStatusService.editHide();
    }


}
