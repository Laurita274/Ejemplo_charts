// Esperamos a que el HTML cargue completamente para evitar errores
document.addEventListener("DOMContentLoaded", () => {

    // Color de texto y líneas adaptado al fondo claro de las tarjetas
    const colorTextoGrafica = '#3b1d5e';
    const colorCuadricula = 'rgba(82, 48, 121, 0.12)';

    // ================= 3.1 GRÁFICA DE BARRAS =================
    const canvasGrafica = document.getElementById('miGraficaBarras');

    if (canvasGrafica) {
        new Chart(canvasGrafica, {
            type: 'bar',
            data: {
                labels: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio'],
                datasets: [{
                    label: 'Ventas 2026',
                    data: [12, 19, 3, 5, 2, 10],
                    backgroundColor: [
                        'rgba(233, 213, 255, 0.85)', // Lavanda claro
                        'rgba(199, 150, 255, 0.85)', // Lila suave
                        'rgba(168, 85, 247, 0.85)',  // Amatista
                        'rgba(126, 34, 206, 0.85)',  // Morado real
                        'rgba(216, 180, 254, 0.85)', // Malva
                        'rgba(107, 33, 168, 0.85)'   // Ciruela intenso
                    ],
                    borderRadius: 6
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        display: true,
                        labels: { color: colorTextoGrafica, font: { weight: 'bold' } }
                    }
                },
                scales: {
                    y: {
                        beginAtZero: true,
                        ticks: { color: colorTextoGrafica },
                        grid: { color: colorCuadricula }
                    },
                    x: {
                        ticks: { color: colorTextoGrafica },
                        grid: { display: false }
                    }
                }
            }
        });
    }

    // ================= 3.4 DIAGRAMA DE DONA (DOUGHNUT) =================
    const canvasDona = document.getElementById('dona');
    let graficaDona;

    if (canvasDona) {
        graficaDona = new Chart(canvasDona, {
            type: 'doughnut',
            data: {
                labels: ['Programación', 'Diseño', 'Marketing', 'Soporte'],
                datasets: [{
                    data: [45, 25, 20, 10],
                    backgroundColor: ['#e9d5ff', '#c796ff', '#9333ea', '#581c87'],
                    borderColor: '#ffffff',
                    borderWidth: 2
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        display: true,
                        position: 'bottom',
                        labels: { color: colorTextoGrafica, padding: 15 }
                    }
                }
            }
        });
    }

    // ================= 3.5 ACTUALIZAR DONA EN TIEMPO REAL =================
    const btnActualizarDona = document.getElementById('btnActualizarDona');

    if (btnActualizarDona && graficaDona) {
        btnActualizarDona.addEventListener('click', () => {
            graficaDona.data.datasets[0].data = [
                Math.floor(Math.random() * 50) + 10,
                Math.floor(Math.random() * 50) + 10,
                Math.floor(Math.random() * 50) + 10,
                Math.floor(Math.random() * 50) + 10
            ];
            graficaDona.update();
        });
    }

    // ================= 3.3 GRÁFICA DE LÍNEAS (LINE) =================
    const canvasLineas = document.getElementById('lineas');

    if (canvasLineas) {
        new Chart(canvasLineas, {
            type: 'line',
            data: {
                labels: ['Sem 1', 'Sem 2', 'Sem 3', 'Sem 4'],
                datasets: [
                    {
                        label: 'Ingresos',
                        data: [300, 450, 380, 520],
                        borderColor: '#7e22ce',
                        backgroundColor: 'rgba(199, 150, 255, 0.35)',
                        fill: true,
                        tension: 0.4
                    },
                    {
                        label: 'Gastos',
                        data: [200, 300, 350, 280],
                        borderColor: '#d946ef',
                        fill: false,
                        tension: 0.4
                    }
                ]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        display: true,
                        labels: { color: colorTextoGrafica, font: { weight: 'bold' } }
                    }
                },
                scales: {
                    y: {
                        beginAtZero: true,
                        ticks: { color: colorTextoGrafica },
                        grid: { color: colorCuadricula }
                    },
                    x: {
                        ticks: { color: colorTextoGrafica },
                        grid: { display: false }
                    }
                }
            }
        });
    }

    // ================= GRÁFICA DE TORTA (PIE) =================
    const canvasTorta = document.getElementById('torta');

    if (canvasTorta) {
        new Chart(canvasTorta, {
            type: 'pie',
            data: {
                labels: ['Móvil', 'Escritorio', 'Tablet'],
                datasets: [{
                    data: [55, 35, 10],
                    backgroundColor: ['#e9d5ff', '#a855f7', '#581c87'],
                    borderColor: '#ffffff',
                    borderWidth: 2
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        display: true,
                        position: 'bottom',
                        labels: { color: colorTextoGrafica, padding: 15 }
                    }
                }
            }
        });
    }

    // ================= GRÁFICA DE RADAR (RADAR) =================
    const canvasRadar = document.getElementById('radar');

    if (canvasRadar) {
        new Chart(canvasRadar, {
            type: 'radar',
            data: {
                labels: ['Frontend', 'Backend', 'Bases de Datos', 'UI/UX', 'Testing'],
                datasets: [{
                    label: 'Nivel del Equipo',
                    data: [85, 75, 90, 70, 65],
                    backgroundColor: 'rgba(168, 85, 247, 0.25)',
                    borderColor: '#7e22ce',
                    pointBackgroundColor: '#581c87'
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        display: true,
                        labels: { color: colorTextoGrafica, font: { weight: 'bold' } }
                    }
                },
                scales: {
                    r: {
                        beginAtZero: true,
                        max: 100,
                        grid: { color: colorCuadricula },
                        angleLines: { color: colorCuadricula },
                        pointLabels: { color: colorTextoGrafica, font: { size: 12 } },
                        ticks: {
                            color: colorTextoGrafica,
                            backdropColor: 'transparent'
                        }
                    }
                }
            }
        });
    }

    // ================= GRÁFICA DE DISPERSIÓN (SCATTER) =================
    const canvasDispersion = document.getElementById('dispersion');

    if (canvasDispersion) {
        new Chart(canvasDispersion, {
            type: 'scatter',
            data: {
                datasets: [{
                    label: 'Horas de estudio vs Nota',
                    data: [
                        { x: 1, y: 2.5 },
                        { x: 2, y: 3.1 },
                        { x: 3, y: 3.6 },
                        { x: 4, y: 4.0 },
                        { x: 5, y: 4.5 },
                        { x: 6, y: 4.9 }
                    ],
                    backgroundColor: '#a855f7',
                    borderColor: '#581c87',
                    borderWidth: 2,
                    pointRadius: 6
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        display: true,
                        labels: { color: colorTextoGrafica, font: { weight: 'bold' } }
                    }
                },
                scales: {
                    x: {
                        type: 'linear',
                        position: 'bottom',
                        ticks: { color: colorTextoGrafica },
                        grid: { color: colorCuadricula }
                    },
                    y: {
                        beginAtZero: true,
                        max: 5,
                        ticks: { color: colorTextoGrafica },
                        grid: { color: colorCuadricula }
                    }
                }
            }
        });
    }

    // ================= 4.2 LOS 5 ICONOS DISPONIBLES (SweetAlert) =================
    const btnSuccess  = document.getElementById('btnSuccess');
    const btnError    = document.getElementById('btnError');
    const btnWarning  = document.getElementById('btnWarning');
    const btnInfo     = document.getElementById('btnInfo');
    const btnQuestion = document.getElementById('btnQuestion');

    if (btnSuccess) {
        btnSuccess.addEventListener('click', () => {
            Swal.fire("Correcto", "Operación exitosa", "success");
        });
    }

    if (btnError) {
        btnError.addEventListener('click', () => {
            Swal.fire("Error", "Algo salió mal", "error");
        });
    }

    if (btnWarning) {
        btnWarning.addEventListener('click', () => {
            Swal.fire("Atención", "Revisa este detalle", "warning");
        });
    }

    if (btnInfo) {
        btnInfo.addEventListener('click', () => {
            Swal.fire("Información", "Solo es un aviso", "info");
        });
    }

    if (btnQuestion) {
        btnQuestion.addEventListener('click', () => {
            Swal.fire("Pregunta", "¿Continuar?", "question");
        });
    }

    // ================= 4.4 ALERTA CON INPUT (PROMPT) =================
    const btnPrompt = document.getElementById('prompt');

    if (btnPrompt) {
        btnPrompt.addEventListener('click', async () => {
            const { value: nombre } = await Swal.fire({
                title: "¿como te llamas?",
                input: "text",
                showCancelButton: true
            });

            if (nombre) {
                Swal.fire({
                    title: `hola, ¿cómo estas ${nombre}?`,
                    icon: "info"
                });
            }
        });
    }

    // ================= ELEMENTOS ESPECIALES (4.3, 4.6 y 4.7) =================
    // 4.3 Reemplazo de confirm()
    const btnConfirm = document.getElementById('btnConfirm');
    if (btnConfirm) {
        btnConfirm.addEventListener('click', () => {
            Swal.fire({
                title: "¿Eliminar registro?",
                text: "Esta acción no se puede deshacer",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: '#7e22ce',
                cancelButtonColor: '#6c757d',
                confirmButtonText: "Sí, eliminar",
                cancelButtonText: "Cancelar"
            }).then((result) => {
                if (result.isConfirmed) {
                    console.log("¡Eliminado!");
                    Swal.fire("Eliminado", "El registro ha sido eliminado.", "success");
                }
            });
        });
    }

    // 4.6 Temporizador con barra de progreso
    const btnTimer = document.getElementById('btnTimer');
    if (btnTimer) {
        btnTimer.addEventListener('click', () => {
            Swal.fire({
                title: "Guardando...",
                icon: "info",
                timer: 3000,
                timerProgressBar: true,
                showConfirmButton: false
            });
        });
    }

    // 4.7 Diálogo con HTML personalizado
    const btnHtml = document.getElementById('btnHtml');
    if (btnHtml) {
        btnHtml.addEventListener('click', () => {
            Swal.fire({
                title: "<strong>Resumen</strong>",
                icon: "info",
                html: "Puedes usar <b>negritas</b> y <a href='#'>enlaces</a>",
                showCloseButton: true,
                confirmButtonColor: '#7e22ce',
                confirmButtonText: 'Entendido'
            });
        });
    }

    // ================= 5. PROYECTO INTEGRADO: DASHBOARD COMPLETO =================
    const canvasDashboard = document.getElementById("grafica");
    const btnAgregar = document.getElementById("btnAgregar");

    if (canvasDashboard && btnAgregar) {
        const meses = ["Ene", "Feb", "Mar", "Abr"];
        const ventas = [12, 19, 7, 14];

        const grafica = new Chart(canvasDashboard, {
            type: "bar",
            data: {
                labels: meses,
                datasets: [{
                    label: "Ventas",
                    data: ventas,
                    backgroundColor: "rgba(168, 85, 247, 0.85)",
                    borderRadius: 6
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        display: true,
                        labels: { color: colorTextoGrafica, font: { weight: 'bold' } }
                    }
                },
                scales: {
                    y: {
                        beginAtZero: true,
                        ticks: { color: colorTextoGrafica },
                        grid: { color: colorCuadricula }
                    },
                    x: {
                        ticks: { color: colorTextoGrafica },
                        grid: { display: false }
                    }
                }
            }
        });

        btnAgregar.addEventListener("click", async () => {
            const { value: cantidad } = await Swal.fire({
                title: "Nueva venta",
                input: "number",
                inputLabel: "¿Cuántas unidades?",
                inputPlaceholder: "Ej. 15",
                showCancelButton: true,
                confirmButtonText: "Registrar",
                cancelButtonText: "Cancelar",
                confirmButtonColor: "#7e22ce"
            });

            if (cantidad && cantidad > 0) {
                meses.push("Mes " + (meses.length + 1));
                ventas.push(Number(cantidad));
                grafica.update();

                Swal.fire({
                    icon: "success",
                    title: "¡Venta registrada!",
                    timer: 1500,
                    showConfirmButton: false
                });
            }
        });
    }
});

