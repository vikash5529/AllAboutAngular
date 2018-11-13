import { UserinfoService } from './../userinfo.service';
import { Component, OnInit, AfterContentInit } from '@angular/core';
import { FormControl,Validators } from '@angular/forms';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit, AfterContentInit {
public data;
name=new FormControl('',Validators.required);
  constructor(private service:UserinfoService) { }

  ngOnInit() {
    this.data='oldvalue';
    this.checkName();
  }

  ngAfterContentInit()
  {
     this.service.fetchData().subscribe(value=>console.log(value));
  }

 checkName()
 {
   this.name.valueChanges.subscribe(val=>{
     console.log(val);
     this.data= "newvalue";
    }
    );
 } 

}
