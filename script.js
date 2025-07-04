document.getElementById('extensionForm').addEventListener('submit', async function(e) {
  e.preventDefault();
  const formData = new FormData(this);
  const data = Object.fromEntries(formData.entries());

  const response = await fetch('https://ai2-extension-backend.onrender.com/generate', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data)
  });

  if (!response.ok) {
    alert("Failed to generate extension. Please check your input or backend logs.");
    return;
  }

  const result = await response.blob();
  const url = window.URL.createObjectURL(result);
  const a = document.createElement('a');
  a.href = url;
  a.download = `${data.name}.aix`;
  a.click();
});
