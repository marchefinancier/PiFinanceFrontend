import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ChatbotService } from 'src/app/core/services/chatbot.service';

@Component({
  selector: 'app-scrap-chatboat',
  templateUrl: './scrap-chatboat.component.html',
  styleUrls: ['./scrap-chatboat.component.css']
})
export class ScrapChatboatComponent {
  videos: any[] = [];
  message:any;
  reponse:any;
  params:any;
constructor(private chatbotserv:ChatbotService,private route:ActivatedRoute){
  this.params = this.route.snapshot.params['titre'];

}
sendQuestion(question: string) {
  this.chatbotserv.generateResponse(question).subscribe((data: any[]) => {
    
    const generatedText = data[0].generated_text;

    // Find the index of '?' and extract text after it
    const index = generatedText.indexOf('?');
  
    if (index !== -1) {
      const textAfterQuestionMark = generatedText.substring(index + 1).trim();
      console.log(textAfterQuestionMark); // Extracted text after '?'
      this.reponse=textAfterQuestionMark;
    }

  });
}
  onSubmit() {
    

     this.message = (document.getElementById('textAreaExample') as HTMLInputElement).value;

    this.sendQuestion(this.message);
    (document.getElementById('textAreaExample') as HTMLInputElement).value = '';

  }
  ngOnInit() {
    this.loadVideos();
  }
  loadVideos() {
    this.chatbotserv.getVideos(this.params).subscribe(
      (data) => {
        // Handle the data received from the API
        console.log(data);
        this.videos = data;
        
        
      },
      (error) => {
        // Handle errors if any
        console.error(error);
      }
    );
    
  }
  
}
