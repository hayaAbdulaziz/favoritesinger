const Singer = require("../module/singer");

module.exports = {
    index:(req,res)=>{
        Singer.find({},(error,singers)=>{
            if(error) console.log(`there was an error : ${error}`);
            else{
            //  singers.forEach(singer => console.log(singer)) 
            res.render("singer.ejs", {singer: singers})
            }
        });
    } ,

    create: (req,res)=>{
        const firstsinger = new Singer({title: req.body.title});
        firstsinger.save().then(()=>res.redirect("/"));
        },

        edit : (req,res)=>{
        
            const id =req.params.id;
            Singer.find({},(err,singers)=>{
                res.render("singeredit.ejs", {singer: singers, idsinger: id});
            });
        
               },
               update: (req,res)=>{
                const id =req.params.id;
                Singer.findByIdAndUpdate(id,{title: req.body.title}, err=>{
                    if(err) return res.send(500,err);
                    else res.redirect("/");
     
                })
     
            },
            delete: (req,res)=>{
                Singer.deleteOne({_id: req.params.id}, (error)=>{
                    if(error) console.log(`there was an error : ${error}`);
                    else 
                        res.redirect("/");
                
                });
            }
             }
