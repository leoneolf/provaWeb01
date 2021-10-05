import React from 'react';
import './index.css';

class OperaçõesBasicas extends React.Component {

  // Primeiro vou criar o construtor
  constructor(props) {
    super(props);
    // criando as variáveis
    this.state = {
      num1: null,
      num2: null,
      res: null
    };
    this.handleNum1 = this.handleNum1.bind(this);
    this.handleNum2 = this.handleNum2.bind(this);
  }

  //criando o evento onde pegara os números
  handleNum1(event) {
    this.setState({
      num1: Number(event.target.value),
    });
  }

  handleNum2(event) {
    this.setState({
      num2: Number(event.target.value),
    });
  }

  // criando função que realizara os calculos, usando switch
  operacao(op) {
    switch (op) {
      case 'adicao':
        this.setState({
          res: this.state.num1 + this.state.num2
        });
        break;
      case 'subtracao':
        this.setState({
          res: this.state.num1 - this.state.num2
        });
        break;
      case 'multiplicacao':
        this.setState({
          res: this.state.num1 * this.state.num2
        });
        break;
      case 'divisao':
        this.setState({
          res: this.state.num1 / this.state.num2
        });
        break;
    }
  }

  // criando o formulario onde sera inserido os valores e escolhido a ação
  render() {
    return (
      <div class="container">

        <div class="card text-center border-dark">

          <div class="card-header border-dark">
            Programação para Web
          </div>

          <div class="card-body">

            <h5 class="card-title">Prova 01</h5>
            <p class="card-text">Faça uma aplicação em React, para calcular as 4 operações básicas da Matemática.</p>

            <form>

              <div class="row">

                <div class="col-md-1"></div>

                <div class="col-md-10">

                  <div class="form-group row">
                    <label for="numero1" class="col-sm-3 col-form-label">Numero 1</label>
                    <div class="col-sm-9">
                      <input type="number" class="form-control" id="numero1" placeholder="Digite o primeiro número" value={this.state.num1} onChange={this.handleNum1} />
                    </div>
                  </div>

                  <div class="form-group row">
                    <label for="numero2" class="col-sm-3 col-form-label">Numero 2</label>
                    <div class="col-sm-9">
                      <input type="number" class="form-control" id="numero2" placeholder="Digite o segundo número" value={this.state.num2} onChange={this.handleNum2} />
                    </div>
                  </div>

                  <div class="form-group">

                    <fieldset class="border p-2">

                      <legend class="w-auto">Escolha a operação desejada:</legend>

                      <div class="form-check form-check-inline">
                        <input class="form-check-input" type="radio" name="operacao" id="adicao" value="adicao" onClick={() => this.operacao('adicao')} />
                        <label class="form-check-label" for="adicao">Adição</label>
                      </div>

                      <div class="form-check form-check-inline">
                        <input class="form-check-input" type="radio" name="operacao" id="subtracao" value="subtracao" onClick={() => this.operacao('subtracao')} />
                        <label class="form-check-label" for="subtracao">Subtração</label>
                      </div>

                      <div class="form-check form-check-inline">
                        <input class="form-check-input" type="radio" name="operacao" id="multiplicacao" value="multiplicacao" onClick={() => this.operacao('multiplicacao')} />
                        <label class="form-check-label" for="multiplicacao">Multiplicação</label>
                      </div>

                      <div class="form-check form-check-inline">
                        <input class="form-check-input" type="radio" name="operacao" id="divisao" value="divisao" onClick={() => this.operacao('divisao')} />
                        <label class="form-check-label" for="divisao">Divisão</label>
                      </div>

                    </fieldset>

                  </div>

                  <div class="form-group row">
                    <label for="resultado" class="col-sm-3 col-form-label">Resultado</label>
                    <div class="col-sm-9">
                      <input type="number" class="form-control" id="resultado" placeholder="O resultado foi..." value={this.state.res} />
                    </div>
                  </div>

                </div>

                <div class="col-md-1"></div>

              </div>

            </form>

          </div>

          <div class="card-footer text-muted border-dark">
            Leone Oliveira - RA: 	2760482021017
          </div>

        </div>

      </div>
    );
  }
}

export default OperaçõesBasicas;