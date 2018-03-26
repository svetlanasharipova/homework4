import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';

  ngOnInit() {
    const el = document.createElement('script');
    el.setAttribute('type', 'text/javascript');
    el.setAttribute('src', 'assets/js/index.js');
    document.body.appendChild(el);
  }
}
