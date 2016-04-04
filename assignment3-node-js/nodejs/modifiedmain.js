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

//Part 1--Age-wise population distribution of literate people
//converting to json
var result=[];
result=result1();
var jsonObj = JSON.stringify(result);

//writing json to file
fs.writeFile('mofile1.json', jsonObj,  function(err) {
   if (err) {
       return console.error(err);
   }
});

//csv method
function result1(){

   var result=[];
	var statecode;
	var tru;
	var agegroup;
	var literate;

for(i=0;i<fileName.length; i++){
	

	var data= fs.readFileSync(fileName[i], 'utf8');

	array_main=data.toString().split("\n");//to split each line
	        
	         main_row=array_main[0].split(",");//to split each line seperated by comma
	         
	         j=0;
	        

	         //for finding index of age-group and Illiterate-Persons
			for(j=0; j<main_row.length; j=j+1){
				
				if(main_row[j]=='State Code'){
	               
					statecode=j
				}
				else if(main_row[j]=='Total/ Rural/ Urban'){

					tru=j;

				}
				else if(main_row[j]=='Age-group'){
		      	     
		      	     agegroup=j;
		      }
		      else if(main_row[j]=='Literate - Persons'){
		      	literate=j;

		      }

			}

			//finding age-groups
	          
	         var w=0;
	     
	       
	        for(j=1;j<array_main.length;j++){
	        	 
	        	 eachrow=array_main[j].split(',');
	        	
	        	 var obj={};
		        	if(flag==0)
		        	{ 
		        		
		        		
		        		if((eachrow[statecode]=="01") && (eachrow[tru]=="Total")){
		        	
		                obj.age=eachrow[agegroup];
		                 obj.literate_population =eachrow[literate];
                         result.push(obj);
		                 w++;             
		        		}
		        		else
		        		{ 
		        			flag=1; 
		        			w=0;
		        		}

		        	} 
			        else{
	 
			        		    if(eachrow[tru]=="Total")
			        		    {
			                      result[w].literate_population=parseInt(result[w].literate_population)+parseInt(eachrow[literate]);
			                      w++; 
			                 
			                    } 
			                 else{
			                 	w=0;
			                     }
			              

			        	    }
				
			     }
	    

}

	     return result;

}



//Part 2-1--------State-wise Graduate Population
//conversion to json
var result=[]
result=result2a();

var jsonObj = JSON.stringify(result);


//writing json to file
fs.writeFile('mofile2-1.json', jsonObj,  function(err) {
   if (err) {
       return console.error(err);
   }
});


//csv computation method
function result2a(){

 var statecode;
	var areaname;
	var tru;
	var agegroup;
	var graduate;



for(i=0;i<fileName.length; i++){
	

	var data= fs.readFileSync(fileName[i], 'utf8');

	array_main=data.toString().split("\n");
	        
	         main_row=array_main[0].split(",");//to split each line seperated by comma
	         
	         j=0;
	     

	         //for finding index of age-group and Illiterate-Persons
			for(j=0; j<main_row.length; j=j+1){
				
				if(main_row[j]=='State Code'){
	               
					statecode=j;

				}
				else if(main_row[j]=='Area Name'){
					areaname=j;

				}
				else if(main_row[j]=='Total/ Rural/ Urban'){

					tru=j;   

				}
				else if(main_row[j]=='Age-group'){
		      	     
		      	     agegroup=j;
		      	    
		      }
		      else if(main_row[j]=='Educational level - Graduate & above - Persons'){
		      	     graduate=j;


		      }

			}

		var w=0;
	     
	       
	        for(j=1;j<array_main.length;j++){
	        	 
	        	 eachrow=array_main[j].split(',');
	        	var obj={};
	        	 
	        	if(i==0)
	        	{ 
	        		
	        		if((eachrow[tru]=="Total") && (eachrow[agegroup]=="All ages")){
	        		
	                  
	                  
	                 obj.areaname=eachrow[areaname];
	                 obj.graduate_population =eachrow[graduate]; 
                     result.push(obj);
	                 w++;             
	        		}


	        	} 
		        else{ 
		        	
		        		    if((eachrow[tru]=="Total") && (eachrow[agegroup]=="All ages"))
		        		    {
		                       result[w].graduate_population=parseInt(result[w].graduate_population)+parseInt(eachrow[graduate]); 
		                      w++; 
		                 
		                    } 
		                 
		                    } 
		          

		        	    }
			
		     }
	    return result;

}

