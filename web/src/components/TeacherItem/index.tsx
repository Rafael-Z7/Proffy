import React from 'react';

import './styles.css';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg'

function TeacherItem(){
    return(
        <article className="teacher-item">
                   <header>
                       <img src="https://avatars2.githubusercontent.com/u/2254731?s=460&u=0ba16a79456c2f250e7579cb388fa18c5c2d7d65&v=4" alt="
                       rafael"/>
                       <div>
                           <strong>Diego Fernandes</strong>
                           <span>Química</span>
                       </div>
                   </header>
                <p>Entusiasta das melhores tecnologias de química avançada.
                    <br/><br/>
                    Apaixonado por explodir coisas em laboratórios e por mudar a vida das pessoas através de experiencias.
                </p>
                
                <footer>
                    <p>
                        Preço/hora
                        <strong>R$ 80,00</strong>
                    </p>
                    <button type="button">
                        <img src={whatsappIcon} alt="entrar em contato"/>
                        Entre em contato
                    </button>
                </footer>
               </article>
    )
}

export default TeacherItem