import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-databinding',
  templateUrl: './databinding.component.html',
  styleUrls: ['./databinding.component.css']
})
export class DatabindingComponent implements OnInit {

  constructor() {
  }

  figura1: string = "https://queconceito.com.br/wp-content/uploads/Paisagem-Natural.jpg";

  getValor() {
    return 100;
  }

  valor = 100;

incrementa(){
this.valor++;
}

decrementa(){
this.valor--;
}

nome:String="";
alor:String="";

parouimpar(alor){
  
  if(alor%2 === 0){
    return "par";
  } else{
    return "impar";
  }

}

  ngOnInit() {
  }

}
