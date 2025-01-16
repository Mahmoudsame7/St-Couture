import { Routes } from '@angular/router';
import { ContentComponent } from '../content/content.component';
import { ShopComponent } from '../shop/shop.component';
import { PagenotfoundComponent } from '../pagenotfound/pagenotfound.component';
import { FoundpageComponent } from '../foundpage/foundpage.component';

export const routes: Routes = [
    {
        path: '',
        loadChildren: () => import('../foundpage/foundpage.routes').then(m => m.routes)
    },
    { path: '**', component: PagenotfoundComponent },
];

