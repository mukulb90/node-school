var collector = function(name){
    var vm = this;
    vm.value = '';
    vm.name = name;
    vm.observers = [];

    vm.raiseEndEvent = function(){
        vm.observers.map(function(observer){
            observer(vm);
        });
    }

    vm.subscribeEndEvent = function(func){
        vm.observers.push(func);
    }
    return vm;
}
module.exports.collector = collector;