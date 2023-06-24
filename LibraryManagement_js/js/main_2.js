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


    class BookUI {
        getData(){
            data = JSON.parse(localStorage.getItem("data")) || []
        }

        //값출력
        showDate(){
            data.map(item=>{
                this.show(item)
            })
        }
        //추가
        add( item ){
            const {title, author, bookcode} = item
            if( !title || !author || !bookcode ) return 
            this.show(item)
            //data에 추가
            data=[
                ...data,
                {title:title, author:author, bookcode:bookcode},
            ]
            localStorage.setItem("data",JSON.stringify(data))
        }

        
        show(item){
            const {title, author, bookcode} = item
            const tr = document.createElement('tr');
            tr.innerHTML = `
                    <td>${title}</td>
                    <td>${author}</td>
                    <td>${bookcode} </td>
                    <td><button class="delete">X</button></td>
            `;
            $tbody.append( tr );
            this.reset()         
        }
        //삭제
        del( target ){       
            if (target.classList.contains('delete')) {                
                target.parentElement.parentElement.remove();
                this.showMessage('북리스트에 정상삭제완료' , 'on') 

                //코드 data=bookcode삭제
                console.log(target.parentElement.previousElementSibling.textContent)
                //문자이기에 trim()필수
                let bookcode = target.parentElement.previousElementSibling.textContent.trim()
                data = data.filter(item => item.bookcode !== bookcode);
                localStorage.setItem("data",JSON.stringify(data))
            }
        }
        
        //메세지
        showMessage( msg , calssName ) {
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
        reset(){
            $title.value = ''
            $author.value = ''
            $bookcode.value = ''
            $title.focus()
        }
    }

    // 화면에 출력
    const bookUI = new BookUI()
    bookUI.getData();
    bookUI.showDate();
    
    $form.addEventListener('submit',e => {
        e.preventDefault();
        
        const title = $title.value 
        const author = $author.value 
        const bookcode = $bookcode.value 

        const book  = new Book( title , author , bookcode )
        const bookUI = new BookUI()

        if( !title || !author || !bookcode ) {
            bookUI.showMessage('값을 넣으세요' , 'off')
        }else {
            bookUI.add( book )
            bookUI.reset()      
            bookUI.showMessage('북리스트에 추가완료' , 'on')      
        }
    })

    $tbody.addEventListener('click', e => {
        bookUI.del( e.target )
        // bookUI.showMessage('북리스트에 정상삭제완료' , 'on') 
    })

    // localStorage.clear();
})();