
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
      transactionsContainer: document.querySelector('#data-table tbody'),

      addTransaction(transaction,index){
      const tr = document.createElement('tr')
       tr.innerHTML = DOM.innerHTMLTransaction(transaction)

       DOM.transactionsContainer.appendChild(tr)
       
       
      },
      innerHTMLTransaction(transaction){

        const CSSclass = transaction.amount > 0 ? 'income' : 'expoense'

        // const amount = 
       
        const html = `
              <td class="description">${transaction.description}</td>
              <td class="${CSSclass}">${transaction.amount}</td>
              <td class="date">${transaction.date}</td>
              <td>
              <img src="./assets/minus.svg" alt="Remover trasação feita">
            </td>
            `
            return html
      }
     }

     const Utils ={
      formatCurrency(value){
        const signal = Number(value) <0 ? '-' : ''
      }
     }

     transactions.forEach(function(transaction){
      DOM.addTransaction(transaction)
     })