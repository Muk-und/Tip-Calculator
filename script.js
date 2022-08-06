const billInput=document.getElementById('billTotalInput')
const tipInput=document.getElementById('tipInput')
const noOfPeople= document.getElementById('noOfPeople')
const perPersonTotal=document.getElementById('perPersonTotal')
const perPersonTotalAmount=document.getElementById('perPersonTotal')

let numberOfPeople=Number(noOfPeople.innerText)
const calculateBill=()=>{
    const bill = Number(billInput.value)
    const tipPercent = Number(tipInput.value)/100
    const tipAmount=bill*tipPercent
    const totalBill = tipAmount+bill
    const perPersonTotal=totalBill/numberOfPeople
    perPersonTotalAmount.innerText=`$${perPersonTotal}`
}
const increasePeople=()=>{
    numberOfPeople++;
    noOfPeople.innerText=numberOfPeople
    calculateBill();
}
const decreasePeople=()=>{
    if(numberOfPeople<=1){
        alert("You cannot have less than one person !!😡")
        return  
    }
    numberOfPeople--;
    noOfPeople.innerText=numberOfPeople
    calculateBill();
}