import { Routes } from '@angular/router';
import { Login } from '../auth/login/login';
import { Dashboard } from '../dashboard/dashboard';
import { MyHoldings } from '../my-holdings/my-holdings';
import { CustomizeAlerts } from '../customize-alerts/customize-alerts';
import { MyNews } from '../my-news/my-news';
export const routes: Routes = [
    {
        path:'',
        component:Login
    },
    {
    path:'dashboard',
    component:Dashboard,
    children:[
        {
            path:'my-holdings',
            component:MyHoldings
        },
        {
            path:'customize-alerts',
            component:CustomizeAlerts
        },
        {
            path:'my-news',
            component:MyNews
        },
        {
            path:'',
            redirectTo:'my-holdings',
            pathMatch:'full'
        }
    ]
}
];
