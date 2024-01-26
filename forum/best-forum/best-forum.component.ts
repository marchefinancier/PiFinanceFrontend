import { Component, OnInit } from '@angular/core';
import { ForumService } from 'src/app/core/services/forum.service';


@Component({
  selector: 'app-best-forum',
  templateUrl: './best-forum.component.html',
  styleUrls: ['./best-forum.component.css']
})
export class BestForumComponent implements OnInit {

  data:any=[];
  constructor(private sr:ForumService) { }

  getdata(){
    this.sr.bestShow().subscribe((res)=>{
      this.data=res;
      console.log(res);
    })
  }
  ngOnInit(): void {
    this.getdata();
  }

}
