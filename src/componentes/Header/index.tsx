import './styles.css'

export function Header(){
  return( 
  <header className="cabecalho">
  <div className="imagem-logo" role="img" aria-label='Logo do Sorteador'></div>
  <img className='participante' src="/assets/participante.png" alt="Participante com um presente na mão" />
</header>)
}