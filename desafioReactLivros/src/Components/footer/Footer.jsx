import logoFace from '../../assets/logoFace.png'
import logoInsta from '../../assets/logoInstagram.png'
import logoLinkedin from '../../assets/logoLinkedin.png'
import logoYoutube from '../../assets/logoYoutube.png'
import logoTwitter from '../../assets/logoTwitter.png'
import s from '../footer/footer.scss'

export default function Footer(){
    return(
        <footer>
            <section className={s.contatos}>
                <p>4002-8922</p>
                <nav>
                    <a href=""><img src={logoFace} alt="" /></a>
                    <a href=""><img src={logoTwitter} alt="" /></a>
                    <a href=""><img src={logoYoutube} alt="" /></a>
                    <a href=""><img src={logoLinkedin} alt="" /></a>
                    <a href=""><img src={logoInsta} alt="" /></a>
                </nav>
            </section>
            <section className={s.copyright}>
                <p>Layout desenvolvido pela Vai na Web para fins educativos</p>
            </section>
        </footer>
    )
}