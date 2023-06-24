;( () => {
    const get  = target =>  document.querySelector(target); 
    const getAll  = target => document.querySelectorAll(target); 

    // 기본경로
    const $mainbook = get('.main-book'); 
    const $title = get('#title'); 
    const $author = get('#author'); 
    const $bookcode = get('#bookcode'); 
    const $tbody = get('.book-tbody'); 
    const $form = get('form'); 
    let data = []

    //클래스 
    class Book {
        constructor( title, author , bookcode ){
            this.title = title 
            this.author = author 
            this.bookcode = bookcode 
        }
    }

    //화면에 보이는 영역
    class BookUI {
        //추가
        static add( item ){
            const {title, author, bookcode} = item
            if( !title || !author || !bookcode ) return 

            const tr = document.createElement('tr');
            tr.innerHTML = `
                    <td>${title}</td>
                    <td>${author}</td>
                    <td>${bookcode} </td>
                    <td><button class="delete">X</button></td>
            `;
            $tbody.append( tr );
            BookUI.reset()         
        }

        //삭제
        static del( target ){       
            if (target.classList.contains('delete')) {                
                target.parentElement.parentElement.remove();
                BookUI.showMessage('북리스트에 정상삭제완료' , 'on') 


            }
        }
        
        //메세지
        static showMessage( msg , calssName ) {
            const div = document.createElement('div')
            div.textContent  = msg 
            div.className = `show ${calssName}` 
            $mainbook.append(div)

            //2초후 삭제 
            setTimeout( () => {
                document.querySelector('.show').remove();
            }, 1000 )
        }

        //텍스트지우기
        static reset(){
            $title.value = ''
            $author.value = ''
            $bookcode.value = ''
            $title.focus()
        }
    }

    //localStorage 데이터담기
    class LocalData {

        static getData(){
            data = JSON.parse(localStorage.getItem("data")) || []
            return data;
        }

        //데이터추가
        static addData(book){
            let data = LocalData.getData();
            //data에 추가
            data=[
                ...data,
                book,
            ]
            localStorage.setItem("data",JSON.stringify(data))
        }

        //데이터삭제
        static remove(target){
            let data = LocalData.getData();
            //코드 data=bookcode삭제
            console.log(target.parentElement.previousElementSibling.textContent)
            //문자이기에 trim()필수
            let bookcode = target.parentElement.previousElementSibling.textContent.trim()
            data = data.filter(item => item.bookcode !== bookcode);
            localStorage.setItem("data",JSON.stringify(data))
        }

        //값출력
        static showDate(){
            let data = LocalData.getData();
            data.map(item=>{
                BookUI.add(item)
            })
        }
    }

    // 화면에 출력
    LocalData.showDate();
    
    $form.addEventListener('submit',e => {
        e.preventDefault();
        
        const title = $title.value 
        const author = $author.value 
        const bookcode = $bookcode.value 


        if( !title || !author || !bookcode ) {
            BookUI.showMessage('값을 넣으세요' , 'off')
        }else {
            const book  = new Book( title , author , bookcode )
            BookUI.add( book ) //추가_화면출력
            LocalData.addData(book) //추가_데이터
            BookUI.reset()      
            BookUI.showMessage('북리스트에 추가완료' , 'on')      
        }
    })
    
    $tbody.addEventListener('click', e => {
        BookUI.del( e.target )
        LocalData.remove(e.target);
        // bookUI.showMessage('북리스트에 정상삭제완료' , 'on') 
    })

    // localStorage.clear();
})();