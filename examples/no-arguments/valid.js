function test(...args) {

    return args.reduce((result, curArg) => result + curArg);
}