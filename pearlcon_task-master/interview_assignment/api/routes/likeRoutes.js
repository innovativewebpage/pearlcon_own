const express = require('express')
const router = express.Router();
var ObjectID = require('mongodb').ObjectID;


const Likes = require('../model/likeModel');


router.post('/post_like',  async(req,res) => {	
	
//const findinLikes = await Likes.find({title: req.body.title});	

const findLikes = await Likes.find({$and:
								
								[{user_id:req.body.user_id }, 
									{post_id: req.body.post_id }		
	
							]} ) 

//var updated_post_id = req.body.post_id;

//console.log('updated_post_id =',updated_post_id);

//console.log('findLikes===',findLikes)							
	
//var findUser = await Test.findOne({$and:[{item:'abc'},{price:200}]});	
	//console.log('findLikes==',findLikes);
	//console.log('findLikes.length==',findLikes.length);
	//console.log('findLikes[0].status==',findLikes[0].status);
	
	var Status_check="";
	if(findLikes.length > 0)
	{	

	//	var test1 = "64069dbcb5365903e81c6471"
		
	//	console.log('findLikes[0].post_id)==',findLikes[0].post_id);
		//console.log('fff=',findLikes[0].post_id);
		//console.log('rrr=',ObjectID(findLikes[0].post_id));
		
		
		
		if(findLikes[0].status ==1)
		{
			
		//	console.log('ok');
			
			Status_check = await Likes.updateOne(
			{"post_id":ObjectID(findLikes[0].post_id)},{$set: {status:0}})
			
//console.log('result==',result)
			/* Status_check = await Likes.updateOne(
			{"post_id":updated_post_id},{$set: {status:0}})*/
			
			
		}	

		else if(findLikes[0].status ==0)
		{
			 Status_check = await Likes.updateOne(
			{"post_id":ObjectID(findLikes[0].post_id)},{$set: {status:1}})
		}
		if(Status_check)
		{
			
			//console.log('findLikes[0]._id==',findLikes[0]._id)
			
			var updatedlikeresult = await Likes.findById({_id:findLikes[0]._id});
		//console.log('updatedlikeresult==',updatedlikeresult);
		
		
		
			/*var newLike1 = await Likes.aggregate([ { $group: {_id:"$post_id" , count:{$sum:1}} } ])
		console.log('newLike1==',newLike1)
		*/
		//console.log('updated_post_id==',updated_post_id)
		
				
			let updatedlikeresult_group = await Likes.aggregate([ 
				{
					$match: {status: 1}	
				},
				
				{ 
						$group: {_id:"$post_id",
							count:{$sum:1}} 
				}
			])
		//console.log('updatedlikeresult_group==',updatedlikeresult_group);
		
		
		
		
				let counting = ''
	let get_count  = updatedlikeresult_group.map((value,index) =>   {
		//console.log('value._id==',value._id);
		
		if(value._id.toString() == updatedlikeresult.post_id.toString())
		{
			console.log('ok')
			console.log('value.count',value.count);
			counting = value.count;
			
		}
		
	})
	
	
	
	//console.log('counting==',counting)
	
	let counting_obj ={
			['counting']: counting
		}
		
		
		/*
		let result = [
				newLike,...counting_obj
			]*/
			
			let result_doc = { ...updatedlikeresult,  ...counting_obj };
		
		
		//console.log('result==',result);*/
		
		//let employee = Object.assign(newLike, counting_obj);
//console.log(employee);

let result = { ...result_doc._doc,  ...counting_obj };
//console.log(result);
		
		
				return res.status(201).send({message:'Liked',data:result})
		}		
	}
	
	else
	
	{
		//var post_id='';
		//var post_id_group = req.body.post_id.toString();
		
		//console.log('post_id_group==',post_id_group);
		
		//console.log('typeof post_id_group==',typeof post_id_group);
		
	const like = new Likes({	
		user_id : req.body.user_id,
		post_id : req.body.post_id,
		status:1
	});
	const newLike = await like.save();
	if (newLike) {
		
		
		//console.log('req.body.post_id==',req.body.post_id);
		//console.log('like.post_id==',like.post_id);
		//console.log('newLike.post_id==',newLike.post_id);
		//console.log('post_id==',post_id);
		//console.log('newLike==',newLike)
		
		//console.log('newLike.post_id==',typeof newLike.post_id)
		
		//var test = newLike.post_id.valueOf();
		
		//console.log(test)
		
		//let data = new ObjectId(newLike.post_id)
		//var test1 = parseInt(test, 10);
		
		//console.log(typeof test);
		//console.log(typeof test1);
		
		//console.log(typeof data);
		
		/*var newLike1 =await Likes.aggregate([
			
			{
					$group: {
						_id: newLike.post_id
					}
		    },
			
			 {
					$group: {
						_id:newLike.post_id, 
						count: {$count : count{}}
						}
			}
			
			])*/
			
			
		//console.log($post_id)
		//var group_post_id = ObjectID(newLike.post_id);
		
		//console.log (ObjectID(newLike.post_id));
		
		//{"post_id":ObjectID(findLikes[0].post_id)}
		
		/*
		var newLike1 = await Likes.aggregate([ { $group: {"_id":ObjectID(newLike.post_id)   , count:{$sum:1}} } ])
		console.log('newLike1==',newLike1)
		
		*/
		
		/*var newLike1 = await Likes.aggregate([ { $group: {"_id":"ObjectID(newLike.post_id)"   , count:{$sum:1}} } ])
		console.log('newLike1==',newLike1)*/
		//var newLike1 = await Likes.aggregate([ { $group: {_id:"$post_id" , count:{$sum:1}} }
		
		/*var newLike1 = await Likes.aggregate([ { $group: {"_id":"ObjectID($newLike.post_id)"  , count:{$sum:1}} } ])
		console.log('newLike1==',newLike1)
		*/
		
		//console.log('newLike.post_id==',newLike.post_id);
		//console.log('typeof newLike.post_id==',typeof newLike.post_id)

//var get_newLike_count = await Likes.aggregate([ { $group: {_id:"$post_id"  , count:{$sum:1}} } ])
	

let get_newLike_count = await Likes.aggregate([ 
				{
					$match: {status: 1}	
				},
				
				{ 
						$group: {_id:"$post_id",
							count:{$sum:1}} 
				}
			])	
		
		
		
		//console.log('get_newLike_count==',get_newLike_count);
		
		//console.log('rr=',get_newLike_count.map((value,index) =>   value._id ));
		
		//let result2 = get_newLike_count.map((value,index) =>   value._id );
		//console.log('result2==',result2);
		//console.log('result3==',result2[0]);
		
		//console.log('rr typeof=',get_newLike_count.map((value,index) =>   typeof value._id ))
		
		var counting = ''
	var get_count  = get_newLike_count.map((value,index) =>   {
		//console.log('value._id==',value._id);
		
		if(value._id.toString() == newLike.post_id.toString())
		{
			console.log('ok')
			console.log('value.count',value.count);
			counting = value.count;
			
		}
		
	})
	
	
	
	//console.log('counting==',counting)
	
	let counting_obj ={
			['counting']: counting
		}
		
		
		/*
		let result = [
				newLike,...counting_obj
			]*/
			
			let result_doc = { ...newLike,  ...counting_obj };
		
		
		//console.log('result==',result);*/
		
		//let employee = Object.assign(newLike, counting_obj);
//console.log(employee);

let result = { ...result_doc._doc,  ...counting_obj };
console.log(result);
		//console.log('rr join=',get_newLike_count.map((value,index) =>   value._id.join('') ))
	//var counting = get_newLike_count.map((value,index) =>   value._id == [newLike.post_id] ? value.count :'' ) 
	
	
	//console.log('ff',counting)
//console.log('newLike1==',newLike1.map((value) => value._id));


//var counting = get_newLike_count.map((value,index) =>   value._id == newLike.post_id ? value.count :'' ) 


//console.log('counting==',counting);


/*var counting = '';
if(get_newLike_count.map((value) => value._id == newLike.post_id ))
	
	{
		
		//console.log(get_newLike_count[0].count;
		
		var counting= get_newLike_count[0].count;
	}
	
	console.log('counting==',counting)
	*/
	
		/*var newLike1 ,=await Likes.aggregate([
			
					
					  {"$group": {"_id": newLike.post_id}},

					   {	"$count": {"$sum": 1 }}
				
			]);
	}*/
	
	/*const newLike1 = await Likes.distinct(newLike.post_id).length;
	console.log('newLike1==',newLike1);
	var findLikes = await Likes.find();*/
	return res.status(201).send({message:'Liked',data:result})
		
		
	
	
	   		
	
		
	
	}
	
   
	}
	})
	