//part2-2
var result={};
result=result2b();
 var jsonObj = JSON.stringify(result);
 fs.writeFile('mofile2-2.json', jsonObj,  function(err) {
    if (err) {
        return console.error(err);
    }
 });
function result2b(){
    
    var result=[];
    var tru;
	var agegroup;
	var malegd;
	var femalegd;
    var objm={};
    objm.gender="male";
    var objf={};
    objf.gender="female";
    objm.literate=0;
    objf.literate=0;
     
for(i=0;i<fileName.length; i++){
	

	var data= fs.readFileSync(fileName[i], 'utf8');

	array_main=data.toString().split("\n");
	        
	         main_row=array_main[0].split(",");//to split each line seperated by comma
	         
	         j=0;
	     

	         //for finding index of age-group and Illiterate-Persons
			for(j=0; j<main_row.length; j=j+1){
		
				if(main_row[j]=='Total/ Rural/ Urban'){

					tru=j;   

				}
				else if(main_row[j]=='Age-group'){
		      	     
		      	     agegroup=j;
		      	    
		      }
		      else if(main_row[j]=='Educational level - Graduate & above - Males'){
		      	     malegd=j;


		      }
		      else if(main_row[j]=='Educational level - Graduate & above - Females'){
		      	femalegd=j;
		      }

			}

			//finding age-groups
	          
	         var w=0;
	     
	       
	        for(j=1;j<array_main.length;j++){
	        	 
	        	 eachrow=array_main[j].split(',');
	        
	        		if((eachrow[tru]=="Total") && (eachrow[agegroup]=="All ages")){
	        		
	                  
	                objm.literate=parseInt(objm.literate)+parseInt(eachrow[malegd]);
	                objf.literate=parseInt(objf.literate)+parseInt(eachrow[femalegd]); 

	                             
	        		}

	        	} 

}//end of for
 
         result.push(objm);
         result.push(objf);
	     return result;

}


//part-3


var result=[];
result=result3();
// var objj={};
// var objj2={};
// objj=result3();
// for(cat in objj){
// 	//console.log(objj[cat]);
// 	 for(education in objj[cat]){
// 	 	objj2=objj[cat]["education"];
	 	
// 	 	//console.log(objj[cat]["education"]);
// 	 	// for(val in objj[cat]["education"]){
// 	 	// 	console.log(objj[cat]["education"][val]);
// 	 	// }
// 	 }
// }
var jsonObj = JSON.stringify(result);



fs.writeFile('mofile3.json', jsonObj,  function(err) {
   if (err) {
       return console.error(err);
   }
});
	

