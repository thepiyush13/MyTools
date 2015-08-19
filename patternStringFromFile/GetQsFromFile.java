import java.io.*;
import java.util.regex.*;

public class GetQsFromFile{
        public static void main(String[] args ){
                BufferedReader br = null;
                BufferedWriter bw = null;
                String curLine = "";

                String inFile = args[0];
                String outFile = args[1];
                try{
                        br = new BufferedReader(new FileReader(inFile));                
                       bw = new BufferedWriter(new FileWriter(outFile));
                       while( (curLine = br.readLine() ) != null){
                                //System.out.println(curLine);

                                Pattern pattern = Pattern.compile("\\d{1,2}\\.\\d{1,2}") ;
                                 Matcher matcher = pattern.matcher(curLine);
                                 if(matcher.find()){
                                     curLine = curLine.replace(","," ");
                                     bw.write(matcher.group(0)+","+curLine); 
                                     bw.newLine();     
                                 }

                                
                       }
                       br.close();
                       bw.close();
                               
                }
                catch(Exception e){
                        System.out.print(e.getMessage());
                
                }
               finally{
                        
                       
               }
               
               
        }


}
