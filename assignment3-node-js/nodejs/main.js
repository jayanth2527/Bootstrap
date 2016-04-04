	var fs= require("fs");
	var array_main;
	var i=0;
	var j=0;
	var row;
	var fileName=["India2011.csv","IndiaSC2011.csv","IndiaST2011.csv"];
    var main_row;
	var eachrow;
	var line;
	var flag=0;

//Age-wise population distribution in temrs of literate people
var obj={};
var result=[]
result1();
// for(var q=0;q<result.length;q++){
// 	console.log(q);
// console.log(result[q]);
// }
var jsonObj = JSON.stringify(obj);
result.push(jsonObj);


// json to file
fs.writeFile('file1.json',result,  function(err) {
   if (err) {
       return console.error(err);
   }
});
      

function result1(){

	/*var newarray=['Age-group','Literate - Persons'];
	newarray[0]=new Array();
	newarray[1]=new Array();*/
    var result=[];
	var statecode;
	var tru;
	var agegroup;
	var literate;

for(i=0;i<fileName.length; i++){
	var data= fs.readFileSync(fileName[i], 'utf8');
	array_main=data.toString().split("\n");
    main_row=array_main[0].split(",");//to split each line seperated by comma         
	         j=0;
	         //index of age-group and illiterate-Persons
			for(j=1; j<array_main.length; j=j+1){
				var cur=array_main[j].split(",")
				for(k=0;k<main_row.length;k++){
					obj[main_row[k]]=cur[k];

				}
         
			}
}}


				// if(main_row[j]=='State Code'){
	   //          	statecode=j
				// }
				// else if(main_row[j]=='Total/ Rural/ Urban'){
				// 	tru=j;
				// }
				// else if(main_row[j]=='Age-group'){
		  //     	     agegroup=j;
		  //     }
		  //     else if(main_row[j]=='Literate - Persons'){
		  //     	literate=j;
		      //}

			//finding age-groups
	          
// 	         var w=0;
// 	        for(j=1;j<array_main.length;j++){
// 	        	eachrow=array_main[j].split(',');
// 	        	   	if(flag==0)
// 		        	{ 
		        			
// 		        		if((eachrow[statecode]=="01") && (eachrow[tru]=="Total")){
		        	
// 		                 newarray[0][w] =eachrow[agegroup];
// 		                 newarray[1][w] =eachrow[literate]; 

// 		                 w++;             
// 		        		}
// 		        		else
// 		        		{ 
// 		        			flag=1; 
// 		        			w=0;
// 		        		}

// 		        	} 
// 			        else{
	 
// 			        		    if(eachrow[tru]=="Total")
// 			        		    {
			                      
// 			                      newarray[1][w] =parseInt(newarray[1][w])+parseInt(eachrow[literate]); 
// 			                      w++; 
			                 
// 			                    } 
// 			                 else{
// 			                 	w=0;
// 			                     }
			              

// 			        	    }
				
// 			     }
	    

// }

// var result=[];

// for(var q=0; q<newarray[0].length; q++)
// 	     { 
// 	     	var obj={};
// 	     	obj[newarray[0][q]]=newarray[1][q];
// 	        result.push(obj);
// 	     } 

// 	     return result;

// }

// //part2-1

// var result=[]
// result=result2a();

// for(var q=0;q<result.length;q++){
// 	console.log(q);
// console.log(result[q]);
// }
// var jsonObj = JSON.stringify(result);


// //writing json to file
// fs.writeFile('file2-1.json', jsonObj,  function(err) {
//    if (err) {
//        return console.error(err);
//    }
// });


// //csv computation method
// function result2a(){

//  var statecode;
// 	var areaname;
// 	var tru;
// 	var agegroup;
// 	var graduate;


// 	var newarray1=['Area Name','Educational level - Graduate & above - Persons'];
// 	newarray1[0]=new Array();
// 	newarray1[1]=new Array();


// for(;i<fileName.length; i++){
	

// 	var data= fs.readFileSync(fileName[i], 'utf8');

// 	array_main=data.toString().split("\n");
	        
// 	         main_row=array_main[0].split(",");//to split each line seperated by comma
	         
// 	         j=0;
	     

// 	         //for finding index of age-group and Illiterate-Persons
// 			for(i=0; j<main_row.length; j=j+1){
				
// 				if(main_row[j]=='State Code'){
	               
// 					statecode=j;

// 				}
// 				else if(main_row[j]=='Area Name'){
// 					areaname=j;

// 				}
// 				else if(main_row[j]=='Total/ Rural/ Urban'){

// 					tru=j;   

// 				}
// 				else if(main_row[j]=='Age-group'){
		      	     
// 		      	     agegroup=j;
		      	    
// 		      }
// 		      else if(main_row[j]=='Educational level - Graduate & above - Persons'){
// 		      	     graduate=j;


