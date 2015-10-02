# angular-patterns
A toy application written as a personal reference / experiment using some angular 1.x design patterns.

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
These factories create multiple new instances (not just the singleton that an Angular factory creates for us) of our models. We can then attach methods to these objects that encapsulate the application-specific logic that may be attached to them, such as validation or model persistance.

So, for example, instead of having to define the behavior for saving a model to the database _inside the controller_, we can attach a `save()` method to the model itself, and in the controller simply call `model.save()`.

#### Resources
These services exposes an API to your factories for sending and receiving data from the server. In order to preserve separation of concerns, it is a good idea to keep this abstracted away from your factories.

__Sources:__

* [AngularJS: Understanding Design Patterns (StackOverflow)](http://stackoverflow.com/questions/20286917/angularjs-understanding-design-pattern) (see izhaki's answer)
* [Non-Singleton Services in Angular (StackOverflow)](http://stackoverflow.com/questions/16626075/non-singleton-services-in-angular)

### Component-Container Pattern
A cool, react-esque way of rethinking angular controllers, especially with Angular 2 in mind.

#### Components
A component is an Angular directive with a named controller attached to it. Its data and behavior is provided through its isolate scope by the container it resides in. This allows the component's controller to focus solely on providing a "View Model" to the DOM.

Another benefit of using components is inter-component communication; since the data passed through the isolate scope is two-way bound, any other component within the same container will see changes made to the data in real time.

#### Containers
Containers are Angular controllers that contain components, provide those components with data, and mediate inter-component communication. As stated above, containers perform data retrieval by interacting with factories and passing the data produced along to their components.

Note that while the containers used in this app only exist one-per-page, there could be scenarios in which multiple containers exist on a page, or when containers exist within other containers or even components. In such scenarios it might make sense to attach your containers to directives.

__Sources:__

* [How I've Improved My Angular Apps By Banning ng-controller (Article)](http://teropa.info/blog/2014/10/24/how-ive-improved-my-angular-apps-by-banning-ng-controller.html)
* [Container-Component Pattern in Angular 1 (Article)](http://jaysoo.ca/2015/03/30/container-component-pattern-in-angular-1/)
