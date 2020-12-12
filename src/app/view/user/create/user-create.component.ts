import {Component, OnInit} from '@angular/core';
import {UserService} from '../../../controller/service/User.service';
import {UserVo} from '../../../controller/model/User.model';

@Component({
    selector: 'app-user-create',
    templateUrl: './user-create.component.html',
    styleUrls: ['./user-create.component.css']
})
export class UserCreateComponent implements OnInit {
    constructor(private userService: UserService) {
    }

    ngOnInit(): void {
    }

    get user(): UserVo {
        return this.userService.user;
    }


    saveUser() {
        this.userService.saveUser();
    }


    get userShowCreate(): boolean {
        return this.userService.userShowCreate;
    }

    set userShowCreate(value: boolean) {
        this.userService.userShowCreate = value;
    }

    public createHide() {
        this.userService.createHide();
    }
}
