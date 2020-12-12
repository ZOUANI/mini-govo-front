import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {UserVo} from '../model/User.model';

@Injectable({
    providedIn: 'root'
})
export class UserService {

    constructor(private http: HttpClient) {
    }

    private _userDetail: UserVo = new UserVo();
    private _userListe: Array<UserVo> = new Array<UserVo>();

    private _userSearch: UserVo = new UserVo();
    private _user: UserVo = new UserVo();
    private _searchedUsers: Array<UserVo> = new Array<UserVo>();
    private _editableUsers: Array<UserVo> = new Array<UserVo>();

    get user(): UserVo {
        if (this._user == null) {
            this._user = new UserVo();
        }
        return this._user;
    }

    set user(value: UserVo) {
        this._user = value;
    }

    get userListe(): Array<UserVo> {
        return this._userListe;
    }

    set userListe(value: Array<UserVo>) {
        this._userListe = value;
    }

    get userDetail(): UserVo {
        return this._userDetail;
    }

    set userDetail(value: UserVo) {
        this._userDetail = value;
    }

    get userSearch(): UserVo {
        return this._userSearch;
    }

    set userSearch(value: UserVo) {
        this._userSearch = value;
    }

    get userShowDetail(): boolean {
        return this._userShowDetail;
    }

    set userShowDetail(value: boolean) {
        this._userShowDetail = value;
    }

    get editableUsers(): Array<UserVo> {
        return this._editableUsers;
    }

    set editableUsers(value: Array<UserVo>) {
        this._editableUsers = value;
    }

    public findAll() {
        this.http.get<Array<UserVo>>('http://localhost:8036/generated/user/').subscribe(
            value => {
                if (value != null) {
                    this.userListe = value;
                    this.editableUsers = value;

                }
            }
        );
    }

    public saveUser() {
        this.http.post('http://localhost:8036/generated/user/', this.user).subscribe();
        this.findAll();
    }

    public editUser() {
        this.http.put('http://localhost:8036/generated/user/', this.user).subscribe();
        this.findAll();
    }

    public findUser(pojo: UserVo) {
        this.http.post<Array<UserVo>>('http://localhost:8036/generated/user/search/', pojo).subscribe(
            value => {
                this.userListe = value;
            });
    }

    public detailShow(pojo: UserVo) {
        this.http.get<UserVo>('http://localhost:8036/generated/user/id/' + pojo.id).subscribe(
            value => {
                if (value != null) {
                    this.userDetail = value;
                    this.userShowDetail = true;
                }
            });
    }


    delete(pojo: UserVo) {
        this.http.delete<UserVo>('http://localhost:8036/generated/user/id/' + pojo.id).subscribe(
            value => {
                var index = this.userListe.indexOf(pojo);
                if (index > -1) {
                    this.userListe.splice(index, 1);
                }
            }
        );


    }


    public findByid(identifier: string) {
        this.http.get<UserVo>('http://localhost:8036/generated/user/id/' + identifier).subscribe(
            value => {
                if (value != null) {
                    this.user = value;
                }
            }
        );
    }


    /***********************************************************************************************/
    private _userShowDetail: boolean;

    public detailHide() {

        this.userShowDetail = false;
        this.userDetail = null;
    }

    private _userShowEdit: boolean;

    private _userShowCreate: boolean;

    get userShowEdit(): boolean {
        return this._userShowEdit;
    }

    set userShowEdit(value: boolean) {
        this._userShowEdit = value;
    }

    get userShowCreate(): boolean {
        return this._userShowCreate;
    }

    set userShowCreate(value: boolean) {
        this._userShowCreate = value;
    }

    public editShow(pojo: UserVo) {

        this.userShowEdit = true;
        this.user = pojo;
    }

    public editHide() {

        this.userShowEdit = false;
        this.user = new UserVo();
    }

    public createShow() {

        this.userShowCreate = true;
        this.user = new UserVo();
    }

    public createHide() {

        this.userShowCreate = false;
        this.user = new UserVo();
    }
}
