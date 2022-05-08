import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Book } from './model/Book';

export const books: Book[] = [
  { id: '1', name: 'Book1' , price: 10, quantity: 1, category: "Poemas", img:"img1"},
  { id: '2', name: 'Book2' , price: 10, quantity: 1, category: "Romance", img:"img2"},
  { id: '3', name: 'Book3' , price: 10, quantity: 1, category: "Poemas", img:"img3"},
  { id: '4', name: 'Book4' , price: 10, quantity: 1, category: "Romance", img:"img4"},


];


@Injectable()

export class BookService
{
  private url = 'http://localhost:3000/books';

  httpOptions= {
      headers: new HttpHeaders({'content-type': 'application/json'})
  }

  constructor(private http: HttpClient){}

  getBooks(){
      return this.http.get(this.url)
  }
}
