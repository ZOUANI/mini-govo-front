import {Component} from '@angular/core';
import {MenuItem} from 'primeng/api';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    title = 'frontend';
    sidebarItems: MenuItem[];
    openBar: Boolean;

    notifications: string[];  //contain the notifications to show
    badgeNumber: number;      //contain the number of notifications , if =0 the badge won't show
    settingItems: MenuItem[];  //contain items for the setting menu on nav bar

    constructor() {
        this.openBar = false;

        // to change icons , change the icon value on the array below to one of the font awesome classes
        this.sidebarItems = [{
            items: [
                {label: 'CategoryProduit', routerLink: '/categoryProduit/list', icon: 'fa fa-database'},
                {label: 'City', routerLink: '/city/list', icon: 'fa fa-database'},
                {label: 'Command', routerLink: '/command/list', icon: 'fa fa-database'},
                {label: 'OrderStatus', routerLink: '/orderStatus/list', icon: 'fa fa-database'},
                {label: 'SuperOrderStatus', routerLink: '/superOrderStatus/list', icon: 'fa fa-database'},
                {label: 'OrderLine', routerLink: '/orderLine/list', icon: 'fa fa-database'},
                {label: 'Comment', routerLink: '/comment/list', icon: 'fa fa-database'},
                {label: 'User', routerLink: '/user/list', icon: 'fa fa-database'},
                {label: 'MesureUnit', routerLink: '/mesureUnit/list', icon: 'fa fa-database'},
                {label: 'PricingCollaborator', routerLink: '/pricingCollaborator/list', icon: 'fa fa-database'},
                {label: 'Product', routerLink: '/product/list', icon: 'fa fa-database'},
                {label: 'SuperCategoryProduct', routerLink: '/superCategoryProduct/list', icon: 'fa fa-database'},
                {label: 'Rating', routerLink: '/rating/list', icon: 'fa fa-database'},
                {label: 'Role', routerLink: '/role/list', icon: 'fa fa-database'}
            ]
        }];

        this.settingItems = [
            {
                label: '',
                items: [
                    {label: 'settings', routerLink: '/', icon: 'fa fa-cog'},
                    {label: 'profile', routerLink: '/', icon: 'fa fa-user'}]
            },
            {
                label: '',
                items: [
                    {label: 'Log out', routerLink: '/', icon: 'fa fa-sign-out'}]
            }
        ];

        this.notifications = ['Test 1', 'Use equal casing. Compare these module identifiers:', 'There are multiple modules with names that only differ in casing.\n' +
        'This can lead to unexpected behavior when compiling on a filesystem with other case-semantic.'];

        this.badgeNumber = this.notifications.length;


    }

    buttonClick() {
        if (this.openBar == true) {
            this.openBar = false;
            console.log('if ' + this.openBar);
        } else {
            this.openBar = true;
            console.log('else ' + this.openBar);
        }
        console.log('none ' + this.openBar);
    }

    markRead() {
        this.badgeNumber = 0;

    }

    deleteNot() {
        this.notifications = [];
        this.badgeNumber = 0;
    }


}
