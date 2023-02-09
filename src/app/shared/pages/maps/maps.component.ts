import { Component, OnInit } from '@angular/core';
import { HomeserviceService } from 'src/app/service/homeservice.service';
import { MapsAPILoader } from '@agm/core';
import { Router } from '@angular/router';

interface marker {
  lat: number;
  lng: number;
  id: string;
  address: string;
  data: string;
  title: string;
  user: string;
  status: string;
  draggable: boolean;
  image: string
}

@Component({
  selector: 'app-maps',
  templateUrl: './maps.component.html'
})
export class MapsComponent implements OnInit {
  listMarkes: any;
  constructor(
    private service: HomeserviceService,
    private router: Router,
    private markesMap: MapsAPILoader,
  ) { }

  ngOnInit(): void {
    this.service.getRouteChange(this.router.url);
  }
  zoom: number = 15;
  lat: number = -29.678521;
  lng: number = -51.067501;
  listMarkers: marker[] = [
    {
      lat: 0,
      lng: 0,
      id: '',
      address: '',
      data: '',
      title: '',
      user: '',
      status: '',
      draggable: false,
      image: '',
    }
  ]

  mapClicked($event: any)
  {
    this.markers.push({
      lat: $event.coords.lat,
      lng: $event.coords.lng,
      draggable: true,
      id: '',
      address: '',
      data: '',
      title: '',
      user: '',
      status: '',
      image: ''
    });
  }

  markerDragEnd(m: marker, $event: any)
  {
    // console.log('dragEnd', m, $event);
  }

