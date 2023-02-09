import { Component, ElementRef, OnInit, Output, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import * as moment from 'moment';
import { HomeserviceService } from 'src/app/service/homeservice.service';
import { AlertService } from '../alert/alert.service';

const today = new Date();
const hours = today.getHours();
const day = today.getDay();
const month = today.getMonth();
const year = today.getFullYear();

@Component({
  selector: 'app-toobar',
  templateUrl: './toobar.component.html'
})
export class ToobarComponent implements OnInit {
  list: any;
  listData: any[] = []
  idUser!: number;
  campaignOne = new FormGroup({
    data: new FormControl(new Date(year, day, month, hours ))
  });
  form!: FormGroup;
  disableInput: string = '';
  showOccurrence!: boolean;
  showUser!: boolean;
  showMaps!: boolean

  constructor(
    private service: HomeserviceService,
    private alertService: AlertService,
    private formBuilder: FormBuilder
  ) { }
  
  ngOnInit(): void {
    this.showInput()
    this.getListByService()
    this.form = this.formBuilder.group({
      name: ["", Validators.required],
      data: new FormControl(new Date(year, month, day, month)),
    });
  }

  showInput() {
    this.service.routeAtual$.subscribe((data: any) => {
      this.disableInput = data;     
      if (this.disableInput === "/home/occurrences" || this.disableInput === "/occurrences") {
        this.showMaps = false;
        this.showOccurrence = true;
        this.showUser = false;
        console.log(this.showOccurrence);
      } else if (this.disableInput === "/home/users" || this.disableInput === "/users") {
        this.showMaps = true
        this.showOccurrence = false;
        this.showUser = false;
      } else if (this.disableInput === "/home/maps" || this.disableInput === "/maps" ) {
        this.showMaps = true
        this.showOccurrence = false;
        this.showUser = false;
      }
      
    })
  }

  getOccurrence() {
    const name = this.form.get('name')?.value;
    const data = moment(this.form.get('data')?.value).format("YYYY-MM-DD HH:mm:ss")

    let listaData: any[] = [];

    this.service.geListAllOccurrences().subscribe((data: any) => {
      this.list = data.data.listOccurences
    })
        

    if (name == undefined || name == null || name == '') {
      this.service.geListAllOccurrences().subscribe((data: any) => {
        listaData = data.data.listOccurences;
        this.service.getChange(listaData)
      })
      
    } else {
      for (const list in this.list as []) {
        let element = this.list[list];
        if (element.user === name) {
          this.idUser = element.id

          this.service.getOccurence(this.idUser)
            .subscribe((data: any) => {
              listaData.push(data.data.getOccurence);              
              this.service.getChange(listaData)
            })
        }
      }
    }   
  }

  getUser() {
    const name = this.form.get('name')?.value;
    //const data = this.form.get('data')?.value;
    let listaData: any[] = [];
    
    if (name == undefined || name == null || name == '') {
      this.service.getListUsers().subscribe((data: any) => { 
        listaData = data.data.listUsers;
        this.service.getChange(listaData)
      })

    } else {          
      for (const list in this.list as []) {
        let user = this.list[list];         
        if (user.name === name) {          
          this.idUser = user.id
          
          this.service.getUser(this.idUser)
            .subscribe((data: any) => {              
              listaData.push(data.data.getUser);
              this.service.getChange(listaData)
            })
        }
      }
    }
  }

  getListByService() {
    this.service.pushData$.subscribe(data => {
      this.list = data;   
    })
  }
}