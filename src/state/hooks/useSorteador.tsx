import { useListaDeParticipantes } from "./useListaDeParticipantes";
import { useSetRecoilState } from "recoil";
import { resultadoDoAmigoSecreto } from "../atom";
import { realizarSorteio } from "../helpers/realizarSorteio";

export function useSorteador() {
  const participantes = useListaDeParticipantes();
  const setResultado = useSetRecoilState(resultadoDoAmigoSecreto);

  return () => {
   
    const resultado = realizarSorteio(participantes)

    setResultado(resultado);
  };
}
