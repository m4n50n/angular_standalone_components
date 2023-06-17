import { Component } from '@angular/core';
// import { CommonModule } from '@angular/common';

// Standalone component como componente reutilizable
// Este componente deberá importarse como módulo (ya que es un módulo en sí) donde queramos usarlo
// Este componente siempre será independiente
@Component({
  selector: 'standalone-reusable', // Borramos le prefijo "app", ya que este componente es independiente y queda más claro
  standalone: true,
  // imports: [CommonModule], // Sólo importaremos directivas si las necesitamos
  templateUrl: './standalone-reusable.component.html',
  styleUrls: ['./standalone-reusable.component.scss']
})
export class StandaloneReusableComponent {
  counter: number = 10;
}
