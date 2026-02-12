/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Main.java to edit this template
 */
package pkg2_operadores_aritmeticos_basicos;

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
        int num1 = 10;
        int num2 = 5;

        double resultado;

        //operador de suma +
        resultado = num1 + num2;
        System.out.println(resultado);

        //operador de resta - 
        resultado = num1 - num2;
        System.out.println(resultado);

        //operador de multiplicacion *
        resultado = num1 * num2;
        System.out.println(resultado);

        //operador de division / 
        resultado = num1 / num2;
        System.out.println(resultado);

        //operador de modulo %
        resultado = num1 % num2;
        System.out.println(resultado);

        
        //----------------------------------
        /*
        •El resultado es de tipo long si, 
        al menos, uno de los operandos es de tipo long 
        y ninguno es real (float o double).
        */
//        long num3 = 10l;
//        int num4 = 5;
//
//        int resultado2 = num3 + num4;
        
        //--------------------------------------
        /*
        El resultado es de tipo int si ninguno de los operandos 
        es de tipo long y tampoco es real (float o double).
        */
//        int num3 = 10;
//        int num4 = 5;
//
//        int resultado2 = num3 + num4;
        
        //------------------------------------------
        /*
        El resultado es de tipo double si, al menos, 
        uno de los operandos es de tipo double
        */
//        
//        double num3 = 10;
//        int num4 = 5;
//
//        double resultado2 = num3 + num4;

        //-------------------------------------------
        /*
        El resultado es de tipo float si, al menos, 
        uno de los operandos es de tipo float y ninguno es double.
        */
//        float num3 = 10;
//        int num4 = 5;
//
//        float resultado2 = num3 + num4;
        
        //--------------------------------------------
        /*
        La división entera se trunca hacia 0. 
        La división o el resto de dividir por cero es una operación válida 
        que genera una excepción ArithmeticException que puede dar lugar a 
        un error de ejecución y la consiguiente interrupción de la ejecución del programa.
        */
        
        float num3 = 10;
        int num4 = 5;

        float resultado2 = 0 / 0;
        System.out.println(resultado2);
        
        
        
    }

}
