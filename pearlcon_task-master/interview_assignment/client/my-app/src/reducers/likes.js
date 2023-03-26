import {

ADD_LIKES,
ADD_LIKES_SUCCESS,
ADD_LIKES_FAILURE,

GET_ALLLIKES_SUCCESS


} from '../constant';

const initialState = {
  likes:'',
  loading: false,
  error: null
}


export default function likes(state = initialState, action) {
//console.log('state==',state)
//console.log('action==',action)

//console.log('state_likes=',state.likes)
//console.log('action.payload==',action.payload)
	
		//  var get_likes_row = [...state.likes.map((value) => value.user_id == action.payload.user_id ? 'aaa':action.payload)]
	  
	/*
	let  action_payload ='';
	  //console.log('get_likes_row',get_likes_row);    
	  if(state.likes.length === 0)
	  {
		action_payload=action.payload    
	  }
	  else
	  {
		  
		 let test = state.likes.map((value) =>value)
		 console.log('test==',test);
		  
		    let  action_payload_post_id ='';
		  	let result = state.likes.map((value,index) => {
						//console.log('value==',value)
						//console.log('value.post_id==',value.post_id)
						//console.log('action.payload==',action.payload)
						//console.log('action.payload.post_id==',action.payload ? action.payload.post_id:'')
						//let action_payload.post_id = action ? action.payload.post_id:'';
						if(action.payload)
						{
							//console.log('action.payload.post_id:==',action.payload.post_id);	
							action_payload_post_id=action.payload.post_id
						}
						
						if(value.post_id === action_payload_post_id )
						{
							console.log('value==',value);
							console.log('ok');
							console.log('action.payload==',action.payload);
							action_payload=action.payload
							
							 setPost({ ...state.likes, status: action.payload.status })}
						}
						else
						{
							action_payload=action.payload
							
						}
			})
		  
		  
	  }
	  */
	  
	//  console.log('action_payload==',action_payload)
	  
	  /*if(state.likes === '' && state )
	  {
		  
		  console.log('ok');
		  console.log('action_payload==',action_payload)
		  
	  }
	  else
	  {
		  
		  
	  }*/
		  
		  
	  
	  /*if(state.likes != null && state.likes.length > 0)
				{
						let result = state.likes.map((value,index) => {
							
						0	 if(value ? value.post_id === post._id :'' )
						  {
								counting = value.counting
						  }0
							
						  if( value ? value.post_id === post._id  && value.user_id === initial[0]._id && value.status == 1:'')
						  {
								likeButton=<a className="Likes" onClick={()=>setLikes(post._id)} >LIKED</a>	  
						  }
						  
						})

				}	
	  */
	/*let action_payload_post_id = ''
	let action_payload = '';
	var result = ''
	if(action.payload !==undefined)
	{
		action_payload = action_payload;
		action_payload_post_id = action.payload.post_id
		
	}
	*/
	
	//let result = state.likes.map(stat => 
	//stat.likes ? stat.value.post_id:'' ==  action_payload_post_id ? { ...state.likes, status: action.payload.status } :action_payload ) 
	
	



 /*if(state.likes.length === 0)
	  {
		  
		  
		  if(action.payload != undefined )
		  {
					//console.log('ok')
					return result
		  }					
	  }
	  */
	 /*else if(state.likes.length > 0)
	  {
		  
		  console.log('state.likes.length ==1===',state.likes.length);
		   
		   
		  
		  
	  }
	 */
	  
	  //console.log('result==',result)
	  /*var result1=''
	  if(result != '')
	  {
		  
		  console.log('result1')
		  result1= result
		//console.log('result==',result)
		  
	  }
	  console.log('result1==',result1)*/
	 
 
	// state.likes = state.likes.map((value,index) => value.post_id === action.payload.post_id ? {...value,status:action.payload.status} :value)
			  
//console.log('state.likes.length==',state.likes.length)
	
	/*if(state.likes.length >= 0)
	{
	
	state.likes =[...state.likes,action.payload];
	//state.likes = state.likes.map((value,index) => value.post_id === action.payload.post_id ? {...value,status:action.payload.status} :value)
		
	}	
	
	console.log('state.likes==',state.likes)
	*/ 
	
	//console.log('action.payload==',action.payload)
	if(action.payload)
	{
	//console.log('action.payload.status==',action.payload.status )
	
			if(action.payload.status != undefined)
			{
				//console.log('ok')
				var result= action.payload
			}
			
			//let result = action.payload.status != undefined 
	}
//console.log('result==',result)
	
	if(result)
	{
		if(state.likes.length === 0)
	  {
		  
		 state.likes = [...state.likes,result] 
	  }
	 else
	 {
		
//console.log('state_likes=',state.likes);


		state.likes= state.likes.map((value,index) => {	
			
			console.log('result',result);
			console.log('result.post_id',result.post_id);
			//console.log('value.post_id',value.post_id);
			
			console.log('value==',value);
			console.log('value.post_id',value.post_id);
			
	
	
			
		 /*if(value.post_id != result.post_id && result.status ==1)
			{
				return [...state.likes.push(result)]
			}
			
			else if(value.post_id != result.post_id )
			{
				
				return value
				//console.log('kkk')
			}
			
			else if(value.post_id === result.post_id && result.status ==0 )
			{
				//console.log('ok')
				return {...value,status:result.status}
				
				
			}
			
			else if(value.post_id === result.post_id && result.status ==1 )
			{
				
				return {...value,status:result.status}
				
				
			}
			
		*/
			
			
			
		})		
		 
		 
	 }
	 	
		
		//console.log('result==',result);
		//console.log('result.post_id==',result.post_id)
		//var test=[...state.likes,result]
		
		
		
		/*var test = state.likes.map((value,index) => {	
			//value.post_id === result.post_id ? 'omar':'rizwan');
			//console.log('okkk')
			//console.log('value==',value)
			
			if(value.post_id === result.post_id   && result.status==0)
			{
				 return {...value,status:result.status}
				
			}
			else if(value.post_id != result.post_id  && result.status==0)
			{
				
				return value
			}
			else if(value.post_id != result.post_id && result.status ==1)
			{
				[...state.likes,result]
			}
			
			
		})*/
		//console.log('test==',test);
		
		
	//var test =state.likes.map((value,index) => value.post_id === result.post_id ? {...value,status:result.status} :'omar')
	//console.log('test==',test)	
		
	}
	//state.likes =result;
	
	//state.likes=[...state.likes,action.payload.status != undefined ? action.payload:''];
	  
	console.log('state.likes==',state.likes)
	  
	
	//console.log('action_payload_post_id===',action_payload_post_id)
  switch (action.type) {
	  

	  
	 /*case ADD_LIKES_SUCCESS:
	 
	
	 	
		return {
			...state,
			likes:[...state.likes,action.payload]
			
		}*/
		
	
	
		/*case GET_ALLLIKES_SUCCESS:
		return {
			...state,
			likes:action.payload
			
		}
		*/
		
	  
    
   
    default:
      return state;
  }
}

