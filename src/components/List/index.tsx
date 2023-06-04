import { Trash } from "phosphor-react";
import {  ContainerMain, ContainerLinha, ContainerInput } from "./style";
import { useState } from "react";

interface ListProps {
    text: string;
    onDeleteComment: (taskToDelete: string) => void;
    numberTask: number;
    setTaskNumber: (numberTask: number) => void;
}

export function List({text, onDeleteComment, numberTask, setTaskNumber }: ListProps) {
    const [taskDone, setTaskDone] = useState<boolean>(false);

    function handleTaskDone() {
        setTaskDone(!taskDone)
        setTaskNumber(numberTask + 1)

        //Que o numero do cantador diminua quando a tarefa for desmarcada
        if (taskDone) {
            setTaskNumber(numberTask - 1)
        }
    }

    function handleDeleteComment() {
        onDeleteComment(text)

    }
    return (
        <ContainerMain>
            <span>
            <ContainerLinha>
                    <li>
                        <ContainerInput type="checkbox" onClick={handleTaskDone} />
                        <p style={{ textDecoration: taskDone ? "line-through" : "none" }}>{text}</p>
                        <button onClick={handleDeleteComment}>
                            <Trash size={20} />
                        </button>
                    </li>
                </ContainerLinha>
            </span>
        </ContainerMain>
    )
}