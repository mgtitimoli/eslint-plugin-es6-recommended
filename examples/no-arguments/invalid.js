function test() {

    var args = Array.prototype.slice.call(arguments);

    return args.reduce(function(result, curArg) {

        return result + curArg;
    });
}