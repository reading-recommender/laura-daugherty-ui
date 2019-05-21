console.log("IM ALIVE")

class Member {
    constructor(teamMem){
      this.teamMem = teamMem;     
      this.memData = this.teamMem.getAttribute('data-team')
           
      if(this.memData === "all"){
        this.cards = document.querySelectorAll('.card')
      } else {
        this.cards = document.querySelectorAll(`.card[data-team='${this.memData}']`)
      }
  
      this.cards = Array.from(this.cards).map((card) => {
        return new MemCard(card);
      });
  
      this.teamMem.addEventListener('click', () => this.selectMem());
    }
  
    selectMem(){
      console.log("Mem selected")
      console.log(this.teamMem);
      const teams = document.querySelectorAll('.team');
      
      teams.forEach((team) => {
        team.classList.remove('active-tab')
      })
  
      const cards = document.querySelectorAll('.card');
  
      cards.forEach((card) => {
        card.style.display = 'none';
      })
      
      this.teamMem.classList.add('active-tab');
    
      this.cards.forEach(card => card.selectCard());
    }
  }
  
  class MemCard {
    constructor(cardElement){
      this.cardElement = cardElement;
    }
    selectCard(){
      console.log("card selected")
      this.cardElement.style.display = "block";
    }
  
  }

  let teamMems = document.querySelectorAll('.team').forEach((teamMem) => {
    return new Member(teamMem);
  });
