import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { EMPTY, catchError, tap } from 'rxjs';
import { FormationserviceService } from 'src/app/core/services/formationservice.service';
import { TokenstorageService } from 'src/app/core/services/tokenstorage.service';
import Swal from 'sweetalert2';
import { AddformationComponent } from './addformation/addformation.component';
import { EditformationComponent } from './editformation/editformation.component';

@Component({
  selector: 'app-formation',
  templateUrl: './formation.component.html',
  styleUrls: ['./formation.component.css']
})
export class FormationComponent {
  
  formations: any[] = [];
  parentData : any;
  formationImages: { [key: number]: any } = {};
  //showmore : boolean = false;
  //showless: boolean = true;
  
  showDetails: boolean = false;
  uid = this.session.getUser().id;
  role = this.session.getUser().roles[0];
  constructor(private formationserv: FormationserviceService,private session:TokenstorageService,public dialog: MatDialog) {}

  ngOnInit(): void {
    
    if (this.role === 'CLIENT') {
      this.loadFormations();
    } else if (this.role === 'CONSULTANT') {
      this.loadFormationsByOwnerId(this.uid);
    }
else{

} 
 }
 toggleDetails() {
  this.showDetails = !this.showDetails;}

  loadFormations() {
    this.formationserv.getFormations().subscribe(
      (data) => {

        console.log('Formations:', data);
        this.formations = data;

        this.formations = data.filter((formation: any) => {
          return !formation.users.some((user: any) => user.id === this.uid);
        });

        this.formations.forEach((formation: any) => {
          this.loadFormationImage(formation.formation_Id);
        });
      },
      (error) => {
        console.error('Error fetching formations:', error);
        // Handle error
      }
    );
  }


 
  

  loadFormationImage(formationId: number): void {
    this.formationserv.getImageByFormationId(formationId)
      .subscribe((data: ArrayBuffer) => {
        const reader = new FileReader();
        reader.onload = () => {
          this.formationImages[formationId] = reader.result;
        };
        reader.readAsDataURL(new Blob([data]));
      });
  }

  getImageUrl(formationId: number): any {
    return this.formationImages[formationId];
  }

 /* showMore(){
    this.showmore = true;
  }
  showLess() {
    this.showless = false;
  }*/

 
  onFormationClick(formationId: number): void {
 
    console.log('Clicked formation ID:', formationId);
    // Perform actions based on the clicked formation ID
    // For example, display more information or navigate to a different route
    this.formationserv.participateFormation(formationId, this.uid)
    .subscribe(
      (data) => {
        // Handle the response data if needed
        console.log('Participated in formation:', data);
        Swal.fire({
          icon: 'success',
          title: 'Participation',
          text: 'Vous avez participé avec succès',
        });

        this.formations.splice(this.formations.findIndex((formation: any) => formation.formation_Id === formationId), 1);

        
      },
      (error) => {
        console.error('Error participating in formation:', error);
Swal.fire({
  icon: 'error',
  title: 'Oops...',
  text: 'Something went wrong!',
  footer: '<a href>Why do I have this issue?</a>'
      }
    );
}
    );
  }

  loadFormationsByOwnerId(userId: number): void {
    this.formationserv.getFormationsByOwnerId(userId).subscribe(
      (data) => {
        this.formations = data;
        this.formations.forEach((formation: any) => {
          this.loadFormationImage(formation.formation_Id);
        });
      },
      (error) => {
        console.error('Error fetching formations:', error);
        // Handle error
      }
    );
  }
  Add(id:number){

  }


Update(id:number){

}
Delete(id:number){
   // Use SweetAlert for confirmation
   Swal.fire({
    title: 'Are you sure ?',
    text: 'You won\'t be able to revert this!',
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#d33',
    cancelButtonColor: '#3085d6',
    confirmButtonText: 'Yes, delete it!'
  }).then((result) => {
    if (result.isConfirmed) {
      // Perform the delete operation
      console.log(`Removing Formation with ID: ${id}`);
      // Call your actual remove logic here
      this.formationserv.deleteFormationById(id).subscribe(()=>{
         Swal.fire({
          title: ' Deleted ',
          text: 'Formation is Deleted',
          icon: 'success',
          timer : 2000
         });
         const index = this.formations.findIndex((formation:any)  => formation.formation_Id === id);
         if (index !== -1) {
           this.formations.splice(index, 1);
         }
      })
    }
  });

 

}

openDialog(): void {
  const dialogRef = this.dialog.open(AddformationComponent, {
    
    data: { message: 'Are you sure you want to add this formation?' }
  });

  dialogRef.afterClosed().subscribe(result => {
    if (result) {
      // User clicked Yes/Confirm
      // Perform the deletion or any action here
      console.log('Formation ajoutée !');
    } else {
      // User clicked No/Cancel or closed the dialog without action
      console.log('ADD Formation Canceled!');
    }
  });
}



openEditDialog(i:any): void {
  console.log("ccccccccccccccccccccccc",i);

  const dialogRef = this.dialog.open(EditformationComponent, {
    data: i // Pass the data to the dialog component
  });

  // You can subscribe to dialog events if needed
  dialogRef.afterClosed().subscribe(result => {
    // Handle dialog close event
    console.log('Dialog was closed with result:', result);
  });
}



}



