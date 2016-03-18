
var totalJobs,perPageJobs,totalPages;
totalJobs = prompt("Total Jobs?")
perPageJobs = prompt("Jobs per page?")
totalPages = totalJobs/perPageJobs;
var timeout = "SET !TIMEOUT_STEP 1 \n"
var stats  = " \n Total jobs:" + totalJobs + ", total pages:"+ totalPages;
var noerror  = "SET !ERRORIGNORE YES"
iimPlayCode(noerror);
iimPlayCode(timeout)

var pre = "\n TAG POS="
//var post  = " TYPE=A ATTR=HREF:*rc*clk*jk* \n  TAB T=2 \n TAG POS=1 TYPE=A ATTR=CLASS:indeed-apply-button  \nTAG POS=1 TYPE=SPAN ATTR=ID:indeed-ia-1458252073022-0label FRAME F=3 TAG POS=1 TYPE=TEXTAREA FORM=ID:apply_form ATTR=ID:applicant.applicationMessage CONTENT=Hi,<BR>I<SP>recently<SP>came<SP>across<SP>the<SP>posted<SP>position<SP>and<SP>after<SP>reading<SP>the<SP>description<SP>I<SP>am<SP>confident<SP>that<SP>I<SP>would<SP>be<SP>a<SP><BR>perfect<SP>fit<SP>for<SP>this<SP>position<SP>as<SP>my<SP>experience<SP>and<SP>abilities<SP>precisely<SP>match<SP>your<SP>requirements.<BR>While<SP>doing<SP>my<SP>research<SP>on<SP>your<SP><SP>company<SP>background,<SP>I<SP>was<SP>particularly<SP>impressed<SP>by<SP>the<SP>fact<SP>that<SP>you<SP><BR>have<SP>a<SP>long<SP>history<SP>of<SP><SP>successful<SP>software<SP>products.<SP>I<SP>think<SP>it<SP>shows<SP>how<SP>much<SP>you<SP>care<SP>about<SP>the<SP>design<SP><BR>process<SP>and<SP>software<SP>quality.<SP>I<SP>was<SP>also<SP>excited<SP>to<SP>hear<SP>that<SP>you<SP>are<SP>becoming<SP>a<SP>goto<SP>place<SP>for<SP>innovative<SP><BR>software<SP>solutions.Therefore<SP>it<SP>will<SP>be<SP>my<SP>pleasure<SP>to<SP>work<SP>with<SP><SP>because<SP>I<SP>am<SP>truly<SP>impressed<SP>by<SP>it`s<SP><BR>company<SP>culture<SP>and<SP>mission.<SP><BR><BR>As<SP>you<SP>will<SP>see<SP>from<SP>the<SP>attached<SP>resume,<SP>I<SP>have<SP>a<SP>long<SP>track<SP>record<SP>of<SP>jobs<SP>that<SP>involved<SP>finding<SP>innovative<SP><BR>solutions<SP>to<SP>complex<SP>problems.<SP>I<SP>enjoy<SP>working<SP><SP>and<SP>being<SP>challenged<SP>by<SP>the<SP>projects<SP>that<SP>require<SP>me<SP>to<SP>step<SP><BR>outside<SP>of<SP>my<SP>comfort<SP>zone.I<SP>also<SP>like<SP>to<SP>build<SP>and<SP>create<SP>interesting<SP>projects<SP>when<SP>I<SP>am<SP>free.<SP>Some<SP>of<SP>my<SP><BR>personal<SP>projects<SP>were<SP>so<SP>interesting<SP>that<SP>I<SP>would<SP>stay<SP>up<SP>all<SP>night<SP>in<SP>order<SP>to<SP>find<SP>the<SP>“most<SP>optimized<SP><BR>solution”.These<SP>points<SP>coupled<SP>with<SP>my<SP>curiosity<SP>and<SP>ability<SP>to<SP>learn<SP>on<SP>the<SP>job,<SP>have<SP>prepared<SP>me<SP>well<SP>for<SP>the<SP><BR>position<SP>at<SP>your<SP>company.<SP>My<SP>additional<SP>strengths<SP>include,<SP>but<SP>are<SP>not<SP>limited<SP>to<SP>the<SP>following:<BR><BR>1.<SP>Highly<SP>skilled<SP>in<SP>designing<SP>and<SP>developing<SP>high<SP>volume<SP>Java<SP>Web<SP>applications<SP>:<SP>In<SP>past<SP>I<SP>had<SP>developed<SP><BR>online<SP>platform<SP>in<SP>JAVA,SQL,<SP>HTML<SP>and<SP>CSS<SP>for<SP>the<SP>largest<SP>entrepreneurship<SP>community<SP>in<SP>south<SP>asia.<BR>2.<SP>Thorough<SP>understanding<SP>of<SP>business<SP>and<SP>technical<SP>aspects:<SP>My<SP>current<SP>degree<SP>involves<SP>blend<SP>of<SP><BR>advanced<SP>level<SP>courses<SP>both<SP>from<SP>Mays<SP>Business<SP>School<SP>and<SP>Texas<SP>A&M<SP>Computer<SP>science<SP>department.<BR>3.<SP>Hands­on<SP>software<SP>troubleshooting<SP>experience<SP>with<SP>cross­functional<SP>teams.<BR><BR>For<SP>additional<SP>information<SP>about<SP>my<SP>capabilities<SP>please<SP>view<SP>my<SP>attached<SP>resume.<BR>I<SP>would<SP>welcome<SP>the<SP>chance<SP>of<SP>an<SP>interview<SP>for<SP>Software<SP>Developer,<SP>where<SP>we<SP>would<SP>be<SP>able<SP>to<SP>discuss<SP>in<SP><BR>greater<SP>detail<SP>the<SP>value<SP>and<SP>strength<SP>I<SP>can<SP>bring<SP>to<SP>.<BR><BR>I<SP>thank<SP>you<SP>for<SP>your<SP>time<SP>and<SP>I<SP>look<SP>forward<SP>to<SP>hearing<SP>from<SP>you.<BR>Following<SP>are<SP>links<SP>to<SP>some<SP>of<SP>the<SP>personal<SP>projects<SP>I<SP>have<SP>done:<BR>github<SP>code<SP>base:<SP>www.github.com/thepiyush13<BR><BR>Yours<SP>sincerely<BR>Piyush<SP>Tripathi<BR>thepiyush13@gmail.com<BR>9797395282<BR>Texas<SP>A&M<SP>University \n PAUSE \n TAG POS=1 TYPE=INPUT:SUBMIT FORM=ID:apply_form ATTR=ID:apply \n TAG POS=1 TYPE=INPUT:SUBMIT FORM=ID:apply_form ATTR=ID:apply \n TAG POS=1 TYPE=INPUT:SUBMIT FORM=ID:apply_form ATTR=ID:apply \n PAUSE \n TAB CLOSE"
var post1  = " TYPE=A ATTR=data-tn-element:jobTitle EXTRACT=HREF"
var post2 =  noerror + " \n  TAG POS=1 TYPE=A ATTR=CLASS:indeed-apply-button   \n TAG POS=1 TYPE=SPAN ATTR=ID:indeed-ia-*label \n WAIT SECONDS=2 \n FRAME F=3 \n TAG POS=1 TYPE=TEXTAREA ATTR=ID:applicant.applicationMessage CONTENT=Hi,<BR>I<SP>recently<SP>came<SP>across<SP>the<SP>posted<SP>position<SP>and<SP>after<SP>reading<SP>the<SP>description<SP>I<SP>am<SP>confident<SP>that<SP>I<SP>would<SP>be<SP>a<SP><BR>perfect<SP>fit<SP>for<SP>this<SP>position<SP>as<SP>my<SP>experience<SP>and<SP>abilities<SP>precisely<SP>match<SP>your<SP>requirements.<BR>While<SP>doing<SP>my<SP>research<SP>on<SP>your<SP><SP>company<SP>background,<SP>I<SP>was<SP>particularly<SP>impressed<SP>by<SP>the<SP>fact<SP>that<SP>you<SP><BR>have<SP>a<SP>long<SP>history<SP>of<SP><SP>successful<SP>software<SP>products.<SP>I<SP>think<SP>it<SP>shows<SP>how<SP>much<SP>you<SP>care<SP>about<SP>the<SP>design<SP><BR>process<SP>and<SP>software<SP>quality.<SP>I<SP>was<SP>also<SP>excited<SP>to<SP>hear<SP>that<SP>you<SP>are<SP>becoming<SP>a<SP>goto<SP>place<SP>for<SP>innovative<SP><BR>software<SP>solutions.Therefore<SP>it<SP>will<SP>be<SP>my<SP>pleasure<SP>to<SP>work<SP>with<SP><SP>because<SP>I<SP>am<SP>truly<SP>impressed<SP>by<SP>it`s<SP><BR>company<SP>culture<SP>and<SP>mission.<SP><BR><BR>As<SP>you<SP>will<SP>see<SP>from<SP>the<SP>attached<SP>resume,<SP>I<SP>have<SP>a<SP>long<SP>track<SP>record<SP>of<SP>jobs<SP>that<SP>involved<SP>finding<SP>innovative<SP><BR>solutions<SP>to<SP>complex<SP>problems.<SP>I<SP>enjoy<SP>working<SP><SP>and<SP>being<SP>challenged<SP>by<SP>the<SP>projects<SP>that<SP>require<SP>me<SP>to<SP>step<SP><BR>outside<SP>of<SP>my<SP>comfort<SP>zone.I<SP>also<SP>like<SP>to<SP>build<SP>and<SP>create<SP>interesting<SP>projects<SP>when<SP>I<SP>am<SP>free.<SP>Some<SP>of<SP>my<SP><BR>personal<SP>projects<SP>were<SP>so<SP>interesting<SP>that<SP>I<SP>would<SP>stay<SP>up<SP>all<SP>night<SP>in<SP>order<SP>to<SP>find<SP>the<SP>most<SP>optimized<SP><BR>solution.These<SP>points<SP>coupled<SP>with<SP>my<SP>curiosity<SP>and<SP>ability<SP>to<SP>learn<SP>on<SP>the<SP>job,<SP>have<SP>prepared<SP>me<SP>well<SP>for<SP>the<SP><BR>position<SP>at<SP>your<SP>company.<SP>My<SP>additional<SP>strengths<SP>include,<SP>but<SP>are<SP>not<SP>limited<SP>to<SP>the<SP>following:<BR><BR>1.<SP>Highly<SP>skilled<SP>in<SP>designing<SP>and<SP>developing<SP>high<SP>volume<SP>Java<SP>Web<SP>applications<SP>:<SP>In<SP>past<SP>I<SP>had<SP>developed<SP><BR>online<SP>platform<SP>in<SP>JAVA,SQL,<SP>HTML<SP>and<SP>CSS<SP>for<SP>the<SP>largest<SP>entrepreneurship<SP>community<SP>in<SP>south<SP>asia.<BR>2.<SP>Thorough<SP>understanding<SP>of<SP>business<SP>and<SP>technical<SP>aspects:<SP>My<SP>current<SP>degree<SP>involves<SP>blend<SP>of<SP><BR>advanced<SP>level<SP>courses<SP>both<SP>from<SP>Mays<SP>Business<SP>School<SP>and<SP>Texas<SP>A&M<SP>Computer<SP>science<SP>department.<BR>3.<SP>Hands­on<SP>software<SP>troubleshooting<SP>experience<SP>with<SP>cross­functional<SP>teams.<BR><BR>For<SP>additional<SP>information<SP>about<SP>my<SP>capabilities<SP>please<SP>view<SP>my<SP>attached<SP>resume.<BR>I<SP>would<SP>welcome<SP>the<SP>chance<SP>of<SP>an<SP>interview<SP>for<SP>Software<SP>Developer,<SP>where<SP>we<SP>would<SP>be<SP>able<SP>to<SP>discuss<SP>in<SP><BR>greater<SP>detail<SP>the<SP>value<SP>and<SP>strength<SP>I<SP>can<SP>bring<SP>to<SP>.<BR><BR>I<SP>thank<SP>you<SP>for<SP>your<SP>time<SP>and<SP>I<SP>look<SP>forward<SP>to<SP>hearing<SP>from<SP>you.<BR>Following<SP>are<SP>links<SP>to<SP>some<SP>of<SP>the<SP>personal<SP>projects<SP>I<SP>have<SP>done:<BR>github<SP>code<SP>base:<SP>www.github.com/thepiyush13<BR><BR>Yours<SP>sincerely<BR>Piyush<SP>Tripathi<BR>thepiyush13@gmail.com<BR>9797395282<BR>Texas<SP>A&M<SP>University   \n TAG POS=1 TYPE=INPUT ATTR=ID:apply \n TAG POS=1 TYPE=INPUT:RADIO FORM=ID:apply_form ATTR=NAME:* \n TAG POS=2 TYPE=INPUT:RADIO FORM=ID:apply_form ATTR=NAME:* \n  TAG POS=3 TYPE=INPUT:RADIO FORM=ID:apply_form ATTR=NAME:* \n TAG POS=4 TYPE=INPUT:RADIO FORM=ID:apply_form ATTR=NAME:* \n TAG POS=5 TYPE=INPUT:RADIO FORM=ID:apply_form ATTR=NAME:* \n TAG POS=1 TYPE=INPUT ATTR=ID:apply \n TAG POS=1 TYPE=INPUT ATTR=ID:apply "
var k=0
for(var i=1;i<=totalPages;){
	
	for(j=1;j<=perPageJobs;j++){
		iimDisplay("Currently on page "+i+" and link:"+j+stats);
		iimPlayCode("TAG POS="+j+" TYPE=DIV ATTR=CLASS:*row*result EXTRACT=TXT");
		var txt  = iimGetLastExtract();
		//alert(txt)
		var status = txt.indexOf("Apply with your Indeed Resume")
		if (status!=-1){
			iimPlayCode(pre+j+post1);
			var x = iimGetLastExtract();
			iimPlayCode("TAB OPEN NEW \n TAB T=2")
			//alert(x)
			iimPlayCode("URL GOTO="+x)
			iimPlayCode(timeout+post2,20);
			//alert(timeout+pre+j+post);
			iimPlayCode("WAIT SECONDS=4");
			iimPlayCode("TAB CLOSE");
			iimPlayCode("WAIT SECONDS=2");
			k++;
	
		}
			
	}
	i++;
	//alert("TAG POS=1 TYPE=A ATTR=HREF:*pagination_"+i)
	iimPlayCode("TAG POS=1 TYPE=SPAN ATTR=CLASS:pn");
	

}
iimDisplay("Total applied jobs="+k);

