import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';
import { ContentComponent } from '../content/content.component';
import { MenuComponent } from '../menu/menu.component';

@Component({
  selector: 'app-foundpage',
  standalone: true,
  imports: [RouterOutlet,HeaderComponent,FooterComponent,MenuComponent],
  templateUrl: './foundpage.component.html',
  styleUrl: './foundpage.component.css'
})
export class FoundpageComponent {

}
