import java.util.Scanner;

class Nome {
    public static void main(String[] args) {
        String cump;
        cump = "Oi eu sou o ";
        Scanner nome = new
        Scanner(System.in);
        char e;
        e = ':';
        int m=30;
        do {
            System.out.println("Not "+m);
            m=m-3;
            } while(m>=6);
        if(m==3) {
            System.out.println(cump+nome.nextLine()+" "+e+m);
        }
        ++m;
        ++m;
        ++m;
        switch(m) {
        case 6:
            do {
                System.out.println("Not "+m);
                m=m+3;
            } while(m<=30);
        }
    }
}


class AprendendoJava {
    public static void main(String[]args) {
        String nome = "Pedro", sobrenome = "Machado"
        int idade = 15, int birthday = ++idade;
        double altura = 1.69;
        char inicial = 'P';
        boolean estudando = true;
        System.out.printIn(nome +" "+ sobrenome);
    }
}
