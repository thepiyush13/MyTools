import java.io.*;
import java.util.regex.*;


public class FilterText{

        public static void main(String[] args){
        //reading command line arguments
        if(args.length < 1){
                return ;
        }
        String inFile  = args[0] ;
        String outFile  = args[1] ;
        String curLine;
        String temp = "";
        String innerLine;
        boolean start = false;
        boolean stop = false;
        int i =1;
        String regex;
        BufferedReader br ;
        BufferedWriter bw;
        try{
        //read large input file line by line
        br = new BufferedReader(new FileReader(inFile));
        bw = new BufferedWriter(new FileWriter(outFile));
        while((curLine = br.readLine() )!=null){
                // If begining of text block is found = 'PROBLEM'
                regex = "^Problem";
                start = matchRegex(regex, curLine) ;
                regex = "^Solution"; 
                stop =false;                                     
                while( start==true && (stop=matchRegex(regex, curLine) ) == false ){ 
                        // If end of text block is found = 'SOLUTION'                              
                        curLine = br.readLine() ;                      
                        temp = temp +   " "  + curLine;                                                                                                    
                }

                //we found the block of text 
                if(start && stop){
                         //data cleanup before writing to disc 
                        curLine = curLine.replace("'","");                       
                        curLine = String.format(" '%d', '%s' ",i,temp);
                        bw.write(curLine);
                        bw.newLine();
                        i++;
                        temp = "";
                }
                        
        }
        br.close();
        bw.close();
        
        
        //save to file with line seperators
        }
        catch(Exception e){ 
                System.out.print(e.getMessage());
        }
        

}
        private static boolean matchRegex(String pattern, String source){
                if( pattern.isEmpty() || source.isEmpty() ){
                        return false;
                }
                boolean result ;
                Pattern p = Pattern.compile(pattern);
                Matcher m = p.matcher(source);
                result = (m.find()) ? true : false ;
                return result;
        
        }

}
