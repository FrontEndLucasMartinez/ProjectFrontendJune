import { HttpClient } from '@angular/common/http';
import {
  Component,
  Injectable,
  OnInit,
} from '@angular/core';

import { Observable } from 'rxjs';

import { HelloService } from './hello.service';

@Injectable({
  providedIn: 'root'
})
export class HelloService {
  constructor(private http: HttpClient) {}

  getHello(): Observable<any> {
    return this.http.get('/api/hello');
  }
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  message: string;

  constructor(private helloService: HelloService) {}

  ngOnInit(): void {
    this.helloService.getHello().subscribe(data => {
      this.message = data.message;
    });
    "architect": {
  "serve": {
    "options": {
      "proxyConfig": "src/proxy.conf.json"
    }
  }
}
  }
}
