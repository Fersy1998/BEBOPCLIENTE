import { Component, OnInit } from '@angular/core';
import { NgbModalConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-landing-page-navbar',
  templateUrl: './landing-page-navbar.component.html',
  styleUrls: ['./landing-page-navbar.component.css'],
  providers: [NgbModalConfig, NgbModal]
})
export class LandingPageNavbarComponent implements OnInit {

  constructor(config: NgbModalConfig, private modalService: NgbModal) {
    config.backdrop = 'static';
    config.keyboard = false;
  
  }
  open(content: any) {
    this.modalService.open(content);
  }
  ngOnInit(): void {
  }

}