// 		      }

// 			}

// 			//finding age-groups
	          
// 	         var w=0;
	     
	       
// 	        for(j=1;j<array_main.length;j++){
	        	 
// 	        	 eachrow=array_main[j].split(',');
	        	
// 	        	if(i==0)
// 	        	{ 
	        		
// 	        		if((eachrow[tru]=="Total") && (eachrow[agegroup]=="All ages")){
	        		
	                  
// 	                 newarray1[0][w] =eachrow[areaname];
// 	                 newarray1[1][w] =eachrow[graduate]; 

// 	                 w++;             
// 	        		}


// 	        	} 
// 		        else{ 
		        	
// 		        		    if((eachrow[tru]=="Total") && (eachrow[agegroup]=="All ages"))
// 		        		    {
		  
// 		                      newarray1[1][w] =parseInt(newarray1[1][w])+parseInt(eachrow[graduate]); 
// 		                      w++; 
		                 
// 		                    } 
		          

// 		        	    }
			
// 		     }
	    

// }//end of for

// var result=[];

// for(var q=0; q<newarray1[0].length; q++)
// 	     { 
// 	     	var obj={};
// 	     	obj.age=newarray1[0][q];
// 	        obj.literate_population=newarray1[1][q];  
// 	        result.push(obj);
	    
// 	     } 

// 	     return result;

// }


// //part2-2

// var result={};
// result=result2b();


	
// console.log(result.male+""+result.female);

// var jsonObj = JSON.stringify(result);


// fs.writeFile('file2-2.json', jsonObj,  function(err) {
//    if (err) {
//        return console.error(err);
//    }
// });

// function result2b(){

//     var tru;
// 	var agegroup;
// 	var malegd;
// 	var femalegd;

//     var sum_male=0;
//     var sum_female=0;

// 	var newarray1=['Male','Female'];
// 	newarray1[0]=new Array();
// 	newarray1[1]=new Array();


// for(i=0;i<fileName.length; i++){
	

// 	var data= fs.readFileSync(fileName[i], 'utf8');

// 	array_main=data.toString().split("\n");
	        
// 	         main_row=array_main[0].split(",");//to split each line seperated by comma
	         
// 	         j=0;
	     
// 			for(; j<main_row.length; j=j+1){
		
// 				if(main_row[j]=='Total/ Rural/ Urban'){

// 					tru=j;   

// 				}
// 				else if(main_row[j]=='Age-group'){
		      	     
// 		      	     agegroup=j;
		      	    
// 		      }
// 		      else if(main_row[j]=='Educational level - Graduate & above - Males'){
// 		      	     malegd=j;


// 		      }
// 		      else if(main_row[j]=='Educational level - Graduate & above - Females'){
// 		      	femalegd=j;
// 		      }

// 			}

		
// 	    //   education levels   
// 	         var w=0;
	     
	       
// 	        for(j=1;j<array_main.length;j++){
	        	 
// 	        	 eachrow=array_main[j].split(',');
	
	        	 
	     
// 	        		if((eachrow[tru]=="Total") && (eachrow[agegroup]=="All ages")){
	        		
	                  
// 	                sum_male=parseInt(sum_male)+parseInt(eachrow[malegd]);
// 	                sum_female=parseInt(sum_female)+parseInt(eachrow[femalegd]); 

	                             
// 	        		}



// 	        	} 
		      	    

// }
// var obj={};

//      obj.male=sum_male; 
//      obj.female=sum_female;
   
// 	     return obj;

// }
// //part-3

// var result=[]
// result=result3();

// for(var q=0;q<result.length;q++){
// 	console.log(q);
// console.log(result[q]);
// }
// var jsonObj = JSON.stringify(result);



// fs.writeFile('file2-3.json', jsonObj,  function(err) {
//    if (err) {
//        return console.error(err);
//    }
// });
	

// function result3(){

//     var tru;
// 	var agegroup;
//     var el_withoutel;
//     var el_belowpri;
//     var el_primary;
//     var el_middle;
//     var el_metric;
//     var el_higher;
//     var el_nt_diploma;
//     var el_t_diploma;
//     var el_graduate;
//     var el_unclassified;
    
//     var sel_withoutel=0;
//     var sel_belowpri=0;
//     var sel_primary=0;
//     var sel_middle=0;
//     var sel_metric=0;
//     var sel_higher=0;
//     var sel_nt_diploma=0;
//     var sel_t_diploma=0;
//     var sel_graduate=0;
//     var sel_unclassified=0;
//     var result=[];



// 	var newarray1=['Male','Female'];
// 	newarray1[0]=new Array();
// 	newarray1[1]=new Array();


// for(;i<fileName.length; i++){
	
// 	console.log("Education level for "+fileName[i]);

// 	var data= fs.readFileSync(fileName[i], 'utf8');

