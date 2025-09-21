import { Component } from '@angular/core';
import { MenuItem } from './core/models/menu-item.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Tour of Heroes';
  menuItems: MenuItem[] = [
    { icon: 'dashboard', route: '/dashboard', toolTip: 'Dashboard' },
    { icon: 'sports_martial_arts', route: '/heroes', toolTip: 'Heroes' }
    
  ];
}
 