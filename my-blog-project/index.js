// export 
let page = 1;

let isPaginated = false;

const postsContainer = document.getElementById('posts');
const toggleScrollButton = document.getElementById('toggleScoll');


const loadPosts = async (page) =>{
    const responose = await fetch(`http://localhost:3000/posts?_page=${page}&_limit=10`);
    
    const posts = await responose.json();

   
    posts.forEach(post => {
        const postElement = document.createElement('div');
        postElement.innerText = post.title
    
        postsContainer.appendChild(postElement);

    });
};

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if(entry.isIntersecting){
            page++;
            loadPosts(page);
        }
    });
}, {
    root : postsContainer,  
    rootMargin : '0px',
    threshold : 1.0
});

toggleScrollButton.addEventListener('click' , () =>{
    if(isPaginated){
        const lastPost = postsContainer.lastElementChild;
        observer.observe(lastPost);
    }else{
        observer.disconnect();
    }

    isPaginated = !isPaginated;
})

// observer()
loadPosts(page);


const threshold = (func , delay) => {
    let lastCall = 0 ;

    return function(...args){
        const now = (new Data).getTime();

        if(now - lastCall < delay){
            return ;
        }
        lastCall = now;
        return func(...args);
    };
};


{/* <button></button> */}


const createButton = document.getElementById('createButton');
const updateButton = document.getElementById('updateButton');
const deleteButton = document.getElementById('deleteButton');

const likeButton = document.getElementById('likeButton');

const handleCreate = () =>{

}
const handleUpdate = () =>{
    
}
const handleDelete = () =>{
    
}
const handleLike = () =>{
    
}

createButton.addEventListener('click' , throttle(handleCreate , 1000));
updateButton.addEventListener('click' , throttle(handleUpdate , 1000));
deleteButton.addEventListener('click' , throttle(handleDelete , 1000));
likeButton.addEventListener('click' , throttle(handleLike , 1000));
