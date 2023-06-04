import { PlusCircle } from "phosphor-react";
import { ContainerInput, ContainerTarefa } from "./style";
import { FormEvent, useState } from "react";
import { List } from "../List";


export function Task() {
    const [newTask, setNewTask] = useState<string>('');
    const [tasks, setTasks] = useState<string[]>([]);
    const [taskNumber, setTaskNumber] = useState<number>(0);



    function handleCreateNewTask(event: FormEvent) {
        event.preventDefault()
        setTasks([...tasks, newTask])
        setNewTask('')
    }

    const isNewTaskEmpty = newTask.trim() === '';

    function handleDeleteTask(taskToDelete: string) {
        setTasks(tasks.filter((task) => task !== taskToDelete))
    }


    return (
        <>
            <form onSubmit={handleCreateNewTask}>
                <ContainerInput >
                    <input
                        value={newTask}
                        type="text"
                        placeholder="Adicione uma nova tarefa"
                        onChange={(e) => setNewTask(e.target.value)}/>
                    <button type="submit" disabled={isNewTaskEmpty} >
                        Criar
                        <PlusCircle size={20} />
                    </button>
                </ContainerInput>
            </form>
            <ContainerTarefa>
                <div>
                    <h6>Tarefas criadas</h6>
                    <p>{tasks.length}</p>
                </div>
                <div>
                    <h6>Concluídas</h6>
                    <p>{taskNumber} de {tasks.length}</p>

                </div>
            </ContainerTarefa>
            <div>
                {
                    tasks.map((task) => {
                        return <List setTaskNumber={setTaskNumber} numberTask={taskNumber} text={task} onDeleteComment={handleDeleteTask}/>
                    })
                }
            </div>
        </>

    )
}