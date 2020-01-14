import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Reel } from '../model/reel';

@Injectable({
  providedIn: 'root'
})
export class ReelService {

  private baseUrl = 'https://5e14ef4ebce1d10014baef24.mockapi.io/reels';

  constructor(private http: HttpClient) { }

  getReels(): Observable<Reel[]> {
    return this.http.get<Reel[]>(`${this.baseUrl}`);
  }

  delReel(id: number) {
    console.log('????????????????')
    return this.http.delete<any>(`${this.baseUrl}/${id}`);
  }
}
