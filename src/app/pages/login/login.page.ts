import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertController, LoadingController } from '@ionic/angular';
import { AuthenticationServiceService } from '../../services/authentification-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  // initialisation du formulaire avec la methode ReactiveForms
  formulaireLogin!: FormGroup;

  constructor(private router: Router,
              private loadingController: LoadingController,
              private alertController: AlertController,
              private authService: AuthenticationServiceService,
              private formBuilder: FormBuilder, // instance d'un form builder qui permettra de creer le formulaire
              ) { }

  /**
   * Cette fonction s'execute apres le chargement de la page
   */
  ngOnInit() {
    this.initForm();
  }

  /**
   * Cette fonction initialise le formulaire
   */
  initForm()
  {
    this.formulaireLogin = this.formBuilder.group({
      email: ['eve.holt@reqres.in', [Validators.required, Validators.email]],
			password: ['cityslicka', [Validators.required, Validators.minLength(6)]]
		});
  }


  /**
   * Recuperations des données saises par l'utilisateur
   * Envoi vers l'api pour verification
   * SI ok afficher la page protegé (tab1
   * Sinon 
   * Rester sur la page login
   */
  async login() {
		const loading = await this.loadingController.create();
		await loading.present();

		this.authService.login(this.formulaireLogin.value).subscribe(
			async (res) => {
				await loading.dismiss();
				this.router.navigateByUrl('/start/tabs/tab1', { replaceUrl: true });
			},
			async (res) => {
				await loading.dismiss();
				const alert = await this.alertController.create({
					header: 'Erreur lors de la connexion',
					message: res.error.error,
					buttons: ['OK']
				});

				await alert.present();
			}
		);
	}

}