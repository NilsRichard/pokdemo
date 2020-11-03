# Pokdemo

L'intégralité du tp se trouve sur la branche `master`. Pour lancer, un simple `ng serve` à la racine du projet permet de voir l'application en mode dev.

## Auteurs

- Dorian Bouillet
- Nils Richard

## Q1 .. Q3

`cf src/app` et `src/app/my-component`

## Q3 bis

Il est compliqué de faire une attaque XSS sur une application angular car angular ne fait confiance à aucune donnée et assainit toutes les données par défaut. Toutes les balises HTML dans les données de sont pas interprétées et ne présente aucun danger.

## Q4 .. Q16

Les réponses aux différentes questions sont à découvrir dans le code. 

Le fichier `my-component.component.html` contient toutes les versions différentes de l'interface au fur et à mesure du tp et il est possible d'afficher toutes les questions en changeant simplement la valeur du boolean `displayAllQuestions = false;` dans le fichier `my-component.component.ts`.

Par défaut, seulement la version finale de l'application est visible pour plus de lisibilité.



# Information via Angular CLI

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
