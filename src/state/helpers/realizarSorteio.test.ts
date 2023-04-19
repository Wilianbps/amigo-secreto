import { realizarSorteio } from "./realizarSorteio";

describe("dado um sorteio d amigo secreto", () => {
  test("cada participante não sorteie o próprio nome", () => {
    const participantes = ["Wilian", "Karine", "Wendy", "Silvia", "Santana"];

    const sorteio = realizarSorteio(participantes);
    participantes.forEach((participante) => {
      const amigoSecreto = sorteio.get(participante);
      expect(amigoSecreto).not.toEqual(participante);
    });
  });
});
