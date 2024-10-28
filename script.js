function generateNomenclature() {
    // Coleta os valores inseridos no formulário
    const stakeholder = document.getElementById('stakeholder').value.toUpperCase();
    const year = document.getElementById('year').value;
    const project = document.getElementById('project').value;
    const domain = document.getElementById('domain').value;
    const subject = document.getElementById('subject').value.toUpperCase().replace(/\s+/g, '-');
    const version = document.getElementById('version').value.toUpperCase();

    // Monta a nomenclatura com os valores coletados
    const nomenclature = `${stakeholder}-${year}${project}_${subject}-${domain}-SHARP_${version}`;

    // Mostra o resultado na tela
    document.getElementById('result').innerText = `Nomenclatura Gerada: ${nomenclature}`;
}
