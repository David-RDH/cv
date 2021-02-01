import React from 'react';

class Right extends React.Component {

    render () {

        let listExper = this.props.data.experienceActivitePro.map(function(index){
            return(
                <div className="ml-5">
                    <div className="ml-5"><b>{index.nom}</b></div>
                    <em>{index.descri}</em>
                    <p>{index.date}</p>
                </div>
            )
        });

        let listFormation = this.props.data.formation.map(function(indexTwo){
            return(
                <div className="ml-5">
                    <div className=""><b>{indexTwo.annee}</b></div>
                    <div align="center">
                        <div>{indexTwo.ecole}</div>
                        <div><em>{indexTwo.filiere}</em></div>
                        <b><em>{indexTwo.niveau}</em></b>
                    </div>
                </div>
            )
        });

        let listConnaissanceLangue = this.props.data.connaissanceLanguistique.map(function(indexThree){
            return(
                <div className="ml-5 row">
                    <div className="col-3">
                        <b>{indexThree.nom} :</b>
                    </div>
                    <div className="col-9">
                        {indexThree.descri}
                    </div>
                </div>
            )
        });

        let listWebPro = this.props.data.webProgrammation.map(function(indexFour){
            return(<div className="ml-5">- {indexFour.nom}</div>)
        });

        let listWebNotion = this.props.data.connaissanceNotion.map(function(indexFive){
            return(<div className="ml-5">- {indexFive.nom}</div>)
        });

        return (
            <div>
                <div align="center" className="mb-5 mt-5"><h2>CURRICULUM VITAE</h2></div>
                <div>
                    <h4>EXPERIENCE et ACTIVITE PROFESSIONNELLE</h4>
                    {listExper}
                </div>
                <div>
                    <h4>FORMATION</h4>
                    {listFormation}
                </div>
                <div>
                    <h4>CONNAISSANCE LANGUISTIQUE</h4>
                    {listConnaissanceLangue}
                </div>
                <div>
                    <h4>WEB / PROGRAMMATION</h4>
                    {listWebPro}
                </div>
                <div>
                    <h4>CONNAISSANCE WEB / NOTION</h4>
                    {listWebNotion}
                </div>
                <div align="right" className="mr-5">
                    <p className="mt-5">
                        Je déclare sur l'honneur l'exactitude des informations ci-dessus
                        <br></br>L'intérressé
                    </p>
                </div>
                <div align="right" className="mr-5 mt-5">
                    <p>{this.props.data.profile.name} {this.props.data.profile.firstName}</p>
                </div>
            </div>
        )
    }

}

export default Right;