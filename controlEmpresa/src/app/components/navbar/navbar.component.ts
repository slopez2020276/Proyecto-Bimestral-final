import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsuarioServicesService } from 'src/app/services/usuario-services.service';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  token: any;
  user: any;

  constructor(private route : Router, private response: UsuarioServicesService) { }

  ngOnInit(): void {
    this.token = JSON.parse(localStorage.getItem("token")!) || null;
    this.user = JSON.parse(localStorage.getItem("user")!) || null;
  }

  ngDoCheck(){
    this.token = this.response.getToken();
    this.user = JSON.parse(localStorage.getItem("user")!) || null;
  }

  logOut(){
    localStorage.clear();
    this.route.navigateByUrl("home");
  }

}
