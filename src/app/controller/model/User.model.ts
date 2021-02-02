import {CityVo} from './City.model';
import {RoleVo} from './role.model';
import {RatingVo} from './rating.model';
import {CommandVo} from './Command.model';
import {SpecialiteCollaboratorVo} from './SpecialiteCollaborator.model';

export class UserVo {
    public id: string;
    public email: string;
    public password: string;
    public createdDate: string;
    public roleVo: RoleVo = new RoleVo();
    public firstName: string;
    public lastName: string;
    public code: string;
    public phoneNumber: string;
    public address: string;

    public cityVo: CityVo = new CityVo();
    public longitude: string;
    public latitude: string;
    public enabled: string;
    public enabledNewCommand: string;
    public specialityCollaboratorsVos: Array<SpecialiteCollaboratorVo> = new Array<SpecialiteCollaboratorVo>();
    public ratingVos: Array<RatingVo> = new Array<RatingVo>();
    public commandVos: Array<CommandVo> = new Array<CommandVo>();
}
