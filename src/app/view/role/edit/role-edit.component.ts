import {Component, OnInit} from '@angular/core';
import {RoleService} from '../../../controller/service/Role.service';
import {RoleVo} from '../../../controller/model/role.model';

@Component({
    selector: 'app-role-edit',
    templateUrl: './role-edit.component.html',
    styleUrls: ['./role-edit.component.css']
})
export class RoleEditComponent implements OnInit {
    constructor(private roleService: RoleService) {
    }

    ngOnInit(): void {
    }

    get role(): RoleVo {
        return this.roleService.role;
    }

    get editableRoles(): Array<RoleVo> {
        return this.roleService.editableRoles;
    }

    set editableRoles(value: Array<RoleVo>) {
        this.roleService.editableRoles = value;
    }


    editRole() {
        this.roleService.editRole();
    }

    findByid(identifier: string) {
        this.roleService.findByid(identifier);
    }

    editHide() {
        this.roleService.editHide();
    }


}
