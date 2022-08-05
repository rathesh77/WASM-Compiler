function loadFileAsText()
{
	var fileToLoad = document.getElementById("fileToLoad").files[0];

	var fileReader = new FileReader();
	fileReader.onload = function(fileLoadedEvent) 
	{
		var textFromFileLoaded = fileLoadedEvent.target.result;
		document.getElementById("editor-algo").value = textFromFileLoaded;
		document.getElementById("editor-algo").click();

	};
	fileReader.readAsText(fileToLoad, "UTF-8");
}

  document.getElementById('fileToLoad').onchange = function() {
    loadFileAsText();
};