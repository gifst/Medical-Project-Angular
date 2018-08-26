

export class PatientEntity{

            constructor(public identifiant:number,
              public cin:string,
              public  nom : string,
              public  prenom: string,
              public   dateNaiss :Date,
              public  sexe :string,
              public   mutuelle : string,
              public  telephone :string,
              public  email:string,
              public   adress : string,
              public   image : string){}

}
