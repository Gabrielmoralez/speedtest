document.getElementById("startTest").addEventListener("click", () => {
    const status = document.querySelector(".status");
    status.textContent = "Testando...";
    status.style.color = "#ffab00";

    const startTime = Date.now();

    setTimeout(() => {
        const elapsedTime = (Date.now() - startTime) / 1000;

        
        const downloadSpeed = generateDownloadSpeed();  
        const uploadSpeed = generateUploadSpeed();      
        const ping = generatePing(elapsedTime);         

       
        document.getElementById("downloadSpeed").textContent = `Download: ${downloadSpeed} Mbps`;
        document.getElementById("uploadSpeed").textContent = `Upload: ${uploadSpeed} Mbps`;
        document.getElementById("ping").textContent = `Ping: ${ping} ms`;

        status.textContent = "Teste concluído!";
        status.style.color = "#00c853";
    }, 3000); 
});


function generateDownloadSpeed() {
    
    const baseSpeed = Math.random() * 100 + 50; 
    const networkLoad = Math.random() * 50;    
    const adjustedSpeed = baseSpeed - (networkLoad / 2); 

    
    const finalSpeed = Math.max(adjustedSpeed, 50);
    return finalSpeed.toFixed(2);  
}


function generateUploadSpeed() {
    
    const baseSpeed = Math.random() * 40 + 10;  
    const networkLoad = Math.random() * 30;     
    const adjustedSpeed = baseSpeed - (networkLoad / 3); 

    
    const finalSpeed = Math.max(adjustedSpeed, 5);
    return finalSpeed.toFixed(2);  
}


function generatePing(elapsedTime) {
    
    const basePing = Math.random() * 30 + 10;  
    const networkCongestion = Math.random() * 10; 
    const adjustedPing = basePing + networkCongestion + (elapsedTime * 2); 

    
    const finalPing = Math.min(Math.max(adjustedPing, 10), 200);
    return finalPing.toFixed(2);  
}