  markers: marker[] =
  [
    {
      draggable: true,
      address: "175 R. Silva Só Porto Alegre, Rio Grande do Sul",
      data: "12/1/2022 15:00:00",
      id: "2",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1ZtEFdAsFdX1K-2FXh6MLv_MVXGZxKE2N-A&usqp=CAU",
      title: "Troca de Lâmpadas",
      user: "Isabel Pimentel",
      status: "active",
      lat: -30.03937370241506,
      lng: 51.20423480280466
    },
    {
      draggable: true,
      address: "150 R. Cabral Porto Alegre, Rio Grande do Sul",
      data: "02/01/2022 15:00:00",
      id: "8",
      image: "https://img.olhardigital.com.br/wp-content/uploads/2019/05/20190528115021.jpg",
      title: "Semáforo Desligado",
      user: "Escobar Ito",
      status: "active",
      lat: -30.0329074770025,
      lng: -51.20681419186422
    },
    {
      draggable: true,
      address: "997 Av. Venâncio Aires Porto Alegre, Rio Grande do Sul",
      data: "01/02/2022 15:00:00",
      id: "9",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGxfubj0XjilsiTrcOG5H3C768w1v7x_E2NA&usqp=CAU",
      title: "Isabel Pimentel",
      user: "Gabriel Macedo",
      status: "closed",
      lat: -30.03937370241506,
      lng: -51.20423480280466
    },
    {
      draggable: true,
      address: "1293 R. Santa Cecília Porto Alegre, Rio Grande do Sul",
      data: "25/01/2022 15:00:00",
      id: "1",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShLeO2t_K1W4d-1soWWlnvFKqZHjynAEWjsg&usqp=CAU",
      title: "Troca de Lâmpadas",
      user: "Gabriel Macedo",
      status: "active",
      lat: -30.044022686448063,
      lng: -51.19840608746038
    },
    {
      draggable: true,
      address: "205 Av. Cristóvão Colombo Porto Alegre, Rio Grande do Sul",
      data: "30/01/2022 15:00:00",
      id: "6",
      image: "https://www.jatai.go.gov.br/wp-content/uploads/2022/08/dano-a-patrimonio-avenida-veriano.png",
      title: "Dano ao Patrimônio",
      user: "Cláudia Serrano",
      status: "active",
      lat: -30.027404277321104,
      lng: -51.215395864881316
    },
    {
      draggable: true,
      address: "1171 R. Voluntários da Pátria Porto Alegre, Rio Grande do Sul",
      data: "01/02/2022 15:00:00",
      id: "5",
      image: "https://prefeitura.rio/wp-content/uploads/2021/07/WhatsApp-Image-2021-07-09-at-17.59.39.jpeg",
      title: "Troca de Lâmpadas",
      user: "Escobar Ito",
      status: "closed",
      lat: -30.0232948290739,
      lng: -51.21638618931318
    },
    {
      draggable: true,
      address: "794 R. Ramiro Barcelos Porto Alegre, Rio Grande do Sul",
      data: "05/01/2022 15:00:00",
      id: "4",
      image: "https://img.freepik.com/fotos-premium/lampada-de-rua-close-up-luzes-de-rua-grandes-em-um-cruzamento-de-grande-rodovia-fechar-se-lampada-de-rua-moderna-lampada-eletrica-velha-de-iluminacao-publica-no-fundo-do-ceu-azul-e-nuvens-durante-o-dia_132482-2942.jpg?w=2000",
      title: "Troca de Lâmpadas",
      user: "Isabel Pimentel",
      status: "waiting",
      lat: -30.025628017569364,
      lng: -51.209434449537746
    },
    {
      draggable: true,
      address: "180 R. Castro Alves Porto Alegre, Rio Grande do Sul",
      data: "01/02/2022 15:00:00",
      id: "7",
      image: "https://s2.glbimg.com/lsI_AwCJ62udmju72pKLNuGXyMs=/0x0:1164x793/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2020/G/F/Y8wrqUQgS8IMqZyurzfQ/placa-2.jpg",
      title: "Dano ao Patrimônio",
      user: "Gabriel Macedo",
      status: "waiting",
      lat: -30.029924131982046,
      lng: -51.20887013348703
    },
    {
      draggable: true,
      address: "330 R. Domingos Crescêncio Porto Alegre, Rio Grande do Sul",
      data: "01/02/2022 15:00:00",
      id: "11",
      image: "https://st2.depositphotos.com/28995956/49126/i/600/depositphotos_491263728-stock-photo-badly-parked-car-with-tire.jpg",
      title: "Veículos Mal Estacionados",
      user: "Gabriel Macedo",
      status: "closed",
      lat: -30.04920251899799,
      lng: -51.2069918316403
    },
    {
      draggable: true,
      address: "437 R. Felipe Camarão Porto Alegre, Rio Grande do Sul",
      data: "01/02/2022 15:00:00",
      id: "3",
      image: "https://www.santos.sp.gov.br/static/files_www/styles/newspagesimples/public/field/image/ilumina_3.jpg?itok=Xv4mOzuv",
      title: "Troca de Lâmpadas",
      user: "Gabriel Macedo",
      status: "active",
      lat: -30.032882691466263,
      lng: -51.20978776047701
    },
    {
      draggable: true,
      address: "304 Tv. Dezenove de Novembro Porto Alegre, Rio Grande do Sul",
      data: "01/02/2022 15:00:00",
      id: "12",
      image: "https://st.depositphotos.com/1203257/2741/i/600/depositphotos_27411031-stock-photo-bad-driver-on-parking.jpg",
      title: "Veículos Mal Estacionados",
      user: "Escobar Ito",
      status: "active",
      lat: -30.05514100700489,
      lng: -51.20478084953134
    },
    {
      draggable: true,
      address: "727 R. Santana Porto Alegre, Rio Grande do Sul",
      data: "05/01/2022 15:00:00",
      id: "10",
      image: "https://www.maracanau.ce.gov.br/wp-content/uploads/2017/07/Sem%C3%A1foro-com-LEDs.jpg",
      title: "Semáforo Desligado",
      user: "Cláudia Serrano",
      status: "active",
      lat: -30.04443176189156,
      lng: -51.210354631640485
    }
  ]
}


