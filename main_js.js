var menu = document.querySelectorAll('.menu');

var orderboard = document.querySelector('#orderboard');
var table = document.createElement('table');
var tr = document.createElement('tr');
var board = ['이름', '가격', '수량'];

var menuCheck = {};

var menu2 = [
    {
        name : '김밥',
        price : 1500,
        img : 'http://recipe1.ezmember.co.kr/cache/recipe/2016/03/08/0b0c25963c8be47cbdbdc02718849ae11.jpg'
    },
    {
        name : '라면',
        price : 1500,
        img : 'http://img.vogue.co.kr/vogue/2018/01/style_5a55dc28c936c.jpg'
    },
    {
        name : '참치 김밥',
        price : 2500,
        img : 'http://recipe1.ezmember.co.kr/cache/recipe/2016/06/29/e83ce1d994ff9b5ffcd1981c8971119d1.jpg'
    },
    {
        name : '떡볶이',
        price : 1500,
        img : 'http://cdn.jinfooduae.com/wp-content/uploads/2017/03/c0055612_50dc4c85302b9-400x364.jpg'
    },
    {
        name : '라볶이',
        price : 3000,
        img : 'http://recipe1.ezmember.co.kr/cache/recipe/2015/08/30/908631b597feb42f69f9757ef9a7ee5d.jpg'
    },
    {
        name : '순대',
        price : 1500,
        img : 'http://imagescdn.gettyimagesbank.com/500/201708/jv10961368.jpg'
    }
];
//표 헤드 만들기
orderboard.appendChild(table);
table.appendChild(tr);
for(let i = 0; i < 3; i++){
    let th = document.createElement('th');
    th.innerHTML = board[i];
    tr.appendChild(th);
}
table.setAttribute('border', '1px');




for(let i = 0; i < menu.length; i++){ 

    //메뉴판 생성
    var im = document.createElement('img');
    var name2 = document.createElement('div');
    
    im.setAttribute('src', menu2[i].img);
    im.setAttribute('width', '180px');
    im.setAttribute('height', '180px');

    name2.innerHTML = menu2[i].name + ' ' + menu2[i].price; //이름 가격 추가
    menu[i].appendChild(im);
    menu[i].appendChild(name2); //추가된 이름과 가격을 메뉴 박스에 삽입
    
    menu[i].addEventListener('click', function(){
        if(menuCheck[menu2[i].name]){
            console.log('이미고름')
            Plus(menu2[i].name);
        }else{
            console.log('처음고름')
            order(menu2[i])
            menuCheck[menu2[i].name] = 1;
        }
    })
}



function order(menu){ //주문 추가하기

    var tr = document.createElement('tr');
    for(let key in menu){
        if(key !== 'img'){
            let td = document.createElement('td');
            td.innerHTML = menu[key];
            tr.appendChild(td);
        }else{
            let td = document.createElement('td');
            let inp = document.createElement('input');
            inp.setAttribute('id', menu.name);
            inp.value = 1;
            td.appendChild(inp);
            tr.appendChild(td);
        }
    }
    table.appendChild(tr);
    console.log(menu);
}

function Plus(name){
    var ipn = document.getElementById(name)
    ipn.value = Number(ipn.value);
    ipn.value = Number(ipn.value) + 1;
}

function Minus(){

}