import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {CategoryProduitlistComponent} from './view/categoryProduit/list/categoryProduit-list.component';
import {CategoryProduitCreateComponent} from './view/categoryProduit/create/categoryProduit-create.component';
import {CategoryProduitDetailsComponent} from './view/categoryProduit/details/categoryProduit-details.component';
import {CategoryProduitEditComponent} from './view/categoryProduit/edit/categoryProduit-edit.component';
import {CitylistComponent} from './view/city/list/city-list.component';
import {CityCreateComponent} from './view/city/create/city-create.component';
import {CityDetailsComponent} from './view/city/details/city-details.component';
import {CityEditComponent} from './view/city/edit/city-edit.component';
import {CommandlistComponent} from './view/command/list/command-list.component';
import {CommandCreateComponent} from './view/command/create/command-create.component';
import {CommandDetailsComponent} from './view/command/details/command-details.component';
import {CommandEditComponent} from './view/command/edit/command-edit.component';
import {OrderStatuslistComponent} from './view/orderStatus/list/orderStatus-list.component';
import {OrderStatusCreateComponent} from './view/orderStatus/create/orderStatus-create.component';
import {OrderStatusDetailsComponent} from './view/orderStatus/details/orderStatus-details.component';
import {OrderStatusEditComponent} from './view/orderStatus/edit/orderStatus-edit.component';
import {SuperOrderStatuslistComponent} from './view/superOrderStatus/list/superOrderStatus-list.component';
import {SuperOrderStatusCreateComponent} from './view/superOrderStatus/create/superOrderStatus-create.component';
import {SuperOrderStatusDetailsComponent} from './view/superOrderStatus/details/superOrderStatus-details.component';
import {SuperOrderStatusEditComponent} from './view/superOrderStatus/edit/superOrderStatus-edit.component';
import {OrderLinelistComponent} from './view/orderLine/list/orderLine-list.component';
import {OrderLineCreateComponent} from './view/orderLine/create/orderLine-create.component';
import {OrderLineDetailsComponent} from './view/orderLine/details/orderLine-details.component';
import {OrderLineEditComponent} from './view/orderLine/edit/orderLine-edit.component';
import {CommentlistComponent} from './view/comment/list/comment-list.component';
import {CommentCreateComponent} from './view/comment/create/comment-create.component';
import {CommentDetailsComponent} from './view/comment/details/comment-details.component';
import {CommentEditComponent} from './view/comment/edit/comment-edit.component';
import {UserlistComponent} from './view/user/list/user-list.component';
import {UserCreateComponent} from './view/user/create/user-create.component';
import {UserDetailsComponent} from './view/user/details/user-details.component';
import {UserEditComponent} from './view/user/edit/user-edit.component';
import {MesureUnitlistComponent} from './view/mesureUnit/list/mesureUnit-list.component';
import {MesureUnitCreateComponent} from './view/mesureUnit/create/mesureUnit-create.component';
import {MesureUnitDetailsComponent} from './view/mesureUnit/details/mesureUnit-details.component';
import {MesureUnitEditComponent} from './view/mesureUnit/edit/mesureUnit-edit.component';
import {PricingCollaboratorlistComponent} from './view/pricingCollaborator/list/pricingCollaborator-list.component';
import {PricingCollaboratorCreateComponent} from './view/pricingCollaborator/create/pricingCollaborator-create.component';
import {PricingCollaboratorDetailsComponent} from './view/pricingCollaborator/details/pricingCollaborator-details.component';
import {PricingCollaboratorEditComponent} from './view/pricingCollaborator/edit/pricingCollaborator-edit.component';
import {ProductlistComponent} from './view/product/list/product-list.component';
import {ProductCreateComponent} from './view/product/create/product-create.component';
import {ProductDetailsComponent} from './view/product/details/product-details.component';
import {ProductEditComponent} from './view/product/edit/product-edit.component';
import {SuperCategoryProductlistComponent} from './view/superCategoryProduct/list/superCategoryProduct-list.component';
import {SuperCategoryProductCreateComponent} from './view/superCategoryProduct/create/superCategoryProduct-create.component';
import {SuperCategoryProductDetailsComponent} from './view/superCategoryProduct/details/superCategoryProduct-details.component';
import {SuperCategoryProductEditComponent} from './view/superCategoryProduct/edit/superCategoryProduct-edit.component';
import {RatinglistComponent} from './view/rating/list/rating-list.component';
import {RatingCreateComponent} from './view/rating/create/rating-create.component';
import {RatingDetailsComponent} from './view/rating/details/rating-details.component';
import {RatingEditComponent} from './view/rating/edit/rating-edit.component';
import {RolelistComponent} from './view/role/list/role-list.component';
import {RoleCreateComponent} from './view/role/create/role-create.component';
import {RoleDetailsComponent} from './view/role/details/role-details.component';
import {RoleEditComponent} from './view/role/edit/role-edit.component';
import {AppComponent} from './app.component';
import {LandingPageComponent} from './landing-page/landing-page.component';
import {CommandOrderLineComponent} from './view/command/command-order-line/command-order-line.component';

