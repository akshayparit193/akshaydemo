import { Component, Input } from '@angular/core';
import {MatCardModule} from '@angular/material/card';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
   public childdata:string;
    public demo=[{
    
    }]
   public  data=[
     {
       "name1":"akshay1",
       "name2":"akshay2",
       "name3":"akshay3",
       "name4":"akshay4",
       "name5":"akshay5",
       "name6":"akshay6",
       "name7":"akshay7",
       "name8":"akshay8",
     }
   ]
   

}


