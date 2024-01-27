import { Component } from '@angular/core';
import { FormationserviceService } from 'src/app/core/services/formationservice.service';

@Component({
  selector: 'app-listeformations',
  templateUrl: './listeformations.component.html',
  styleUrls: ['./listeformations.component.css']
})
export class ListeformationsComponent {
 formations:any[] = [];
 formationImages: { [key: number]: any } = {};

  constructor( private formationserv:FormationserviceService) { }

  ngOnInit(): void {
    this.getFormations();
   
  }
  loadFormationImage(formationId: number): void {
    console.log("from load formation",formationId);
    this.formationserv.getImageByFormationId(formationId)
        .subscribe((data: ArrayBuffer) => {
          const reader = new FileReader();
          reader.onload = () => {
            this.formationImages[formationId] = reader.result;
          };
          reader.readAsDataURL(new Blob([data]));
        });
  }
  getFormations(){
    this.formationserv.getFormations().subscribe((data)=>{
      this.formations=data;
      console.log(this.formations);
      this.formations.forEach((formation: any) => {
        this.loadFormationImage(formation.formation_Id);
       });

    })
  }
  Remove(id:any){
    
  }
  getImageUrl(formationId: number): any {
    return this.formationImages[formationId];
  }
}
