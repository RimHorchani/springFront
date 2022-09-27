import { Component, Input, OnInit } from '@angular/core';
import { ServiceService } from 'src/app/services/service.service';
import { Client } from '../../model/client';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.css']
})
export class ClientsComponent implements OnInit {
 @Input() clients:Client[]=[];

  constructor(
    private service: ServiceService
  ) { }

  ngOnInit(): void {
    this.service.getClients().subscribe({
      next:(clients:Client[])=>{
        this.clients=clients;
        console.log(clients)
      },
      error: ()=>{}
    })
  }


}
