
var totalJobs,perPageJobs,totalPages;
totalJobs = prompt("Total Jobs?")
perPageJobs = prompt("Jobs per page?")
totalPages = totalJobs/perPageJobs;
var timeout = "SET !TIMEOUT_STEP 1 \n"
var stats  = " \n Total jobs:" + totalJobs + ", total pages:"+ totalPages;
iimPlayCode("SET !ERRORIGNORE YES");
iimPlayCode(timeout)

var pre = "TAG POS="
var post  = " TYPE=A ATTR=CLASS:job-title-link \n TAG POS=1 TYPE=BUTTON ATTR=ID:apply-job-button \n TAG POS=1 TYPE=LABEL FORM=ID:apply-form ATTR=TXT:Follow<SP>* \n TAG POS=1 TYPE=INPUT:CHECKBOX FORM=ID:apply-form ATTR=ID:follow-company CONTENT=NO \n TAG POS=1 TYPE=INPUT:FILE FORM=ID:apply-form ATTR=ID:file-browse-input CONTENT=/home/piyush/Documents/AppMaterial/Piyush<SP>Tripathi<SP>Resume<SP>Java.pdf \n WAIT SECONDS=2 \n TAG POS=1 TYPE=BUTTON ATTR=ID:send-application-button"
var k=0
for(var i=1;i<=totalPages;){
	
	for(j=1;j<=perPageJobs;j++){
		iimDisplay("Currently on page "+i+" and link:"+j+stats);
		iimPlayCode("TAG POS="+j+" TYPE=LI ATTR=CLASS:job-listing EXTRACT=HTM");
		var txt  = iimGetLastExtract();
		//alert(txt)
		var status = txt.indexOf("Apply")
		if (status!=-1){
			//alert("matche");
			iimPlayCode(timeout+pre+j+post);
			iimPlayCode("WAIT SECONDS=4");
			iimPlayCode("BACK");
			iimPlayCode("WAIT SECONDS=2");
			k++;
	
		}
			
	}
	i++;
	//alert("TAG POS=1 TYPE=A ATTR=HREF:*pagination_"+i)
	iimPlayCode("TAG POS=1 TYPE=A ATTR=HREF:*pagination_"+i);
	

}
iimDisplay("Total applied jobs="+k);

