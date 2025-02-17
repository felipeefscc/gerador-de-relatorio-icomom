    document.getElementById('fillPdfBtn').addEventListener('click', async () => {
    // Obter o arquivo PDF
    const pdfFile = await fetch('./croquibase.pdf').then(res => res.arrayBuffer());
    //if (!pdfFile) {
     //   document.getElementById('alertMessage').textContent = 'Por favor, selecione um arquivo PDF.';
    //    return;
   // } else {
    //    document.getElementById('alertMessage').textContent = '';
   // }

    // Ler o arquivo PDF selecionado
    //const arrayBuffer = await pdfFile.arrayBuffer();
    const pdfDoc = await PDFLib.PDFDocument.load(pdfFile);

    // Obter o formulário (campo de texto)
    const form = pdfDoc.getForm();

    // Preencher os campos com os dados fornecidos
    const pontaA = document.getElementById('pontaA').value.toUpperCase();
    const pontaB = document.getElementById('pontaB').value.toUpperCase();
    const ta = document.getElementById('ta').value;
    const local = document.getElementById('local').value.toUpperCase();
    const data = document.getElementById('data').value;
    const endereco = document.getElementById('endereco').value;
    const tecnico = document.getElementById('tecnico').value.toUpperCase();
    const auxiliar = document.getElementById('auxiliar').value.toUpperCase();
    const re = document.getElementById('re').value;
    const supervisor = document.getElementById('supervisor').value.toUpperCase();
    const coordenador = document.getElementById('coordenador').value.toUpperCase();
    const causa = document.getElementById('causa').value;
    const tratativa = document.getElementById('tratativa').value;
    const baixas = document.getElementById('baixas').value;
    //const cabo = document.getElementById('cabo').value;
    const qCabo = document.getElementById('qCabo').value
    //const emenda = document.getElementById('emenda').value;
    const qEmenda = document.getElementById('qEmenda').value
    const latitude = document.getElementById('latitude').value
    const longitude = document.getElementById('longitude').value

    // emendas

    const drop4f0 = document.getElementById('drop4f0').value;
    const drop12fo = document.getElementById('drop12fo').value;
    const cabo24fo = document.getElementById('cabo24fo').value;
    const cabo36fo = document.getElementById('cabo36fo').value;
    const cabo48fo = document.getElementById('cabo48fo').value;
    const cabo72fo = document.getElementById('cabo72fo').value;
    const ptro = document.getElementById('ptro').value;
    const ceo48fo = document.getElementById('ceo48fo').value;
    //const ceo72fo = document.getElementById('ceo72fo').value;

    
    
    const drop4f0Field = form.getTextField('drop4f0');
    drop4f0Field.setText(drop4f0);

    const drop12foField = form.getTextField('drop12fo');
    drop12foField.setText(drop12fo);

    const cabo24foField = form.getTextField('cabo24fo');
    cabo24foField.setText(cabo24fo);

    const cabo36foField = form.getTextField('cabo36fo');
    cabo36foField.setText(cabo36fo);

    const cabo48foField = form.getTextField('cabo48fo');
    cabo48foField.setText(cabo48fo);

    const cabo72foField = form.getTextField('cabo72fo');
    cabo72foField.setText(cabo72fo);

    const ptroField = form.getTextField('ptro');
    ptroField.setText(ptro);

    const ceo48foField = form.getTextField('ceo48fo');
    ceo48foField.setText(ceo48fo);

    //const ceo72foField = form.getTextField('ceo72fo');
    //ceo72foField.setText(re); 
    

    
//emendas

    const pontaAField = form.getTextField('pontaA');
    pontaAField.setText(pontaA);

    const pontaBField = form.getTextField('pontaB');
    pontaBField.setText(pontaB);

    const taField = form.getTextField('ta');
    taField.setText(ta);

    const localField = form.getTextField('local');
    localField.setText(local);

    const dataField = form.getTextField('data');
    dataField.setText(data);

    const enderecoField = form.getTextField('endereco');
    enderecoField.setText(endereco);

    const tecnicoField = form.getTextField('tecnico');
    tecnicoField.setText(tecnico);

    const auxiliarField = form.getTextField('auxiliar');
    auxiliarField.setText(auxiliar);

    const reField = form.getTextField('re');
    reField.setText(re);

    const supervisorField = form.getTextField('supervisor');
    supervisorField.setText(supervisor);

    const coordenadorField = form.getTextField('coordenador');
    coordenadorField.setText(coordenador);

    const causaField = form.getTextField('causa');
    causaField.setText(causa);

    const tratativaField = form.getTextField('tratativa');
    tratativaField.setText(tratativa);

    const baixasField = form.getTextField('baixas');
    baixasField.setText(baixas);

    //const caboField = form.getTextField('cabo');
    //caboField.setText(cabo);

    const qCaboField = form.getTextField('qCabo');
    qCaboField.setText(qCabo);

    //const emendaField = form.getTextField('emenda');
    //emendaField.setText(emenda);

    const qEmendaField = form.getTextField('qEmenda');
    qEmendaField.setText(qEmenda);

    const latitudeField = form.getTextField('latitude');
    latitudeField.setText(latitude);

    const longitudeField = form.getTextField('longitude');
    longitudeField.setText(longitude);

    // Serializar o PDF modificado
    const pdfBytes = await pdfDoc.save();

    // Criar um nome dinâmico para o PDF
    const nomeArquivo = re ? `${pontaA} x ${pontaB} - ${ta}.pdf` : 'Faltou preencher o RE.pdf';

    // Criar um link para o usuário baixar o PDF preenchido
    const blob = new Blob([pdfBytes], { type: 'application/pdf' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = nomeArquivo;
    link.click();
});