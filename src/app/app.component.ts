import { Component } from '@angular/core';
declare var jquery: any;
declare var $: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  lat: number = 19.490439;
  lng: number = -99.0384255;
  zo: number = 17;
  efesiosVers: string = 'Y él mismo constituyó a unos, apóstoles; a otros profetas; a otros, evangelistas; a otros, pastores y maestros,; a fin de perfeccionar a los santos para la obra del ministerio, para la edificación del cuerpo de Cristo,';
  corintiosVers: string = 'Y a unos puso Dios en la iglesia, primeramente apóstoles, luego profetas, lo tercero maestros, luego los que hacen milagros, después los que sanan, los que ayudan, los que administran, los que tienen don de lenguas.';
  efesios2Vers: string = 'edificados sobre el fundamento de los apóstoles y profetas, siendo la principal piedra del ángulo Jesucristo mismo,';
  hecho2Vers: string = 'Y perseveraban en la doctrina de los apóstoles, en la comunión unos con otros, en el partimiento del pan y en las oraciones';
  hechos3Vers: string = 'Porque así nos ha mandado el Señor, diciendo: Te he puesto para luz de los gentiles, A fin de que seas para salvación hasta lo último de la tierra.';
  hechosVers: string = 'Pero recibiréis poder, cuando haya venido sobre vosotros el Espíritu Santo, y me seréis testigos en Jerusalén, en toda Judeá, en Samaria, y hasta lo último de la tierra.';
}
