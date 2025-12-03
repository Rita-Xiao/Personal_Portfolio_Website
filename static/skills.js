

function togglePanel(panelElement) {
    // close any open panel (optional)
    document.querySelectorAll('.panel').forEach(panel => {
        if (panel !== panelElement) {
            panel.classList.remove('open');
            panel.querySelector('.panel-content').style.maxHeight = null;
        }
    });

    // toggle the clicked panel
    panelElement.classList.toggle('open');

    const content = panelElement.querySelector('.panel-content');

    if (panelElement.classList.contains('open')) {
        content.style.maxHeight = content.scrollHeight + "px";
    } else {
        content.style.maxHeight = null;
    }
}