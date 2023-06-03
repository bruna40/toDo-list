import { Trash } from "phosphor-react";
import { ContainerTarefa, ContainerMain, ContainerLinha, ContainerInput } from "./style";

export function List() {
    return (
        <ContainerMain>
            <ContainerTarefa>
                <div>
                    <h6>Tarefas criadas</h6>
                    <p>1</p>
                </div>
                <div>
                    <h6>Concluídas</h6>
                    <p>0</p>
                </div>
            </ContainerTarefa>
            <span>
                <ContainerLinha>
                    <li>
                        <ContainerInput type="checkbox" />
                        <p>Estudar React</p>
                        <button>
                            <Trash size={20} />
                        </button>
                    </li>
                </ContainerLinha>
                <ContainerLinha>
                    <li>
                        <ContainerInput type="checkbox" />
                        <p>Estudar React</p>
                        <button>
                            <Trash size={20} />
                        </button>
                    </li>
                </ContainerLinha>
                <ContainerLinha>
                    <li>
                        <ContainerInput type="checkbox" />
                        <p>Ablueablueablueablue</p>
                        <button>
                            <Trash size={20} />
                        </button>
                    </li>
                </ContainerLinha>
                <ContainerLinha>
                    <li>
                        <ContainerInput type="checkbox" />
                        <p>Terminar esse todo list, para postar</p>
                        <button>
                            <Trash size={20} />
                        </button>
                    </li>
                </ContainerLinha>
            </span>
        </ContainerMain>
    )
}