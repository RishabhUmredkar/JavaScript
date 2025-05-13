let main = document.querySelector('main')

let showData = (res) =>{
    res.map((val, ind, arr) =>{
        console.log(val.id);
        let card = document.createElement('div')
        let head1 = document.createElement('h1')
        let id = document.createElement('p')
        let email = document.createElement('p')
        let photo = document.createElement('img')
        id.innerText = val.id
        email.innerText = val.url
        head1.innerText = val.login
        photo.setAttribute('src',val.avatar_url)
        photo.style.width = '150px'
        head1.style.color = `#zzz`;

        card.style.width = '20vw'
        card.style.height = '30vh'
        card.style.margin = '10px'
        card.style.background = '#555'
        card.style.display = 'flex'
        card.style.alignItems = 'center'
        card.style.justifyContent = 'space-around   '
        card.style.flexDirection = 'column'
        card.append(head1, id, email, photo);
        main.append(card); 
    })
}

let fetching = async () =>{
    let res = await fetch(`https://api.github.com/users`)
    res = await res.json();
    console.log(res);
    showData(res);
}

fetching();