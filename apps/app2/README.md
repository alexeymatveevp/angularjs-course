# Angular controller function
Controllers are introduced in the app when one of the following is required:

* Pre-initialization of the `$scope` with some logic
* ng-click and other actions require more than 1 row of code
* To put some common code into functions
* To inject some other ng components from other modules

Controller is a place to inject ng services: build-in like `$timeout` and custom like `PersonService`  
Controllers also could be nested into each other but this is not recommended as a child controller extend the parent using prototype function - this means it inherit all of the parent controller properties (which sometimes is not what we want).

Do **NOT** use controllers to:

* Manipulate DOM — Controllers should contain only business logic. Putting any presentation logic into Controllers significantly affects its testability. Angular has databinding for most cases and directives to encapsulate manual DOM manipulation.
* Format input — Use angular form controls instead.
* Filter output — Use angular filters instead.
* Share code or state across controllers — Use angular services instead.
* Manage the life-cycle of other components (for example, to create service instances).