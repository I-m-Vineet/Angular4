import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  empl = {name: 'Vineet here',
        photo: '../../assets/imgs/face2.jpg'}
  name = "CT TRAINING";
  ///two way data binding
  selectedCountry="";
  country = ["IND", "ENG" , "AUS"];
  
  constructor()
    {
        console.log('Employee component instatiated');
    }

  ngOnInit() {
  }

}
