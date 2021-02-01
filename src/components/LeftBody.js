import React from 'react';
import Bar from './Bar';

class LeftBody extends React.Component {

    state = this.props.data

    render(){

        let listCaractere = this.state.caractere.map(function(index){
            return (<div>- {index.nom}</div>)
        });

        let listCompetence = this.state.compotencesPro.map(function(indexSix){
            return(
                <div className="ml-3">
                    {indexSix.nom}
                    <Bar long={(indexSix.niveau)*2}/>
                </div>
            )
        });

        return(
            <div style={style.content} className="pr-5 pl-5 pt-4 pb-4">
                <div>
                    <h3><svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" class="bi bi-person-circle" viewBox="0 0 16 16">
  <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"/>
  <path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"/>
</svg> ETAT CIVIL</h3>
                    <div className="ml-5">
                        <div>
                            <b>Née le: </b><span>{this.state.etatCivil.birthday}</span>
                        </div>
                        <div>
                            <b>Sexe: </b><span>{this.state.etatCivil.sexe}</span>
                        </div>
                        <div>
                            <b>Nationalité: </b><span>{this.state.etatCivil.nationalite}</span>
                        </div>
                        <div>
                            <b>Situation Familiale: </b><span>{this.state.etatCivil.situation}</span>
                        </div>
                        <div>
                            <b>Adresse: </b><span>{this.state.etatCivil.adresse}</span>
                        </div>
                    </div>
                </div>
                <div className="pt-4">
                    <h3><svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" class="bi bi-telephone-fill" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z"/>
</svg> CONTACT</h3>
                    <div className="ml-5">
                        <div>
                            <b>Mobile: </b><span>{this.state.contacte.mobile}</span>
                        </div>
                        <div>
                            <b>Email: </b><span>{this.state.contacte.mail}</span>
                        </div>
                    </div>
                </div>
                <div className="pt-4">
                    <h3><svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" class="bi bi-check2-circle" viewBox="0 0 16 16">
  <path d="M2.5 8a5.5 5.5 0 0 1 8.25-4.764.5.5 0 0 0 .5-.866A6.5 6.5 0 1 0 14.5 8a.5.5 0 0 0-1 0 5.5 5.5 0 1 1-11 0z"/>
  <path d="M15.354 3.354a.5.5 0 0 0-.708-.708L8 9.293 5.354 6.646a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0l7-7z"/>
</svg> COMPETENCES PRO</h3>
                    <div>
                        {listCompetence}
                    </div>
                </div>
                <div className="pt-4">
                    <h3><svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" class="bi bi-person-bounding-box" viewBox="0 0 16 16">
  <path d="M1.5 1a.5.5 0 0 0-.5.5v3a.5.5 0 0 1-1 0v-3A1.5 1.5 0 0 1 1.5 0h3a.5.5 0 0 1 0 1h-3zM11 .5a.5.5 0 0 1 .5-.5h3A1.5 1.5 0 0 1 16 1.5v3a.5.5 0 0 1-1 0v-3a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 1-.5-.5zM.5 11a.5.5 0 0 1 .5.5v3a.5.5 0 0 0 .5.5h3a.5.5 0 0 1 0 1h-3A1.5 1.5 0 0 1 0 14.5v-3a.5.5 0 0 1 .5-.5zm15 0a.5.5 0 0 1 .5.5v3a1.5 1.5 0 0 1-1.5 1.5h-3a.5.5 0 0 1 0-1h3a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 1 .5-.5z"/>
  <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm8-9a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"/>
</svg> CARACTERE</h3>
                    <div className="ml-5">
                        {listCaractere}
                    </div>
                </div>
            </div>
        )

    }

}
export default LeftBody;

const style = {
    content: {
        backgroundColor: '#566573',
        color: 'white'
    },
    bar: {
        height: 5,
        backgroundColor: 'white',
        width: 100
    }
}