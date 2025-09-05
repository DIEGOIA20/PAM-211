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