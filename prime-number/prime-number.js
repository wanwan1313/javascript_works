let btn = document.querySelector('button')
btn.addEventListener('click',function(){
    let num01 = document.querySelector('#num1').value
    let num02 = document.querySelector('#num2').value
    let prime_number = []

    let numList = document.querySelector('div.numlist')

    // 每次執行前，要把前一次的結果刪除
    // 取得numList裡面有幾個p的數字
    // 先建立p節點的數字，再用for迴圈一次把p刪除
    let numList_p = numList.children.length
    
    if (numList_p > 0) {
        for (let i = 0; i < numList_p; i++) {
            numList.removeChild(numList.children[0])
        }
    }

    // 判斷是不是質數
    for (let i = Number(num01); i <= Number(num02) ; i++) {
        let prime = true　　//先設定都是質數=true
        for (let j = 2; j < i; j++) {
            if (i % j == 0) {
                prime = false　　//一旦會被整除，就判定質數=false
                break
            }
        }
        if (prime == true && i !=1) {
            prime_number.push(i)
        }
    };

    // 動態產生元素
    for (let i = 0; i < prime_number.length; i++) {
        let priNum = document.createElement('p')
        priNum.setAttribute('class', 'pri-num')
        let priNum_text = document.createTextNode(prime_number[i])
        priNum.appendChild(priNum_text)
        numList.appendChild(priNum)
    }
})




