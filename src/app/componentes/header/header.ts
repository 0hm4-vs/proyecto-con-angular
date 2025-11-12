import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [RouterModule],/*ACUERDATE DE ESTO, PORQUE SI NO LO HACES, NO FUNCIONARA EL NAVBAR */
  templateUrl: './header.html',
  styleUrl: './header.css'
})
export class Header {

}
