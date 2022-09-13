import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ListItemService } from '../list-item.service';
import {CdkDragDrop, moveItemInArray} from '@angular/cdk/drag-drop';
import { NgForm } from '@angular/forms';


export class ListItem {
  constructor(
    public id: number,
    public listItem: string
  ) {
  }
}

@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.css']
})
export class ListItemComponent implements OnInit {

  closeResult: string | undefined;
  getList: ListItem[] = [];
  list: string[] = [];
  addItem!: string;

  constructor(private httpClient: HttpClient, private modalService: NgbModal, private listItemService: ListItemService) { }

  ngOnInit(): void {
    this.getListItems();
  }

  getListItems(){
    this.listItemService.getListItems().subscribe(
      response => {
        //console.log(response);
        this.getList = response;
        for(let i = 0; i < this.getList.length; i++) {
          if(this.list.includes(this.getList[i].listItem)) {
            //do nothing
          } else {
            this.list.push(this.getList[i].listItem);
          }
        }
        //console.log(this.list);
      }
    );   
  }

  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.list, event.previousIndex, event.currentIndex);
  }

  onRemove(listItem: string) {
    for(let i = 0; i < this.getList.length; i++) {
      if(this.getList[i].listItem === listItem) {
        this.listItemService.deleteListItem(this.getList[i].id).subscribe((results) => {
          this.list.splice(0,this.list.length);
          this.ngOnInit();
        });
      }
    }
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }

  addListItem(content: any) {
      this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  onAddListItem(f: NgForm) {
    this.listItemService.addListItem(f.value).subscribe(response => {
      this.ngOnInit();
    }
    );
    this.modalService.dismissAll(); //dismiss the modal
  }

  openClearAll(targetModal: any) {
    this.modalService.open(targetModal, {
      backdrop: 'static',
      size: 'lg'
    });
  }

  onClearAll() {
    this.listItemService.deleteAll().subscribe((results) => {
      this.ngOnInit();
      this.modalService.dismissAll();
    });
    this.list.splice(0,this.list.length);
  }
}
