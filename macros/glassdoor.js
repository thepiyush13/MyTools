
var totalJobs,perPageJobs,totalPages;
totalJobs = prompt("Total Jobs?")
perPageJobs = prompt("Jobs per page?")
totalPages = totalJobs/perPageJobs;
var timeout = "SET !TIMEOUT_STEP 1 \n"
var stats  = " \n Total jobs:" + totalJobs + ", total pages:"+ totalPages;
iimPlayCode("SET !ERRORIGNORE YES");
iimPlayCode(timeout)

var pre = "TAG POS="
var post1  = " TYPE=SPAN ATTR=CLASS:title \n WAIT SECONDS=2 \n TAG POS="
var post2 = "  TYPE=SPAN ATTR=TXT:Apply<SP>on<SP>Glassdoor \n TAG POS=1 TYPE=INPUT:TEXT FORM=ID:ApplyJobForm ATTR=ID:ApplicantName CONTENT=Piyush<SP>Tripathi \n TAG POS=2 TYPE=A ATTR=CLASS:selectboxit-option-anchor CONTENT=\n TAG POS=1 TYPE=A ATTR=ID:NoSubmitBtn "

for(var i=1;i<=totalPages;){
	
	for(j=1;j<=perPageJobs;j++){
		iimDisplay("Currently on page "+i+" and link:"+j+stats);
		iimPlayCode(timeout+pre+(j+2)+post1+j+post2);		
		iimPlayCode("WAIT SECONDS=2");
	}
	i++;
	//alert("TAG POS=1 TYPE=A ATTR=HREF:*pagination_"+i)
	iimPlayCode("TAG POS=1 TYPE=A ATTR=HREF:*Job*_IP"+i);
	

}

