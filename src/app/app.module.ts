import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {CalendarModule} from 'primeng/calendar';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {AppRoutingModule} from './app-routing.module';
import {CategoryProduitCreateComponent} from './view/categoryProduit/create/categoryProduit-create.component';
import {CategoryProduitlistComponent} from './view/categoryProduit/list/categoryProduit-list.component';
import {CategoryProduitDetailsComponent} from './view/categoryProduit/details/categoryProduit-details.component';
import {CategoryProduitEditComponent} from './view/categoryProduit/edit/categoryProduit-edit.component';
import {CategoryProduitComponent} from './view/categoryProduit/categoryProduit.component';
import {CityCreateComponent} from './view/city/create/city-create.component';
import {CitylistComponent} from './view/city/list/city-list.component';
import {CityDetailsComponent} from './view/city/details/city-details.component';
import {CityEditComponent} from './view/city/edit/city-edit.component';
import {CityComponent} from './view/city/city.component';
import {CommandCreateComponent} from './view/command/create/command-create.component';
import {CommandlistComponent} from './view/command/list/command-list.component';
import {CommandDetailsComponent} from './view/command/details/command-details.component';
import {CommandEditComponent} from './view/command/edit/command-edit.component';
import {CommandComponent} from './view/command/command.component';
import {OrderStatusCreateComponent} from './view/orderStatus/create/orderStatus-create.component';
import {OrderStatuslistComponent} from './view/orderStatus/list/orderStatus-list.component';
import {OrderStatusDetailsComponent} from './view/orderStatus/details/orderStatus-details.component';
import {OrderStatusEditComponent} from './view/orderStatus/edit/orderStatus-edit.component';
import {OrderStatusComponent} from './view/orderStatus/orderStatus.component';
import {SuperOrderStatusCreateComponent} from './view/superOrderStatus/create/superOrderStatus-create.component';
import {SuperOrderStatuslistComponent} from './view/superOrderStatus/list/superOrderStatus-list.component';
import {SuperOrderStatusDetailsComponent} from './view/superOrderStatus/details/superOrderStatus-details.component';
import {SuperOrderStatusEditComponent} from './view/superOrderStatus/edit/superOrderStatus-edit.component';
import {SuperOrderStatusComponent} from './view/superOrderStatus/superOrderStatus.component';
import {OrderLineCreateComponent} from './view/orderLine/create/orderLine-create.component';
import {OrderLinelistComponent} from './view/orderLine/list/orderLine-list.component';
import {OrderLineDetailsComponent} from './view/orderLine/details/orderLine-details.component';
import {OrderLineEditComponent} from './view/orderLine/edit/orderLine-edit.component';
import {OrderLineComponent} from './view/orderLine/orderLine.component';
import {CommentCreateComponent} from './view/comment/create/comment-create.component';
import {CommentlistComponent} from './view/comment/list/comment-list.component';
import {CommentDetailsComponent} from './view/comment/details/comment-details.component';
import {CommentEditComponent} from './view/comment/edit/comment-edit.component';
import {CommentComponent} from './view/comment/comment.component';
import {UserCreateComponent} from './view/user/create/user-create.component';
import {UserlistComponent} from './view/user/list/user-list.component';
import {UserDetailsComponent} from './view/user/details/user-details.component';
import {UserEditComponent} from './view/user/edit/user-edit.component';
import {UserComponent} from './view/user/user.component';
import {MesureUnitCreateComponent} from './view/mesureUnit/create/mesureUnit-create.component';
import {MesureUnitlistComponent} from './view/mesureUnit/list/mesureUnit-list.component';
import {MesureUnitDetailsComponent} from './view/mesureUnit/details/mesureUnit-details.component';
import {MesureUnitEditComponent} from './view/mesureUnit/edit/mesureUnit-edit.component';
import {MesureUnitComponent} from './view/mesureUnit/mesureUnit.component';
import {PricingCollaboratorCreateComponent} from './view/pricingCollaborator/create/pricingCollaborator-create.component';
import {PricingCollaboratorlistComponent} from './view/pricingCollaborator/list/pricingCollaborator-list.component';
import {PricingCollaboratorDetailsComponent} from './view/pricingCollaborator/details/pricingCollaborator-details.component';
import {PricingCollaboratorEditComponent} from './view/pricingCollaborator/edit/pricingCollaborator-edit.component';
import {PricingCollaboratorComponent} from './view/pricingCollaborator/pricingCollaborator.component';
import {ProductCreateComponent} from './view/product/create/product-create.component';
import {ProductlistComponent} from './view/product/list/product-list.component';
import {ProductDetailsComponent} from './view/product/details/product-details.component';
import {ProductEditComponent} from './view/product/edit/product-edit.component';
import {ProductComponent} from './view/product/product.component';
import {SuperCategoryProductCreateComponent} from './view/superCategoryProduct/create/superCategoryProduct-create.component';
import {SuperCategoryProductlistComponent} from './view/superCategoryProduct/list/superCategoryProduct-list.component';
import {SuperCategoryProductDetailsComponent} from './view/superCategoryProduct/details/superCategoryProduct-details.component';
import {SuperCategoryProductEditComponent} from './view/superCategoryProduct/edit/superCategoryProduct-edit.component';
import {SuperCategoryProductComponent} from './view/superCategoryProduct/superCategoryProduct.component';
import {RatingCreateComponent} from './view/rating/create/rating-create.component';
import {RatinglistComponent} from './view/rating/list/rating-list.component';
import {RatingDetailsComponent} from './view/rating/details/rating-details.component';
import {RatingEditComponent} from './view/rating/edit/rating-edit.component';
import {RatingComponent} from './view/rating/rating.component';
import {RoleCreateComponent} from './view/role/create/role-create.component';
import {RolelistComponent} from './view/role/list/role-list.component';
import {RoleDetailsComponent} from './view/role/details/role-details.component';
import {RoleEditComponent} from './view/role/edit/role-edit.component';
import {RoleComponent} from './view/role/role.component';
import {NavbarComponent} from './navbar/navbar.component';
import {LandingPageComponent} from './landing-page/landing-page.component';


