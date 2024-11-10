document.addEventListener('DOMContentLoaded', () => {
    const paisSelect = document.getElementById('Pais');
    const ciudadSelect = document.getElementById('Ciudad');

    const Ciudad = {
        Brasil: [
            "Brasilia", "Sao Paulo", "Mineiro", "Rio de Janeiro", "Fortaleza" 
        ],
        Inglaterra: [
            "Londres", "Liverpool", "Manchester", "Cambridge"
        ],
        Japon: [
            "Tokio", "Osaka", "Akita"
        ],
        México: [
            "Guadalajara", "Puebla", "Oaxaca", "DF", "Queretaro", "Cancun", "Acapulco" 
        ],
        Francia: [
            "Paris", "Marseille", "Toulouse", "Lyon"
        ],
        otro: [
            "Namekusein", "CD Gotica", "Reino Kaiyo", "Planeta Vegeta", "La Agencia", "Alameda Afligida", 
            "La Gruta", "Parque Placentero", "Mundo Champiñon", "Reino Koopa", "Kanto", "Jonto", "Hoenn",
            "Sinnoh", "Unova", "Kalos", "Alola", "Galar", "Hisui", "Paldea", "Méxica", "Atlantis", "Castillo Veracruz",
            "Finca Frenesi", "Plataforma", "El Yate", "Pisos Picados", "Parque Placentero", "Castillo Doom", "I. Stark", 
            "Salpiconero Salado", "Setos Sagrados", "Campo Caligne", "Albercas Adormecidas", "Pantano Pegajoso", "Arenas Ardientes", 
            "Acantilados Arenosos", "Muelles Ardientes", "Acumulaciones Airadas", "El Tiburon"  
        ]
    };

    function limpiarYAgregarPredeterminado(selectElement) {
        selectElement.innerHTML = '<option value="">Seleccione una ciudad</option>';
    }

    paisSelect.addEventListener('change', function() {
        limpiarYAgregarPredeterminado(ciudadSelect);
        
        const pais = paisSelect.value;

        if (Ciudad[pais]) {
            Ciudad[pais].forEach(ciudad => {
                const option = document.createElement('option');
                option.value = ciudad.toLowerCase().replace(/\s/g, "_");
                option.textContent = ciudad;
                ciudadSelect.appendChild(option);
            });
        } else {
            ciudadSelect.innerHTML = '<option value="">Seleccione primero un país válido</option>';
        }
    });
});
