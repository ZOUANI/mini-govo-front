import {Component, OnInit} from '@angular/core';
import {UserService} from '../../../controller/service/User.service';
import {UserVo} from '../../../controller/model/User.model';

@Component({
    selector: 'app-user-edit',
    templateUrl: './user-edit.component.html',
    styleUrls: ['./user-edit.component.css']
})
export class UserEditComponent implements OnInit {
    constructor(private userService: UserService) {
    }

    ngOnInit(): void {
    }

    get user(): UserVo {
        return this.userService.user;
    }

    get editableUsers(): Array<UserVo> {
        return this.userService.editableUsers;
    }

    set editableUsers(value: Array<UserVo>) {
        this.userService.editableUsers = value;
    }


    editUser() {
        this.userService.editUser();
    }

    findByid(identifier: string) {
        this.userService.findByid(identifier);
    }

    editHide() {
        this.userService.editHide();
    }


}
