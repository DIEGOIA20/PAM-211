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
            System.out.println("1. Ingresar Reglamento POO");
            System.out.println("2. Ingresar Lineamientos Classroom");
            System.out.println("3. Ingresar Fechas de Parciales");
            System.out.println("4. Ingresar Porcentajes por Parcial");
            System.out.println("5. Mostrar toda la información");
            System.out.println("0. Salir");
            System.out.print("Seleccione una opción: ");
            opcion = sc.nextInt();
            sc.nextLine(); 

            switch (opcion) {
                case 1:
                System.out.print("Ingrese Reglamento POO: ");
                pam.setReglamentoPOO(sc.nextLine());
                break;

                case 2:
                System.out.print("Ingrese Lineamientos Classroom: ");
                pam.setLineamientosClassroom(sc.nextLine());
                break;

                case 3:
                System.out.print("Ingrese Fechas de Parciales: ");
                pam.setFechasParciales(sc.nextLine());
                break;

                case 4:
                System.out.print("Ingrese Porcentajes por Parcial: ");
                pam.setPorcentajesParcial(sc.nextLine());
                break;

                case 5:
                pam.mostrarReglamentoPOO();
                pam.mostrarLineamientosClassroom();
                pam.mostrarFechasParciales();
                pam.mostrarPorcentajesParcial();
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