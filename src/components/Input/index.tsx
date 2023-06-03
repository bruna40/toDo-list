import { PlusCircle } from "phosphor-react";
import { ContainerInput } from "./style";

export function Input() {
    return (
        <ContainerInput>
            <input type="text" placeholder="Adicione uma nova tarefa" />
            <button type="submit">
                Criar
                <PlusCircle size={20} />
            </button>
        </ContainerInput>
    )
}