function getVersionFromFile(fileName) {
    const regex = /V(\d+\.\d+\.\d+)/;
    const match = fileName.match(regex);
    return match ? match[1] : 'Версия не найдена';
}

function updateFileVersion() {
    const downloadButton = document.querySelector('.button');
    const fileName = downloadButton.getAttribute('onclick').match(/'([^']+)'/)[1]; // Извлекаем имя файла из onclick
    const version = getVersionFromFile(fileName);
    const versionElement = document.getElementById('file-version');
    versionElement.textContent = ` ${fileName} - Версия: ${version}`;
}

document.addEventListener('DOMContentLoaded', updateFileVersion);