import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-medicareadmin',
  templateUrl: './medicareadmin.component.html',
  styleUrls: ['./medicareadmin.component.css']
})
export class MedicareadminComponent implements OnInit {

  checkstatus=0
  errorcheckstatus=0
  portal=false
  constructor() { }

  ngOnInit(): void {
  }

  checkadmin(admindata:{name:string,password:string}){
    if(admindata.name=='sindhuja' && admindata.password=='1234'){
      this.checkstatus=1
      this.portal=true
    }
    else{
      this.errorcheckstatus=-1
    }

  }

}
