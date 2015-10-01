# angular-patterns
A personal reference / experiment using some angular 1.x design patterns.

## The App

### Setup
* Clone this repo
* Run `npm install`, to install dependencies (requires Node.js)
* Run `grunt` to start the server
* Go to `localhost:3000` in your favorite web browser. That's it!

### Style Guide
I tried my best to stick to john_papa's [Angular Style Guide](https://github.com/johnpapa/angular-styleguide).

## The Patterns
### Model Pattern
A nice way to handle interacting with models in controllers.

#### Factories
We use the concept of a factory to create multiple new instances (not just the singleton that an Angular factory creates for us) of our models. We can then attach methods to these objects that encapsulate the application-specific logic that may be attached to them, such as validation or model persistance. So, for example, instead of having to define the behavior for saving a model to the database _inside the controller_, we can attach a `save()` method to the model itself, and in the controller simply call `model.save()`.

#### Resources
These services exposes an API to your factories for sending and receiving data from the server. In order to preserve separation of concerns, it is a good idea to keep this abstracted away from your factories.

__Sources:__

* [AngularJS: Understanding Design Patterns (StackOverflow)](http://stackoverflow.com/questions/20286917/angularjs-understanding-design-pattern) (see izhaki's answer)
* [Non-Singleton Services in Angular (StackOverflow)](http://stackoverflow.com/questions/16626075/non-singleton-services-in-angular)

### Component-Container Pattern
A cool, react-esque way of rethinking angular controllers, especially with Angular 2 in mind.

#### Components
A component takes the place of a simple controller, and is similar in that it is responsible for providing a "View Model" to the DOM in order to render the UI. The difference is, a component delegates data retrieval to a container and then explicitly declares which data needs to be passed in through its isolate scope. In this way, a component has the potential to be more modular, as well as leaner and more focused than your average Angular controller.

#### Containers
Containers have two main jobs: Containing components, and providing those components with data. As stated above, containers perform data retrieval by interacting with the Model Factories (see __Model Pattern__) and passing the data produced along to their components.

__Sources:__

* [How I've Improved My Angular Apps By Banning ng-controller (Article)](http://teropa.info/blog/2014/10/24/how-ive-improved-my-angular-apps-by-banning-ng-controller.html)
* [Container-Component Pattern in Angular 1 (Article)](http://jaysoo.ca/2015/03/30/container-component-pattern-in-angular-1/)