router.get("/read",async (req,res) => {
	
	let group_by_like = await Likes.aggregate([ 
				{
					$match: {status: 1}	
				},
				
				{ 
						$group: {_id:"$post_id",
							count:{$sum:1}} 
				}
			])
		//console.log('group_by_like==',group_by_like);
		
	
	var findLikes = await Likes.find();
	
	//console.log('findLikes==',findLikes);
	
	
	var counting = ''
	const intersect = group_by_like.map(gvalue => {
		const addressItem = findLikes.find(fvalue => fvalue.post_id.toString() == gvalue._id.toString())
		console.log('addressItem==',addressItem);
		console.log('gvalue.count==',gvalue.count);
		
		let counting_obj ={
			['counting']: gvalue.count
		}
		
		
		let result_doc = { ...addressItem,  ...counting_obj };
		
		//console.log('result_doc==',result_doc)
		
		let result = { ...result_doc._doc,  ...counting_obj };
		
		console.log('result==',result)
		return result;
		
		// addressItem.count = addressItem ? gvalue.count: null
		/*if(findLikes.find(fvalue => fvalue.post_id.toString() == gvalue._id.toString()))
		{
				//console.log(gvalue.count);
				counting = gvalue.count;
		}*/
		//return addressItem;
	})
	
	//res.json(findLikes);
	
	console.log('intersect==',intersect);
	//res.json(intersect);
	res.status(201).send({message:'Liked',data:intersect})
	
	/*let counting_obj ={
			['counting']: counting
		}
		
		console.log('findLikes==',findLikes);
		console.log('counting_obj==',counting_obj);*/
		
		//let result_doc = { ...findLikes,  ...counting_obj };
		
		//console.log('result_doc==',result_doc)
	
//let result = { ...result_doc._doc,  ...counting_obj };
	//res.json(result);
})



router.delete('/deletelike/:id', async (req, res) => {
  var deletedLike = await Likes.find({user_id : req.params.id});
  if (deletedLike.length > 0) 
  {
	var deletedLike=await Likes.deleteMany({user_id : deletedLike[0].user_id});  
  } 
  res.json( deletedLike );
});


router.delete('/deletelike2/:id', async (req, res) => {
  var deletedLike = await Likes.find({post_id : req.params.id});
  if (deletedLike.length > 0) 
  {
	var deletedLike=await Likes.deleteMany({post_id : deletedLike[0].post_id});  
  } 
  res.json( deletedLike );
});



 
 
router.delete('/deletelike1/:id', async (req, res) => {
  var deletedLike = await Likes.findById( req.params.id);
 
 if(deletedLike)
 {
  deletedLike = await deletedLike.remove();
   res.json( deletedLike );
  } else {
    res.send('Error in Deletion.');
  }
});

module.exports = router
