import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-data-binding',
  standalone: true,
  imports: [
    FormsModule
  ],
  templateUrl: './data-binding.component.html',
  styleUrl: './data-binding.component.css'
})
export class DataBindingComponent {
  name = "";
  is_dis = false;
  someFunction(){
    this.name = ''
    this.is_dis = false;
  }
  enableButton(){
    if (this.name.length >0) {
      this.is_dis = true;
    }
  // console.log(this.is_dis,"is disables")
  }
}
