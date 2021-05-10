let tareas = [
    "Terminar de leer la bitácora 21",
    "Hacer el challenge",
    "Empezar a ver The OA en Netflix",
    "Aprender sobre arrays"
];

/**
   * 1. Construye una función que agregue una tarea al array "tareas".
   * Esta función debe tomar como parametro la descripción de la tarea
   * nueva (un string), agregandola al principio o al final.
   *
   * Por ejemplo, si la función se llama "agregar()", la invoación
   * deberá ser entonces:
   *
   * agregar("Lavar los platos");
   *
   * La función deberá mostrar un mensaje indicando el éxito de la
   * operación.
   *
   * Al hacer un console.log() del array "tareas", este deberá
   * de tener el nuevo ítem.
   */
const agregarTarea = tarea => {
    tareas.push(tarea);
    console.log(tareas);
}
/**
   * 2. Construye una función que elimine una tarea existente del array.
   *
   * Esta función debe tomar como parametro la descripción de la tarea
   * (un string) a eliminar.
   *
   * Deberás de verificar si la tarea existe, y de existir, eliminarla.
   *
   * Muestra un mensaje indicativo del éxito de la operación.
   * Si la tarea no existe, muestra un mensaje respectivo.
   */
const removerTarea = tarea => {
    tareas.indexOf(tarea) !== -1 ? tareas.splice(tareas.indexOf(tarea),1): console.log("Esta tarea no esta en el listado");
}
/**
   * 3. Construye una función que modifique el nombre de una tarea.
   *
   * Esta función debe tomar como parametros la descripción de la tarea
   * (un string) a modificar, junto a la nueva descripción, por ejemplo:
   *
   * modificar("Hacer el challenge", "Hacer el challenge de la bitácora 121")
   *
   * Deberás de verificar si la tarea existe antes de modificarla.
   *
   * Muestra los mensajes correspondientes.
   */
const modificarTarea = (tareaVieja, tareaNueva) => {
    const index = tareas.indexOf(tareaVieja)
    if (tareas.includes(tareaVieja)) {
        tareas[index] = tareaNueva;

        return tareas[index];
    }
}
  /**
   * 4. Construye una función que muestre por consola todas las tareas del array.
   *
   */
const imprimirTarea = () => {
    console.log(tareas);
}