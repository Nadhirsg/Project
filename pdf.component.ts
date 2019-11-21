import { Component, OnInit } from '@angular/core';
import * as jsPDF from 'jspdf';  
import { DomSanitizer } from '@angular/platform-browser';
import 'jspdf-autotable';

@Component({
  selector: 'app-pdf',
  templateUrl: './pdf.component.html',
  styleUrls: ['./pdf.component.css']
})
export class PdfComponent implements OnInit {

  title = 'pdfimage';  
  fileName: string;  
  filePreview: string

  constructor(private sanitizer: DomSanitizer) { }

  ngOnInit() {
  }

  onFileChanged(event: { target: { files: any[]; }; }) {  
  
    let reader = new FileReader();  
    if (event.target.files && event.target.files.length > 0) {  
      let file = event.target.files[0];  
      reader.readAsDataURL(file);  
      reader.onload = () => {  
        this.fileName = file.name + " " + file.type;  
        const doc = new jsPDF();  
        //doc.save('table.pdf');
          
        

        var columns = [
          {title: "ETS LAGARRIGUE", dataKey: "ETS LAGARRIGUE"},
          
          

          {title: "CLASS", dataKey: "CLASS"},
          

           
          ];
        var rows = [
          {"ETS LAGARRIGUE": "                                                            ","CLASS":"N°parc           15094884"},
          {"ETS LAGARRIGUE": "   ","CLASS":" "},
          {"ETS LAGARRIGUE": "                                  nom elem                                   ","CLASS":" Arion  "},
         
          ];
        doc.autoTable(columns, rows, {
        
        columnStyles: {
        styles: {fillColor: [100, 255, 255]},
        id: {fillColor: 255}
        },


        





        margin: {top: 10},
        addPageContent: function(data) {

        doc.text("Tracteur_Class Arion 610 Cebis_N°15094884", 5, 5);
        }
        }); 
        


        var col =[
          {title: "Marque", dataKey: "Marque"},
          {title: "CLASS", dataKey: "CLASS"},
          {title: "Type version", dataKey: "Type version"},
          {title: "Arion", dataKey: "Arion 610 Cebis"},
           ];
        var row = [
          {"Marque": "N°Serie","CLASS":"","Type version":"Année",         "Arion 610 Cebis":"                 2008                     Heures      4893"},
   
   
          ];

          doc.autoTable(col, row, {

          colStyles: {
        
          id: {fillColor:255}
          },
            
          });


          
    
              var col1 =[
                {title: "Descriptif", dataKey: "Descriptif"},
                
                 ];
              var row1 = [
                {"Descriptif": "Moteur / Type                                                                       4 CycL         6cycl  X   Ad-Blue    Puissance      130  cv"},
                {"Descriptif": "Pont avant                                         2 Roues Motrices    4 Roues Motrices  X  Pont Suspendu  X    Ailes Avant  X         "},
                {"Descriptif": "Relevage Avant                                   Marque            MX            Capacité              3T                  PTO Av.         "},
                {"Descriptif": "                                                 Masse             Bloc masse           Triangle              3ème Point     Sortie Hyd.   1DE"},
                 {"Descriptif": "Boite de vitesse                       Variation Continue              Inverseur            Nombre de vitesse  30 km/h 40 km/h X"},
                {"Descriptif": "                                                  Powershift          X            Mécanique       24x24         Rapport Ps      6"},
                {"Descriptif": "                                                  Mécanique           X            Hydraulique                               Rampantes                       "},
                {"Descriptif": "Relevage                                          Mécanique           X            Electronique              Radar                 Gps                               "},
                {"Descriptif": "Prise de Force                                    540                 X            540E              X                 1000              X            Proportionnelle   "},
                {"Descriptif": "Hydraulique                                       540                 X            540E              X                 1000              X                              "},
              ];
      
                doc.autoTable(col1, row1, {
      
                colStyles: {
              
                id: {fillColor: 255}
                },
                  
                });




                

        const base64ImgString = (reader.result as string).split(',')[1];
        doc.addImage(base64ImgString,70,180, 100, 100);  
        this.filePreview = 'data:image/png' +';base64,' + base64ImgString ;         

          
          
          
          
                  doc.save('TestPDF') 
        }; 
    
      }
    }

         sanitize(url: string) {  
          return this.sanitizer.bypassSecurityTrustUrl(url);  
  } 
 
}

