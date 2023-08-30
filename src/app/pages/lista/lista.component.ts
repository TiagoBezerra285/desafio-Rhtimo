import { Component, OnInit } from '@angular/core';
import { Cadastro } from 'src/app/model/cadastro-model';
import { CadastroServicesService } from 'src/app/services/cadastro-services.service';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.scss'],

})
export class ListaComponent implements OnInit {

  listaCadastro: Cadastro[];
  public cadastroFiltrados: any = [];
  private _filtroLista: string = '';

  public get filtroLista(){
    return this._filtroLista;
  }

  public set filtroLista(value: string){
    this._filtroLista = value;
    this.cadastroFiltrados = this.filtroLista ? this.filtrarCadastro(this.filtroLista) : this.listaCadastro;
  }


  filtrarCadastro(filtrarPor: string): any{
    filtrarPor = filtrarPor.toLocaleLowerCase();
    return this.listaCadastro.filter(
      (lista: {name: string; cpf: string}) => lista.name.toLocaleLowerCase().indexOf(filtrarPor) !== -1 ||
      lista.cpf.toLocaleLowerCase().indexOf(filtrarPor) !== -1
    );
  }

  constructor(private cadastroservice: CadastroServicesService) {
  }

  ngOnInit(): void {
    this.list();

  }

  public delete(id: number): void{
    this.cadastroservice.deleteCadastro(id).subscribe(
      dados =>{
       console.log(dados)
       this.list();
      }

    );

  }

  public list(): void{
    this.cadastroservice.getCadastro()
    .subscribe(dados =>{
      this.listaCadastro = dados
      this.cadastroFiltrados = this.listaCadastro;
    },
     error => console.log(error)
    );

  }

}
