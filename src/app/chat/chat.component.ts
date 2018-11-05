import { Component, OnInit } from '@angular/core';
import { Mensagem } from './mensagem'
import { ChatService } from './chat.service'
import {ActivatedRoute, Params, Router} from '@angular/router';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css'],
  providers: [ ChatService ]
})
export class ChatComponent implements OnInit {
  mensagens: Mensagem[] = [];
  mensagemChat: string = "";
  mensagemUsuario: string = "";
  mensagemErro: string = "";

  constructor(private chatService: ChatService, private route: ActivatedRoute,  private router: Router) { }

  ngOnInit() {
  //  this.enviar( this.mensagemUsuario );
  }

  submit(){
    this.mensagemChat = this.mensagemChat + "Você: " + this.mensagemUsuario;
    this.mensagens.push(new Mensagem("user", this.mensagemUsuario) );
    this.enviar( this.mensagemUsuario );
    this.mensagemUsuario = "";
  }

  onFormSubmit(event)  {
      this.submit()
  }

  keyMessage(event){
     if(event.keyCode == 13) {
        this.submit();
      }
  }

  enviar(mensagem: string) {
    this.chatService.enviarParaWatson(this.mensagemUsuario).subscribe(
          respostas  => this.respostasParser(respostas),
          erro =>  this.mensagemErro = <any> erro);
  }

  respostasParser(respostas: string[]) {
    for(var i = 0; i < respostas.length; i++) {
        this.mensagens.push(new Mensagem("watson", respostas[i]) );
    }
  }
}
