
const downloadToFileAlgo = (content, filename, contentType) => {
    const a = document.createElement('a');
    const file = new Blob([content], {type: contentType});
    
    a.href= URL.createObjectURL(file);
    a.download = filename;
    a.click();
    
    URL.revokeObjectURL(a.href);
  };
  
  document.querySelector('#save-code').addEventListener('click', () => {
    const textArea = document.querySelector('#editor-algo');
    downloadToFileAlgo(textArea.value, 'source.algo', 'text/plain');
  });

