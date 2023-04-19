import { useNavigate } from "react-router-dom";
import { useListaDeParticipantes } from "../state/hooks/useListaDeParticipantes";
import './Rodape.css'
import { useSorteador } from "../state/hooks/useSorteador";

export function Rodape() {
  const participantes = useListaDeParticipantes();
  const navegarPara = useNavigate();
  const sortear = useSorteador()

  function iniciar() {
    sortear()
    navegarPara('/sorteio')
  }

  return (
    <footer className="rodape-configuracoes">
      <button className="botao" disabled={participantes.length < 3} onClick={iniciar}>
        Iniciar brincadeira
      </button>
      <img src="/assets/sacolas.png" alt="Sacolas" />
    </footer>
  );
}
