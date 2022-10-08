

class payment_portal{
        #password="jsfj";
        #Card_no="ksdkf";
        #CVV="237";
        #PIN="u343";
  /*  constructor(name,user_name,acount_no,bank_name){
        this.name=name;
        this.user_name=user_name;
        this.acount_no=acount_no;
        this.bank_name=bank_name;
    } */

    setpassword(value){
        this.#password=value;
    }
    setCard_no(value){
        this.#Card_no=value;
    }
    setCVV(value){
        this.#CVV=value;
    }
    setPIN(value){
        this.#PIN=value;
    }

    getpassword(){
        return this.#password;
    }
    getCard_no(){
        return this.#Card_no;
    }
    getCVV(){
        return this.#CVV;
    }
    getPIN(){
        return this.#PIN;
    }
}

// let payment=new payment_portal("Akky","akky3598",456789090,"Axis Bank");
let payment=new payment_portal();
// console.log(payment);
payment.setpassword("cvbnm");
payment.setCVV(3456);
payment.setPIN(2345);
payment.setCard_no(24623643774);

console.log(payment.getpassword());
console.log(payment.getCard_no());
console.log(payment.getCVV());
console.log(payment.getPIN());