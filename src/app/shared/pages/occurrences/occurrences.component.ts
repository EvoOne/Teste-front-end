import { ChangeDetectionStrategy, Component, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { HomeserviceService } from 'src/app/service/homeservice.service';
import { AlertService } from '../../components/alert/alert.service';
import { Occurrences } from '../../utils/Occurences';


@Component({
  selector: 'app-occurrences',
  templateUrl: './occurrences.component.html'
})
export class OccurrencesComponent implements OnInit
{

  datas: Occurrences[] | undefined;
  list: any[] = [];
  route: any;
  constructor(
    private service: HomeserviceService,
    private router: Router
  ) { }

  ngOnInit()
  {
    this.service.getRouteChange(this.router.url)
    this.getList()
    this.getLoadOccurrences()
  }

  getList()
  {
    this.service.geListAllOccurrences().subscribe((data: any) => {
      this.datas = data.data.listOccurences;
      this.service.getChange(data.data.listOccurences)
    })
  }

  getLoadOccurrences()
  {
    this.service.pushData$.subscribe((data: any) => {
      if (data) {
        this.datas = data
      }
    })
  }
}
