export interface Column {
    id: Number,
    title : String,
    tasks: Array<Task>
}


export interface Task {
    id: Number,
    title: String,
    content: String,
}
 