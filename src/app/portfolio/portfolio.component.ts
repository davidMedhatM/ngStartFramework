import { Component } from '@angular/core';
import { iportfolio } from '../interface/iportfolio';

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.css'
})
export class PortfolioComponent {

  productList:iportfolio[]=[
    {pId:1,pImg:"../../assets/images/a8eq1ubyl.png"},
    {pId:2,pImg:"../../assets/images/a8eq1ubyl.png"},
    {pId:3,pImg:"../../assets/images/a8eq1ubyl.png"},
    {pId:4,pImg:"../../assets/images/a8eq1ubyl.png"},
    {pId:5,pImg:"../../assets/images/a8eq1ubyl.png"},
    {pId:6,pImg:"../../assets/images/a8eq1ubyl.png"},
  ]

}
