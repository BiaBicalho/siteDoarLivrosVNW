import S from './inicio.scss'
import rede from '../../assets/circuloMain.png'
import lendo from '../../assets/segundaImagemMain.png'
import inspirar from '../../assets/terceiraImagemMain.png'
import balanca from '../../assets/quartaImagemMain.png'

export default function Inicio(){
    return(
        <main>
            <section className={S.fraseInicio}>
                <h2>VENHA FAZER PARTE DA MAIOR REDE DE DOAÇÃO</h2>
            </section>
            <section className={S.devoDoar}>
                <div>
                <h2>Por que devo doar?</h2>
                </div>
                <section className={S.boxCard}>
                    <article>
                        <img src={rede} alt="ilustração de um circulo social" />
                        <p>Oferecer livros a quem não tem acesso, ajuando a reduzir a exclusão social</p>
                    </article>
                    <article>
                        <img src={lendo} alt="Ilutração de uma pessoa lendo um livro" />
                        <p>Estimula o hábito de leitura e o aprendizado contínuo.</p>
                    </article>
                    <article>
                        <img src={inspirar} alt="" />
                        <p>Fornece conhecimento e inspiração, permitindo que indivíduos transformem suas vidas</p>
                    </article>
                    <article>
                        <img src={balanca} alt="Ilustração de uma balança" />
                        <p>Garante que todos, independente de suas condições, tenham oportunidades de aprendizado.</p>
                    </article>
                </section>
            </section>
        </main>
    )
}