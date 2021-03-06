import React from 'react';
import {Link} from 'react-router-dom';

import './styles.css'
import TeacherItem from '../../components/TeacherItem';
import PageHeader from '../../components/PageHeader';
import Input from '../../components/Input';
import Select from '../../components/Select';

function TeacherList(){
    return(
        <div id="page-teacher-list" className="container">
            <PageHeader title="Estes são os proffys disponiveis.">
                <form id="search-teachers">
                <Select
                     name="subject" 
                     label="Matéria"
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

                <Select
                     name="week_day" 
                     label="Dia da semana"
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
                    <Input type="time" name="time" label="Hora"/>
                </form>
           </PageHeader>
           <main>
               <TeacherItem/>
               <TeacherItem/>
           </main>
        </div>
    )
}

export default TeacherList;