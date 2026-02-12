/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Main.java to edit this template
 */
package pkg3_operadores_unarios;

/**
 *
 * @author Hector
 */
public class Main {

    /**
     * @param args the command line arguments
     */
    public static void main(String[] args) {
        
        //declaracion de variables
        int resultado = 1;
        System.out.println(resultado);
        
        int resultado2 = +1;
        System.out.println(resultado2);
        
        int resultado3 = -1;
        System.out.println(resultado3);
        
        //operador de incremento ++
        resultado ++;
        System.out.println(resultado);
        
        //operador de decremento --
        resultado --;
        System.out.println(resultado);
        
        
        //cambiamos el signo del numero o variable numerica aplicando el operador de resta -
        resultado = 10;
        resultado = -resultado;
        System.out.println(resultado);
        
        // operador de negacion
        boolean esVerdadero = false;
        System.out.println(esVerdadero);
        System.out.println(!esVerdadero);
        
        
    }
    
}
