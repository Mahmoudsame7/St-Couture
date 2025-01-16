import { Routes } from '@angular/router';
import { ContentComponent } from '../content/content.component';
import { ShopComponent } from '../shop/shop.component';
import { FoundpageComponent } from './foundpage.component';
import { ContactusComponent } from '../contactus/contactus.component';
import { AboutusComponent } from '../aboutus/aboutus.component';

export const routes: Routes = [
  {
    path: '',
    component: FoundpageComponent,
    children: [
      { path: '', component: ContentComponent },
      { path: 'shop', component: ShopComponent },
      { path: 'contact-us', component: ContactusComponent },
      { path: 'about-us', component: AboutusComponent },
    ],
  },
];
