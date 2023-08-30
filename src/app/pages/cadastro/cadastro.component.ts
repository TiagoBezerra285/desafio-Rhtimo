import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { error } from 'console';
import { Cadastro } from 'src/app/model/cadastro-model';
import { CadastroServicesService } from 'src/app/services/cadastro-services.service';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.scss']
})
export class CadastroComponent implements OnInit {

  cadastro = {} as Cadastro;
  form: FormGroup;

  get f(): any {
    return this.form.controls;
  }

  constructor(private formBuilder: FormBuilder,
              private cadastroservice: CadastroServicesService) {
   }

  ngOnInit(): void {
    this.validation();
  }

  public validation(): void {
    this.form = this.formBuilder.group({
      nome: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      cpf: ['', Validators.required],
      endereco: ['', Validators.required],
      estado: ['', Validators.required],
      cep: ['', Validators.required],
      cidade: ['', Validators.required],
      tipo: ['1', Validators.required],
      nomeCartao: ['', Validators.required],
      dataAno: ['', Validators.required],
      dataMes: ['', Validators.required],
      numeroCartao: ['', Validators.required],
      codigoSeguranca: ['', Validators.required],
    });
  }

 public resetform(): void{
    this.form.reset();
  }

  public salvarAlteracao(): void {
    this.cadastro = {... this.form.value};
    console.log(this.form.value)
      this.cadastroservice.postCadastro(this.cadastro).subscribe(
        () => console.log("Cadastrado com sucesso!"),
        (error:any)=>{
          console.error(error);
        }
      )
  }

}
