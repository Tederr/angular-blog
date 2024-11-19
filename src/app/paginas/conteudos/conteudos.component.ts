import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { dadosFake } from '../../dados/dadosFake';

@Component({
  selector: 'app-conteudos',
  templateUrl: './conteudos.component.html',
  styleUrl: './conteudos.component.css',
})
export class ConteudosComponent implements OnInit {
  fotoCapa: string ='';
  tituloNoticia: string = '';
  descricaoNoticia: string = '';
  private id: string | null = '0';

  constructor(private rota: ActivatedRoute) {}
  ngOnInit(): void {
    this.rota.paramMap.subscribe((valor) => (this.id = valor.get('id')))

    this.sentandoValoresDoComponente(this.id)
  }

  sentandoValoresDoComponente(id: string | null) {
    const resultado = dadosFake.filter( valor => valor.id == id)[0]
    this.fotoCapa = resultado.fotoCapa
    this.tituloNoticia = resultado.titulo
    this.descricaoNoticia = resultado.noticia
  }

}
