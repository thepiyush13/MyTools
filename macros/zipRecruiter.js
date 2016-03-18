
var totalJobs,perPageJobs,totalPages;
totalJobs = prompt("Total Jobs?")
perPageJobs = prompt("Jobs per page?")
totalPages = totalJobs/perPageJobs;
var timeout = "SET !TIMEOUT_STEP 1 \n"
var stats  = " \n Total jobs:" + totalJobs + ", total pages:"+ totalPages;
iimPlayCode("SET !ERRORIGNORE YES");
iimPlayCode("SET !TIMEOUT_STEP 1")
for(var i=1;i<=totalPages;i++){
	
	for(var j=1;j<=perPageJobs;j++){
		iimDisplay("Currently on page "+i+" and link:"+j+stats);
		iimPlayCode(timeout+ "TAG POS="+j+" TYPE=BUTTON ATTR=CLASS:job_tool*job_apply*default");
		iimPlayCode("WAIT SECONDS=1");
	}
	iimPlayCode("TAG POS=1 TYPE=A ATTR=ID:pagination-button-next");

}

