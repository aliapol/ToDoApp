"use strict";
//don't include the second parameter in the getter syntax (this is the getter syntax)

function toDoController() {
    //when this function gets passed into our class constructor its going to build us an object. vm is a shortcut/reference to "this"
    const vm = this;
    vm.toDo = [{
        taskName: "Grocery Shop",
        taskComplete: true
    },
    {
        taskName: "Walk Dog",
        taskComplete: true
    },
    {
        taskName: "Go Running",
        taskComplete: false
    },
    {
        taskName: "Wash Car",
        taskComplete: false  
    }];
    console.log(vm.toDo);

    vm.addTask = (name) => {
        vm.newtoDo = {
            taskName: name,
            taskComplete: false
        }
        console.log(vm.newtoDo);
        vm.toDo.push(vm.newtoDo);
        vm.task = {};
        
    };
    vm.clearForm = () => {
        vm.task = {};    
    };    

    vm.removeTask = (index, task) => {
        vm.toDo.splice(index, 1);
    };
    
    
    vm.completeTask = ($index, task) => {
        task.taskComplete = true;
    };
}



angular
    .module("toDoAppModule")
    //controller method takes 2 parameters every time. First is name of controller, Second is reference to a function or object with the same name as the controller (we are about to build this function)
    .controller("toDoController", toDoController);