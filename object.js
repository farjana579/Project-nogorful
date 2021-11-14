class Student{
constructor(sRoll,sName,sMotherName,sFatherName,sClass,sAdmissionDate,sAddress){
    this.roll = sRoll;
    this.name = sName;
    this.motherName = sMotherName;
    this.fatherName = sFatherName;
    this.class = sClass;
    this.admissionDate = sAdmissionDate;
    this.address = sAddress;
}
}
const student1 = new Student(1,"Farjana",'ManoAra',"Joynal",5,"11-11-2021","muradpur");
console.log(student1.roll);