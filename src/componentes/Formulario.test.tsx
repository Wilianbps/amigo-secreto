//Jest

import { act, fireEvent, render, screen } from "@testing-library/react";
import { Formulario } from "./Formulario";
import { RecoilRoot } from "recoil";

//Função test - Recebe dois argumentos

//1 - o que eu quero TextDecoderStream
//2 - A implementação do teste em si
// Queremos testar que quando o input está vazio, novos participantes não podem ser adicionados

describe("o comportamento do formulário.tsx", () => {
  test("quando o input está vazio, novos participantes não podem ser adicionados", () => {
    // O que fazer?
    //Precisamos então primeiramente renderizar o componente chamando a função render()

    render(
      <RecoilRoot>
        <Formulario />
      </RecoilRoot>
    );
    //Encontrar o input no DOM
    //Preciso de alguma forma ter acesso a tela pra rodar querys e encontrar coisas
    //Para isso utilizamos uma biblioteca chamada testing/library
    //utilizamos então um objeto chamado screen

    const input = screen.getByPlaceholderText(
      "Insira os nomes dos participantes"
    );
    //Encontrar o botão
    //Quero encontrar o botão pela responsabilidade que o botão tem dentro do form, que é de submit
    //Role - encontrado pela responsabilidade

    const botão = screen.getByRole("button");

    //Garantir que o input esteja no documento
    expect(input).toBeInTheDocument(); //Espero que o input esteja no documento

    //Garantir que o botão esteja desabilitado
    expect(botão).toBeDisabled(); //Espero que o botão esteja desabilitado

    /* 
    Nós temos então um conjunto de bibliotecas ajudando a gente - JEST e TESTING LIBRARY
  
    JEST - (expect) - jest dom que garante esses testes
    TESTING LIBRARY - (screen) - manipular a tela com esse objeto - Não testa a implementação, mas sim o comportamento
    */
  });

  test("Adicionar um participante caso exista um nome preenchido", () => {
    render(
      <RecoilRoot>
        <Formulario />
      </RecoilRoot>
    );

    const input = screen.getByPlaceholderText(
      "Insira os nomes dos participantes"
    );

    const button = screen.getByRole("button");

    //Inserir um valor no input
    fireEvent.change(input, {
      target: {
        value: "Ana Catarina",
      },
    });

    //clicar no botão de submeter
    fireEvent.click(button); //Vem do Testing Library

    //garantir que o input esteja com o foco ativo
    expect(input).toHaveFocus();

    //garantir que o input não tenha um valor
    expect(input).toHaveValue("");
  });

  test("nomes duplicados não pdem ser adicionados na lista", () => {
    render(
      <RecoilRoot>
        <Formulario />
      </RecoilRoot>
    );

    const input = screen.getByPlaceholderText(
      "Insira os nomes dos participantes"
    );

    const button = screen.getByRole("button");

    //Inserir um valor no input
    fireEvent.change(input, {
      target: {
        value: "Ana Catarina",
      },
    });

    fireEvent.click(button);

    fireEvent.change(input, {
      target: {
        value: "Ana Catarina",
      },
    });

    //clicar no botão de submeter
    fireEvent.click(button); //Vem do Testing Library

    const mensagemDeErro = screen.getByRole("alert");

    expect(mensagemDeErro.textContent).toBe(
      "Nomes duplicados não são permitidos"
    );
  });

  test("a mensagem de erro deve sumir após os timers", () => {
    jest.useFakeTimers();
    render(
      <RecoilRoot>
        <Formulario />
      </RecoilRoot>
    );

    const input = screen.getByPlaceholderText(
      "Insira os nomes dos participantes"
    );

    const button = screen.getByRole("button");

    //Inserir um valor no input
    fireEvent.change(input, {
      target: {
        value: "Ana Catarina",
      },
    });

    fireEvent.click(button);

    fireEvent.change(input, {
      target: {
        value: "Ana Catarina",
      },
    });

    //clicar no botão de submeter
    fireEvent.click(button); //Vem do Testing Library

    let mensagemDeErro = screen.queryByRole("alert");

    expect(mensagemDeErro).toBeInTheDocument();

    //Esperar N segundos

    act(() => {
      /* fire events that update state */
      jest.runAllTimers();
    });

    mensagemDeErro = screen.queryByRole("alert");

    expect(mensagemDeErro).toBeNull();
  });
});
