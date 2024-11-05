function calculateTotal() {
  // Ambil nilai dari form
  const initialAmount = parseFloat(document.getElementById('initialAmount').value) || 0;
  const transport = parseFloat(document.getElementById('transport').value) || 0;
  const food = parseFloat(document.getElementById('food').value) || 0;
  const rent = parseFloat(document.getElementById('rent').value) || 0;

  // Hitung total pengeluaran
  const totalExpenses = transport + food + rent;

  // Hitung sisa uang
  const remainingAmount = initialAmount - totalExpenses;

  // Tampilkan hasil
  document.getElementById('totalOutput').textContent = `Rp ${totalExpenses.toLocaleString()}`;
  document.getElementById('remainingOutput').textContent = `Rp ${remainingAmount.toLocaleString()}`;
}
