import { Component, OnInit } from '@angular/core';
import { ForumService } from 'src/app/core/services/forum.service';

@Component({
  selector: 'app-forum',
  templateUrl: './forum.component.html',
  styleUrls: ['./forum.component.css']
})
export class ForumComponent implements OnInit {
TextPost: any;
selectedInput: any;

textComment:any;
data:any=[].reverse();
dataComment:any=[];
idUser=1;
user: any = {
  "idUser": 1,
  "lastName": "client",
  "firstName": "client",
  "cin": 123456,
  "dateBirth": null,
  "phoneNumber": 23456784,
  "email": "client@gmail.com",
  "isEmployed": null,
  "isVerified": null,
  "role": "CLIENT",
  "account": null
};
  constructor(private sr:ForumService) { }

addForum()
{
  let data:any ={
    text:this.TextPost,
    user:this.user
  }
  this.sr.addForum(data).subscribe((res)=>{
    this.getPost();
    console.log(res);
  })
}

getPost(){
  this.sr.getPost().subscribe((res)=>{
    this.data=res;
    //loop for get comment

    console.log(res);
  })
}

getComment(){
  this.sr.getComment().subscribe((res)=>{
    this.dataComment=res;
    console.log(res);
  }
  )
}
addComment(idPost: any, textComment: any) {
  this.selectedInput = idPost;

  let data: any = {
    "text": textComment,
    user: this.user
  }

  this.sr.addComment(data).subscribe((res) => {
    this.getComment();
    console.log(res);
  });
}
getCommentText(idPost: any): string {
  const comment = this.dataComment.find((c: { post: { idPost: any; }; }) => c.post.idPost === idPost);
  return comment ? comment.text : '';
}

dislike(idPost:any){
  this.sr.dislike(idPost).subscribe((res)=>{
    this.getPost();
    console.log(res);
  }
  )
}


likePost(idPost:any){
  this.sr.like(idPost).subscribe((res)=>{
    this.getPost();
    console.log(res);
  })
}
  ngOnInit(): void {
    this.getPost();
    this.getComment();
  }

}
