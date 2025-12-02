::: mermaid
classDiagram
User --> View
View --> TaskUseCase : ユーザー操作
TaskUseCase --> TaskRepository :追加/更新/削除
TaskUseCase --> TaskQuery :表示用データ
TaskQuery --> TaskRepository :全データ参照

class TaskRepository{
  +add(task)
  +edit(id)
  +delete(id)
  +getAll(): TaskMap
  +get(id): Task
}

class TaskQuery{
  +sort(TaskMap): TaskMap
  +filter(TaskMap): TaskMap
}

class TaskUseCase{
  +addTask(input)
  +toggleDone(id)
  +showVisibleTasks():TaskMap
}

class View{
  +render(TaskMap)
}

:::