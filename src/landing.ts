document.addEventListener('DOMContentLoaded', () => {
  const btnConnect = document.getElementById('btn-nav-connect');

  if (btnConnect) {
    btnConnect.addEventListener('click', async () => {
      try {
        const provider = (window as any).solana;
        if (provider && provider.isPhantom) {
          const resp = await provider.connect();
          btnConnect.textContent = `🪙 Connected: ${resp.publicKey.toString().slice(0, 4)}...${resp.publicKey.toString().slice(-4)}`;
          btnConnect.style.background = '#14F195'; // Solana green
          btnConnect.style.color = '#000';
          console.log('Landing page connected to Solana:', resp.publicKey.toString());
        } else {
          // Open phantom website if wallet not found
          window.open('https://phantom.app/', '_blank');
        }
      } catch (err) {
        console.error('Wallet connection failed:', err);
      }
    });
  }
});
