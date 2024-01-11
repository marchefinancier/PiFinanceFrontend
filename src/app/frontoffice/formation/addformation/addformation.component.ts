import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Formation } from 'src/app/core/models/Formation';
import { FormationserviceService } from 'src/app/core/services/formationservice.service';
import { TokenstorageService } from 'src/app/core/services/tokenstorage.service';

@Component({
  selector: 'app-addformation',
  templateUrl: './addformation.component.html',
  styleUrls: ['./addformation.component.css']
})
export class AddformationComponent {
  uid: number;
  formationData: Formation;
  file: File;

  constructor( 
    private formationService: FormationserviceService,
    public dialogRef: MatDialogRef<AddformationComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private session: TokenstorageService
  ) {
    this.uid = this.session.getUser().id;
    this.initializeForm();
  }

  initializeForm(): void {
    this.formationData = {
      dateDebut: new Date(),
      dateFin: new Date(),
      descriptionFormation: '',
      duree: 0,
      etat: 'EN_COURS',
      titre: '',
      typeFormation: ''
    };
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  onSubmit(): void {
    this.formationService.addFormationWithImage(this.formationData,this.file, this.uid).subscribe(
      (data: any) => {
        console.log(data);
              // Handle 
              this.dialogRef.close();
              window.location.reload();

            },(error) => {
              console.error('Error adding formation:', error);
              // Handle error
            }
          );
        }
      
      
    


  onFileSelected(event: any): void {
    this.file = event.target.files[0];
    // Use 'file' for further processing (uploading, displaying preview, etc.)
  }

  
    
}