import {OverlayPanelModule} from 'primeng/overlaypanel';

import {MenuModule} from 'primeng/menu';
import { CommandOrderLineComponent } from './view/command/command-order-line/command-order-line.component';

@NgModule({
    declarations: [
        CategoryProduitCreateComponent,
        CategoryProduitlistComponent,
        CategoryProduitDetailsComponent,
        CategoryProduitEditComponent,
        CategoryProduitComponent,
        CityCreateComponent,
        CitylistComponent,
        CityDetailsComponent,
        CityEditComponent,
        CityComponent,
        CommandCreateComponent,
        CommandlistComponent,
        CommandDetailsComponent,
        CommandEditComponent,
        CommandComponent,
        OrderStatusCreateComponent,
        OrderStatuslistComponent,
        OrderStatusDetailsComponent,
        OrderStatusEditComponent,
        OrderStatusComponent,
        SuperOrderStatusCreateComponent,
        SuperOrderStatuslistComponent,
        SuperOrderStatusDetailsComponent,
        SuperOrderStatusEditComponent,
        SuperOrderStatusComponent,
        OrderLineCreateComponent,
        OrderLinelistComponent,
        OrderLineDetailsComponent,
        OrderLineEditComponent,
        OrderLineComponent,
        CommentCreateComponent,
        CommentlistComponent,
        CommentDetailsComponent,
        CommentEditComponent,
        CommentComponent,
        UserCreateComponent,
        UserlistComponent,
        UserDetailsComponent,
        UserEditComponent,
        UserComponent,
        MesureUnitCreateComponent,
        MesureUnitlistComponent,
        MesureUnitDetailsComponent,
        MesureUnitEditComponent,
        MesureUnitComponent,
        PricingCollaboratorCreateComponent,
        PricingCollaboratorlistComponent,
        PricingCollaboratorDetailsComponent,
        PricingCollaboratorEditComponent,
        PricingCollaboratorComponent,
        ProductCreateComponent,
        ProductlistComponent,
        ProductDetailsComponent,
        ProductEditComponent,
        ProductComponent,
        SuperCategoryProductCreateComponent,
        SuperCategoryProductlistComponent,
        SuperCategoryProductDetailsComponent,
        SuperCategoryProductEditComponent,
        SuperCategoryProductComponent,
        RatingCreateComponent,
        RatinglistComponent,
        RatingDetailsComponent,
        RatingEditComponent,
        RatingComponent,
        RoleCreateComponent,
        RolelistComponent,
        RoleDetailsComponent,
        RoleEditComponent,
        RoleComponent,
        AppComponent,
        LandingPageComponent,
        NavbarComponent,
        CommandOrderLineComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpClientModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        CalendarModule,
        OverlayPanelModule,
        MenuModule,
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
