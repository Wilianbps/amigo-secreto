import { useRecoilValue } from "recoil";
import { listaParticipantesState } from "../atom";

export function useListaDeParticipantes() {
  return useRecoilValue(listaParticipantesState);
}
