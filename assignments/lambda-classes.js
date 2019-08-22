// CODE here for your Lambda Classes
class Person {
    constructor(attributes){
    this.name = attributes.name;
    this.age = attributes.age;
    this.location = attributes.location;
    }
    speak(){
       return `Hello my name is ${this.name}, I am from ${this.location}.`
    }
}
const per1 = new Person({
    name:"stan",
    age:32,
    location:"LA"
})
const per2 = new Person({
    name:"dan",
    age:23,
    location:"Danville"
})


class Instructor extends Person{
    constructor(instAttributes){
        super(instAttributes);
        this.speacialty = instAttributes.speacialty;
        this.favLanguage = instAttributes.favLanguage;
        this.catchPhrase = instAttributes.catchPhrase;
    }
    demo(subject){
       return `Today we are learning about ${subject}`
    }
    grade(name, subject){
       return `${name} receives a perfect score on ${subject}`
    }
}
const inst1 = new Instructor({
    name: 'Ben',
    age: 42,
    location: 'maine',
    specialty: 'HTML',
    favLanguage: 'JavaScript',
    catchPhrase: 'Ode to Joy'
})

const inst2 = new Instructor({
    name: 'Jane',
    age: 33,
    location: 'miami',
    specialty: 'CSS',
    favLanguage: 'Java',
    catchPhrase: 'get to work'
})

class Student extends Person{
    constructor(stuAttributes){
        super(stuAttributes);
        this.previousBackground = stuAttributes.previousBackground;
        this.className = stuAttributes.className;
        this.favSubjects = stuAttributes.favSubject;
    }
    listsSubjects(){
        return `${this.favSubject}`
    }
    PRAssignment(student, subject){
        reutrn `${student.name} has submitted a PR for ${subject}`
    }
    sprintChallenge(subject){
       return `${student.name} has begun sprint challenge on ${subject}`
    }
}

const stu1 = new Student({
    name: "jim",
    age: 39,
    location: "san francisco",
    previousBackground: "sales",
    className: "Web Intro",
    favSubject: ["HTML", "CSS", "Java"],
})
const stu2 = new Student({
    name: "mike",
    age: 22,
    location: "san jose",
    previousBackground: "trucker",
    className: "Web Dev",
    favSubject: ["java", "python", "ruby"],
})

class Projectmanager extends Instructor{
    constructor(pmAttribute){
        super(pmAttribute);
        this.gradClassName = pmAttribute.gradClassName;
        this.favInstructor = pmAttribute.favInstructor;
    }
    standup(channel){
       return `${this.name} announces to ${channel}, @channel standy times!​​​​​`
    }
    debugsCode(student, subject){
        return `${this.name} debugs ${student.name}'s code on ${subject}`
    }
}
const pm1 = new Projectmanager ({
    name: 'Ceasar',
    age: 30,
    location: 'chicago',
    specialty: 'training',
    favLanguage: 'JavaScript',
    catchPhrase: 'Lets do this',
    gradClassName: 'WebFunc1',
    favInstructor: 'Brit'
});
const pm2 = new Projectmanager ({
    name: 'Matt',
    age: 60,
    location: 'tampa bay',
    specialty: 'python',
    favLanguage: 'C++',
    catchPhrase: 'Lets do this',
    gradClassName: 'WebFunc2',
    favInstructor: 'Brit'
});
console.log(per1.speak())
console.log(stu2.speak())
console.log(inst1.grade("carlos", "python"))
console.log(pm2.debugsCode(inst2, pm2.favLanguage))
console.log(pm1.standup("web23"))