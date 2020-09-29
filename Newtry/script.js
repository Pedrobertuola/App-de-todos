


var todoList={
    todos:[],
    displayTodos: function() {
  
        if(this.todos.length===0){
            console.log('Your todo list is empty!')
        } else {
            console.log('My todos:');
            for (var i=0;i<this.todos.length;i++ ){
                    
                //check if .completed is true
                if (this.todos[i].completed===true){
                    //print with(x)
                    console.log('(x)',this.todos[i].todoText);

                } else {
                    //print with()
                    console.log('( )',this.todos[i].todoText);
                }
            }
        }
    },
    addTodo: function(todoText){//addTodo('hi')
        this.todos.push({
            todoText: todoText,
            completed:false
        });
        this.displayTodos();
    },
    changeTodo: function(position,todoText){
        
        this.todos[position].todoText=todoText;
        this.displayTodos();
    },
    deleteTodo:function(position){
        this.todos.splice(position,1);
        this.displayTodos();
    },
    toggleCompleted: function(position) {
        var todo=this.todos[position];
        todo.completed=!todo.completed;
        this.displayTodos();
    },
    toggleAll: function(){
        var totalTodos=this.todos.length;
        var completedTodos=0;
        //get number of completed todos.
        for (var i=0;i<totalTodos;i++){
            if (this.todos[i].completed===true){
                completedTodos++;
            }
        }
        //Case 1: if everythin's true, make everything false.
        if (completedTodos===totalTodos){
            for (vari=0,i<totalTodos;i++){
                this.todos[i].completed=false;
            }
        }
    }
};

//function changeTodo(position,newValue) {
  //  todos[position]=newValeu;
    //displayTodos()
//}