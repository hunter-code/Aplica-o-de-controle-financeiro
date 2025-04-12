
     const Modal ={
        open(){
        document.querySelector('.modal-overlay').classList.add('active');
        },
        close(){
          document.querySelector('.modal-overlay').classList.remove('active');
        }
      }
      
       const transactions = [
        {
            id: 1,
            description : 'Luz',
            amount: -50000,
            date:'23/01/2025',
       },
       
       {
        
            id: 2,
            description : 'Website',
            amount: -50000,
            date:'23/01/2025',
      
      },

      {
            id: 3,
            description : 'Internet',
            amount: -20000,
            date:'23/01/2025',
      }];

      //Somar as entradas
      //somar as saídas
      //remover das entradas o valor das saídas 

      //obetar o total das saídas

      const Transaction = {
        incomes (){
          //somar as entradas
        },
          
        expenses(){
           // somar as saídas
        },
        total(){
          // entradas - saídas
        }
      }

     // Eu preciso pegar as transações do meu objeto aqui no js e colocar lá no html

     //(Substituir os dados html com os dados do js)

     const DOM = {
      addTransaction(){
       const tr = document.createElement('');
       tr.innerHTML = DOM.innerHTMLTransaction()
       
      },
      innerHTMLTransaction(transaction,index){
        const html = `
              <td class="amount">Luz</td>
              <td class="expense">-R$ 500,00</td>
              <td class="date">23/01/2021</td>
              <td>
              <img src="./assets/minus.svg" alt="Remover trasação feita">
            </td>
            `
            return html
      }
     }