import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent {

  constructor(private router: Router  ){

  }
  name: string = '';
  email: string = '';
  onSubmit(formData: any) {
    this.name = formData.name;
    this.email = formData.email;
      // Navigate to child component route
      this.router.navigate(['/child']);
      console.log(this.name);
      console.log(this.email);
  }
}