// ================= FUNCIONES DE INPUTS INTERACTIVOS (SECCIÓN 4.5) =================
async function demoInput(tipo) {
    const opciones = {
        text:     { title: 'Caja de texto',      inputPlaceholder: 'Escribe algo...' },
        email:    { title: 'Correo electrónico', inputPlaceholder: 'correo@ejemplo.com' },
        password: { title: 'Contraseña',         inputPlaceholder: '********' },
        number:   { title: 'Número',             inputAttributes: { min: 0 } },
        textarea: { title: 'Área de texto',      inputPlaceholder: 'Texto largo...' },
        checkbox: { title: 'Casilla',            inputValue: 1, inputPlaceholder: 'Acepto los términos' },
        file:     { title: 'Archivo',            inputAttributes: { accept: 'image/*' } },
        range:    { title: 'Deslizador (0-100)', inputAttributes: { min: 0, max: 100, step: 1 }, inputValue: 50 }
    };

    const { value } = await Swal.fire({
        title: `Input type="${tipo}"`,
        input: tipo,
        showCancelButton: true,
        confirmButtonText: 'Guardar',
        cancelButtonText: 'Cancelar',
        confirmButtonColor: '#9b59b6',
        ...opciones[tipo]
    });

    if (value !== undefined && value !== null && value !== '') {
        const mostrar = value instanceof File ? value.name : value;
        Swal.fire('Resultado', `Recibido: <b>${mostrar}</b>`, 'success');
    }
}

async function demoSelect() {
    const { value } = await Swal.fire({
        title: 'Selecciona una opción',
        input: 'select',
        inputOptions: {
            programacion: 'Programación',
            diseno: 'Diseño',
            marketing: 'Marketing',
            soporte: 'Soporte'
        },
        inputPlaceholder: 'Elige una categoría...',
        showCancelButton: true,
        confirmButtonText: 'Seleccionar',
        cancelButtonText: 'Cancelar',
        confirmButtonColor: '#9333ea'
    });

    if (value) {
        Swal.fire('Resultado', `Seleccionaste: <b>${value}</b>`, 'success');
    }
}
