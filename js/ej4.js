document.addEventListener("DOMContentLoaded", function () {
  function actualizarElReloj() {
    const fechaActual = new Date();
    const opcionesFecha = {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    };
    const opcionesHora = {
      hour12: true,
      hour: "numeric",
      minute: "numeric",
      second: "numeric",
    };

    const fechaActualizada = fechaActual.toLocaleDateString(
      "es-AR",
      opcionesFecha
    );
    const horaActualizada = fechaActual.toLocaleTimeString(
      "es-AR",
      opcionesHora
    );
    const periodo = fechaActual.getHours() < 12 ? "AM" : "PM";

    document.getElementById("hora").innerText = `${horaActualizada} ${periodo}`;
    document.getElementById("fecha").innerText = fechaActualizada;
  }

  setInterval(actualizarElReloj, 1000);

  actualizarElReloj();
});
