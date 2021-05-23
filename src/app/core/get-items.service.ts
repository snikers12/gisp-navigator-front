import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class GetItemsService {

  constructor(private http: HttpClient) { }

  get apiUrl(): string {
    return environment.runtimeEnvironment.GISP_API_URL.replace(/\/+$/, '');
  }

  getGrants(): Observable<any> {
    return this.http.get(this.apiUrl + '/measures/');
  }

  getRecommendedGrants(inn: string): Observable<any> {
    return this.http.get(this.apiUrl + '/measures/recommended/?inn=' + inn);
  }
}