const routes: Routes = [
        {
            path: 'categoryProduit', children: [
                {path: 'list', component: CategoryProduitlistComponent},
                {path: 'create', component: CategoryProduitCreateComponent},
                {path: 'details', component: CategoryProduitDetailsComponent},
                {path: 'edit', component: CategoryProduitEditComponent}
            ]
        },
        {
            path: 'city', children: [
                {path: 'list', component: CitylistComponent},
                {path: 'create', component: CityCreateComponent},
                {path: 'details', component: CityDetailsComponent},
                {path: 'edit', component: CityEditComponent}
            ]
        },
        {
            path: 'command', children: [
                {path: 'list', component: CommandlistComponent},
                {path: 'orderLine', component: CommandOrderLineComponent},
                {path: 'create', component: CommandCreateComponent},
                {path: 'details', component: CommandDetailsComponent},
                {path: 'edit', component: CommandEditComponent}
            ]
        },
        {
            path: 'orderStatus', children: [
                {path: 'list', component: OrderStatuslistComponent},
                {path: 'create', component: OrderStatusCreateComponent},
                {path: 'details', component: OrderStatusDetailsComponent},
                {path: 'edit', component: OrderStatusEditComponent}
            ]
        },
        {
            path: 'superOrderStatus', children: [
                {path: 'list', component: SuperOrderStatuslistComponent},
                {path: 'create', component: SuperOrderStatusCreateComponent},
                {path: 'details', component: SuperOrderStatusDetailsComponent},
                {path: 'edit', component: SuperOrderStatusEditComponent}
            ]
        },
        {
            path: 'orderLine', children: [
                {path: 'list', component: OrderLinelistComponent},
                {path: 'create', component: OrderLineCreateComponent},
                {path: 'details', component: OrderLineDetailsComponent},
                {path: 'edit', component: OrderLineEditComponent}
            ]
        },
        {
            path: 'comment', children: [
                {path: 'list', component: CommentlistComponent},
                {path: 'create', component: CommentCreateComponent},
                {path: 'details', component: CommentDetailsComponent},
                {path: 'edit', component: CommentEditComponent}
            ]
        },
        {
            path: 'user', children: [
                {path: 'list', component: UserlistComponent},
                {path: 'create', component: UserCreateComponent},
                {path: 'details', component: UserDetailsComponent},
                {path: 'edit', component: UserEditComponent}
            ]
        },
        {
            path: 'mesureUnit', children: [
                {path: 'list', component: MesureUnitlistComponent},
                {path: 'create', component: MesureUnitCreateComponent},
                {path: 'details', component: MesureUnitDetailsComponent},
                {path: 'edit', component: MesureUnitEditComponent}
            ]
        },
        {
            path: 'pricingCollaborator', children: [
                {path: 'list', component: PricingCollaboratorlistComponent},
                {path: 'create', component: PricingCollaboratorCreateComponent},
                {path: 'details', component: PricingCollaboratorDetailsComponent},
                {path: 'edit', component: PricingCollaboratorEditComponent}
            ]
        },
        {
            path: 'product', children: [
                {path: 'list', component: ProductlistComponent},
                {path: 'create', component: ProductCreateComponent},
                {path: 'details', component: ProductDetailsComponent},
                {path: 'edit', component: ProductEditComponent}
            ]
        },
        {
            path: 'superCategoryProduct', children: [
                {path: 'list', component: SuperCategoryProductlistComponent},
                {path: 'create', component: SuperCategoryProductCreateComponent},
                {path: 'details', component: SuperCategoryProductDetailsComponent},
                {path: 'edit', component: SuperCategoryProductEditComponent}
            ]
        },
        {
            path: 'rating', children: [
                {path: 'list', component: RatinglistComponent},
                {path: 'create', component: RatingCreateComponent},
                {path: 'details', component: RatingDetailsComponent},
                {path: 'edit', component: RatingEditComponent}
            ]
        },
        {
            path: 'role', children: [
                {path: 'list', component: RolelistComponent},
                {path: 'create', component: RoleCreateComponent},
                {path: 'details', component: RoleDetailsComponent},
                {path: 'edit', component: RoleEditComponent}
            ]
        },
        {path: '', component: LandingPageComponent}
    ]
;

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
