# Bytebank

## Prerequisites

1. Install [Node.js](https://nodejs.org)
2. Install Angular CLI: `npm i -g @angular/cli`
3. From project root folder install all the dependencies: `npm i`

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 15.1.5.

## Run
### Development mode with files watching
`npm run dev`: [concurrently](https://github.com/open-cli-tools/concurrently) execute [json-server](https://github.com/typicode/json-server), Angular build and serve.

Access [localhost:4200](http://localhost:4200) for front-end and [localhost:3000/transfers](http://localhost:3000/transfers) for back-end.

## Why Angular

Angular JS is a TypeScript-based web application framework, used to build complex enterprise apps like progressive web apps and single-page apps. It is very similar to NestJS backend framework (was deeply inspired by Angular) since they come with the same architectural building blocks and a similar command-line interface. 

## Advantages of Angular framework

1. Angular offers clean code development and dependency injection.
2. You can use many Angular libraries, which help you create robust template solutions.
3. It offers a single routing option. Also, it has interactive UIs with data binding.
4. Angular extends HTML syntax. With directives, Angular lets you create reusable components.
5. Must have synchronized data between the model view and the component.

## Building blocks

### Modules
Modules are basic building blocks for every application. They group components that belong to a feature. A small application my have only one module. The bigger it gets, the more modularized it should be. It requires the `@NgModule` decorator and additional metadata.

### Components
Components are building blocks that represents peaces of the UI. A component contains a TypeScript class, a HTML file, a style file, and a ".spec.ts" file for testing. It requires the `@Component` decorator and neeeds to be declared inside a Module in order to render.

### Services
Services contains business logic. They are a great way to increase encapsulation an testability by structuring dedicated classes with single responsability principle. Since Services work as depedencies for modules/components they need the `@Injectable` decorator with specific metadata that tells Angular where it needs to be injected.

### Command-line Interface (CLI)

The Angular CLI is an amazing tool. It allows us to scaffold an entire Angular application with one command and perform common tasks such as extending, linting, testing, and building our application.

Schematics commands  are the best and are propably the most usefull tool in the framework. You can create components, modules and services with `ng generate <schematic>` and it will automaticaly inject service dependencies and import component templates.

