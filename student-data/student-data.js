// 建立學生Class
let Student = function(name, age, eng_score, math_score){
    this.name = name;
    this.age = age;
    this.eng_score = eng_score
    this.math_score = math_score
}

// 建立學生物件
let student1 = new Student('Alex', 18, 87, 90 )
let student2 = new Student('Bill', 19, 95, 98 )
let student3 = new Student('Cook', 17, 100, 73 )

// 把學生物件變成陣列
let stu_arr = [student1, student2, student3]

// 取得英文成績，加到陣列
let engScore = []
for (let i = 0; i<stu_arr.length; i++){
    engScore.push(stu_arr[i].eng_score)
}


// 取得數量成績，加到陣列
let mathScore = []
for (let i = 0; i<stu_arr.length; i++){
    mathScore.push(stu_arr[i].math_score)
}

// 加總平均的fuction
function average(arr){
    let sum = 0;
    for (let i = 0; i < arr.length; i++){
        sum += arr[i]
    }
    return sum / arr.length
}

// 算平均
let engScore_av = average(engScore)
let mathScore_av = average(mathScore)


// --------------------------------------------------------------------------------//

// 動態新增
let stuList = document.querySelector('div#student-list')
for (let i = 0; i < stu_arr.length; i++){
    
    // div.student
    let studentBox = document.createElement('div')
    studentBox.setAttribute('class','student')
    
    // div.img>img
    let studentImg = document.createElement('div')
    studentImg.setAttribute('class', 'img')
    let img = document.createElement('img')
    img.setAttribute('src',`./images/p${i+1}.png`)
    studentImg.appendChild(img)
    
    // div.data
    let studentData = document.createElement('div')
    studentData.setAttribute('class','data')
    
    // div.data>p
    let studentName = document.createElement('p')
    let studentAge = document.createElement('p')
    let studentEscore = document.createElement('p')
    let studentMscore = document.createElement('p')
    let studentName_text = document.createTextNode('Name: ')
    let studentAge_text = document.createTextNode('Age: ')
    let studentEscore_text = document.createTextNode('English score: ')
    let studentMscore_text = document.createTextNode('Math score: ')
    // p+加項目字
    studentName.appendChild(studentName_text)
    studentAge.appendChild(studentAge_text)
    studentEscore.appendChild(studentEscore_text)
    studentMscore.appendChild(studentMscore_text)

    // div.data>p>span
    let name = document.createElement('span')
    let age = document.createElement('span')
    let Escore = document.createElement('span')
    let Mscore = document.createElement('span')
    let name_text = document.createTextNode(stu_arr[i].name)
    let age_text = document.createTextNode(stu_arr[i].age)
    let Escore_text = document.createTextNode(stu_arr[i].eng_score)
    let Mscore_text = document.createTextNode(stu_arr[i].math_score)
    // span+內容字
    name.appendChild(name_text)
    age.appendChild(age_text)
    Escore.appendChild(Escore_text)
    Mscore.appendChild(Mscore_text)
    //p+span
    studentName.appendChild(name)
    studentAge.appendChild(age)
    studentEscore.appendChild(Escore)
    studentMscore.appendChild(Mscore)
    // dada+p
    studentData.appendChild(studentName)
    studentData.appendChild(studentAge)
    studentData.appendChild(studentEscore)
    studentData.appendChild(studentMscore)

    // student+img+data
    studentBox.appendChild(studentImg)
    studentBox.appendChild(studentData)

    // list+student
    stuList.appendChild(studentBox)


}

// --------------------------------------------------------------------------------//

// 按鈕顯示平均分數
let btns = document.querySelectorAll('button') //按鈕
let avScore = document.querySelectorAll('div.avScore') //按鈕父層
let avScore_arr = [engScore_av, mathScore_av] //分數陣列

for (let i = 0; i<btns.length; i++){
    btns[i].addEventListener('click',function(){
        
        avScore[i].removeChild(btns[i]) //從父層刪除按鈕本身
        
        let av_score = document.createElement('div')
        av_score.setAttribute('class','av_score')
        let av_score_text = document.createTextNode(avScore_arr[i])
        av_score.appendChild(av_score_text)
        avScore[i].appendChild(av_score)
    })
}
