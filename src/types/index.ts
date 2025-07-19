export interface Column {
    id: Number,
    title : String,
    task: Array<Task>
}


export interface Task {
    id: Number,
    title: String,
    content: String,
}
 