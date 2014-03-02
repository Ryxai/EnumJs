var Enumerator = function(args) {
    var internalArray = [];
    var currentLocation = 0;

    //Argument handling code
    if (typeof args !== "undefined") {
        if (args instanceof Array)
            internalArray = args.slice(0, args.length - 1);
        else if (typeof args === "object") {
            for (var propertyName in args) {
                internalArray.push(args[propertyName]);
            }
        }
    }
    if (arguments.length > 1) {
        for (var i = 0; i < arguments.length; i++)
            internalArray.push(arguments[i]);
    }

    //Returns a boolean, indicating whether the enumerator is at the terminal element
    this.atEnd = function() {
        return currentLocation === internalArray.length - 1;
    };

    //Returns the current element the enumerator is positioned at
    this.Item = function() {
        return internalArray[currentLocation];
    };

    //Moves the positional indicator to the beginning of the collection 
    this.MoveFirst = function() {
        currentLocation = 0;
    };

    //Moves the positional indicator to the next element in the collection
    this.MoveNext = function() {
        currentLocation++;
    };
}