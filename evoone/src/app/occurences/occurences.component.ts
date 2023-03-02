import { Component, Injectable, OnInit } from '@angular/core';
import { Apollo, gql } from 'apollo-angular';
import { OccurencesList } from './models/listOccurences';
import { DatePipe } from '@angular/common';
import { HeaderComponent } from '../header/header.component';

const getListOccurences = gql`
  query MyQuery {
    listOccurences {
      address
      data
      id
      image
      title
      user
      status
    }
  }
`;

@Component({
  selector: 'app-occurences',
  templateUrl: './occurences.component.html',
  styleUrls: ['./occurences.component.css'],
})
export class OccurencesComponent implements OnInit {
  allOccurences: OccurencesList[] = [];

  constructor(private apollo: Apollo) {}

  ngOnInit() {
    this.apollo
      .watchQuery<any>({
        query: getListOccurences,
      })
      .valueChanges.subscribe(({ data, loading }) => {
        this.allOccurences = data.listOccurences;
      });
  }
}
