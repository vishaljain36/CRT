// async function icanpost() {
//     const response = await fetch(
//     'https://jsonplaceholder.org/posts/1'
//     );
//     console.log(response.status);
//     console.log(response.slug);
//     console.log(typeof response);
    
//     const post = await response.json();
//     console.log(post.content);
    
// }
// icanpost()

async function createPost(){
const newPost = {
    'title':'Fetch API practise',
    body:'My first post',
    userId:1
};

const response = await fetch(
    'https://jsonplaceholder.org/posts/1',
    {
        method:'POST',
        headers:{'Content-Type':'application.json'},
        body:JSON.stringify(newPost)
    }
);

if(!response.ok) throw new Error('HTTP ${response.status}');
const result = await response.json();   
console.log(result);
}

createPost().catch(console.error)
