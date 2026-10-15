// Direct WhatsApp Click to Chat; no Cloud API token or backend is required.
(() => {
  const form = document.querySelector('#contactForm');
  if (!form) return;
  let status = document.querySelector('#formNote');
  if (!status) {status=document.createElement('small');status.id='formNote';form.append(status);}
  status.setAttribute('role','status');status.setAttribute('aria-live','polite');
  status.textContent='WhatsApp akan terbuka dengan pesan konsultasi yang sudah disiapkan.';
  if (!document.querySelector('#contactBrand')) {
    const select=document.createElement('select');select.id='contactBrand';select.required=true;select.setAttribute('aria-label','Brand pilihan');
    for(const title of ['Pilih brand','Semerbak Kopie','Kopiena Coffee','Matcha Que','Es Teh','Sempol']) {
      const option=document.createElement('option');option.value=title==='Pilih brand'?'':title;option.textContent=title;select.append(option);
    }
    const before=document.querySelector('#package') || form.querySelector('button');form.insertBefore(select,before);
  }
  form.addEventListener('submit',event => {
    event.preventDefault();event.stopImmediatePropagation();
    if (!form.reportValidity()) return;
    const value=id=>document.getElementById(id)?.value.trim() || '';
    const number=CONFIG.WHATSAPP_NUMBER.replace(/\D/g,'');
    const message=[
      'Halo, saya ingin berkonsultasi dengan Semerbak Kopie.',
      '',
      `Nama: ${value('name')}`,
      `Nomor WhatsApp: ${value('phone')}`,
      `Lokasi: ${value('city')}`,
      `Brand yang ingin ditanyakan: ${value('contactBrand') || 'Belum memilih'}`,
      `Paket: ${value('package') || 'Belum memilih'}`,
      `Catatan/pertanyaan: ${value('note') || '-'}`,
    ].join('\n');
    const url=`https://wa.me/${number}?text=${encodeURIComponent(message)}`;
    const whatsappWindow=window.open(url,'_blank');
    if (whatsappWindow) {
      whatsappWindow.opener=null;
      status.textContent='WhatsApp terbuka dengan pesan terisi. Tekan Kirim di WhatsApp untuk mengirim konsultasi.';
      return;
    }
    status.textContent='Popup diblokir. Buka WhatsApp melalui tautan ini: ';
    const link=document.createElement('a');
    link.href=url;link.target='_blank';link.rel='noopener noreferrer';link.textContent='Lanjut ke WhatsApp';
    status.append(link);
  },true);
})();
