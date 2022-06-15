const spy = () => 'This is a callback';
const receivesAFunction = (spy) => spy()
const returnsANamedFunction = () => (function logger(){
    return 'This is a named function';

});
const returnsAnAnonymousFunction = () => (()=>{
    return 'This is an anonymous function';
})