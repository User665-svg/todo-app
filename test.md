:::mermaid
classDiagram
User --> View
View --> TaskUseCase : ユーザー操作
TaskUseCase --> TaskManeger :追加/更新/削除
TaskUseCase --> TaskQuery :表示用データ
TaskQuery --> TaskManeger :全データ参照

class TaskManeger{
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

:::mermaid
classDiagram
direction LR

class Task {
  +string title
  +string content
  +Date dueDate
  +boolean isDone
}

class TaskManager {
  -TasksMap tasks
  -TaskId nextId
  +addTask(task: Task): TaskId
  +getTask(id: TaskId): Task
  +deleteTask(id: TaskId): void
  +toggleTask(id: TaskId): void
  +getDataAll(): TasksMap
}

class queryVisible {
  -TaskManager manager
  +string keyword
  +SortType sortType
  +getVisibleTask(): TasksMap
  ..filterByKeyword(tasks)
  ..sortTasks(tasks)
}

class TaskUseCase {
  -TaskManager manaeger
  -queryVisible visibleTasks
  +getVisbledTask(): TasksMap
  +addTask(task: Task): TaskId
  +getTask(id: TaskId): Task
  +deleteTask(id: TaskId): void
  +toggleTask(id: TaskId): void
}

class LocalStorage {
  +read<T>(key, defaultValue)
  +write<T>(key, value)
  +add<T>(key, value)
  +removeAt<T>(key, index)
  +updateAt<T>(key, index, value)
}

class TaskHelpers {
  +defaultTask(): Task
  +restoreTasks(stored: StoredTasksMap): TasksMap
  +buildStoredTasksMap(tasks: TasksMap): StoredTasksMap
  +getMaxId(stored: StoredTasksMap): number
}

class Utility {
  +getFieldElement()
  +toDateText()
  +toArray()
  +toTaskMap()
  +clickedGetElement()
}

class View {
  +render(tasks: TasksMap)
}

TaskManager --> Task : manages
queryVisible --> TaskManager : uses
queryVisible --> Task : reads
TaskUseCase --> TaskManager : uses
TaskUseCase --> queryVisible : uses
TaskManager --> LocalStorage : uses
TaskManager --> TaskHelpers : uses
Utility --> Task : format

%% 未実装イメージ（main.ts を将来 View クラスに切り出す想定）
View ..> TaskUseCase : uses
View ..> queryVisible : filter/sort UI

:::