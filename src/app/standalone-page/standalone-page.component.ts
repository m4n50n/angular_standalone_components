import { Component } from '@angular/core';

// Standalone component como página
// Podríamos ver el standalone como un módulo que únicamente tiene este componente
// En el caso de esta práctica, si no hubiéramos usado la característica standalone tendríamos que haber hecho muchas más cosas para llegar a este objetivo
@Component({
  // selector: 'app-standalone-page' // Como en esta práctica este componente será una página, no necesitamos el selector
  standalone: true, // Esto es lo que independiente al componente
  // imports: [CommonModule], // Si no necesitamos usar estas directivas tampoco lo necesitamos aquí
  templateUrl: './standalone-page.component.html',
  styleUrls: ['./standalone-page.component.scss']
})
export class StandalonePageComponent {

}
