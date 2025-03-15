import { Component, OnInit } from '@angular/core';
import { ApiserviceService } from '../../services/apiservice.service';
import { CommonModule } from '@angular/common';
import { IUser } from '../../shared/interface/userInterfaces';
import { FindPipe } from '../../pipes/find.pipe';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [CommonModule,FindPipe,FormsModule],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent implements OnInit{

  userData:IUser[] = []
  name='';
  company='';
  designation='';

  constructor(
    private service:ApiserviceService
  ){}

  ngOnInit(): void {
    this.service.fetchData().subscribe((data)=>{
      this.userData = data  
    })
  }

}
