import { Component } from '@angular/core';
import { FormationserviceService } from 'src/app/core/services/formationservice.service';
import { TokenstorageService } from 'src/app/core/services/tokenstorage.service';

@Component({
  selector: 'app-mesformations',
  templateUrl: './mesformations.component.html',
  styleUrls: ['./mesformations.component.css']
})
export class MesformationsComponent {
 uid: number;
  formations: any[] = [];
  formationImages: { [key: number]: any } = {};
 
 constructor(
  private formationserv: FormationserviceService,
  private session:TokenstorageService
 ) { this.uid = this.session.getUser().id;}
   
    ngOnInit(): void {
      this.formationserv.getFormations().subscribe((data) => {
        console.log('Formations:', data);
        this.formations = data.filter((formation: any) => {
          return formation.users.some((user: any) => user.id === this.uid);
        });
        this.formations.forEach((formation: any) => {
         this.loadFormationImage(formation.formation_Id);
        });
      });
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
}
