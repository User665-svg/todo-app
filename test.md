::: mermaid
    classDiagram
    TaskManeger <--> DB
    TaskQuery <-- TaskManeger
    TaskManeger --> View
    class TaskQuery{
        +TaskMap sort()
        +TaskMap filter()
        +TaskMap VisibleTask
    }
    class View{
        +taskMap VisbleTask
        +void render(TaskMap)
    }
    class TaskManeger{
        +void addTask()
        +Task getTask()
        +TaskMap getDataAll()
        +TaskMap VisibleTsk
    }
    class DB{
        +int id
        +string title
        +string content
        +string dueDate
        +boolean isDone
    }
:::