function result3(){

    var tru;
	var agegroup;
    var el_withoutel;
    var el_belowpri;
    var el_primary;
    var el_middle;
    var el_metric;
    var el_higher;
    var el_nt_diploma;
    var el_t_diploma;
    var el_graduate;
    var el_unclassified;
    
    var sel_withoutel=0;
    var sel_belowpri=0;
    var sel_primary=0;
    var sel_middle=0;
    var sel_metric=0;
    var sel_higher=0;
    var sel_nt_diploma=0;
    var sel_t_diploma=0;
    var sel_graduate=0;
    var sel_unclassified=0;
    var result=[];



for(i=0;i<fileName.length; i++){
	
	console.log("Education level for "+fileName[i]);

	var data= fs.readFileSync(fileName[i], 'utf8');

	array_main=data.toString().split("\n");
	        
	         main_row=array_main[0].split(",");//to split each line seperated by comma
	         
	         j=0;
	     
			for(j=0; j<main_row.length; j=j+1){
		
				if(main_row[j]=='Total/ Rural/ Urban'){

					tru=j;   

				}
				else if(main_row[j]=='Age-group'){
		      	     
		      	     agegroup=j;
		      	    
		      }
		      else if(main_row[j]=='Educational level - Literate without educational level - Persons'){
		      	     
		      	     el_withoutel=j;

		      }
		      else if(main_row[j]=='Educational level - Below Primary - Persons'){
		      	el_belowpri=j;
		      }
		      else if(main_row[j]=='Educational level - Primary - Persons'){
              el_primary=j;
		      }
		      else if(main_row[j]=='Educational level - Middle - Persons'){
		      	el_middle=j;
		      }
		      else if(main_row[j]=='Educational level - Matric/Secondary - Persons'){
		      	el_metric=j;
		      }
		      else if(main_row[j]=='Educational level - Higher secondary/Intermediate/Pre-University/Senior secondary - Persons'){
		      	el_higher=j;
		      }
		      else if(main_row[j]=='Educational level - Non-technical diploma or certificate not equal to degree - Persons'){
		      	el_nt_diploma=j;
		      }
            else if(main_row[j]=='Educational level - Technical diploma or certificate not equal to degree - Persons'){
		      	el_t_diploma=j;
		      }
		      
		      else if(main_row[j]=='Educational level - Graduate & above - Persons'){
		      	el_graduate=j;
		      }
		      else if(main_row[j]=='Educational level - Unclassified - Persons'){
		      	el_unclassified=j;
		      }

			}

			
	          
	         var w=0;
	     
	       
	        for(j=1;j<array_main.length;j++){
	        	 
	        	 eachrow=array_main[j].split(',');
	        	
	        		if((eachrow[tru]=="Total") && (eachrow[agegroup]=="All ages")){
	        		
	                
	                sel_withoutel=parseInt(sel_withoutel)+parseInt(eachrow[el_withoutel]);
	                sel_belowpri=parseInt(sel_belowpri)+parseInt(eachrow[el_belowpri]);
	                sel_primary=parseInt(sel_primary)+parseInt(eachrow[el_primary]);
	                sel_middle=parseInt(sel_middle)+parseInt(eachrow[el_middle]);
	                sel_metric=parseInt(sel_metric)+parseInt(eachrow[el_metric]);
	                sel_higher=parseInt(sel_higher)+parseInt(eachrow[el_higher]);
	                sel_nt_diploma=parseInt(sel_nt_diploma)+parseInt(eachrow[el_nt_diploma]);
	                sel_t_diploma=parseInt(sel_t_diploma)+parseInt(eachrow[el_t_diploma]);
	                sel_graduate=parseInt(sel_graduate)+parseInt(eachrow[el_graduate]);
	                sel_unclassified=parseInt(sel_unclassified)+parseInt(eachrow[el_unclassified]);

	                             
	        		}



	        	}
	        
		  //education levels for each category
		   
           var objm={};
	     	var obj={};
	     	 if(i==0){
               obj.category="General";
           }
           else if(i==1){
               obj.category="SC";
           }
           else{
               obj.category="ST";
           }

	        	obj.Educational_level_Literate_without_educational_level_Persons=sel_withoutel;
	        	obj.Educational_level_Below_Primary_Persons=sel_belowpri;
	        	obj.Educational_level_Primary_Persons=sel_primary;
	        	obj.Educational_level_Middle_Persons=sel_middle;
	        	obj.Educational_level_Matric_Secondary_Persons=sel_metric;
	        	obj.Educational_level_Higher_secondary_Intermediate_Pre_University_Senior_secondary_Persons=sel_higher;
	        	obj.Educational_level_Non_technical_diploma_or_certificate_not_equal_to_degree_Persons=sel_nt_diploma;
	        	obj.Educational_level_Technical_diploma_or_certificate_not_equal_to_degree_Persons=sel_t_diploma;
	        	obj.Educational_level_Graduate_and_above_Persons=sel_graduate;
	        	obj.Educational_level_Unclassified_Persons=sel_unclassified;


           result.push(obj);
	        	
}
return result;
}
