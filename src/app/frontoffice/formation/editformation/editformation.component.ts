import { DialogRef } from '@angular/cdk/dialog';
import { Component, Inject, Input } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Formation } from 'src/app/core/models/Formation';
import { FormationserviceService } from 'src/app/core/services/formationservice.service';
import { TokenstorageService } from 'src/app/core/services/tokenstorage.service';

@Component({
  selector: 'app-editformation',
  templateUrl: './editformation.component.html',
  styleUrls: ['./editformation.component.css']
})
export class EditformationComponent {

  @Input() dataFromParent?: any | undefined;

  formationData: Formation = {
    dateDebut: this.dataFromParent?.dateDebut || new Date(),
    dateFin: new Date(),
    descriptionFormation: this.dataFromParent?.descriptionFormation || '',
    duree: 0,
    etat: 'EN_COURS',
    titre: '',
    typeFormation: ''
  };
  
     file: File ;
     constructor(@Inject(MAT_DIALOG_DATA) public data: any,private formationService: FormationserviceService,    public dialogRef: MatDialogRef<EditformationComponent>,
     ) {
      console.log('Data received in edit dialog:', data);
      this.dataFromParent = data;
    }
    
    onNoClick(): void {
    }
    
   
    onSubmit() {
      console.log("image",this.file);
      console.log(" before update",this.dataFromParent);
      console.log("id",this.dataFromParent.formation_Id);
     this.formationService.updateFormationWithImage(this.dataFromParent.formation_Id,this.dataFromParent,this.file).subscribe((data: any) => {
            // Handle 
           console.log("updated data",data);
            this.dialogRef.close();
            window.location.reload();
 });
}
   

    ngOnChanges() {
      console.log(this.dataFromParent); // Access and use the passed data as needed
    }
    
    onFileSelected1(event: any): void {
     this.file = event.target.files[0];
      // Use 'file' for further processing (uploading, displaying preview, etc.)
  }
  
      
    }
   
   
