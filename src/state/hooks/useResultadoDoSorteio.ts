import { useRecoilValue } from "recoil";
import { resultadoDoAmigoSecreto } from "../atom";

export function useResultadoDoSorteio() {
  return useRecoilValue(resultadoDoAmigoSecreto);
}
