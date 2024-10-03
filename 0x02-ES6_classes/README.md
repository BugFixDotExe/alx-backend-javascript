# 0x02. ES6 classes  

In this project, I began practicing using the ES6 to be more specific Classes, for my specialization into backend development using Javascript.

## Tasks :page_with_curl:

* **0. You used to attend a place like this at some point**
  * [0-classroom](./0-classroom.js): Implement a class named ClassRoom:
    Prototype: export default class ClassRoom
    It should accept one attribute named maxStudentsSize (Number) and assigned to _maxStudentsSize


* **1. Let's make some classrooms**
  * [1-make_classrooms](./1-make_classrooms.js): Import the ClassRoom class from 0-classroom.js.

    Implement a function named initializeRooms. It should return an array of 3 ClassRoom objects with the sizes 19, 20, and 34 (in this order).


* **2. A Course, Getters, and Setters**
  * [2-hbtn_course](./2-hbtn_course.js):Implement a class named HolbertonCourse:

    Constructor attributes:
        - name (String)
        - length (Number)
        students (array of Strings)
    Make sure to verify the type of attributes during object creation
    Each attribute must be stored in an “underscore” attribute version (ex: name is stored in _name)
    Implement a getter and setter for each attribute.


* **3. Methods, static methods, computed methods names..... MONEY**
  * [3-currency](./3-currency.js): Implement a class named Currency:

    - Constructor attributes:
        - code (String)
        - name (String)
    Each attribute must be stored in an “underscore” attribute version (ex: name is stored in _name)
    Implement a getter and setter for each attribute.
    Implement a method named displayFullCurrency that will return the attributes in the following format name (code).


* **4. Pricing**
  * [4-pricing](./4-pricing.js): Import the class Currency from 3-currency.js

    Implement a class named Pricing:

    Constructor attributes:
        - amount (Number)
        - currency (Currency)
    Each attribute must be stored in an “underscore” attribute version (ex: name is stored in _name)
    Implement a getter and setter for each attribute.
    Implement a method named displayFullPrice that returns the attributes in the following format amount currency_name (currency_code).
    Implement a static method named convertPrice. It should accept two arguments: amount (Number), conversionRate (Number). The function should return the amount multiplied by the conversion rate.



* **5. A Building**
        * [5-building](./5-building.js): Implement a class named Building:

    Constructor attributes:
        - sqft (Number)
    Each attribute must be stored in an “underscore” attribute version (ex: name is stored in _name)
    Implement a getter for each attribute.
    Consider this class as an abstract class. And make sure that any class that extends from it should implement a method named evacuationWarningMessage.
        If a class that extends from it does not have a evacuationWarningMessage method, throw an error with the message Class extending Building must override evacuationWarningMessage


* **6. Inheritance**
  * [6-sky_high](./6-sky_high.js): Import Building from 5-building.js.

    Implement a class named SkyHighBuilding that extends from Building:

    Constructor attributes:
        * sqft (Number) (must be assigned to the parent * class Building)
        * floors (Number)
    Each attribute must be stored in an “underscore” attribute version (ex: name is stored in _name)
    Implement a getter for each attribute.
    Override the method named evacuationWarningMessage and return the following string Evacuate slowly the NUMBER_OF_FLOORS floors.



* **7. Airport**
  * [7-airport](./7-airport.js):     Implement a class named Airport:

    Constructor attributes:
        * name (String)
        * code (String)
    Each attribute must be stored in an “underscore” attribute version (ex: name is stored in _name)
    The default string description of the class should return the airport code (example below).


* **8. Primitive - Holberton Class**
  * [8-hbtn_class](./8-hbtn_class.js): Implement a class named            
    HolbertonClass:
    
        Constructor attributes:
            size (Number)
            location (String)
        Each attribute must be stored in an “underscore” attribute version (ex: name is stored in _name)
        When the class is cast into a Number, it should return the size.
        When the class is cast into a String, it should return the location.



* **9. Hoisting**
  * [9-hoisting.js](./9-hoisting.js): Fix this code and make it work.

* **10. Vroom**
   * [10-car](./10-car.js):
        Implement a class named Car:
        Constructor attributes:
            + brand (String)
            + motor (String)
            + color (String)
        Each attribute must be stored in an “underscore” attribute version (ex: name is stored in _name)
        Add a method named cloneCar. This method should return a new object of the class.

    * Hint: Symbols in ES6