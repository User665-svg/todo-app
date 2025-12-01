::: mermaid
    classDiagram
    TaskManeger<-->DB
    TaskQuery-->TaskManeger
    TaskManeger-->View
    class TaskQuery{
        +TaskMap sort
    }
    class View{
        main
        done
        edit
    }
    class TaskManeger{
        +void addTask()
        +Task getTask()
        +TaskMap getDataAll()
    }
    class DB{
        +int id
        +string title
        +string content
        +string dueDate
        +boolean isDone
    }
:::