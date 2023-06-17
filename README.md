# Angular - De cero a experto: *Standalone Components*

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 16.1.0.

## Development server

Run `npm start` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Docs
- Característica introducida a partir de la versión 15 de Angular.
- https://angular.io/guide/standalone-components

Los componentes standalone (*independientes*) proporcionan una forma simplificada de crear aplicaciones Angular. Estos, junto a las *directivas* y los *pipes* tienen como objetivo reducir la necesidad de NgModules. Las aplicaciones existentes pueden adoptar de forma incremental y opcional el nuevo estilo standalone sin ningún cambio importante.

Los componentes standalone se pueden ver como ***un componente que es un módulo a la vez***.

Parte del objetivo de estos componentes es que puedan "*sobrevivir*" por sí mismos sin necesidad de que haya que definirlo en el *app.module.ts*, por ejemplo.

Al final es un componente que está "flotando" dentro del proyecto de Angular.