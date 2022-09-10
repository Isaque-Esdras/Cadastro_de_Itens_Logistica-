class Produto{



constructor(){
    this.id = 0
    this.array = []
    this.acao = ''
}




adicionar(){

    var produto = this.lerClique()
    

    if (this.seVazio(produto)==true) {
        this.adicionarNaArray(produto)
        console.log(produto)
    }
    
    this.naTabela()
    
    
}

lerClique(){

    var produto = {}

    produto.id = this.id
    produto.item = document.getElementById('item').value
    produto.codigo = document.getElementById('codigo').value
    produto.acao = this.acao

    return produto
}

seVazio(produto){

    var mensagem = '' 

    if (produto.item == 0) {
        mensagem += ' - Digite o nome de um Ítem \n'
    }
    if (produto.codigo == 0) {
        mensagem += ' - Digite o código de um Ítem'
    }
    if (mensagem != 0) {
        alert(mensagem)
        return false
    }
    return true
}

adicionarNaArray(produto){

    this.array.push(produto)
    this.id ++ 
}


naTabela(){

    var tbody = document.getElementById('tbody')
    tbody.innerText = ''

    for (let i = 0; i < this.array.length; i++) {
        
        var tr = tbody.insertRow()

        var td_id = tr.insertCell()
        var td_item = tr.insertCell()
        var td_codigo = tr.insertCell()
        var td_acao = tr.insertCell()

        td_id.innerText = this.array[i].id
        td_item.innerText = this.array[i].item
        td_codigo.innerText = this.array[i].codigo
        td_acao.innerText = this.array[i].acao
        
        var imagemAcesa = document.getElementById('imag')
        imagemAcesa.src = './ybxiO.jpg'

        var lixeira = document.createElement('img')
        lixeira.src = './removido.png'
        td_acao.appendChild(lixeira)

        lixeira.setAttribute("onclick", "produto.apagarComAcao("+this.array[i].id+")")
    }
}

remover(){

        document.getElementById('item').value = ''
        document.getElementById('codigo').value = ''

        var imagemAcesa = document.getElementById('imag')
        imagemAcesa.src = './apagada.jpg'
}

apagarComAcao(id){
        

    if (confirm("Deseja mesmo remover esse ítem ?")) {
        var tbody = document.getElementById('tbody')
        for (let i = 0; i < this.array.length; i++) {
           if (this.array[i].id == id) {
            tbody.deleteRow(i)
            this.array.splice(i,1)

            var imagemAcesa = document.getElementById('imag')
            imagemAcesa.src = './apagada.jpg'
           }
            
        }

    }

}




















}

var produto = new Produto