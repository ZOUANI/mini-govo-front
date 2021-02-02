import {CategoryProduitVo} from './CategoryProduit.model';
import {UserVo} from './User.model';

export class SpecialiteCollaboratorVo {
    public id: string;
    public categoryProduitVo: CategoryProduitVo = new CategoryProduitVo();
    public collaboratorVo: UserVo = new UserVo();
}
