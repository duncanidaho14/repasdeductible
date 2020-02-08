import React, { Component, Fragment } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link,
  useLocation,
  useHistory,
  useParams
} from 'react-router-dom';
import Slider from './slider';

class Navbar extends Component {
    constructor(props) {
         super(props);
			this.state = {
				value: '',
				seuilAnneeDerniereTravail: '18.60',
				seuilAnneeDerniereDomicile: '4.80',

				seuilCetAnneeTravail: '18.80',
				seuilCetAnneeDomicile: '4.85',
				
				deductionAnneeDerniereTravail: '13.80',
				deductionAnneeDerniereDomicile: '4.80',

				deductionCetAnneeTravail: '13.95',
				deductionCetAnneeDomicile: '4.85',

				repasTravail2018: '',
				repasDomicile2018: '',
				repasTravail2019: '',
				repasDomicile2019: '',


				avantageNature2018: '4.80',
				avantageNature2019: '4.85',
				avantageNature2020: '4.90',

				limiteexoneration2018: '18.60',
				limiteexoneration2019: '18.80',
				limiteexoneration2020: '19.00',

				montantMaximaleDeductibleJour2018: '13.80',
				montantMaximaleDeductibleJour2019: '13.95',
				montantMaximaleDeductibleJour2020: '14.10',


				annee: '',
				prix: '',
				resultat: '',
				resultat2: ''

			}

		 	this.handleChangeAnnee = this.handleChangeAnnee.bind(this)
		 	//this.handleChangeLieu = this.handleChangeLieu.bind(this)
		 	this.handleChangePrix = this.handleChangePrix.bind(this)
			this.handleSubmit = this.handleSubmit.bind(this)
		
	}

	handleChangePrix(event) {
			const prix = event.target.value;
			this.setState({ prix: prix });
		
	}

	handleChangeAnnee(event, prix, resultat, resultat2) {
		event.preventDefault();
		const annee = event.target.value;
		
		const avantageNature2018 = '4.80';
		const avantageNature2019 = '4.85';
		const avantageNature2020 = '4.90';

		const limiteexoneration2018 = '18.60';
		const limiteexoneration2019 = '18.80';
		const limiteexoneration2020 = '19.00';

		const montantMaximaleDeductibleJour2018 = '13.80';
		const montantMaximaleDeductibleJour2019 = '13.95';
		const montantMaximaleDeductibleJour2020 = '14.10';

		if (annee === '2018') {
			if (parseFloat(this.state.prix) > limiteexoneration2018) {
				resultat2 = montantMaximaleDeductibleJour2018;
				resultat = this.state.prix - montantMaximaleDeductibleJour2018
				console.log(annee + " part déductible = " + resultat + "  / part non déductible: " + resultat2)
				this.setState({
					annee: annee,
					resultat: resultat,
					resultat2: resultat2
				})
				
			} else if (parseFloat(this.state.prix) <= limiteexoneration2018) {
				resultat = avantageNature2018
				resultat2 = this.state.prix - avantageNature2018
				console.log(annee + " part déductible = " + resultat + " / part non déductible: "  + resultat2)
				this.setState({
					annee: annee,
					resultat: resultat,
					resultat2: resultat2
				})
			}
		} else if (annee === '2019') {
			if (parseFloat(this.state.prix) > limiteexoneration2019) {
				resultat2 = montantMaximaleDeductibleJour2019;
				resultat = this.state.prix - montantMaximaleDeductibleJour2019
				console.log(annee + " part déductible = " + resultat + " / part non déductible: " + resultat2)
				this.setState({
					annee: annee,
					resultat: resultat,
					resultat2: resultat2
				})
			} else if (parseFloat(this.state.prix) <= limiteexoneration2019) {
				resultat = avantageNature2019
				resultat2 = this.state.prix - avantageNature2019
				console.log(annee + " part déductible = " + resultat + " / part non déductible: " + resultat2)
				this.setState({
					annee: annee,
					resultat: resultat,
					resultat2: resultat2
				})
			}
			console.log(this.state.annee)
		} else if (annee === '2020') {
			if (parseFloat(this.state.prix) > limiteexoneration2020) {
				resultat2 = montantMaximaleDeductibleJour2020
				resultat = this.state.prix - montantMaximaleDeductibleJour2020
				console.log(annee + " part déductible = " + resultat + " / part non déductible: " + resultat2)
				this.setState({
					annee: annee,
					resultat: resultat,
					resultat2: resultat2
				})
			} else if (parseFloat(this.state.prix) <= limiteexoneration2020) {
				resultat = avantageNature2020
				resultat2 = this.state.prix - avantageNature2020
				console.log(annee + " résultat = " + resultat + " on ne peut déduire : " + resultat2)
				this.setState({
					annee: annee,
					resultat: resultat,
					resultat2: resultat2
				})
			}
		} else {
			console.error("le calcul de l'année ne se fait pas ! ")
		}
	}

