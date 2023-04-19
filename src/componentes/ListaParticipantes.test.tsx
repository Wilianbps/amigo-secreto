import { render, screen } from "@testing-library/react";
import { RecoilRoot } from "recoil";
import { ListaParticipantes } from "./ListaParticipantes";
import { useListaDeParticipantes } from "../state/hooks/useListaDeParticipantes";

jest.mock("../state/hooks/useListaDeParticipantes", () => {
  return {
    useListaDeParticipantes: jest.fn()
  }
});

describe("uma lista vazia de participantes", () => {
  beforeEach(() => {
    (useListaDeParticipantes as jest.Mock).mockReturnValue([]);
  });

  test("deve ser renderizada sem elementos", () => {
    render(
      <RecoilRoot>
        <ListaParticipantes />
      </RecoilRoot>
    );

    const items = screen.queryAllByRole("listitem");

    expect(items).toHaveLength(0);
  });
});

describe("uma lista preenchida de participantes", () => {
  const participantes = ["Wilian, Karine"];
  beforeEach(() => {
    (useListaDeParticipantes as jest.Mock).mockReturnValue(participantes);
  });
  test("deve ser renderizada com elementos", () => {
    render(
      <RecoilRoot>
        <ListaParticipantes />
      </RecoilRoot>
    );

    const items = screen.queryAllByRole("listitem");

    expect(items).toHaveLength(participantes.length);
  });
});
