import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
  
  user!:{id:String, name:string};

  constructor(private router:Router, private aroute: ActivatedRoute){}

  ngOnInit(): void {
    // this.user={
    //   id: this.aroute.snapshot.params['id'],
    //   name: this.aroute.snapshot.params['name']
    // }

    this.aroute.params.subscribe((data:Params)=>{
      // observing change in params while rendering same component with 2 urls:
      // users/2/manvi and users/3/ivnam
        this.user={
          id: this.aroute.snapshot.params['id'],
          name: this.aroute.snapshot.params['name']
        }
    })
  }

  navigate(){
    this.router.navigate(['/tdform']);
  }

  navigateByUrl(){
    this.router.navigateByUrl('/rform');
  }



  
}
