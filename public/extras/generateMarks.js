function generateMarks(email,semester){
    //Generate random semester scores and return JSON object
    let marks = []
    for(let i=1;i<semester;i++){
        var sem_marks = {}
        let random = Math.floor(Math.random() * (3))+5  + 0.1*Math.floor(Math.random() * (9))+1
        sem_marks[i] = random
        marks.push(sem_marks)
    }
    return {
        email: email,
        semester: marks
    }
}

console.log(generateMarks('vihardevalla@gmail.com',8))
