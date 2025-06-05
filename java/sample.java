import java.util.Scanner;

/**
 * sample
 */
public class sample {

    public static void main(String[] args) {
        try (Scanner sc = new Scanner(System.in)) {
            System.out.println("enter a 2 number");

            int a= sc.nextInt();
            int b=sc.nextInt();
            int c=a+b;
            System.out.println(a+"+"+b+"="+c);
        }

        
    }
}