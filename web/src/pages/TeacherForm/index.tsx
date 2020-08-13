import React, {useState, FormEvent} from 'react';

import PageHeader from '../../components/PageHeader';

import logoImg from '../../assets/images/logo.svg';
import backIcon from '../../assets/images/icons/back.svg'
import Input from '../../components/Input';
import './styles.css'
import WarnIcon from '../../assets/images/icons/warning.svg'

import Textarea from '../../components/textarea';
import Select from '../../components/Select';

function TeacherForm(){

    const [name, setName] = useState('');
    const [avatar, setAvatar] = useState('');
    const [whatsapp, setWhatsapp] = useState('');
    const [bio, setBio] = useState('');
    const [cost, setCost] = useState('');
    const [subject, setSubject] = useState('');

    const [scheduleItems, setScheduleItems]= useState([
        {week_day: 0, from: '', to: ''},
      
    ]);
  

    function addNewScheduleItem(){
        setScheduleItems([
            ...scheduleItems,
            {week_day: 0, from: '', to: ''}
        ]);

        scheduleItems.push({
            week_day: 0,
            from: '',
            to: ''
        });
    }

    function setScheduleValue(position:number, field:string, value:string){
        const updatedScheduleItems = scheduleItems.map((scheduleItem,index) =>{
            if(index === position){
                return {...scheduleItem, [field]: value}
            }

            return scheduleItem;
        });

        setScheduleItems(updatedScheduleItems);
    }

    function handleCreateClass(e:FormEvent){
        e.preventDefault();
        console.log({
            name,
            avatar,
            whatsapp,
            bio,
            subject,
            cost,
            scheduleItems
        })
    }

    return(
        <div id="page-teacher-form" className="container">
            <PageHeader 
            title="Que incrivel que você quer da aulas."
            description="O primeiro passo é preencher esse formulário de inscrição"
            />

            <main>
                <form onSubmit={handleCreateClass}>
                <fieldset>
                    <legend>Seus dados</legend>
                    <Input
                     name="name" 
                     label="Nome completo"
                     value={name}
                     onChange={(e) => {setName(e.target.value)}}
                     />
                    <Input name="avatar" 
                    label="Avatar" 
                    value={avatar}
                    onChange={(e) => {setAvatar(e.target.value)}}
                    />

                    <Input 
                    name="whatsapp"
                    label="Whatsapp"
                    value={whatsapp}
                    onChange={(e) => {setWhatsapp(e.target.value)}}
                     />

                    <Textarea 
                     name="bio"
                     label="biografia"
                     value={bio}
                     onChange={(e) => {setBio(e.target.value)}}
                     />
                </fieldset>

                <fieldset>
                    <legend>Sobre a aula</legend>
                    <Select
                     name="subject" 
                     label="Matéria"
                     value={subject}
                     onChange={(e) => {setSubject(e.target.value)}}
                     options={[
                         {value: 'Artes', label: 'Artes'},
                         {value: 'Biologia', label: 'Biologia'},
                         {value: 'Ciências', label: 'Ciências'},
                         {value: 'Educação Física', label: 'Educação Física'},
                         {value: 'Física', label: 'Física'},
                         {value: 'História', label: 'História'},
                         {value: 'Matemática', label: 'Matemática'},
                         {value: 'Português', label: 'Português'},
                         {value: 'Química', label: 'Química'},
                     ]}
                     />
                    <Input 
                    name="cost" 
                    label="Custo da sua hora por aula" 
                    value={cost} 
                    onChange={(e) => {setCost(e.target.value)}}
                    />
                </fieldset>

                <fieldset>
                    <legend>Horários disponíveis
                    <button type="button" onClick={addNewScheduleItem}>
                        + Novo Horário
                    </button>
                    </legend>
                  {scheduleItems.map((scheduleitem, index) =>{
                      return(
                        <div key={scheduleitem.week_day}  className="schedule-item">
                        <Select
                           name="week_day" 
                           label="Dia da semana"
                           value={scheduleitem.week_day}
                           onChange={e => setScheduleValue(index, 'week_day', e.target.value)}
                           options={[
                               {value: '0', label: 'Domingo'},
                               {value: '1', label: 'Segunda-Feira'},
                               {value: '2', label: 'Terça-Feira'},
                               {value: '3', label: 'Quarta-Feira'},
                               {value: '4', label: 'Quinta-Feira'},
                               {value: '5', label: 'Sexta-Feira'},
                               {value: '6', label: 'Sabado'},
                           ]}
                           /> 
                           <Input
                            name="from" 
                            label="Das" 
                            type="time"
                            value={scheduleitem.from}
                            onChange={e => setScheduleValue(index, 'from', e.target.value)}
                            />

                           <Input 
                           name="to" 
                           label="Até" 
                           type="time"
                           value={scheduleitem.to}
                           onChange={e => setScheduleValue(index, 'to', e.target.value)}
                           />
                        </div>
                      )
                  })}
                </fieldset>

                <footer>
                    <p>
                        <img src={WarnIcon} alt="Aviso importante"/>
                        Importante! <br/>
                        Preencha todos os dados
                    </p>
                    <button type="submit" >Salvar cadastro</button>
                </footer>
                </form>
            </main>
         </div>
    )
}

export default TeacherForm;