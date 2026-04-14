import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class ApiService {

  private apiUrl = 'https://dummyjson.com/posts';

  async getItems(): Promise<any[]> {
    const response = await fetch(this.apiUrl);
    const data = await response.json();

    console.log("API DATA:", data); // debug

    return data.posts;   
  }
}
