import { Component, OnInit } from '@angular/core';
import {VideojuegosService, Videojuego} from "../../services/videojuegos.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-videojuegos',
  templateUrl: './videojuegos.component.html'
})
export class VideojuegosComponent implements OnInit {

  videojuegos: Videojuego[]=[];

  constructor(private _videojuegosService: VideojuegosService,
              private router: Router) { }

  ngOnInit(): void {
    this.videojuegos=this._videojuegosService.getVideojuegos();
  }

  verVideojuego(idx: number){
    this.router.navigate(['/videojuego/',idx]);
  }

}
