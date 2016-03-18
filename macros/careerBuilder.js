
var totalJobs,perPageJobs,totalPages;
totalJobs = prompt("Total Jobs?")
perPageJobs = prompt("Jobs per page?")
totalPages = totalJobs/perPageJobs;
var timeout = "SET !TIMEOUT_STEP 1 \n"
var stats  = " \n Total jobs:" + totalJobs + ", total pages:"+ totalPages;
var noerror = "SET !ERRORIGNORE YES \n" 
iimPlayCode(noerror);
iimPlayCode(timeout)
var clickYes = "TAG POS=1 TYPE=INPUT:RADIO  ATTR=ID:*ListItemID* \n TAG POS=2 TYPE=INPUT:RADIO  ATTR=ID:*ListItemID* \n TAG POS=3 TYPE=INPUT:RADIO  ATTR=ID:*ListItemID* \n TAG POS=4 TYPE=INPUT:RADIO  ATTR=ID:*ListItemID* \n TAG POS=1 TYPE=INPUT:SUBMIT  ATTR=ID:buttonSubmit"
var pre = "TAG POS="
var post1  = " TYPE=A ATTR=CLASS:jt*prefTitle "
var apply = "TAG POS=1 TYPE=A ATTR=TXT:Apply<SP>Now"
var dupTest = "TAG POS=1 TYPE=DIV ATTR=ID:duplicateApplyNotice"
var post2 ="TAG POS=1 TYPE=INPUT:CHECKBOX FORM=ID:aspnetForm ATTR=ID:_SingleApply_cbCoverLetter CONTENT=YES \n TAG POS=1 TYPE=SELECT FORM=ID:aspnetForm ATTR=ID:_SingleApply_*_CoverLetterDID CONTENT=%CL8Q2N66ZV1TVTHYRN97 \n TAG POS=1 TYPE=INPUT:CHECKBOX FORM=ID:aspnetForm ATTR=ID:_SingleApply_MxNWJobApplicationV2_SaveThisCover CONTENT=YES  \n TAG POS=1 TYPE=INPUT:SUBMIT FORM=ID:aspnetForm ATTR=ID:btnSendStart"
var goback = "TAG POS=1 TYPE=A ATTR=ID:*BackToResults"
var quickApplyAll = "TAG POS=1 TYPE=INPUT:BUTTON FORM=ID:aspnetForm ATTR=ID:btnQuickApplyAll"
var k=0
for(var i=1;i<=totalPages;){
	
	for(j=1;j<=perPageJobs;j++){
		iimDisplay("Currently on page "+i+" and link:"+j+stats);
		iimPlayCode(timeout+pre+j+post1)
		if(timeout+iimPlayCode(apply) < 0){ 
			iimPlayCode(goback);
			continue;
		}
		var applied = iimPlayCode(dupTest)
		if(applied<0 && iimPlayCode(timeout+post2) > 0){
			iimPlayCode(timeout+noerror + clickYes);
			iimPlayCode("WAIT SECONDS=1");
			iimPlayCode(timeout+quickApplyAll);	
			iimPlayCode("WAIT SECONDS=5");		
			iimPlayCode(goback);
			iimPlayCode("WAIT SECONDS=2");
			k++;
			
		}else{
			iimPlayCode("BACK");
			iimPlayCode(goback);
		}

			
	}
	i++;
	//alert("TAG POS=1 TYPE=A ATTR=HREF:*pagination_"+i)
	iimPlayCode("TAG POS=1 TYPE=A ATTR=CLASS:*Pagination2_next");
	

}
iimDisplay("Total applied jobs="+k);

