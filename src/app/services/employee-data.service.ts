import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class EmployeeDataService {
  constructor(private http: HttpClient) { }

  public getEmployee(): Observable<any> {
    return this.http.get("http://localhost:3000/employee");
  }
}
