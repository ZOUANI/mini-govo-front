import {MesureUnitVo} from './MesureUnit.model';
import {CategoryProduitVo} from './CategoryProduit.model';

export class ProductVo {
    public label: string;
    public price: string;
    public imagePath: string;
    public reference: string;
    public id: string;
    public priceMax: string;
    public priceMin: string;
    public categoryProduitVo: CategoryProduitVo = new CategoryProduitVo();
    public mesureUnitVo: MesureUnitVo = new MesureUnitVo();
}
