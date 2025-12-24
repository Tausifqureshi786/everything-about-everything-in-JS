
function profileLekarAao(username, cb) {
    console.log("Fetching profile data");
    setTimeout(()=> {
        cb({_id: 12122,  username, age: "26", email: "huihui@hui.com"});
    }, 2000);
}

function saarePostLekarAao(id, cb ) {
    console.log("Fetching all posts");

    setTimeout(() => {
        cb({_id: id, posts: ["hello", "hi", "good morning"]})
    }, 3000);

}

function savedPostsNikaalo(id, cb) {
    console.log("Fetching saved posts...")
    setTimeout(() => {
        cb({_id: id, saved: [1,2,3423,4342,32,223] })
    }, 3000);
}

// this is legacy code: rarely used much these days 
// this pattern of nested function is called a callback hell.
profileLekarAao("harsh", function(data) {
    console.log(data);
    saarePostLekarAao(data._id, function (posts) {
        console.log(posts);
        savedPostsNikaalo(data._id, function (saved) {
            console.log(saved);
            //...

        });
    });
});

