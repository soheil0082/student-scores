let students = [];
let totalAvg = 0;
let studentCount;
let scoreBoard = document.getElementsByClassName("grid-table")[1];
let studentOrder = document.getElementsByClassName("grid-table")[0];

studentCount = prompt("Enter the number of students");

for (let index = 0; index < studentCount; index++) {
    AddStudent(index + 1, +(Math.random() * 20).toFixed(1), +(Math.random() * 20).toFixed(1), +(Math.random() * 20).toFixed(1));    
}

function AddStudent(id,s1,s2,s3){
    let avg = +((s1 + s2 + s3) / 3).toFixed(1);
    let color;

    if(avg >= 12){
        color = "--green";
    }else if(avg >= 10) {
        color = "--yellow";
    }else {
        color = "--red";
    }
    let studentObj= {
        id,
        s1,
        s2,
        s3,
        avg,
        color,
    };

    students.push(studentObj);
}

for (let i = 0; i < students.length; i++) {
    scoreBoard.innerHTML+=
    `<section class="row">
        <div>student ${students[i].id}</div>
        <div>${students[i].s1}</div>
        <div>${students[i].s2}</div>
        <div>${students[i].s3}</div>
        <div class="${students[i].color}">${students[i].avg}</div>
    </section>`;
    totalAvg += students[i].avg;
}

totalAvg = totalAvg/studentCount;

console.log(totalAvg);
let avgColor;
if(totalAvg >= 12) {
    avgColor = "--green"
}else if(totalAvg > 10){
    avgColor = "--yellow"
}else {
    avgColor = "--red"
}
studentOrder.innerHTML += `<h1 class="${avgColor}">Average total : ${totalAvg.toFixed(1)}</h1>`;


students.sort(function (a,b){
    return  b.avg - a.avg;
});

for (let index = 0; index < students.length; index++) {
    studentOrder.innerHTML += 
    `<p>student ${students[index].id} Average : ${students[index].avg}</p>`;
}



