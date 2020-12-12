import {UserVo} from './User.model';
import {CommandVo} from './Command.model';

export class CommentVo {
    public commentDate: string;
    public message: string;
    public id: string;
    public commentDateMax: string;
    public commentDateMin: string;
    public userVo: UserVo = new UserVo();
    public commandVo: CommandVo = new CommandVo();


}
