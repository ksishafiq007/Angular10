import { Component } from '@angular/core';
import { getMaxListeners } from 'process';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  appName = 'blog app';
  show="green";
  name='ksi';
  myName='Shafiqul';
  color="blue";
  
  getValClick(val)
  {
    console.warn(val)
    
  }

  data=['ksi','robin','paplu','lipi','mili']
data2=[
  {
    name:'ksi',
    age:27,
    email:"ksi@yahoo.com"
  },
  {
    name:'supti',
    age:29,
    email:"himel@gmail.com"
  },
  {
    name:'rifat',
    age:20,
    email:"rafi@gmail.com"
  },
  {
    name:'jamil',
    age:23,
    email:"tamil@gmail.com"
  }
]

  nameExtra="Shafiq";
  disabledBox=true
  enableBox(){
   this.disabledBox=false
  }
  

  getName()
  { return "KSI Shafiq"}

  getNameExtra()
  { return this.name}

  getNameForClick(name)
  { 
    alert(name)
  }

  obj={
    name:'Shafiq',
    age:25
  }

  arr=['Jibon','Tamanna','Himel']
  siteUrl=window.location.href

  myEvent(evt){
    console.warn(evt)
  }

  currentVal=""
  getVal(val)
  {
    console.warn(val)
    this.currentVal=val
  }
  currentVal2=""
  getVal2(val2)
  {
    console.warn(val2)
    this.currentVal2=val2
  }
  
}
