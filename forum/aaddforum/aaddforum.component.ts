import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/core/models/User';
import { ForumService } from 'src/app/core/services/forum.service';
import { UserService } from 'src/app/core/user.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-aaddforum',
  templateUrl: './aaddforum.component.html',
  styleUrls: ['./aaddforum.component.css']
})
export class AaddforumComponent implements OnInit {

  TextPost: any;
  selectedInput: any;
  showInp!: boolean;
  showBtn!: boolean;

  textComment: any;
  data: any = [].reverse();
  detPos: any = [];
  detCom: any = [];
  dataComment: any = [];
  user : User;

  idEdPost!: Number;
  constructor(private sr: ForumService, private userService:UserService) { }

  ngOnInit(): void {
    this.showInp == false;
    this.userService.getUser(environment.userid).subscribe(res => this.user = res);
    this.getPost();
    this.getComment();
  }

  addForum() {
    let data: any = {
      text:this.makeFine(this.TextPost),
      user: this.user
    }
    this.sr.addForum(data).subscribe((res) => {
      this.getPost();
      console.log(res);
    })
  }
  makeFine(val: string): string {
    let badWords = ["putin", "shit", "merde", "shitty", "fuck", "motherlucker"];

    let splited = val.split(/\s+/); // split by whitespace
    let newval = "";
    for (let word of splited) {
      let stars = "";
      for (let bad of badWords) {
        if (word.toLowerCase() === bad.toLowerCase()) {
          for (let i = 0; i <= word.length - 1; i++) {
            stars += "*";
          }
          newval += stars + " ";
          break;
        }
      }
      if (stars === "") {
        newval += word + " ";
      }
    }
    return newval.trim();
  }

  getPost() {
    this.sr.getPost().subscribe((res) => {
      this.data = res;
      console.log(this.data);

      //loop for get comment

      console.log(res);
    })
  }

  getComment() {
    this.sr.getComment().subscribe((res: any) => {
      this.dataComment = res;
      console.log(res);
    }
    )
  }
  addComment(idPost: any, textComment: any) {
    this.selectedInput = idPost;

    let data: any = {
      text: textComment,
      user: this.user,
      post:this.selectedInput
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

  dislike(idPost: any) {
    this.sr.dislike(idPost).subscribe((res) => {
      this.getPost();
      console.log(res);
    }
    )
  }


  likePost(idPost: any) {
    this.sr.like(idPost).subscribe((res) => {
      this.getPost();
      console.log(res);
    })
  }

  Tri() {
    this.sr.Tri().subscribe((res) => {
      this.data = res;
      console.log(res);
    }
    )
  }

  deletePost(idPost: any) {
    this.sr.deletePost(idPost).subscribe((res) => {
      this.getPost();
      console.log(res);
    }
    )
  }

  deleteComment(idComment: any) {
    this.sr.deleteComment(idComment).subscribe((res) => {
      this.getComment();
      console.log(res);
    }
    )
  }
  getByid(idPost: any) {
    this.idEdPost = idPost;
    console.log(idPost);
    this.showInp = true;
    this.sr.getByid(idPost).subscribe((res) => {
      this.detPos = res;
      this.TextPost = this.detPos.text;
      console.log(res);
    }
    )
  }
  idEdComment!: Number;
  getCommentByid(idCom: any) {
    this.idEdComment = idCom;
    this.showBtn = true;
    console.log(idCom);
    this.sr.getCommentByPost(idCom).subscribe((res) => {
      this.detCom = res;
      this.textComment = this.detCom.text;
      console.log(res);
    }
    )


  }

  editComment() {
    console.log(this.idEdComment);
    this.sr.editComment(this.idEdComment, this.textComment).subscribe((res) => {
      this.getComment();
      console.log( "edotcomm",res);
    }
    )
  }
  editPost() {
    console.log(this.idEdPost , this.TextPost);
const obj:any={

  text:this.TextPost,
  user: this.user
}

    this.sr.editPost(this.idEdPost, obj).subscribe((res) => {
      this.getPost();
      console.log("edit ppost",res);
    }
    )
  }


  deleteCom(idComment: any) {
    this.sr.deleteComment(idComment).subscribe((res) => {
      this.getComment();
      console.log(res);
    }
    )
  }



}
