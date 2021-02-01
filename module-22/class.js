/* class student {
    constructor(studentName, studentId) {
        this.name = studentName;
        this.id = studentId;
        this.class = "Eight-8";
        this.school = "Shikalbaha Public School and College";
    }

}
const student1 = new student("Hasan Rana", 14);
const student2 = new student("Saidur Rahman", 15);
console.log(student1, student2); */



// self practice
class workers {
    constructor(workerName, workerId, dutyTime) {
        this.name = workerName;
        this.id = workerId;
        this.section = "dying";
        this.company = "KDS dyning section";
        this.dutyDuration = dutyTime;
    }
}
const workers1 = new workers("saidur Rahman Sayed", 145, "8 - hours");
const workers2 = new workers("Ismail Hossain Joy", 146, " 6 - hours");
const workers3 = new workers("Sohel Mahmud Nirob", 147, "8 - hours");
const workers4 = new workers("Nahiyan Islam Turag", 148, "6 - hours");
const workers5 = new workers("Hasan Rana", 149, "12 - hours");

console.log(workers1, workers2, workers3, workers4, workers5);