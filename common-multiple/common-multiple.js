let btn = document.querySelector('button')
btn.addEventListener('click', function () {
    let num01 = document.querySelector('#num1').value //取得數字1
    let num02 = document.querySelector('#num2').value //取得數字2
    let range = document.querySelector('#range').value //取得範圍
    let cm_arr = [] //公倍數陣列
    let numList = document.querySelector('div.numlist')
    
    // 每次執行前，要把前一次的結果刪除
    // 取得numList裡面有幾個p的數字
    // 先建立p節點的數字，再用for迴圈一次把p刪除
    
    let numList_p = numList.children.length
    if (numList_p > 0) {

        for (let i = 0; i < numList_p; i++) {
            numList.removeChild(numList.children[0]) 
        }

        // 重要!!!!!務必要建立p節點數字的變數(numList_p)，如果直接用numList.children.length在for迴圈設定次數，numList.children會隨著節點被刪除而變少，刪除次數會變少(就會沒刪完)
        // 錯誤寫法
        // for (let i = 0; i < numList.children.length; i++) {
        //     console.log(numList.children[0])
        //     numList.removeChild(numList.children[0])
        // }
    }


    // 判斷是不是公倍數
    for (let i = 1 ; i <= range; i++){
        if ((i > num01) && (i > num02) && (i % num01 == 0) && (i % num02 == 0)){
            cm_arr.push(i)
        }
    }

    // 動態產生元素
    for (let i = 0; i < cm_arr.length ; i++){
        let cmNum = document.createElement('p')
        cmNum.setAttribute('class','cm-num')
        let cmNum_text = document.createTextNode(cm_arr[i])
        cmNum.appendChild(cmNum_text)
        numList.appendChild(cmNum)
    }
    

})