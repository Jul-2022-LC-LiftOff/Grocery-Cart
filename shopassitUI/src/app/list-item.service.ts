import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ListItem } from './list-item/list-item.component';

@Injectable({
  providedIn: 'root'
})
export class ListItemService {

  constructor(private http: HttpClient) { }

  public getListItems(): Observable<ListItem[]> {
    const url = "http://localhost:8080/listitems";
    return this.http.get<ListItem[]>(url);
  }

  public addListItem(listItem: string): Observable<ListItem> {
    const url = "http://localhost:8080/listitems/addnew";
    return this.http.post<ListItem>(url, listItem);
  }
  
  public addListItems(listItems: string[]): Observable<ListItem[]> {
    const url = "http://localhost:8080/listitems/addnewrecipe";
    return this.http.post<ListItem[]>(url, listItems);
  }

  public deleteListItem(id: number): Observable<{}> {
    const deleteURL = 'http://localhost:8080/listitems/' + id + '/delete';
    return this.http.delete(deleteURL);
  }

  public deleteAll(): Observable<{}> {
    const deleteURL = 'http://localhost:8080/listitems/clearlist';
    return this.http.delete(deleteURL);
  }  

}
