import java.util.Scanner;


// Clase principal con los métodos
class InicioPAM {

    private String reglamentoPOO;
    private String lineamientosClassroom;
    private String fechasParciales;
    private String porcentajesParcial;

    public void setReglamentoPOO(String info) {
        this.reglamentoPOO = info;

    }

    public void mostrarReglamentoPOO() {
        System.out.println("\n Reglamento POO: " + reglamentoPOO);

    }

    public void setLineamientosClassroom(String info) {
        this.lineamientosClassroom = info;

    }
    public void mostrarLineamientosClassroom() {
        System.out.println("\n Lineamientos Classroom: " + lineamientosClassroom);

    }

    public void setFechasParciales(String info) {
        this.fechasParciales = info;

    }

    public void mostrarFechasParciales() {
        System.out.println("\n Fechas de Parciales: " + fechasParciales);

    }

    public void setPorcentajesParcial(String info) {
        this.porcentajesParcial = info;

    }

    public void mostrarPorcentajesParcial() {
        System.out.println("\n Porcentajes por Parcial: " + porcentajesParcial);
    }
}

public class MenuPAM {
    public static void main(String[] args){
        Scanner sc = new Scanner(System.in);
        InicioPAM pam = new InicioPAM();
        int opcion;
        
        do {
            System.out.println("\n===== MENÚ INICIO PAM =====");
            System.out.println("1. Lineamientos Classroom");
            System.out.println("2. Reglamento POO");
            System.out.println("3. Fechas de Parciales");
            System.out.println("4. Porcentajes por Parcial");
            System.out.println("0. Salir");
            System.out.print("Seleccione una opción: ");
            opcion = sc.nextInt();
            sc.nextLine(); 

            switch (opcion) {
                case 1:
                System.out.print("\n1. Entregar los trabajos para su revision\n2. Entregar en PDF\n3. Avisos de clase\n4. Entregas autorizadas con retraso, 5 Calif Max ");
                pam.setReglamentoPOO(sc.nextLine());
                break;

                case 2:
                System.out.print("\n1. Respeto\n2. Importante participación activa en orden\n3. No entregar trabajos incompletos\n4. No se aplican examen fuera de tiempo\n5.  Plagio de trabajos = 0 para todos\n6. 3 faltas = Final del parcial\n7. Calificación Máxima en final 8 ");
                pam.setLineamientosClassroom(sc.nextLine());
                break;

                case 3:
                System.out.print("\n1. Primer Parcial: 29-09-25\n2. Segundo Parcial: 03-11-25\n3. Tercer Parcial: 01-12-25\n4. Final: 08-12-25 ");
                pam.setFechasParciales(sc.nextLine());
                break;

                case 4:
                System.out.println("\n--- PORCENTAJES POR PARCIAL ---\n");

                System.out.printf("%-30s %5s %5s %5s%n", " ", "1P", "2P", "3P");
                System.out.printf("%-30s %5s %5s %5s%n", "EVIDENCIA DE CONOCIMIENTO", "40%", "40%", "20%");
                System.out.printf("%-30s %5s %5s %5s%n", "EVIDENCIA DE DESEMPEÑO", "20%", "20%", "10%");
                System.out.printf("%-30s %5s %5s %5s%n", "EVIDENCIA DE PRODUCTO", "30%", "20%", "40%");
                System.out.printf("%-30s %5s %5s %5s%n", "PROYECTO INTEGRADOR", "10%", "20%", "30%");

                System.out.println(); 

                break;

                case 0:
                System.out.println(" Saliendo del programa...");
                break;

                default:
                System.out.println(" Opción inválida, intente de nuevo.");
            }
        }while (opcion != 0);
    
        sc.close();
    }

}