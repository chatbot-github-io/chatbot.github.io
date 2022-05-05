import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { BsModalService, BsModalRef, ModalDirective } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-chat-component',
  templateUrl: './chat-component.component.html',
  styleUrls: ['./chat-component.component.scss']
})
export class ChatComponentComponent implements OnInit {
  @ViewChild(ModalDirective, { static: false }) modal?: ModalDirective;
  data: string[] = [];
  array: string[] = [
    "Can I Redeem my FB before the original term?",
    "How do I pay my Credit Card bill?",
    "How can I get my Account Statement?",
    "What is the tenure of Fixed Deposit?"
  ]
  modalRef?: BsModalRef;
  count: any = 0;
  showTextbox: boolean = false;
  chatBtn: boolean = false;
  chatText = '';

  constructor(
    private modalService: BsModalService
  ) { }
  ngOnInit(): void {
    setTimeout(() => {
    this.openModal();
    }, 500);
  }
  openModal() {
    this.data = [];
    this.modal?.show();
    this.listAnimate();
  }
  onHide() {
    this.count = 0;
    clearTimeout(this.listAnimate())
  }
  listAnimate() {
      return setTimeout(() => {
        this.data.push(this.array[this.count])
        if (this.count !== (this.array.length -1)) {
          this.count++
          this.listAnimate();
        } else {
          setTimeout(() => {
            this.chatBtn = true;
            this.scrollUp();
            clearTimeout(this.listAnimate())
          }, 700);
        }
      }, 700);
  }
  enableChat() {
    this.showTextbox = true;
  }
  chat() {
    if (this.chatText) {
      this.data.push(this.chatText);
    }
    this.chatText = '';
    this.scrollUp();
  }
  scrollUp() {
    let doc: any = document.getElementById('chatlist');
    setTimeout(() => {
      doc.scrollTop += doc.offsetHeight;
    }, 200);
  }
}