    handleSubmit(event, annee, prix, resultat, resultat2) {
       	event.preventDefault();
		
		const formulaire = { ...this.state }
		
			

		
    }

    render() {
        return (
            <Fragment>
			 <Router>
                <div className="wrapper">

				<nav id="sidebar">
				<div className="sidebar-header">
					<h3>Comptabilité</h3>
					<strong>CT</strong>
				</div>
				<ul className="list-unstyled components">
					<li className="active">
						<a href="#homeSubmenu" data-toggle="collapse" aria-expanded="false" className="dropdown-toggle">
							<i className="fas fa-home"></i>
							Regarde
						</a>
						<ul className="collapse list-unstyled" id="homeSubmenu">
							<li>
								<a href="/about">Info</a>
							</li>
							<li>
								<a href="#">Article</a>
							</li>
							<li>
								<a href="#">Section</a>
							</li>
						</ul>
					</li>
					<li>
						{/* <a href="/about">
							<i className="fas fa-briefcase"></i>
							A propos
						</a> */}
						<a href="/about">
							<i className="fas fa-briefcase"></i>
							A propos
						</a>
						<a href="#pageSubmenu" data-toggle="collapse" aria-expanded="false" className="dropdown-toggle">
							<i className="fas fa-copy"></i>
							Calcul
						</a>
						<ul className="collapse list-unstyled fa-ul" id="pageSubmenu">
							<li>
								<a href="#" className="page1">
									<span className="fa-li">
										<i className="fas fa-check-square"></i>
									</span>impôt</a>
							</li>
							<li>
								<a href="#" className="page1">
									<span className="fa-li">
										<i className="fas fa-check-square"></i>
									</span>Legal</a>
							</li>
							<li>
								<a href="#" className="page1">
									<span className="fa-li">
										<i className="fas fa-spinner fa-pulse"></i>
									</span>Droit</a>
							</li>
						</ul>
					</li>
					<li>
						<a href="/about">
							<i className="fas fa-image"></i>
							Taux
						</a>
					</li>
					<li>
						<a href="#">
							<i className="fas fa-question"></i>
							FAQ
						</a>
					</li>
					<li>
						<a href="#">
							<i className="fas fa-paper-plane"></i>
							Contact
						</a>
					</li>
				</ul>

				<ul className="list-unstyled CTAs">
					<li>
						<a href="#" className="download">Download</a>
					</li>
					<li>
						<a href="#" className="article">Retour en Arrière</a>
					</li>
				</ul>
			</nav>

			<div id="content">
				<nav className="navbar navbar-expand-lg navbar-light bg-light">
					<a className="navbar-brand" href="#">Navbar</a>
					<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
						<span className="navbar-toggler-icon"></span>
					</button>
					<div className="collapse navbar-collapse" id="navbarSupportedContent">
						<ul className="navbar-nav mr-auto">
							<li className="nav-item active">
								<a className="nav-link" href="/">Home
									<span className="sr-only">(current)</span>
								</a>
							</li>
							<li className="nav-item">
								<a className="nav-link" href="#">Link</a>
							</li>
							<li className="nav-item dropdown">
								<a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
									Dropdown
								</a>
								<div className="dropdown-menu" aria-labelledby="navbarDropdown">
									<a className="dropdown-item" href="#">Action</a>
									<a className="dropdown-item" href="#">Another action</a>
									<div className="dropdown-divider"></div>
									<a className="dropdown-item" href="#">Something else here</a>
								</div>
							</li>
							<li className="nav-item">
								<a className="nav-link disabled" href="#" tabIndex="-1" aria-disabled="true">Disabled</a>
							</li>
						</ul>
						<button type="button" id="sidebarCollapse" className="btn btn-info sidebar_button">
							<i className="fas fa-align-left"></i>
							<span className="togglebutton">Modifier barre latérale</span>
						</button>
						<form className="form-inline my-2 my-lg-0">
							<input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
							<button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
						</form>
					</div>
				</nav>
				<header>
					<h1>Calcul de déduction des frais de repas</h1>
					<p className="asterix">
						<i className="fas fa-exclamation-triangle"></i>
						Lorsque le résultat est négatif, il N'y a
						                    AUCUNE déduction possible
						<i className="fas fa-angry"></i>
						*
					</p>
					<p className="aside">Lorsque le résultat est NaN, celà signifie que vous n'avez pas entrée le prix du repas</p>
					<div className="line"></div>
				</header>

							<h2>En {this.state.annee}  avec pour montant {this.state.prix} € vous pouvez déduire : <br /> {this.state.resultat2} et la part non déductible est de {this.state.resultat}</h2>
				<form action="/" method="POST" id="monFormulaire" className="form" onSubmit={this.handleSubmit}>
					<div className="form-group">
						<label htmlFor="annee" > Année fiscale: </label>
						<select className="form-control form-control-lg"  id="annee" name="annee" value={this.state.annee} onChange={this.handleChangeAnnee}>
							<option id="optun" value="2018" name="2018">2018</option>
							<option id="optdeux" value="2019" name="2019">2019</option>
							<option id="opttrois" value="2020" name="2020">2020</option>
						</select>
						{/* <label htmlFor="lieu">Lieu du repas :</label>
						<select className="form-control form-control-lg" id="repas" value="" name="lieu"  >
							<option id="repasTravail" value="travail" name="lieuTravail">Repas sur le lieu de travail</option>
							<option id="repasDomicile" value="domicile" name="lieuDomicile">Repas à domicile</option>
						</select> */}
						<label htmlFor="prix">Prix du repas :</label>
						<input className="form-control" type="text" id="prix" value={this.state.prix || ''} name="prix" placeholder="prix du repas TTC" required onChange={this.handleChangePrix}/>
						<br />
						<button className="btn btn-primary mb-2" value="Envoyer" type="submit" id="bouton_envoi">Envoyer</button>
						<span id="information" className="information">Résultat au dessus</span>
					</div>
				</form>
				<section>
					<article>
						<h2 className="secondTitre">Ce site est actuellement en construction</h2>
						<p></p>
					</article>
					<article>
						<div className="container">
							<div className="card-deck mb-3 text-center">
								<div className="card mb-4 shadow-sm">
									<div className="card-header">
										<h4 className="my-0 font-weight-normal">Free</h4>
									</div>
									<div className="card-body">
										<h3 className="card-title pricing-card-title">$0
											<small className="text-muted">/ mo</small>
										</h3>
										<ul className="list-unstyled mt-3 mb-4">
											<li>10 users included</li>
											<li>2 GB of storage</li>
											<li>Email support</li>
											<li>Help center access</li>
										</ul>
										<button type="button" className="btn btn-lg btn-block btn-outline-primary">Sign up for
											                                        free</button>
									</div>
								</div>
							</div>
						</div>
					</article>
					<article>
						<Slider />
					</article>
				</section>

				<footer className="pt-4 my-md-5 pt-md-5 border-top">
					<div className="row">
						<div className="col-12 col-md">
							<img className="mb-2" src="./asset/img/finance-papier-argent.jpg" alt="papier financier et argent" width="120" height="120"/>
							<small className="d-block mb-3 text-muted">&copy; 2020</small>
						</div>
						<div className="col-6 col-md">
							<h5>Features</h5>
							<ul className="list-unstyled text-small">
								<li>
									<a className="text-muted" href="#">Cool stuff</a>
								</li>
								<li>
									<a className="text-muted" href="#">Random feature</a>
								</li>
								<li>
									<a className="text-muted" href="#">Team feature</a>
								</li>
								<li>
									<a className="text-muted" href="#">Stuff for developers</a>
								</li>
								<li>
									<a className="text-muted" href="#">Another one</a>
								</li>
								<li>
									<a className="text-muted" href="#">Last time</a>
								</li>
							</ul>
						</div>
						<div className="col-6 col-md">
							<h5>Resources</h5>
							<ul className="list-unstyled text-small">
								<li>
									<a className="text-muted" href="#">Resource</a>
								</li>
								<li>
									<a className="text-muted" href="#">Resource name</a>
								</li>
								<li>
									<a className="text-muted" href="#">Another resource</a>
								</li>
								<li>
									<a className="text-muted" href="#">Final resource</a>
								</li>
							</ul>
						</div>
						<div className="col-6 col-md">
							<h5>About</h5>
							<ul className="list-unstyled text-small">
								<li>
									<a className="text-muted" href="#">Team</a>
								</li>
								<li>
									<a className="text-muted" href="#">Locations</a>
								</li>
								<li>
									<a className="text-muted" href="#">Privacy</a>
								</li>
								<li>
									<a className="text-muted" href="#">Terms</a>
								</li>
							</ul>
						</div>
					</div>
				</footer>
			</div>
		</div>
		
		 </Router>
    </Fragment>);
    }
    
}

export default Navbar;