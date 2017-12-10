import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private router:Router,
              private route:ActivatedRoute) { }

  ngOnInit() {
  }

  menuRedirect(){
    this.router.navigate(['/menu'],{relativeTo:this.route});
  }

  contactUsRedirect(){
    this.router.navigate(['/contactus'],{relativeTo:this.route});
  }

  employeeLoginRedirect(){
    this.router.navigate(['/customer'],{relativeTo:this.route});
  }

}
