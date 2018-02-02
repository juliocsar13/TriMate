const vm= new Vue({
    el: '#vposts',
    data: {
        posts:[]
    },
    methods: {}
 
})
new Vue({
    el:"#createPost",
    data: {
        posts:[]
    },
    methods:{
        addPost: (event)=>{
            let data={};
            data.name=document.querySelector("input[name=name]").value,
            data.description = document.querySelector("input[name=description]").value
            data.destination = document.querySelector("input[name=destination]").value

            console.log("NAME",data)
            fetch('http://localhost:3002/posts',{
                method:'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body:JSON.stringify(data)
            }).then(data => console.log("POST CREATED",data))
        }
    }
})
/*
mounted(){
    fetch(url,options)
    .then(res=>res.json())
    .then(articles=>
        {
            this.articles = articles.results
            console.log("OBTENIENDO POKEMON",articles.results)
        })
},  */