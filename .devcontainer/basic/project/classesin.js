class User {
    constructor(username,passward,id){
        this.username=username;
        this.passward=passward;
        this.id=id;


    }
    addnumber(n1,n2){
        n1=23;
        n2=34;
        console.log(n1+n2);
    }
}

class Teacher extends User
{
    constructor(tid,tpos,subject){
       super(username,passward,id);
       this.tid=tid;

       this.tpos=tpos;
       this.subject=subject;
    }
    calculatecgpa(totmarks,obtmarks){
       
        const cgpa=obtmarks/totmarks*100;
        console.log(cgpa)
    }
}




const user1 = new User('ali',123,23);
console.log(user1)

const user2 = new Teacher(12,2,'software');
console.log(user2)