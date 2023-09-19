let selectIdioma=document.getElementById('Idioma')
let texto=document.getElementById('contentIdioma')



selectIdioma.addEventListener('change',()=>{
    if (selectIdioma.value==="esp"){
        texto.textContent="Una aplicación pensada para suplir la necesidad de los pacientes de una manera ágil al alcance de su mano. No más filas, no mas quejas, no mas reclamos. La aplicación permitirá agendar una cita con un profesional de la salud con solo un par de clicks. Sin importar a que EPS te encuentres afiliado."
    }
    else if (selectIdioma.value==="eng"){
        texto.textContent="An application designed to meet the needs of patients in an agile way at your fingertips. No more lines, no more complaints, no more claims. The application will allow you to schedule an appointment with a health professional with just a couple of clicks. Regardless of which EPS you are affiliated with."
    }
    else if (selectIdioma.value==="takataka"){
        alert('¿Por qué elegiste esto? Onda, en serio, ¿por qué? ¿Cuál es la necesidad? ¿Cuál es la razón? De verdad, reflexiona un poco sobre las decisiones que tomas. Adelante, nunca es tarde para cambiar.')
        let momazo=document.createElement('img')
        momazo.src="https://i.pinimg.com/474x/85/77/dc/8577dc5a27853aa64b8f8cf1ed58990c.jpg"
        texto.textContent=""
        texto.appendChild(momazo)
    }
})

