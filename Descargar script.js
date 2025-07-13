function toggle(elem) {
  if (elem.classList.contains("bloqueada")) return;
  elem.classList.toggle("tachado");

  document.querySelectorAll(".materia.bloqueada").forEach(materia => {
    const reqs = materia.dataset.prerrequisitos?.split(",") || [];
    const cumplido = reqs.every(id => document.getElementById(id)?.classList.contains("tachado"));
    if (cumplido) materia.classList.remove("bloqueada");
  });
}