// 	array_main=data.toString().split("\n");
	        
// 	         main_row=array_main[0].split(",");//to split each line seperated by comma
	         
// 	         j=0;
	     
// 			for(j=0; j<main_row.length; j=j+1){
		
// 				if(main_row[j]=='Total/ Rural/ Urban'){

// 					tru=j;   

// 				}
// 				else if(main_row[j]=='Age-group'){
		      	     
// 		      	     agegroup=j;
		      	    
// 		      }
// 		      else if(main_row[j]=='Educational level - Literate without educational level - Persons'){
		      	     
// 		      	     el_withoutel=j;

// 		      }
// 		      else if(main_row[j]=='Educational level - Below Primary - Persons'){
// 		      	el_belowpri=j;
// 		      }
// 		      else if(main_row[j]=='Educational level - Primary - Persons'){
//               el_primary=j;
// 		      }
// 		      else if(main_row[j]=='Educational level - Middle - Persons'){
// 		      	el_middle=j;
// 		      }
// 		      else if(main_row[j]=='Educational level - Matric/Secondary - Persons'){
// 		      	el_metric=j;
// 		      }
// 		      else if(main_row[j]=='Educational level - Higher secondary/Intermediate/Pre-University/Senior secondary - Persons'){
// 		      	el_higher=j;
// 		      }
// 		      else if(main_row[j]=='Educational level - Non-technical diploma or certificate not equal to degree - Persons'){
// 		      	el_nt_diploma=j;
// 		      }
//             else if(main_row[j]=='Educational level - Technical diploma or certificate not equal to degree - Persons'){
// 		      	el_t_diploma=j;
// 		      }
		      
// 		      else if(main_row[j]=='Educational level - Graduate & above - Persons'){
// 		      	el_graduate=j;
// 		      }
// 		      else if(main_row[j]=='Educational level - Unclassified - Persons'){
// 		      	el_unclassified=j;
// 		      }

// 			}

			
	          
// 	         var w=0;
	     
	       
// 	        for(j=1;j<array_main.length;j++){
	        	 
// 	        	 eachrow=array_main[j].split(',');
	        	
// 	        		if((eachrow[tru]=="Total") && (eachrow[agegroup]=="All ages")){
	        		
	                
// 	                sel_withoutel=parseInt(sel_withoutel)+parseInt(eachrow[el_withoutel]);
// 	                sel_belowpri=parseInt(sel_belowpri)+parseInt(eachrow[el_belowpri]);
// 	                sel_primary=parseInt(sel_primary)+parseInt(eachrow[el_primary]);
// 	                sel_middle=parseInt(sel_middle)+parseInt(eachrow[el_middle]);
// 	                sel_metric=parseInt(sel_metric)+parseInt(eachrow[el_metric]);
// 	                sel_higher=parseInt(sel_higher)+parseInt(eachrow[el_higher]);
// 	                sel_nt_diploma=parseInt(sel_nt_diploma)+parseInt(eachrow[el_nt_diploma]);
// 	                sel_t_diploma=parseInt(sel_t_diploma)+parseInt(eachrow[el_t_diploma]);
// 	                sel_graduate=parseInt(sel_graduate)+parseInt(eachrow[el_graduate]);
// 	                sel_unclassified=parseInt(sel_unclassified)+parseInt(eachrow[el_unclassified]);

	                             
// 	        		}



// 	        	}
	        
// 		  //education levels for each category
		   
//            var objmain={};
// 	     	var obj={};

// 	        	obj.Educational_evel_Literate_without_educational_level_Persons=sel_withoutel;
// 	        	obj.Educational_level_Below_Primary_Persons=sel_belowpri;
// 	        	obj.Educational_level_Primary_Persons=sel_primary;
// 	        	obj.Educational_level_Middle_Persons=sel_middle;
// 	        	obj.Educational_level_Matric_Secondary_Persons=sel_metric;
// 	        	obj.Educational_level_Higher_secondary_Intermediate_Pre_University_Senior_secondary_Persons=sel_higher;
// 	        	obj.Educational_level_Non_technical_diploma_or_certificate_not_equal_to_degree_Persons=sel_nt_diploma;
// 	        	obj.Educational_level_Technical_diploma_or_certificate_not_equal_to_degree_Persons+sel_t_diploma;
// 	        	obj.Educational_level_Graduate_and_above_Persons=sel_graduate;
// 	        	obj.Educational_level_Unclassified_Persons=sel_unclassified;


//               if(i==1){
//                objmain.category="General";
//            }
//            else if(i==2){
//                objmain.category="SC";
//            }
//            else{
//                objmain.category="ST";
//            }

//            objmain.education=obj;


//            result.push(objmain);
	        	
// }
// return result;
// }










  


   




	
        


	
		

		
 
		
		 

	

// 	  