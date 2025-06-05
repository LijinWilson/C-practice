import java.util.Scanner;

public class IfSample {
    public static void main(String[] args) {
        Scanner sc=new Scanner(System.in);
        System.out.println("enter the number");
        int num=sc.nextInt();
        
        /*if (num<0) {
            System.out.println("the number is negative");
        }
        else{
            System.out.println("the number is possitive1");
        }*/
        int sum=0;
        for (int i = 0; i <=num; i++) {
            sum= sum+i;
               
        }
        System.out.println(sum);
    
    }





}
