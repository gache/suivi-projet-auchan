import { Component, OnInit } from '@angular/core';
// Importation de la route
import { Router } from '@angular/router';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {


// on a injecte la route dans le constructor
  constructor(private route: Router,
               ) {

  }

  ngOnInit() {
  }
// Function pour la recherche de projet en plus pour naviger vers la page recherche projet
  rechercheProjet(terme: string) {
    console.log(terme);
    this.route.navigate(['/recherche-projet', terme]);


  }

}
